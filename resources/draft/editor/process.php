<?php
	/*
	Here's where you want PHP to process the form data and do something with it, for example inserting the data into a database or sending the information to an email address and so on
	*/
	print "Form submitted successfully: <br>Comment: <b>".$_POST['content']
	."</b><br>recored ID: <b>".$_POST['recordID']
	."</b><br>catalog ID: <b>".$_POST['catalogID']."</b>";
?>