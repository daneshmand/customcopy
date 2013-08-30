
<!doctype html>
<html>
  <head>
    <title>Image Annotation Tool In Javascript</title>
    <script src="./js/jquery.min.js"></script>
    <script src='./js/sketch.js'></script>

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
	
		<img src="./images/mondo-logo.png" />
        <h1>New Mondo Annotation Tool Example</h1>
        
        <div class='demo'>
          <div class='tools'>
			<a href='#tools_sketch' data-tool='marker' ><img src="./images/Pencil-icon.png" height="30px" ></a>
            <a href='#tools_sketch' data-tool='eraser'><img src="./images/Eraser-icon.png" height="30px" ></a>
			<a href="#tools_sketch" data-download="png" >Download</a>
			<a href="#tools_sketch" data-clearCanvas="png" >Clear</a>
          </div>
          <canvas id='tools_sketch' width='400' height='400' style='background: url(./theimage.jpg) no-repeat center center;'></canvas>
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
        </div>
      </article>
		<article>
			<p>
			Next step - implement Rectangles! : <a href='http://dev.opera.com/articles/view/html5-canvas-painting/#rectangle'>Example Source Code for rectangles</a>
		</article>

     
  </body>
</html>

