MMS.registerSceneJS( function(){
	
	var loaded = false;


	scene3.init = function (){

		$('#scene3 .home-link').on('click', function(e){
		 	e.preventDefault();
		 	MMS.moveToScene(1);
		});

		// $("#example_video_1").on('pause',function(e){
		// 	console.log(this.currentTime());
		// });


	}

	scene3.enter = function (){
		// console.log('scene3 enter');
		if(!loaded){
			$("#example_video_1")[0].player.load();
			loaded = true;
		}


		
	}

	scene3.entered = function (){
		// console.log('scene3 entered');
		$('#scene3 .text-3').addClass('slide-in-from-bottom');
		$("#example_video_1")[0].player.play();
	}

	scene3.leave = function (){
		// console.log('scene3 leave');
		$('#scene3 .text-3').removeClass('slide-in-from-bottom');
		$("#example_video_1")[0].player.pause();
	}

})