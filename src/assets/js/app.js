$(document).ready(function(){
	getSongs();
});
var audio = document.getElementById('player');
var music;

function getSongs(){
	$.getJSON("/assets/app.json", function(mjson){
		music = mjson;
		genList(music);
		
	});
}
function playSong(id){
	console.log(id);
	$('#img-album').attr('src',music.songs[id].imagen);
	$('#player').attr('src',music.songs[id].song);
	audio.play();
}



function genList(music){
	$.each(music.songs, function(i,song){
		$('#playlist').append('<li class="list-group-item" id="'+i+'">'+song.name+' </li>')
	});
	$('#playlist li').click(function(){
		var selectedsong = $(this).attr('id');
		playSong(selectedsong);
	})
}
