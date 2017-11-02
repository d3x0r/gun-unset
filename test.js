var Gun = require( 'gun' );
require( '.' );

var gun = new Gun();
var member = gun.get( "member" ).put( { name: "fred" } );
var root = gun.get( 'something' );

root.on( (v,f)=>{console.log( f,'=',v )} );

root.set( member );
root.unset( member );

