Menubar.Help = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );
//	container.onMouseOver( function () { options.setDisplay( 'block' ) } );
//	container.onMouseOut( function () { options.setDisplay( 'none' ) } );
//	container.onClick( function () { options.setDisplay( 'block' ) } );
    container.onClick( function(){window.open('http://127.0.0.1:3000/login','_self')});

	var title = new UI.Panel();
	title.setTextContent( 'SignUp!' );
	title.setMargin( '0px' );
	title.setPadding( '8px' );
	container.add( title );

	//

//	var options = new UI.Panel();
//	options.setClass( 'options' );
//	options.setDisplay( 'none' );
//	container.add( options );

//	var option = new UI.Button();
//	option.setLabel( 'SignUp' );
//	option.onClick( function () { window.open( 'https://github.com/mrdoob/three.js/tree/master/editor', '_blank' ) } );
//	options.add( option );

	return container;

}
