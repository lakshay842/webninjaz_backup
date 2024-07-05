
jQuery(document).ready(function($){


    // for(let i = 1; i <= $('.af-quiz-flow-steps > li').length;i++){
    //     $('.af-quiz-flow-steps > li').eq(i - 1).data('step', i);
    //     $('.quiz-step-toggle-btn').eq(i - 1).data('stepBtn', i);
    // }

    $('.quiz-step-toggle-btn').on('click', function(){
        if($('.af-quiz-flow-steps > li.active').find('#quiz-state-input')){
            $('.af-qz-sel-state').text($('.af-quiz-flow-steps > li.active').find('#quiz-state-input').val());
        }

        if($('.af-quiz-flow-steps > li.active').index()+ 1 != $('.af-quiz-flow-steps > li').length){
            const next = $('.af-quiz-flow-steps > li.active').nextAll().eq(0);
            $('.af-quiz-flow-steps > li').removeClass('active');
            next.addClass('active');
        }


        if ($('.af-quiz-step-18.active').length > 0 || $('.af-quiz-step-19.active').length > 0) {
            $('header').css('background-color', '#FFF6F6');
        } else if ($('.af-quiz-step-5.active').length > 0 || $('.af-quiz-step-4.active').length > 0 || $('.af-quiz-step-8.active').length > 0) {
            $('header').addClass('black').css('background-color', '#000');
        } else {
            $('header').removeClass('black').css('background-color', '#fff');
        }
        
        
    })
        
    $('.af-quiz-radio-grp input').on('change', function(){
        const next = $('.af-quiz-flow-steps > li.active').nextAll().eq(0);
        $('.af-quiz-flow-steps > li').removeClass('active');
        next.addClass('active');
    })

    $('.quiz-step-em-sel input').on('change', function(){
        const next = $('.af-quiz-flow-steps > li.active').nextAll().eq(0);
        $('.af-quiz-flow-steps > li').removeClass('active');
        next.addClass('active');
    })





    // carousel

    $('.owl-choose-color').owlCarousel({
        items:1,
        nav:false,
        dots:true
    })


        

});