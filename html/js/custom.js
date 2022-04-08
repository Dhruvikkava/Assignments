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
    // var keypressSlider = document.querySelector(".slider-keypress");
    // var input0 = document.querySelector(".input-with-keypress-0");
    // var input1 = document.querySelector(".input-with-keypress-1");
    // var inputs = [input0, input1];

    // noUiSlider.create(keypressSlider, {
    // start: [1,10],
    // connect: true,
    // step: 1,
    // range: {
    //     min: [1],
    //     max: [30]
    // }    
    // });
   

//     keypressSlider.noUiSlider.on("update", function(values, handle) {
//         inputs[handle].value = values[handle];
      
//         /* begin Listen to keypress on the input */
//         function setSliderHandle(i, value) {
//           var r = [null, null];
//           r[i] = value;
//           keypressSlider.noUiSlider.set(r);
//         }
      
//         // Listen to keydown events on the input field.
//         inputs.forEach(function(input, handle) {
//           input.addEventListener("change", function() {
//             setSliderHandle(handle, this.value);
//           });
      
//           input.addEventListener("keydown", function(e) {
//             var values = keypressSlider.noUiSlider.get();
//             var value = Number(values[handle]);
      
//             // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
//             var steps = keypressSlider.noUiSlider.steps();
      
//             // [down, up]
//             var step = steps[handle];
      
//             var position;
      
//             // 13 is enter,
//             // 38 is key up,
//             // 40 is key down.
//             switch (e.which) {
//               case 13:
//                 setSliderHandle(handle, this.value);
//                 break;
      
//               case 38:
//                 // Get step to go increase slider value (up)
//                 position = step[1];
      
//                 // false = no step is set
//                 if (position === false) {
//                   position = 1;
//                 }
      
//                 // null = edge of slider
//                 if (position !== null) {
//                   setSliderHandle(handle, value + position);
//                 }
      
//                 break;
      
//               case 40:
//                 position = step[0];
      
//                 if (position === false) {
//                   position = 1;
//                 }
      
//                 if (position !== null) {
//                   setSliderHandle(handle, value - position);
//                 }
      
//                 break;
//             }
//           });
//         });
//         /* end Listen to keypress on the input */
//       });
    
// })

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