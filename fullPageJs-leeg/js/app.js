function App(){
	console.log('app');
	menu();
}

$(document).ready(App);

function menu(){
	$('#menuOpener').on('click', function(e){
		e.preventDefault();
		$('#menu').toggleClass('open');
	})
}