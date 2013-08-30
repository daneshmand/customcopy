var __slice = [].slice;

(function($) {
  var FnFactory;
  $.fn.fnFactory = function() {
    var args, key, fnFactory;
    key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (this.length > 1) {
      $.error('FnFactory.js can only be called on one element at a time.');
    }
    fnFactory = this.data('fnFactory');
    if (typeof key === 'string' && fnFactory) {
      if (fnFactory[key]) {
        if (typeof fnFactory[key] === 'function') {
          return fnFactory[key].apply(fnFactory, args);
        } else if (args.length === 0) {
          return fnFactory[key];
        } else if (args.length === 1) {
          return fnFactory[key] = args[0];
        }
      } else {
        return $.error('FnFactory.js did not recognize the given command.');
      }
    } else if (fnFactory) {
      return fnFactory;
    } else {
      this.data('fnFactory', new FnFactory(this.get(0), key));
      return this;
    }
  };
  FnFactory = (function() {

    function FnFactory(el, opts) {
      this.el = el;
      this.canvas = $(el);
      this.context = el.getContext('2d');
      this.options = $.extend({
        toolLinks: true,
        defaultTool: 'marker',
        defaultColor: '#000000',
        defaultSize: 5
      }, opts);
      this.painting = false;
      this.color = this.options.defaultColor;
      this.size = this.options.defaultSize;
      this.tool = this.options.defaultTool;
      this.actions = [];
      this.action = [];
      this.canvas.bind('click mousedown mouseup mousemove mouseleave mouseout touchstart touchmove touchend touchcancel', this.onEvent);
      if (this.options.toolLinks) {
        $('body').delegate("a[href=\"#" + (this.canvas.attr('id')) + "\"]", 'click', function(e) {
          var $canvas, $this, key, fnFactory, _i, _len, _ref;
          $this = $(this);
          $canvas = $($this.attr('href'));
          fnFactory = $canvas.data('fnFactory');
          _ref = ['color', 'size', 'tool'];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            key = _ref[_i];
            if ($this.attr("data-" + key)) {
              fnFactory.set(key, $(this).attr("data-" + key));
            }
          }
		  if ($(this).attr('data-save')) {
			  var comment = $("textarea#comment").val();//$(this).attr('data-comment');
              //fnFactory.download($(this).attr('data-save'),$(this).attr('data-image'));
			  fnFactory.save($(this).attr('data-save'),$(this).attr('data-path'),$(this).attr('data-image'),comment,$(this).attr('data-commentPath'));
		  }
          if ($(this).attr('data-download')) {
              fnFactory.download($(this).attr('data-download'),$(this).attr('data-image'));
          }
		  if ($(this).attr('data-clearCanvas')) {
			    fnFactory.clearCanvas();
		  }
          return false;
        });
      }
    }
    
    FnFactory.prototype.download = function(format,image) {
        var mime;
        format || (format = "jpg");
        if (format === "jpg") {
          format = "jpeg";
        }
        mime = "image/" + format;
  	
  	var backgroundImage = new Image();
  	backgroundImage.src = image; //the background image for compositing
	 //$("test#m_test").html("Second image: <img style='color: black' src='" + backgroundImage.src + "' width='100' heignt= '100'>"); 

  	//composite the two images before sending the data
  	ctx = this.el.getContext("2d");
  	//alert(backgroundImage.src);

  	ctx.globalCompositeOperation = "destination-over";
  	
  	//alert(backgroundImage.src);
	 //$("test#m_test").html("Second image: <img style='color: black' src='" + backgroundImage.src + "' width='100' heignt= '100'>"); 

	 	this.el.onload = function() {
	      	//ctx.drawImage(this.el,0,0);
	      };
	      
  	//alert(backgroundImage.src);
     //window.open(backgroundImage.src);
  	

	 	backgroundImage.onload = function() {
	 	  	ctx.drawImage(backgroundImage,0,0);	
	      };
  	
  		//return window.open(this.el.toDataURL(mime));	
      };
    
    FnFactory.prototype.save = function(format,path,image,comment,commentPath) {
        var mime;
        format || (format = "jpg");
        if (format === "jpg") {
          format = "jpeg";
        }
        mime = "image/" + format;

      	//var firstBackgroundImage = new Image();
      	//firstBackgroundImage.src = image; //the background image for compositing
       	//$("test#m_test").html("Second image: <img style='color: black' src='" + firstBackgroundImage.src + "' width='100' heignt= '100'>"); 

  	var backgroundImage = new Image();
  	backgroundImage.src = image; //the background image for compositing

  	//backgroundImage.src = "./image/editor/default.jpg"; //the background image for compositing
 	backgroundImage.onload = function() {
 	  	ctx.drawImage(backgroundImage,0,0);	
      };
  	//composite the two images before sending the data
  	var ctx = this.el.getContext("2d");
  	
  	ctx.globalCompositeOperation = "destination-over";
  	ctx.drawImage(this.el,0,0);
	//ctx.drawImage(backgroundImage, 0, 0);

		return window.open(this.el.toDataURL(mime));  
		
  		//convas  
  	  	var canvasData = this.el.toDataURL(mime);
  		var postData = "canvasData="+canvasData;

  		var ajax = new XMLHttpRequest();
  		ajax.open("POST",path,true);    
  		ajax.setRequestHeader('Content-Type', 'canvas/upload');
  		ajax.onreadystatechange=function()
  	  	{
  			if (ajax.readyState == 4)
  			{ 
  	    		document.getElementById("debugFilenameConsole").innerHTML="File is saved. <br> <font color='white'>.</font>";
  			}
  	  	};
  		ajax.send(postData);  
  		
  		//Comment
  		commentPath = commentPath + "&comment=" + comment;
  		var ajax_comment = new XMLHttpRequest();
  		ajax_comment.open("GET",commentPath,true);    

  		ajax_comment.onreadystatechange=function()
  	  	{
  			if (ajax_comment.readyState == 4)
  			{ 
  	    		document.getElementById("debugFilenameConsole").innerHTML="Comment is saved: <font color='white'>.</font>" + comment + "<br><br>";
  			}
  	  	};
  	  	ajax_comment.send(); 
  	  	
      };
     
    
	FnFactory.prototype.clearCanvas = function() {
		
		this.el.getContext('2d').clearRect(0,0,this.el.width,this.el.height);
		this.actions = [];
	};

    FnFactory.prototype.set = function(key, value) {
      this[key] = value;
      return this.canvas.trigger("fnFactory.change" + key, value);
    };

    FnFactory.prototype.startPainting = function() {
      this.painting = true;
      return this.action = {
        tool: this.tool,
        color: this.color,
        size: parseFloat(this.size),
        events: []
      };
    };

    FnFactory.prototype.stopPainting = function() {
      if (this.action) {
        this.actions.push(this.action);
      }
      this.painting = false;
      this.action = null;
      return this.redraw();
    };

    FnFactory.prototype.onEvent = function(e) {
      if (e.originalEvent && e.originalEvent.targetTouches) {
        e.pageX = e.originalEvent.targetTouches[0].pageX;
        e.pageY = e.originalEvent.targetTouches[0].pageY;
      }
      $.fnFactory.tools[$(this).data('fnFactory').tool].onEvent.call($(this).data('fnFactory'), e);
      e.preventDefault();
      return false;
    };

    FnFactory.prototype.redraw = function() {
      var fnFactory;
      this.el.width = this.canvas.width();
      this.context = this.el.getContext('2d');
      fnFactory = this;
      $.each(this.actions, function() {
        if (this.tool) {
          return $.fnFactory.tools[this.tool].draw.call(fnFactory, this);
        }
      });
      if (this.painting && this.action) {
        return $.fnFactory.tools[this.action.tool].draw.call(fnFactory, this.action);
      }
    };

    return FnFactory;

  })();
  
  $.fnFactory = {
    tools: {}
  };
  $.fnFactory.tools.marker = {
    onEvent: function(e) {
      switch (e.type) {
        case 'mousedown':
        case 'touchstart':
		  if (this.painting) {
			this.stopPainting();
		  }	
          this.startPainting();
          break;
        case 'mouseup':
        case 'mouseout':
        case 'mouseleave':
        case 'touchend':
        case 'touchcancel':
          this.stopPainting();
      }
      if (this.painting) {
        this.action.events.push({
          x: e.pageX - this.canvas.offset().left,
          y: e.pageY - this.canvas.offset().top,
          event: e.type
        });
        return this.redraw();
      }
    },
    draw: function(action) {
      var event, previous, _i, _len, _ref;
      this.context.lineJoin = "round";
      this.context.lineCap = "round";
      this.context.beginPath();
      this.context.moveTo(action.events[0].x, action.events[0].y);
      _ref = action.events;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        this.context.lineTo(event.x, event.y);
        previous = event;
      }
      this.context.strokeStyle = action.color;
      this.context.lineWidth = action.size;
      return this.context.stroke();
    }
  };
  return $.fnFactory.tools.eraser = {
    onEvent: function(e) {
      return $.fnFactory.tools.marker.onEvent.call(this, e);
    },
    draw: function(action) {
      var oldcomposite;
      oldcomposite = this.context.globalCompositeOperation;
      this.context.globalCompositeOperation = "destination-out";
      action.color = "rgba(0,0,0,1)";
      $.fnFactory.tools.marker.draw.call(this, action);
      return this.context.globalCompositeOperation = oldcomposite;
    }
  };
})(jQuery);
