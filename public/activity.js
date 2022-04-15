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

  payload.name = "this is a name";

  payload["arguments"].execute.inArguments = [{ message: "{{Contact.Attribute.202204_Demo2.Name}}" }];

  payload["metaData"].isConfigured = true;

  //document.getElementById( 'message' ).value = JSON.stringify( payload, null, 2 );
  connection.trigger('updateActivity', payload);


});
