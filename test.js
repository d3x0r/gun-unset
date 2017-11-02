var Gun = require( 'gun' );
require( '.' );

var gun = new Gun();
var member = gun.get( "member" ).put( { name: "alex" } );
var member2 = gun.get( "member2" ).put( { name: "betty" } );
var member3 = gun.get( "member3" ).put( { name: "cindy" } );
var root = gun.get( 'something' );

root.on( (v,f)=>{console.log( f,'=',v )} );

root.set( member );
root.set( member2 );
root.set( member3 );
root.unset( member );

