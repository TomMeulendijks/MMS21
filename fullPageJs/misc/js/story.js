function Story(){

	// Als de scene klaar is met laden en kan beginnen
	scene2.entered = function(){
		$('#iphone3, #iphone2, #iphone4').addClass('active');
	}
	
	scene2.leave = function(direction){
		$('#iphone3, #iphone2, #iphone4').removeClass('active');
	}
	
	scene3.enter = function(direction){
		$('#staticImg').addClass('active');
	}
	
	// Als de scene verlaten wordt
	scene3.leave = function(direction){
	
		if(direction == 'down'){
			$('#staticImg').addClass('moveDown');
			$('.section').eq(2).removeClass('moveDown').addClass('moveUp');
		}else if(direction == 'up'){
			$('#staticImg').removeClass('moveDown');
			$('.section').eq(2).removeClass('moveUp').addClass('moveDown');
		}
		
		
			
	}
	
	//Als de pagina geladen wordt
	scene4.init = function(){
	
	}
	
	//als de scene op het punt staat geaden te worden
	scene4.enter = function(){
		$('#staticImg').removeClass('moveUp');
	}
	
	//als de scene op het punt staat geaden te worden
	scene4.leave = function(direction){
	
		if(direction == 'up'){
			$('#staticImg').removeClass('moveUp');
			$('#staticImg').addClass('active');
		}
		
	}
	
}

