

function placeDivs() {
    for(var i=0; i<11; i++){
        var left = Math.random()*($(window).width() - 250) + 50;
        var top = Math.random()*($(window).height() - 250) + 50;
        $( `#draggable${i}`).css({'left': left, 'top': top});
        $( `#draggable${i}`).show();
    }
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