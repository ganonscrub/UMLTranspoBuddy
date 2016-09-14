function refresh(){
	chrome.tabs.getSelected( null, function(tab){
		chrome.tabs.executeScript( tab.id, { code: "window.location.reload();" } );
	});
}

var supervisor = document.getElementById( "supervisor" );
supervisor.addEventListener( "click", function() {
	if ( this.checked )
		chrome.storage.local.set( { "isSupervisor": true } );
	else
		chrome.storage.local.set( { "isSupervisor": false } );
	refresh();
});

var roadster = document.getElementById( "roadster" );
roadster.addEventListener( "click", function() {
	if ( this.checked )
		chrome.storage.local.set( { "roadsterEnabled": true } );
	else
		chrome.storage.local.set( { "roadsterEnabled": false } );
	refresh();
});

chrome.storage.local.get( ["isSupervisor", "roadsterEnabled"], function( data ) {
	console.log( data );
	if ( data.isSupervisor != undefined ){
		supervisor.checked = data.isSupervisor;
	}
	else
		supervisor.checked = false;
	
	if ( data.roadsterEnabled != undefined ){
		roadster.checked = data.roadsterEnabled;
	}
	else
		roadster.checked = false;
});