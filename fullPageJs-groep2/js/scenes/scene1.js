MMS.registerSceneJS(function(){

	//Alle code die je voor scenes nodig hebt kun je hierin zetten
	
	scene1.init = function (){
		console.log('scene1 init');
	}

	scene1.enter = function (){
		console.log('scene1 enter');
	}

	scene1.entered = function (){
		console.log('scene1 entered');
	}

	scene1.leave = function (){
		console.log('scene1 leave');
	}

})