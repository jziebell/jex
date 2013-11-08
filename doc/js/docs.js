var docs = {"jex.console":{"name":"jex.console","title":"console","parent":"jex","children":["jex.console.log","jex.console.error","jex.console.debug","jex.console.warn","jex.console.info","jex.console.time","jex.console.timeEnd","jex.console.buffer_","jex.console.add_to_buffer_","jex.console.flush_buffer_","jex.console.execute_"],"is_function":false,"is_constructor":false,"is_namespace":true,"is_prototype":false,"is_static":false,"parameters":[],"summary":"This is a wrapper for the native console class.","description":"This is a wrapper for the native console class. It provides access to basic\nconsole functions that you can call regardless of whether or not a console\nis available.\n\nAny console events triggered before the console is available (like when\nyou're trying to use Firebug Lite with IE7, for example) are buffered.\nBuffered console events are only output when another console event fires.\nSo, if you have 10 console events before your console is open, you will\nneed to fire off another event (potentially manually) to get the buffer to\nflush.\n\nIf the console exists but the function you tried to call isn't there (not\nall browsers define all of the functions made available here. IE8, for\nexample, doesn't support console.debug()),\n\nTested:\n<ul>\n<li>Chrome 30 - OK<\/li>\n<li>IE 10 - OK<\/li>\n<li>IE 11 - In IE11 and potentially other browsers, the console exists\neven when not open but does not produce output. Therefore, the attempts\nfrom this class to buffer the output will fail and console events can be\nmissed. This can be mitigated simply by keeping the console open. The only\nreal utility of the buffer is for older browsers without consoles that\ntake a while to get Firebug started up<\/li>\n<\/ul>","tags":{"example":["\/\/ You only need to call the constructor once; it just adds prototype\n \/\/ methods to this class. By including this class, you can do the following\n \/\/ or similar:\njex.console.log('Text');\njex.console.error('Error');"],"const":[""],"namespace":[""],"link":[{"name":"benalman.com","href":"http:\/\/benalman.com\/projects\/javascript-debug-console-log\/"},{"name":"developers.google.com","href":"https:\/\/developers.google.com\/chrome-developer-tools\/docs\/console-api"}]}},"jex.console.log":{"name":"jex.console.log","title":"log","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["message"],"summary":"Wrapper for native console.log().","description":"Wrapper for native console.log().","tags":{"see":["https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/console.log"],"param":[{"type":"string","name":"message","description":"The message to output to the console."}]}},"jex.console.error":{"name":"jex.console.error","title":"error","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["message"],"summary":"Wrapper for native console.error().","description":"Wrapper for native console.error().","tags":{"see":["https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/console.error"],"param":[{"type":"string","name":"message","description":"The message to output to the console."}]}},"jex.console.debug":{"name":"jex.console.debug","title":"debug","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["message"],"summary":"Wrapper for native console.debug().","description":"Wrapper for native console.debug().","tags":{"see":["https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/console.debug"],"param":[{"type":"string","name":"message","description":"The message to output to the console."}]}},"jex.console.warn":{"name":"jex.console.warn","title":"warn","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["message"],"summary":"Wrapper for native console.warn().","description":"Wrapper for native console.warn().","tags":{"see":["https:\/\/deveoper.mozilla.org\/en-US\/docs\/Web\/API\/console.warn"],"param":[{"type":"string","name":"message","description":"The message to output to the console."}]}},"jex.console.info":{"name":"jex.console.info","title":"info","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["message"],"summary":"Wrapper for native console.info().","description":"Wrapper for native console.info().","tags":{"see":["https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/console.info"],"param":[{"type":"string","name":"message","description":"The message to output to the console."}]}},"jex.console.time":{"name":"jex.console.time","title":"time","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["timer_name"],"summary":"Wrapper for native console.time().","description":"Wrapper for native console.time(). This will not work as desired if called\nwhen a console does not exist and the call goes to the buffer.","tags":{"see":["https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/console.time"],"param":[{"type":"string","name":"timer_name","description":"The name of the timer."}]}},"jex.console.timeEnd":{"name":"jex.console.timeEnd","title":"timeEnd","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["timer_name"],"summary":"Wrapper for native console.timeEnd().","description":"Wrapper for native console.timeEnd(). This will not work as desired if\ncalled when a console does not exist and the call goes to the buffer.","tags":{"see":["https:\/\/developer.mozilla.org\/en-US\/docs\/Web\/API\/console.time"],"param":[{"type":"string","name":"timer_name","description":"The name of the timer."}]}},"jex.console.buffer_":{"name":"jex.console.buffer_","title":"buffer_","parent":"jex.console","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"A buffer of console events that need to be flushed to the console when it\nbecomes available.","description":"A buffer of console events that need to be flushed to the console when it\nbecomes available.","tags":{"private":[""],"type":["{Array.<{console_function: string, console_arguments: Arguments}>}"]}},"jex.console.add_to_buffer_":{"name":"jex.console.add_to_buffer_","title":"add_to_buffer_","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["console_function","console_arguments"],"summary":"Add a console function call to the buffer.","description":"Add a console function call to the buffer.","tags":{"private":[""],"param":[{"type":"string","name":"console_function","description":"The console function to buffer."},{"type":"Arguments","name":"console_arguments","description":"The arguments to pass to the function\ncall."}]}},"jex.console.flush_buffer_":{"name":"jex.console.flush_buffer_","title":"flush_buffer_","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"As long as window.console exists, flush the buffer to the console.","description":"As long as window.console exists, flush the buffer to the console. The\nexecute_() call handles all of the cross-browser quirks.","tags":{"private":[""]}},"jex.console.execute_":{"name":"jex.console.execute_","title":"execute_","parent":"jex.console","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["console_function","console_arguments"],"summary":"First of all, IE sucks.","description":"First of all, IE sucks. Their console functions are of type 'object'\ninstead of 'function', so you can't call .apply on them. This is true for\nIE9 and below. That's what the type check is all about here. More info at\n\nNext up, this falls back to console.log when the function you called fails.\nFor example, IE 9 doesn't have console.debug so it will instead log so at\nleast something shows up in the console.","tags":{"private":[""],"param":[{"type":"string","name":"console_function","description":"The console function to execute."},{"type":"Object","name":"console_arguments","description":"The arguments to pass to the console\nfunction."}],"link":[{"name":"stackoverflow.com","href":"http:\/\/stackoverflow.com\/a\/6514267"}]}},"jex.debug":{"name":"jex.debug","title":"debug","parent":"jex","children":["jex.debug.listener"],"is_function":false,"is_constructor":false,"is_namespace":true,"is_prototype":false,"is_static":false,"parameters":[],"summary":"Debug namespace for JeX.","description":"Debug namespace for JeX. Debugging utilities go here. Console is exempt\nonly for brevity of those function calls.","tags":{"const":[""],"namespace":[""]}},"jex.debug.listener":{"name":"jex.debug.listener","title":"listener","parent":"jex.debug","children":["jex.debug.listener.render_count","jex.debug.listener.get_count"],"is_function":false,"is_constructor":false,"is_namespace":true,"is_prototype":false,"is_static":false,"parameters":[],"summary":"Debug utilities for event listeners.","description":"Debug utilities for event listeners.\n\nTested:\n<ul>\n<li>Chrome 30 - OK<\/li>\n<li>IE 10 - OK<\/li>\n<\/ul>","tags":{"const":[""],"namespace":[""]}},"jex.debug.listener.render_count":{"name":"jex.debug.listener.render_count","title":"render_count","parent":"jex.debug.listener","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"Render the event listener count in a div on the bottom right corner of the\nbody.","description":"Render the event listener count in a div on the bottom right corner of the\nbody. It stays updated automatically. Note that this can only be called\ninside a rocket.ready() callback or else after document.body exists.","tags":{"example":["\/\/ Call this to render the listener count on the page.\njex.debug.listener.render_count();"]}},"jex.debug.listener.get_count":{"name":"jex.debug.listener.get_count","title":"get_count","parent":"jex.debug.listener","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"Count the current number of active event listeners.","description":"Count the current number of active event listeners. This loops over the\nrocket listener tree, so it's not super effecient, but still runs pretty\nquickly regardless.\n\nNote that this only counts listeners added using rocket.EventTarget. Native\nlisteners or inline listeners are not included here.","tags":{"return":[{"type":"number","description":"The number of currently active event listeners."}]}},"jex":{"name":"jex","title":"jex","parent":"","children":["jex.console","jex.debug","jex.placeholder","jex.prettyprint","jex.table","jex.type","jex.version"],"is_function":false,"is_constructor":false,"is_namespace":true,"is_prototype":false,"is_static":false,"parameters":[],"summary":"","description":"Base namespace for JeX","tags":{"const":[""],"namespace":[""]}},"jex.placeholder":{"name":"jex.placeholder","title":"placeholder","parent":"jex","children":["jex.placeholder.prototype.decorated_","jex.placeholder.prototype.element_","jex.placeholder.prototype.placeholder_text_","jex.placeholder.has_native_support_","jex.placeholder.class_name_","jex.placeholder.prototype.rocket_value_","jex.placeholder.prototype.decorate","jex.placeholder.prototype.undecorate","jex.placeholder.get_has_native_support_","jex.placeholder.value_"],"is_function":true,"is_constructor":true,"is_namespace":false,"is_prototype":false,"is_static":false,"parameters":["options"],"summary":"Add placeholder text to an element.","description":"Add placeholder text to an element. If the browser already natively\nimplements placeholder text, then that implementation takes precedence. This\ndoes not support password or select fields. Also does not work properly with\nregular HTML form submissions; element.value will return the placeholder\ntext instead of an empty string.\n\nTested:\n<ul>\n<li>Chrome 30 - OK<\/li>\n<li>IE 10 - OK<\/li>\n<\/ul>","tags":{"constructor":[""],"example":["\/\/ Create an input and add a placeholder\nvar input = $.createElement('input').setAttribute('placeholder', 'First Name');\nvar placeholder = new jex.placeholder();\nplaceholder.decorate(input);","\/\/ Create an input and add a placeholder with a custom class\nvar input = $.createElement('input').setAttribute('placeholder', 'First Name');\nvar placeholder = new jex.placeholder({'class_name': 'my_placeholder_class'});\nplaceholder.decorate(input);","\/\/ Undecorate an input\nvar input = $.createElement('input').setAttribute('placeholder', 'First Name');\nvar placeholder = new jex.placeholder();\nplaceholder.decorate(input);\nplaceholder.undecorate();"],"param":[{"type":"{class_name: string}","name":"options","description":"class_name: The name of the class to apply when the placeholder is active.\nDefault \"jex_placeholder\"."}]}},"jex.placeholder.prototype.decorated_":{"name":"jex.placeholder.prototype.decorated_","title":"decorated_","parent":"jex.placeholder","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"Whether or not the element is currently decorated.","description":"Whether or not the element is currently decorated.","tags":{"private":[""],"type":["{boolean}"]}},"jex.placeholder.prototype.element_":{"name":"jex.placeholder.prototype.element_","title":"element_","parent":"jex.placeholder","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"The element to get placeholder text.","description":"The element to get placeholder text.","tags":{"private":[""],"type":["{rocket.Elements}"]}},"jex.placeholder.prototype.placeholder_text_":{"name":"jex.placeholder.prototype.placeholder_text_","title":"placeholder_text_","parent":"jex.placeholder","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"The placeholder text.","description":"The placeholder text.","tags":{"private":[""],"type":["{string}"]}},"jex.placeholder.has_native_support_":{"name":"jex.placeholder.has_native_support_","title":"has_native_support_","parent":"jex.placeholder","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"Whether or not the browser has native support for placeholders.","description":"Whether or not the browser has native support for placeholders.","tags":{"private":[""],"type":["{boolean}"]}},"jex.placeholder.class_name_":{"name":"jex.placeholder.class_name_","title":"class_name_","parent":"jex.placeholder","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"The class to apply to the input element when the placeholder is active.","description":"The class to apply to the input element when the placeholder is active.\nSimply setting and removing\/resetting a font color is not appropriate\nbecause that could potentially override user-defined class styles added\nafter the placeholder became active.","tags":{"private":[""],"type":["{string}"]}},"jex.placeholder.prototype.rocket_value_":{"name":"jex.placeholder.prototype.rocket_value_","title":"rocket_value_","parent":"jex.placeholder","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"The original rocket value function.","description":"The original rocket value function. Need to \"back up\" this function because\nit gets overridden. The override does some extra stuff and then potentially\ncalls this function anyways depending on the state of the placeholder. I'm\nnot 100% sure why this has to be a prototype on jex.placeholder, but this\nis the only way this works and closure compiles properly.","tags":{"private":[""],"type":["{function(string=): (rocket.Elements|string|Array.<string>|undefined)}"]}},"jex.placeholder.prototype.decorate":{"name":"jex.placeholder.prototype.decorate","title":"decorate","parent":"jex.placeholder","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["element"],"summary":"","description":"Decorate","tags":{"param":[{"type":"rocket.Elements","name":"element","description":"The element to decorate."}]}},"jex.placeholder.prototype.undecorate":{"name":"jex.placeholder.prototype.undecorate","title":"undecorate","parent":"jex.placeholder","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"","description":"","tags":[]},"jex.placeholder.get_has_native_support_":{"name":"jex.placeholder.get_has_native_support_","title":"get_has_native_support_","parent":"jex.placeholder","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"Get the value of jex.placeholder.has_native_support_.","description":"Get the value of jex.placeholder.has_native_support_. If that variable is\ncurrently undefined, then figure it out and save it there. This way this\nlogic only has to run once.","tags":{"private":[""],"return":[{"type":"boolean","description":"If the browser has native support for placeholders."}]}},"rocket.Elements.prototype.value":{"name":"rocket.Elements.prototype.value","title":"value","parent":"rocket.Elements","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["opt_value"],"summary":"This overrides the default value() function in Rocket.","description":"This overrides the default value() function in Rocket. This is necessary\nbecause calling something like $('#element').value() in a browser that does\nnot have native placeholder support will return the actual placeholder text\nin my implementation. Ideally, this value should actually be an empty\nstring.\n\nSo, instead of making the user worry about all that or forcing you to wrap\nyour placeheld inputs up any time you want to do this, I just handle it\nautomatically.\n\nFirst, if the element does not have any placeholder text, revert to the\noriginal rocket value() function. Second, If there is placeholder text and\nthe browser has native support for them, revert to the original rocket\nvalue() function. If, however, none of those two cases are true, then call\na custom value function.","tags":{"param":[{"type":"string=","name":"opt_value","description":"The value."}],"suppress":["{duplicate}"],"return":[{"type":"(rocket.Elements|string|Array.<string>|undefined)","description":"The value or\nthese elements."}]}},"jex.placeholder.value_":{"name":"jex.placeholder.value_","title":"value_","parent":"jex.placeholder","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["opt_value"],"summary":"This is a 'static' value function that must be executed using .call().","description":"This is a 'static' value function that must be executed using .call(). The\nthis parameter should be the rocket element to set the value of. This\noperates independently of the instantiated placeholder object.\n\nNote that if the user entered text into an input that matches the\nplaceholder text, this function will return an empty string when called\nwith no arguments or will revert to the placeholder text otherwise.","tags":{"private":[""],"this":["{rocket.Elements}"],"param":[{"type":"string=","name":"opt_value","description":"The value."}],"return":[{"type":"(rocket.Elements|string|Array.<string>|undefined)","description":"The value or\nthese elements."}]}},"jex.prettyprint":{"name":"jex.prettyprint","title":"prettyprint","parent":"jex","children":["jex.prettyprint.indent_amount_","jex.prettyprint.default_text_color_","jex.prettyprint.default_background_color_","jex.prettyprint.color_schemes_","jex.prettyprint.prototype.object_","jex.prettyprint.prototype.color_scheme_","jex.prettyprint.prototype.display_line_numbers_","jex.prettyprint.prototype.decorate","jex.prettyprint.prototype.do_prettyprint_","jex.prettyprint.prototype.render_tr_","jex.prettyprint.prototype.render_line_number_","jex.prettyprint.prototype.render_key_","jex.prettyprint.prototype.render_colon_","jex.prettyprint.prototype.render_value_"],"is_function":true,"is_constructor":true,"is_namespace":false,"is_prototype":false,"is_static":false,"parameters":["options"],"summary":"Nice prettyprinting of JavaScript objects to HTML.","description":"Nice prettyprinting of JavaScript objects to HTML. Supports color schemes\nand otherwise produces output fairly similar to that of the native\nJSON.prettyprint.\n\nTested:\n<ul>\n<li>Chrome 30 - OK<\/li>\n<li>FF 24 - OK<\/li>\n<li>FF 25 - OK<\/li>\n<li>IE 7 - At the very least, will not iterate over any keys in an object\nwith the key \"constructor\" as it's not enumerable and is reserved so it\ndoesn't change.<\/li>\n<li>IE 8 - At the very least, will not iterate over any keys in an object\nwith the key \"constructor\" as it's not enumerable and is reserved so it\ndoesn't change.<\/li>\n<li>IE 9 - OK<\/li>\n<li>IE 10 - OK<\/li>\n<\/ul>","tags":{"example":["\/\/ Prettyprint an object with the defaults.\nvar object = {'foo': 'bar'};\nprettyprint = new jex.prettyprint({'object': object});\nprettyprint.decorate($(\"#prettyprint\"));","\/\/ Prettyprint an object with the light color scheme.\nvar object = {'foo': 'bar'};\nprettyprint = new jex.prettyprint({'object': object, 'color_scheme': 'light'});\nprettyprint.decorate($(\"#prettyprint\"));","\/\/ Prettyprint an object with a custom color scheme.\nvar object = {'foo': 'bar'};\nprettyprint = new jex.prettyprint({'object': object, 'color_scheme': {'string': 'blue'}});\nprettyprint.decorate($(\"#prettyprint\"));","\/\/ Prettyprint any type of object.\nvar object = {'number': 1, 'string': 'string', 'array': [1, 2, 3], 'object': {'a': 1, 'b': 2}};\nprettyprint = new jex.prettyprint({'object': object});\nprettyprint.decorate($(\"#prettyprint\"));"],"param":[{"type":"{object: Object, color_scheme: (string|Object), display_line_numbers: boolean}","name":"options","description":"object: The object to prettyprint. Required.<br\/>\ncolor_scheme: The color scheme. Either 'light', 'dark', or an object with\nthe custom scheme. Default 'dark'.<br\/>\ndisplay_line_numbers: Whether or not to display line numbers. Default true."}],"constructor":[""]}},"jex.prettyprint.indent_amount_":{"name":"jex.prettyprint.indent_amount_","title":"indent_amount_","parent":"jex.prettyprint","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"The number of spaces to indent for each level.","description":"The number of spaces to indent for each level.","tags":{"private":[""],"type":["{number}"]}},"jex.prettyprint.default_text_color_":{"name":"jex.prettyprint.default_text_color_","title":"default_text_color_","parent":"jex.prettyprint","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"The color to use then a custom color scheme is used but a needed text color\nis not specified.","description":"The color to use then a custom color scheme is used but a needed text color\nis not specified.","tags":{"private":[""],"type":["{string}"]}},"jex.prettyprint.default_background_color_":{"name":"jex.prettyprint.default_background_color_","title":"default_background_color_","parent":"jex.prettyprint","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"The color to use then a custom color scheme is used but the background\ncolor is unspecified.","description":"The color to use then a custom color scheme is used but the background\ncolor is unspecified.","tags":{"private":[""],"type":["{string}"]}},"jex.prettyprint.color_schemes_":{"name":"jex.prettyprint.color_schemes_","title":"color_schemes_","parent":"jex.prettyprint","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"A couple color schemes for quick use.","description":"A couple color schemes for quick use. Taken pretty much directly from\nSublime Text 2.","tags":{"private":[""],"type":["{Object.<string, Object.<string, string>>}"]}},"jex.prettyprint.prototype.object_":{"name":"jex.prettyprint.prototype.object_","title":"object_","parent":"jex.prettyprint","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"The object to prettyprint.","description":"The object to prettyprint.","tags":{"private":[""],"type":["{Object}"]}},"jex.prettyprint.prototype.color_scheme_":{"name":"jex.prettyprint.prototype.color_scheme_","title":"color_scheme_","parent":"jex.prettyprint","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"The current color scheme.","description":"The current color scheme.","tags":{"private":[""],"type":["{Object.<string, string>}"]}},"jex.prettyprint.prototype.display_line_numbers_":{"name":"jex.prettyprint.prototype.display_line_numbers_","title":"display_line_numbers_","parent":"jex.prettyprint","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"Whether or not to show line numbers in the output.","description":"Whether or not to show line numbers in the output.","tags":{"private":[""],"type":["{boolean}"]}},"jex.prettyprint.prototype.decorate":{"name":"jex.prettyprint.prototype.decorate","title":"decorate","parent":"jex.prettyprint","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["element"],"summary":"Decorate the provided element with the prettyprinted object.","description":"Decorate the provided element with the prettyprinted object.","tags":{"param":[{"type":"rocket.Elements","name":"element","description":"The element to decorate."}]}},"jex.prettyprint.prototype.do_prettyprint_":{"name":"jex.prettyprint.prototype.do_prettyprint_","title":"do_prettyprint_","parent":"jex.prettyprint","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["object","tbody","opt_current_indent","opt_line_number"],"summary":"Recurse over the object and prettyprint it by adding trs to the tbody.","description":"Recurse over the object and prettyprint it by adding trs to the tbody.","tags":{"private":[""],"param":[{"type":"Object","name":"object","description":"The object to prettyprint."},{"type":"rocket.Elements","name":"tbody","description":"The tbody to prettyprint into."},{"type":"number=","name":"opt_current_indent","description":"The current indent level."},{"type":"number=","name":"opt_line_number","description":"The current line number."}],"return":[{"type":"number","description":"The next line number."}]}},"jex.prettyprint.prototype.render_tr_":{"name":"jex.prettyprint.prototype.render_tr_","title":"render_tr_","parent":"jex.prettyprint","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["line_number"],"summary":"Render a tr element for the current row of data.","description":"Render a tr element for the current row of data. This includes all\napplicable tds.","tags":{"private":[""],"param":[{"type":"number","name":"line_number","description":"The line number for this tr."}],"return":[{"type":"rocket.Elements","description":"The tr."}]}},"jex.prettyprint.prototype.render_line_number_":{"name":"jex.prettyprint.prototype.render_line_number_","title":"render_line_number_","parent":"jex.prettyprint","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["line_number"],"summary":"Render the line number.","description":"Render the line number.","tags":{"private":[""],"param":[{"type":"number","name":"line_number","description":"The line number."}],"return":[{"type":"rocket.Elements","description":"The element containing the line number."}]}},"jex.prettyprint.prototype.render_key_":{"name":"jex.prettyprint.prototype.render_key_","title":"render_key_","parent":"jex.prettyprint","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["key","indent"],"summary":"Render the object key at the specified indent level.","description":"Render the object key at the specified indent level.","tags":{"private":[""],"param":[{"type":"string","name":"key","description":"The key for this element in the object."},{"type":"number","name":"indent","description":"The indent level for this key."}],"return":[{"type":"rocket.Elements","description":"The element containing the key."}]}},"jex.prettyprint.prototype.render_colon_":{"name":"jex.prettyprint.prototype.render_colon_","title":"render_colon_","parent":"jex.prettyprint","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"","description":"Render the colon to separate the key and the value","tags":{"private":[""],"return":[{"type":"rocket.Elements","description":"The element containing the colon."}]}},"jex.prettyprint.prototype.render_value_":{"name":"jex.prettyprint.prototype.render_value_","title":"render_value_","parent":"jex.prettyprint","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["value"],"summary":"Render the value with the appropriate style per the color scheme.","description":"Render the value with the appropriate style per the color scheme.","tags":{"private":[""],"param":[{"type":"Object","name":"value","description":"The value."}],"return":[{"type":"rocket.Elements","description":"The element containing the value."}]}},"jex.table":{"name":"jex.table","title":"table","parent":"jex","children":["jex.table.prototype.render_tr_","jex.table.prototype.fill_row","jex.table.prototype.table","jex.table.prototype.tbody","jex.table.prototype.tr","jex.table.prototype.td"],"is_function":true,"is_constructor":true,"is_namespace":false,"is_prototype":false,"is_static":false,"parameters":["options"],"summary":"Creates a table with the chosen number of rows and columns.","description":"Creates a table with the chosen number of rows and columns. Makes it easy\nand fast to create a table and offers a few functions for easily accessing\nelements inside the table.\n\nTested:\n<ul>\n<li>Chrome 30 - OK<\/li>\n<li>IE 10 - OK<\/li>\n<\/ul>","tags":{"example":["\/\/ Create a table with one row and one column.\nvar table = new jex.table();","\/\/ Create a table with four rows and one column\nvar table = new jex.table({'rows': 4});","\/\/ Create a table with four columns and one row.\nvar table = new jex.table({'columns': 4});","\/\/ Create a table with four rows and two columns.\nvar table = new jex.table({'rows': 4, 'columns': 2});","\/\/ Create a table with four rows and two columns with the top row in a thead.\nvar table = new jex.table({'rows': 4, 'columns': 2, 'header': true});"],"constructor":[""],"param":[{"type":"{rows: number, columns: number, header: boolean}","name":"options","description":"rows: How many rows are in the table. Default 1.<br\/>\ncolumns: How many columns are in the table. Default 1.<br\/>\nheader: Whether or not a thead is placed on the table. A thead counts as\none of your rows. Default false."}]}},"jex.table.prototype.render_tr_":{"name":"jex.table.prototype.render_tr_","title":"render_tr_","parent":"jex.table","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["columns","cell_type"],"summary":"Renders a tr with a specific number of columns.","description":"Renders a tr with a specific number of columns.","tags":{"private":[""],"param":[{"type":"number","name":"columns","description":"The number of columns."},{"type":"string","name":"cell_type","description":""}],"return":[{"type":"rocket.Elements","description":""}]}},"jex.table.prototype.fill_row":{"name":"jex.table.prototype.fill_row","title":"fill_row","parent":"jex.table","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["row","data"],"summary":"Fills a row in the table with the given data.","description":"Fills a row in the table with the given data.","tags":{"param":[{"type":"number","name":"row","description":"The index of the row to fill in."},{"type":"Array.<string>","name":"data","description":"The data to put in the row."}]}},"jex.table.prototype.table":{"name":"jex.table.prototype.table","title":"table","parent":"jex.table","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"Get the actual table element from this instance of the jex.table class.","description":"Get the actual table element from this instance of the jex.table class.","tags":{"return":[{"type":"rocket.Elements","description":"The actual table element."}]}},"jex.table.prototype.tbody":{"name":"jex.table.prototype.tbody","title":"tbody","parent":"jex.table","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":[],"summary":"Get the actual tbody element from this instance of the jex.table class.","description":"Get the actual tbody element from this instance of the jex.table class.","tags":{"return":[{"type":"rocket.Elements","description":"The actual tbody element."}]}},"jex.table.prototype.tr":{"name":"jex.table.prototype.tr","title":"tr","parent":"jex.table","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["row"],"summary":"Get the actual tr element at the specified index.","description":"Get the actual tr element at the specified index.","tags":{"param":[{"type":"number","name":"row","description":"The index of the row to fetch. Includes the header row."}],"return":[{"type":"rocket.Elements","description":"The actual tr element."}]}},"jex.table.prototype.td":{"name":"jex.table.prototype.td","title":"td","parent":"jex.table","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":true,"is_static":false,"parameters":["row","column"],"summary":"Get the actual td element at the specified row\/column index.","description":"Get the actual td element at the specified row\/column index.","tags":{"param":[{"type":"number","name":"row","description":"The index of the row the td is located in. Includes the\nheader row."},{"type":"number","name":"column","description":"The index of the column the td is located in."}],"return":[{"type":"rocket.Elements","description":"The actual td element."}]}},"jex.type":{"name":"jex.type","title":"type","parent":"jex","children":[],"is_function":true,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":["object","opt_respect_frames"],"summary":"Returns the type of the provided object.","description":"Returns the type of the provided object. This is optimized for speed and\nalso supports object types across frames. It's good for the following\ntypes: array, boolean, date, function, number, null, object, regexp,\nstring, undefined.\n\nTested:\n<ul>\n<li>Chrome 30 - OK<\/li>\n<li>FF 22 - OK<\/li>\n<li>IE 6 - OK<\/li>\n<li>IE 7 - OK<\/li>\n<li>IE 8 - OK<\/li>\n<li>IE 9 - Need to retest with optimizations<\/li>\n<li>IE 10 - OK<\/li>\n<li>IE 11 - Need to retest with optimizations<\/li>\n<\/ul>","tags":{"link":[{"name":"javascriptweblog.wordpress.com","href":"http:\/\/javascriptweblog.wordpress.com\/2011\/08\/08\/fixing-the-javascript-typeof-operator\/"},{"name":"perfectionkills.com","href":"http:\/\/perfectionkills.com\/instanceof-considered-harmful-or-how-to-write-a-robust-isarray\/"}],"param":[{"type":"*","name":"object","description":"The object to get the type for."},{"type":"boolean=","name":"opt_respect_frames","description":"Basically whether or not you're passing\nobjects around between different frames. Technically the function will work\n100% correctly across frames even with this set to false; it will just run a\ntiny bit slower. Rudimentary benchmarks put it at mere milliseconds for\n100,000 calls to this function (in Chrome 30)."}],"return":[{"type":"string","description":"The actual type of the object."}]}},"jex.type.regexp_":{"name":"jex.type.regexp_","title":"regexp_","parent":"jex.type","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"Regular expression to extract the useful portion out of the toString()\ncall.","description":"Regular expression to extract the useful portion out of the toString()\ncall. This is only used when the object type isn't found in jex.type.map\nbecause it's super slow.","tags":{"private":[""],"type":["{RegExp}"]}},"jex.type.map_":{"name":"jex.type.map_","title":"map_","parent":"jex.type","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"Map of native object type strings to a nicer return format.","description":"Map of native object type strings to a nicer return format. This is used in\npreference over a regular expression match which vastly improves the speed.","tags":{"private":[""],"type":["{Object.<string, string>}"]}},"jex.version":{"name":"jex.version","title":"version","parent":"jex","children":[],"is_function":false,"is_constructor":false,"is_namespace":false,"is_prototype":false,"is_static":true,"parameters":[],"summary":"Version number for this release.","description":"Version number for this release.","tags":{"const":[""]}}}