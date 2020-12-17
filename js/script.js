$(window).on("load", function() {
  $(".loader .inner").fadeOut(800, function(){ //500ms befor loading the page that means the class "loader" will disappear after 500ms
    $(".loader").fadeOut(950);  
});

  $(".items").isotope({ //apply isotope options for itmes class
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  });


})


$(document).ready(function () { //that means when document is ready execute this function 
  $('#slides').superslides({ //slides is the id of div with id='slides'
    animation: 'fade',
    play: 5500,
    pagination: false
  });

  const typed = new Typed(".typed", { /*the two parameters the first is ".typed" which is the class of the target element after in {} are the options */
    strings: ["Full Stack ^1000 <h2>Java Script</h2> ^800 Web Developer.", "Software Engineer."],
    typeSpeed: 70,
    loop: true,
    startDelay: 1500,
    showCursor: false,
  });

  $('.owl-carousel').owlCarousel({
    loop: true,
    responsive: { //this is the responsive behaviour from 0px to 480px it will show 1 item after from 480px to 768pw will show 2 two item and so on
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  let skillsTopOffset = $(".skillsSection").offset().top; //this render the 'skillsSection' class postion in pixels from the top
  let countTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  $(window).scroll(//scroll event of window that means when window scrolled
    function () {//execute this function when window scrolled
      if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {//pageYOffset is the Y position of scroll cursor window.height() function is gives the page height
        $('.chart').easyPieChart({
          easing: 'easeInOut',
          barColor: '#fff',
          trackColor: false,
          scaleColor: false, //remove graduations in the circle
          lineWidth: 4,
          size: 152,
          onStep: function (from, to, percent) {
            $(this.el)//in this element which is with 'chart' class element
              .find('.percent')//find the 'percent' class element
              .text(Math.round(percent));//increse the value of text in 'percent' element from 0 to text value exp:58%  it will be seen increasing from 0 -> 58
          }
        });
      };

      if (!countUpFinished && window.pageYOffset > countTopOffset - $(window).height() + 220) {
        $(".counter").each(function () {//for each element with class counter apply this function
          var element = $(this);//the current element with class counter equal to $(".counter")
          var endVal = parseInt(element.text());//pick the text written in this element

          element.countup(endVal); //$("counter").countup(endVal)
        });
        countUpFinished = true;
      }
    });

  $("[data-fancybox]").fancybox();


  $(".filters a").click(function () { //apply the function when an anchor tag inside filters class is clicked 
    $("#filters  .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter"); //selector has the value of data-filter in the a element

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  });


  $("#navigation li a").click(function(e) {
    e.preventDefault(); //prevent the event to behave the default behaviour
    var targetElelement = $(this).attr("href"); //get the "href" attribute of the anchor tag
    var targetPosition = $(targetElelement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow"); //got to the element with slow animation or a number of milliseconds


  });



  const nav = $('#navigation');
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation); //when the window scrolled execute the stickyNavigation function
  function stickyNavigation() {
    var body = $("body");

    if ($(window).scrollTop() >= navTop) { //if the top of the scroll is superior than navTop
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav"); //add class "fixedNav" to bady
    }
    else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav"); //remove the class "fixedNav"
    }
  }






});
