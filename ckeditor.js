/*
 * var CKEDITOR_BASEPATH = '/js/ckeditor/lib/';
 * should work but steal removeds it when it builds it sooooo put it the ckeditor.js lib
 */
var CKEDITOR_BASEPATH = '/formeditor/ckeditor/lib/';
steal(
	/*
     * 	try to set the basepath based on the steal root
     */
	function(){
		var root = steal.root;
		
		var path = root.path.replace( root.domain(), '' )
					.replace( root.protocol() + '//', '' );
		
		//make sure this is in the window			
		CKEDITOR_BASEPATH = path + 'ckeditor/lib/';
		window.CKEDITOR_BASEPATH = CKEDITOR_BASEPATH;
	},
	{
		src: './lib/ckeditor.js',
		//ie doesnt like this in prodction.js
		packaged: false
	}
);
