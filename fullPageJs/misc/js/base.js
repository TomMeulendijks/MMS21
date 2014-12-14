//Gobals

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
			
		}
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
	
		
	Story();
	
});