USERTRIGGER = 'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

function App(){
	menu();
	model();
}

$(document).ready(App);

function menu(){
	$('#navToggle').get(0).addEventListener(USERTRIGGER, function(e){
		e.preventDefault();
		$('#menu').toggleClass('open');
	});
}

function model(){
	$('#model #close').on('click', function(e){
		e.preventDefault();
		$('#model').removeClass('open')
	})

	$('#modelOpener').on('click', function(e){
		e.preventDefault();
		$('#model').removeClass('open')
	});
}