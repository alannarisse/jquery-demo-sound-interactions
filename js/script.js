// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

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








// End of Your Code . Don't delete that line below!!
});


