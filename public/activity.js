var connection = new Postmonger.Session();

// Startup Sequence
connection.trigger('ready');
var payload = {};

connection.on('initActivity', function( data ) {
  if (data) {
    payload = data;
  }
  document.getElementById( 'configuration' ).value = JSON.stringify( data, null, 2 );
  
});

// Save Sequence
connection.on('clickedNext', function() {
  //var configuration = JSON.parse( document.getElementById( 'configuration' ).value );
  payload = JSON.parse( document.getElementById( 'configuration' ).value );
  connection.trigger('updateActivity', payload);
});
