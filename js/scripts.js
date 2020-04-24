$(document).ready(function (){
    var $ball = $('.ball')
    var $window = $('.window')
    var $score = $('.score p span')
    var $hit = $('.hit p span')
    var $misses = $('.misses p span')
    var n = "2"

    

$('.window')
    
    $ball.on('click', function () {
        $('.ball1').css('display', 'block');
        $(this).css('border-width','1.5px')
        $(this).css('border-style','solid')
        $(this).css('border-color','#ff1919')
        $(this).css('background','black')
        $(this).animate({
            opacity: 0,
        }, 70, function () {
            $(this).css('top', Math.floor(Math.random() * 90) + '%').css('left', Math.floor(Math.random() * 90) + '%').css('right', Math.floor(Math.random() * 90) + '%').css('bottom', Math.floor(Math.random() * 90) + '%')
            $(this).css('background', 'radial-gradient(circle at 15px 15px, #ff7d7d, #ff3737, #ff0000)')            
            $(this).css('opacity', '1')
            $(this).css('border','none')
        });
        $score.html(+$score.html() + 300)
        $hit.html(+$hit.html() + 1)
    })

    
    
    $window.on('click', function () {
        var x = event.offsetX;
        var y = event.offsetY;
        x -= 3
        y -= 3
        $('.miss').css('top', y + "px")
        $('.miss').css('left', x + "px")      
        $('.miss').css('display', "block")
        setInterval(function() {
            $('.miss').css('display', "none")
        },1500)
        $score.html($score.html() - 100)
        $misses.html(+$misses.html() + 1)
    })

    $('.miss').click(function() {
        $score.html($score.html() - 100)
        $misses.html(+$misses.html() + 1)
    })
    
    
    $('.window-start').click(function (){
        $(this).css('display', 'none')
        var addBall = setInterval(function(){
            $('.ball' + n).css('display', 'block').css('top', Math.floor(Math.random() * 90) + '%').css('left', Math.floor(Math.random() * 90) + '%').css('right', Math.floor(Math.random() * 90) + '%').css('bottom', Math.floor(Math.random() * 90) + '%')
            n++
        },30000)
        var oneSec = setInterval(function(){
            $('.timer p span').html(+$('.timer p span').html() - 1)
        },1000)
        oneSec
        addBall
        setTimeout(function (){
            clearInterval(addBall);
            clearInterval(oneSec);
            $('.timer p span').html('120')
            $('.window-start').css('display', 'block')
        },120002)
    })
    
});

