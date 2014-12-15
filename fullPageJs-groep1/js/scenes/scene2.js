MMS.registerSceneJS( function(){
	
	scene2.init = function (){
		console.log('scene2 init');

		$('#scene2 .move-on-link').on('click', function(e){
			e.preventDefault();
			MMS.moveToScene(3);
		});
	}

	scene2.enter = function (){
		console.log('scene2 enter');
		
		$('#scene2 .text-1, #scene2 .text-2').addClass('slide-in-from-side');
	}

	scene2.entered = function (){
		// console.log('scene2 entered');
		$('#scene2 .text-3').addClass('slide-in-from-bottom');
	}

	scene2.leave = function (){
		console.log('scene2 leave');

		 $('#scene2 .text-1,#scene2  .text-2').removeClass('slide-in-from-side');
		$('#scene2 .text-3').removeClass('slide-in-from-bottom');
	}

})