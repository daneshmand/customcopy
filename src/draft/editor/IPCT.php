<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript">

setTimeout(function() {
    $('#errorbox').fadeOut('fast');
}, 1000); // <-- time in milliseconds
</script>
<?php
require_once '../config/includes.php';

///echo "============= field<br>";
///echo "<br>recoredID: ".$_POST['recordID'];
///echo "<br>catalogID: ".$_POST['catalogID'];
///echo "<br>content: ".$_POST['content'];
///echo "<br>btn: ".$_POST["btn"];
///echo "<br>";


	$recordID = $_POST['recordID'];
	$catalogID = $_POST['catalogID'];
	$content = $_POST['content'];
	$content = "this would be a response from COP (static text)";
	//$content = DataManager::updateIPCTMetadataAtCIP($recordID, $catalogID, $content);
	echo $content;
	
	//print "Form submitted successfully: <br>Your name is <b>".$_POST['name']."</b> and your email is <b>".$_POST['email']."</b><br>";
	

/*
if($_POST["btn"] =="Submit Text"){
		
	$recordID = $_POST['recordID'];
	$catalogID = $_POST['catalogID'];
	$content = $_POST['content'];
	
	$content = DataManager::updateIPCTMetadataAtCIP($recordID, $catalogID, $content);
	echo '<div  id="errorbox" style="width:680px; background-color: yellow; border: 1px solid black; padding: 2px; color: #000; text-align: center;">Text is updated</div>';
echo '<form action="IPCT.php" method="post">'
		."<input name='recordID' type='hidden' value='$recordID'>"
		."<input name='catalogID' type='hidden' value='$catalogID'>"
		."<textarea name='content' rows='4' cols='95' placeholder='IPCT Captin ...'>$content</textarea>"
		."<div align='center'><input name='btn' type='Submit' value='Submit Text'></div></form>";

}  else{
	$text = DataManager::updateIPCTMetadataFromCIP($_GET["recordID"], $_GET["catalogID"]);
	
	$recordID = $_GET['recordID'];
	$catalogID = $_GET['catalogID'];
	
	
	echo '<form action="IPCT.php" method="post">'
	."<input name='recordID' type='hidden' value='$recordID'>"
	."<input name='catalogID' type='hidden' value='$catalogID'>"
	."<textarea name='content' rows='4' cols='95' placeholder='IPCT Captin ...'>$text</textarea>"
	."<div align='center'><input name='btn' type='Submit' value='Submit Text'></div></form>";
}
/*
?>

