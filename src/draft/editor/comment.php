<?php	
require_once '../config/includes.php';


	$recordID = $_GET['recordID'];
	$catalogID = $_GET['catalogID'];
	$comment = $_GET['comment'];
	
	echo $comment;
	
	$comment = DataManager::updateIPCTMetadataAtCIP($recordID, $catalogID, $comment);
	//echo $comment;
