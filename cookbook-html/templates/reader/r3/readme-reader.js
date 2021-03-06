
	init();

	function init() {

		document.body.style.cssText = ' font: 12pt monospace; left: 0; margin: 0 auto; max-width: 900px; position: absolute; right: 0; ';

		var reader = document.body.appendChild( document.createElement( 'script' ) );

		reader.onload = function() {

			hashChange();

		};

		reader.src = 'http://cdnjs.cloudflare.com/ajax/libs/showdown/1.3.0/showdown.min.js';

		window.addEventListener( 'hashchange', hashChange, false );

	}

	function hashChange() {

		var fileName = location.hash ? location.hash.split( '#' )[1] : 'readme.md';

		document.title = document.title ? document.title : fileName;

		var content = document.body.appendChild( document.createElement( 'div' ) );
		var converter = new showdown.Converter();

		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( 'get', fileName, true );
		xmlHttp.onreadystatechange = function() {

			content.innerHTML = xmlHttp.readyState === 4 ? converter.makeHtml( xmlHttp.responseText ) : '';

		};

		xmlHttp.send( null );

	}
