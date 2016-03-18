$(document).ready(function() {
	$('.ryu').mouseenter(function(e){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(e){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(e){
		playHadouken();
		$('.hadouken').finish().show().animate(
			{'left': '100%'},
			500,
			function(e){
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
	})
	.mouseup(function(e){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	})
	
	function playHadouken () {
	  $('#hadouken-sound')[0].volume = 0.5;
	  $('#hadouken-sound')[0].load();
	  $('#hadouken-sound')[0].play();
	}
});

