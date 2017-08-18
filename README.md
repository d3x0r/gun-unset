# Unset

usage:

```
var Gun = require( 'gun' );
require( 'gun-unset' );

var gun = new Gun();
var member = gun.get( "member" );
gun.get( "something" ).unset( member );

```


