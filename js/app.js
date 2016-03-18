$(document).ready(function() {
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(){
		playHadouken();
		$('.hadouken').finish().show().animate(
			{'left': '100%'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
	})
	.mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	})

	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}

})
.keydown(function(e){
	if(e.keyCode = 88){
		$('.ryu-ready').hide();
		$('.ryu-cool').show();
	}
})
.keyup(function(e){
	if(e.keyCode = 88){
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
	}
})
