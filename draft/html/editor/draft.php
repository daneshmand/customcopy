<?php ?>
<html>
<head>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.min.js"></script>
</head>
<body>

    <script type="text/javascript">
    			document.write('<a href="#tools_sketch"');
    			document.write(' data-image="<?php echo "this is a image" ?>"');
    			document.write(' data-save="<?php echo "this is a save data" ?>"');
    			document.write(' data-path="result.php?imageName=<?php echo $image_name."&catalogID=".$catalogID."&recordID=".$recordID ?>"');
    			document.write('data-post="' + docwrite(); + '">Save</a>');
	</script>

	<script >
		var text = $('#content').val();
		function docwrite()
		{
			document.write(text);
		}
	</script>
	<script>docwrite();</script>
	
	<div id="result"></div>
	
	</body>
</html>