//Gobals
var MMS = {
	registerSceneJS: function(func){
		this.scenes.push(func);
	},
	scenes: [],
	moveToScene: function(scene){
		$.fn.fullpage.moveTo(scene);
	}
}

$(document).ready(function() {

	$('#fullpage').fullpage({
	
		'verticalCentered': false,
		'css3': true,
		'afterLoad': function(anchorLink, index){
			window['scene'+index].entered();
		},
		'onLeave': function(index, nextIndex, direction){
		
			window['scene'+nextIndex].enter(direction);
			window['scene'+index].leave(direction);
			
		},
		'afterRender': function(){
			
			var l = this.length;
		
			for(; l !=0; l-- ){
				window['scene'+l] = new Scene(this[l-1]);
				window['scene'+l].init();
			}
			
		},
		sectionSelector: '.scene'
	});
	
	function Scene(el){
	
		this.el = el;
		this.leave = function(){
			return;
		}
		
		this.enter =  function(){
			return;
		}
		
		this.entered =  function(){
			return;
		}
		
		this.init = function(){
			return;
		}
		
	}
	

	for(var i = 0; MMS.scenes.length>i; i++){
		MMS.scenes[i]();
		window['scene'+(i+1)].init();
	}
	
});