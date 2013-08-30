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

        function FnFactory(opts) {
            
            //define options and setting
            this.options = $.extend({
                //define and set conditions
                aCondition1: true,
                aCondition2: false,
                //set defaults
                aDefaultOption1: 'someValue',
                aDefaultOption2: 'someValue2'
            }, opts);
            //define function option
            this.anOption1 = this.options.aDefaultOption1;
            this.anOption2 = this.options.aDefaultOption2;
            
            //define static function (differ kinf of option)
            this.aSetting1 = false;
            this.aSetting2 = true;
            
            //load variable from html
            if (this.options.aCondition1) {
                $('body').delegate("a[href=\"#" + (this.canvas.attr('id')) + "\"]", 'click', function(e) {
                    
                    var $this, key, fnFactory, _i, _len, _ref;
                    $this = $(this);
                    _ref = ['anOption1', 'anOption2'];
                    //fnFactory = $canvas.data('fnFactory');
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        key = _ref[_i];
                        if ($this.attr("data-" + key)) {
                          fnFactory.set(key, $(this).attr("data-" + key));
                        }
                      }
                    if ($(this).attr('data-clearCanvas')) {
                            fnFactory.aFunction1();
                      }
                    return false;
                });
            }
        }


        FnFactory.prototype.aFunction1 = function(aVariable) {
            document.print(aVariable); // do some thing
        };

        FnFactory.prototype.aFunction2 = function(aVariable) {
            document.print(aVariable); // do some thing
        };
        return FnFactory;

    })();

    $.fnFactory = {
        tools: {}
    };

    $.fnFactory.tools.aTool1 = {
        onEvent: function(arg) {
            switch (arg.type) {
                case 'case1':
                case 'case2':
                    if (this.aSetting2) {
                        this.aFunction2();
                    }
                    this.aFunction1();
                    break;
                case 'case3':
                    this.aFunction2(); //call function from 
            }
            if (this.aSetting1) {
                return this.redraw();
            }
        },
        draw: function(aVariable) {
            return  aVariable;
        }
    };
   

    return $.fnFactory.tools.aTool2 = {
        onEvent: function(arg) {
            return $.fnFactory.tools.aTool1.onEvent.call(this, arg);//call a aTool1 tool
        },
        draw: function(aVariable) {
            return  aVariable;
        }
    };
})(jQuery);
