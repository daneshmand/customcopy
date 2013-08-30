	<?php 
require_once '../config/includes.php';

	$catalogID=$_GET["catalogID"];
	$recordID=$_GET["recordID"];
	$comment = DataManager::updateIPCTMetadataFromCIP($recordID, $catalogID);

	
	
	echo "<br>-----editor properties-----<br>";
	echo $catalogID." | ".$recordID;
	echo " comment: ".$comment;
	echo "<br>===== editor =====<br>";
	
	$properties = new Properties();
	$properties->__set("recordId", $recordID);
	$properties->__set("catalogId", $catalogID);
	
	echo "<br>-----editor properties-----<br>";
	var_dump($properties);
	echo "<br>===== editor =====<br>";
	
	$image_json = DataManager::downloadImagePreviewViaCIP($properties);
	
	echo "<br>-----editor image_json-----<br>";
	var_dump($image_json);
	echo "<br>===== editor =====<br>";
	
	$images = json_decode($image_json, true);
	$image_url = $images["location"];
	$image_path = explode("/", $image_url);
	$image_name = $image_path[1];
		$image =IMAGE_URL.$image_name;
		
		//only ios: if WWW user doesn't have access to the folder needs to uncommented these lines
		//$image_temp = IMAGE_TMP.$image_name;
		//echo $image_temp;
		//chmod($image_temp, 0777);
		
	$image_exts = explode(".", $image_name);
	$image_ext = $image_exts[1];
	echo "<br>-----editor image-----<br>";
	echo "image_json: ".$image_json;
	echo "<br>images_url: ".$image_url;
	echo "<br>images_name: ".$image_name;
	echo "<br>image: ".$image;
	echo "<br>===== editor =====<br>";
	
	$size = getimagesize($image);
	echo "<br>-----editor size-----<br>";
	var_dump($size);
	echo "<br>size[0] width: $size[0]";
	echo "<br>size[1] height: $size[1]";
	echo "<br>===== editor =====<br>";
?>
<!doctype html>
<html>
  <head>
    <title>Image Annotation Tool</title>
    <script src="../js/jquery.min.js"></script>
    <script src='../js/sketch.js'></script>

    <style type='text/css'>
      body { font-family: "Open Sans", sans-serif; color: #444; }
      h1, h2, h3, h4 { font-family: Yellowtail; font-weight: normal; color: #f78f1e; }

      #wrapper { width: 800px; margin: 0 auto; }

      header { text-align: center; }
      header h1 { font-size: 46px; text-align: center; margin: 15px 10px; }

      article h1 { font-size: 26px; margin: 0 0 15px; }

      

      pre.source {
        background: #e5eeee;
        padding: 10px 20px;
        width: 760px;
        overflow-x: auto;
        border: 1px solid #acc;
      }

      code { background: #cff; }

      .tools { margin-bottom: 10px; }
      .tools a {
        border: 1px solid black; height: 30px; line-height: 30px; padding: 0 10px; vertical-align: middle; text-align: center; text-decoration: none; display: inline-block; color: black; font-weight: bold;
      }
    </style>

	        
  </head>
  <body>

    <div id='wrapper'>
     
      <article class='example' id='tools_demo'>
	     <h1 >Annotation Tool:</h1>
        <div id="debugFilenameConsole"><p><?php echo $recordID.": ".$image_name ?></div>
        <div class='demo'>
          <div class='tools'>
          	<comment id="save"></comment>
          	<a href="#tools_sketch" data-download="<?php echo $image_ext ?>" data-image="<?php echo $image ?>" >Download</a>
			<a onclick="" href="#tools_sketch" data-clearCanvas="png" >Clear</a>
			<a href='#tools_sketch' data-tool='marker' ><img src="../images/editor/Pencil-icon.png" height="30px" ></a>
            <a href='#tools_sketch' data-tool='eraser'><img src="../images/editor/Eraser-icon.png" height="30px" ></a>
          </div>
          <canvas id='tools_sketch' width='<?php echo $size[0] ?>' height='<?php echo $size[1] ?>' style='background: url(<?php echo $image ?>) no-repeat;'></canvas>
          <script type='text/javascript'>
            $(function() {
        		$.each(['red', 'green', 'blue', 'yellow'], function() {
                $('#tools_demo .tools').append("<a href='#tools_sketch' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a> ");
              });
              $.each([3, 5, 10, 15, 50], function() {
                $('#tools_demo .tools').append("<a href='#tools_sketch' data-size='" + this + "' style='background: #ccc'>" + this + "</a> ");
              });
              $('#tools_sketch').sketch();
            });

          </script>
          
    		<textarea id="comment" name='comments' rows='4' cols='95' placeholder='IPCT Captin ...'><?php echo $comment ?></textarea>
	        <script>
		        function comment() {
		        	//$(document).ready(function() {
		    	    	var comment_txt = $("textarea#comment").val();
		    	    	return comment_txt;
		        	//});
		    	};
		    	//document.write(getComment);
		    	var html1 =  '<a href="#tools_sketch" data-image="<?php echo $image ?>" data-save="<?php echo $image_ext ?>" data-path="result.php?imageName=<?php echo $image_name."&catalogID=".$catalogID."&recordID=".$recordID ?>" data-comment="';
	          	var html2 = comment();
	          	var html3 = '" data-commentPath="comment.php?recordID=<?php echo $recordID ?>&catalogID=<?php echo $catalogID ?>">Save</a>';
		    	$("comment#save").html(html1 + html2 + html3);   	
   			</script>
  </script>
	</div>
        <br>
      </article>

  </body>
</html>