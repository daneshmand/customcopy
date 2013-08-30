<?php 	$catalogID=$_GET["catalogID"];
	$recordID=$_GET["recordID"];
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html>
<head>
	<title>JQuery Form Example</title> 
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery.validate/1.7/jquery.validate.min.js"></script>
    <script type="text/javascript">
	$(document).ready(function(){
		$("#myform").validate({
			debug: false,
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: "Please let us know who you are.",
				email: "A valid email will help us get in touch with you.",
			},
			submitHandler: function(form) {
				// do other stuff for a valid form
				$.post('process.php', $("#myform").serialize(), function(data) {
					$('#results').html(data);
				});
			}
		});
	});
	</script>
	<style>
	label.error { width: 250px; display: inline; color: red;}
	</style>
</head>
<body>
        <form name="myform" id="myform" action="" method="POST">  
		<!-- The form fields -->
		   	<textarea name='content' class="text-input" id="content" rows='4' cols='95' placeholder='IPCT Captin ...'></textarea>	
   			<input name='recordID' type='hidden' value='<?php echo $recordID ?>'>
			<input name='catalogID' type='hidden' value='<?php echo $catalogID ?>'>		    
			<br>
		<!-- The Submit button -->
			<input type="submit" name="submit" value="Submit"> 
		</form>
		<!-- We will output here -->
		<div id="results"><div>
		
		
		<script >
		   	function docwrite()
		   	{
		   	  document.write($('#content').val());
		   	}
		   	docwrite();
		</script> 
</body>
</html>