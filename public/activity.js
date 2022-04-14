var connection = new Postmonger.Session();

// Startup Sequence
connection.trigger('ready');

connection.on('initActivity', function( data ) {
  document.getElementById( 'configuration' ).value = JSON.stringify( data, null, 2 );
  
});

// Save Sequence
connection.on('clickedNext', function() {
  var configuration = JSON.parse( document.getElementById( 'configuration' ).value );

  var message;
  var hasInArguments = Boolean(
    configuration["arguments"] &&
    configuration["arguments"].execute &&
      configuration["arguments"].execute.inArguments &&
      configuration["arguments"].execute.inArguments.length > 0
  );

  var inArguments = hasInArguments
    ? configuration["arguments"].execute.inArguments
    : {};

  $.each(inArguments, function (index, inArgument) {
    $.each(inArgument, function (key, val) {
      if (key === "message") {
        val = "hello";
      }
    });
  });

  
  connection.trigger('updateActivity', configuration);
});
