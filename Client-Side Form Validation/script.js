$(document).ready(function(){
    var header = $('body');
    var backgrounds = new Array(
        'url(riverdale.jpg)'
        ,'url(mrrobot.jpg)'
        , 'url(suits.jpg)'
        , 'url(breakingbad.jpg)'
    );

    var current = 0;
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 9000);
    header.css('background-image', backgrounds[0]);
});
