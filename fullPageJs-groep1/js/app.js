USERTRIGGER = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

function App(){
	menu();
}

$(document).ready(App);

function menu(){
	$('#navToggle').get(0).addEventListener(USERTRIGGER, function(e){
		e.preventDefault();
		$('#menu').toggleClass('open');
	});
}