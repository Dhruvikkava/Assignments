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

$(document).on('click', '.sub-nav ul li a', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 120
    }, 500);
});

$('.filter-slider').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./images/right-white-arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./images/right-white-arrow.png'>",  
    responsive: [
        {
          breakpoint: 576,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
        }
        },
    ] 
});

$(document).ready(function(){
    $("#toggle-btn").click(function(){
      $("#toggle-content").slideToggle();
      $(".close-icons").toggle();
      document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden' ;
    });
    $(".toggle-overlay").click(function(){
        $("#toggle-content").slideToggle();
        $(".close-icons").toggle();
        document.body.style.overflow = 'auto' ;
    });
    $(".close-icons").click(function(){
        $("#toggle-content").slideToggle();
        $(".toggle-overlay").toggle();
        $(".close-icons").toggle();
        document.body.style.overflow = 'auto' ;
    });
});
$(document).ready(function(){
    $("#toggle-btn").click(function(){
      $(".toggle-overlay").toggle();
    });
    $(".toggle-overlay").click(function(){
        $(".toggle-overlay").toggle();
    });
});

$(document).ready(function(){
    var skipSlider = document.getElementById("skipstep");
    var skipValues = [
        document.getElementById("skip-value-lower"),
        document.getElementById("skip-value-upper")
    ];

    noUiSlider.create(skipSlider, {
        start: [1, 11],
        connect: true,
        behaviour: "drag",
        step: 1,
        range: {
            min: 1,
            max: 30
        },
        format: {
            from: function (value) {
                return parseInt(value);
            },
            to: function (value) {
                return parseInt(value);
            }
        }
    });

    skipSlider.noUiSlider.on("update", function (values, handle) {
        skipValues[handle].innerHTML = values[handle];
    });
})
   

$(document).ready(function(){
    $(".edit-icon").click(function(){
        $(".cause").slideToggle();
        $(".country").slideToggle();
        document.body.style.overflow = document.body.style.overflow == 'hidden' ? 'auto' : 'hidden' ;
    });
    $(".edit-icon").click(function(){
        $(".bg-white-block").slideToggle();
    });
    $(".edit-icon").click(function(){
        $(".bg-overlay").toggle();
    });

    $(".bg-overlay").click(function(){
        $(".cause").slideToggle();
        $(".country").slideToggle();
        document.body.style.overflow = 'auto';
    });
    $(".bg-overlay").click(function(){
        $(".bg-white-block").slideToggle();
    });
    $(".bg-overlay").click(function(){
        $(".bg-overlay").toggle();
    });
});


// Model 

$(document).ready(function(){
$('.modal').on('shown.bs.modal', function (e) {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite:false,
        fade: true,
        asNavFor: '.slider-navigation',
        prevArrow: '<div class="slick-prev control-c"><img src="./images/left-arrow-big.png"></div>',
        nextArrow: '<div class="slick-next control-c"><img src="./images/left-arrow-big.png"></div>'
    });
    $('.slider-navigation').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,       
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
            },
        ]
    })
})
})
$('#exampleModalCenter').appendTo("body").modal('hide');