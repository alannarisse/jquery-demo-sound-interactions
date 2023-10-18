
$('.clickme').click(function(){
		$('audio#owl')[0].play()

})

$('.pauseme').click(function(){
	$('audio#owl')[0].pause()
})

$('.restartme').click(function(){
	$('audio#owl')[0].currentTime = 0
	$('audio#owl')[0].play()
})

$('.text-btn').click(function(){
	$('.text').toggleClass('hide')
})


