/*
 * var CKEDITOR_BASEPATH = '/js/ckeditor/lib/';
 * should work but steal removeds it when it builds it sooooo put it the ckeditor.js lib
 */
steal({
		src: './lib/ckeditor.js',
		//ie doesnt like this in prodction.js
		packaged: true
	})

