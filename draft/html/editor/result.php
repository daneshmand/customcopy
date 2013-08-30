 <?php
require_once '../config/includes.php';
 
$catalogID=$_GET["catalogID"];
$parentRecordID=$_GET["recordID"];
$image_name=$_GET["imageName"];

///echo "<br>-----result post variable-----<br>";
///echo $catalogID."<br>".$parentRecordID."<br>".$image_name;
///echo "<br>=====:";

 if (isset($GLOBALS["HTTP_RAW_POST_DATA"]))
 	{
 		// Get the data
 		$imageData=$GLOBALS['HTTP_RAW_POST_DATA'];
 
 		///echo "<br>-----result post variable-----<br>";
 		///echo "<br>GLOBALS Post: <br>".$GLOBALS['HTTP_RAW_POST_DATA'];
 		///echo "<br>=====:";
 		 		
 		// Remove the headers (data:,) part.
 		// A real application should use them according to needs such as to check image type
 		$filteredData=substr($imageData, strpos($imageData, ",")+1);

 		///echo "<br>-----result post variable-----<br>";
 		///echo "<br>filteredData Post: <br>".$filteredData;
 		///echo "<br>=====:";
 		
 		///echo $filteredData;
 		// Need to decode before saving since the data we received is already base64 encoded
 		$unencodedData=base64_decode($filteredData);
 		//$$unencodedData_mime = "data:multipart/form-data,".$unencodedData;

 		//upload image after via the CIP
 		$properties = new Properties();
 		$properties->__set("parentRecordId", $parentRecordID);
 		$properties->__set("catalogId", $catalogID);
 		$properties->__set("catalogAlias", ConfigFactory::getCatalogAlias($catalogID));
 			
 		//echo "<br>-----result properties before categories-----<br>";
 		//var_dump($properties);
 		//echo "<br>===== properties =====<br>";

 		file_put_contents(IMAGE_TMP.$image_name,$unencodedData);
 		$recordID_json = DataManager::makeNewImageViaCIP($properties, $unencodedData, $image_name);
 		$recordID_array = json_decode($recordID_json,true);
 		$recordID = $recordID_array["id"];
 		
 		///echo "<br>-----recordID variable-----<br>";
 		///echo "recordID_json: ".$recordID_json."<br>";
		///var_dump($recordID_array);
 		///echo "<br>recordID: ".$recordID."<br>"; 			
 		///echo "<br>=====:";
 		$properties->__set("recordId", $recordID);
 		
 		///echo "<br>-----result recordID -----<br>";
 		///var_dump($properties);
 		///echo "recordID: $recordID";
 		///echo "parentRecordID: $parentRecordID";
 		///echo "<br>===== properties =====<br>";
 		
 		DataManager::setParentalRelationViaCIP($properties);
 		//$properties->__set("recordId", $recordID);
 		
 		///echo "<br>-----result properties after parental-----<br>";
 		///var_dump($properties);
 		///echo "<br>===== properties =====<br>";
 		
 		//fetch parent category and set as current category
 		$prop_parent = DataManager::fetchFromCumulus($parentRecordID, $catalogID);
 		
 		///echo "<br>-----result prop_parent-----<br>";
 		///var_dump($prop_parent);
 		///echo "<br>===== prop_parent =====<br>";

 		$properties->__set("categories",$prop_parent->__get("categories"));

 		///echo "<br>-----result properties-----<br>";
 		///var_dump($properties);
 		///echo "<br>===== properties end =====<br>";
 		
 		//update categories based on parent asset 	
 		DataManager::pushCategoryToCumulus($properties);
 		
 		//update Config Metadatas Fields
 		DataManager::updateAllMetadataAtCIP($recordID, $catalogID, "Annotation");

 	}

 ?>