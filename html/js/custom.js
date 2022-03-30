//home page
$(document).ready(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header-wrapper").addClass("active");
            $('.header-logo').attr('src','./images/logo.png');
        } else {
           $(".header-wrapper").removeClass("active");
           $('.header-logo').attr('src','./images/logo_1.png');
        }
    });
});
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

$('.trending-project').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/arrow-toggle.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/arrow-toggle.png'>",
    responsive: [
    {
    breakpoint: 1025,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
    }
    },
    {
    breakpoint: 575,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    },
    {
    breakpoint: 481,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
    ]
});
$('.feature-destination').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/arrow-toggle.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/arrow-toggle.png'>",
    responsive: [
    {
    breakpoint: 1025,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
    }
    },
    {
    breakpoint: 575,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2
    }
    },
    {
    breakpoint: 385,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
    ]
});
$('.other-project').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/arrow-toggle.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/arrow-toggle.png'>",
    responsive: [
    {
    breakpoint: 1199,
    settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
    }
    },
    {
    breakpoint: 1025,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
    }
    },
    {
    breakpoint: 575,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    }
    },
    {
    breakpoint: 767,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 1
    }
    },
    {
    breakpoint: 481,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    }
    ]
});

$(window).scroll(function() {
    var windscroll = $(window).scrollTop();    
    if (windscroll >= 100) {
        $('section').each(function(i) {
        // The number at the end of the next line is how pany pixels you from the top you want it to activate.
            if ($(this).position().top  <= windscroll + 132) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });
    } else {
        $('nav li.active').removeClass('active');
        $('nav li:first').addClass('active');
    }
}).scroll();

$('.date-slider').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/right-white-arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/right-white-arrow.png'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
      }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',    
});

$(document).ready(function(){
    $(".apply-btn").click(function(){
      $(".date-section").slideToggle();      
    });
});
$(document).ready(function(){
    $(".apply-btn").click(function(){
      $(".up-arrow").toggleClass("up-arrow-rotate");
    });
});