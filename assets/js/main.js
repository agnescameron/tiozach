var clicks = 1;

function closeLetter() {
    $('.letterBox').hide()
}


function placeDivs() {
    for(var i=0; i<11; i++){
        var left = Math.random()*($(window).width() - 450) + 50;
        var top = Math.random()*($(window).height() - 450) + 50;
        $( `#draggable${i}`).css({'left': left, 'top': top});
        $( `#draggable${i}`).show();
    }
}

function changeCursor() {
    $('#zach').attr(`src`, `assets/img/zach-heads/zach${clicks%5 + 1}.png`);
    clicks = clicks+1;
    console.log(clicks%7)
    var sound = document.getElementById("audio");
    sound.play();
}

  $( function() {
    $( "#draggable0").draggable();
    $( "#draggable1").draggable();
    $( "#draggable2").draggable();
    $( "#draggable3").draggable();
    $( "#draggable4").draggable();
    $( "#draggable5").draggable();
    $( "#draggable6").draggable();
    $( "#draggable7").draggable();
    $( "#draggable8").draggable();
    $( "#draggable9").draggable();
    $( "#draggable10").draggable();
  } );

placeDivs();

$(document).on("click", function() { changeCursor() });