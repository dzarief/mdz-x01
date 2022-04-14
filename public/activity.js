var connection = new Postmonger.Session();

// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
  document.getElementById( 'configuration' ).value = JSON.stringify( data, null, 2 );
  configuration["arguments"].execute.inArguments.Name = 'Hello x';
});

// Save Sequence
connection.on('clickedNext', function() {
  var configuration = JSON.parse( document.getElementById( 'configuration' ).value );
  configuration["arguments"].execute.inArguments.Name = 'Hello';
  connection.trigger('updateActivity', configuration);
});
