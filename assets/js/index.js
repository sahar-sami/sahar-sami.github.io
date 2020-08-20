(function($) {
  "use strict"; // Start of use strict
    
    $(window).on("load",function(){
          $(".loader-wrapper").fadeOut("slow");
           $('#projects-row').isotope({filter:'*'});
        });
    
    $('#resume-toggle').click(function(){
     if ($(this).html() == "VIEW RESUME"){
         $(this).html("CLOSE RESUME");
     }
     else {
         $(this).html("VIEW RESUME");
     }
 })
    
    $('#myBtnContainer .btn').click(function(){
        $('#myBtnContainer .btn').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('#projects-row').isotope({filter:selector});
        return false;
         });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
    
})(jQuery); // End of use strict

//function filterSelection(c) {
//    console.log("called");
//  var x, i;
//  x = document.getElementsByClassName("projectCard");
//    console.log(x.length);
//  if (c == "all") c = "";
//  for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none";
//    if (x[i].className.indexOf(c) > -1) x[i].style.display = "block";
//  }
//    var btnContainer = document.getElementById("myBtnContainer");
//var btns = btnContainer.getElementsByClassName("btn");
//for (i = 0; i < btns.length; i++) {
//  btns[i].addEventListener("click", function() {
//    var current = document.getElementsByClassName("active");
//    current[0].className = current[0].className.replace(" active", "");
//    this.className += " active";
//  });
// }

// Show filtered elements
//function w3AddClass(element, name) {
//  var i, arr1, arr2;
//  arr1 = element.className.split(" ");
//  arr2 = name.split(" ");
//  for (i = 0; i < arr2.length; i++) {
//    if (arr1.indexOf(arr2[i]) == -1) {
//      element.className += " " + arr2[i];
//    }
//  }
//}

// Hide elements that are not selected
//function w3RemoveClass(element, name) {
//  var i, arr1, arr2;
//  arr1 = element.className.split(" ");
//  arr2 = name.split(" ");
//  for (i = 0; i < arr2.length; i++) {
//    while (arr1.indexOf(arr2[i]) > -1) {
//      arr1.splice(arr1.indexOf(arr2[i]), 1);
//    }
//  }
//  element.className = arr1.join(" ");
//}

// Add active class to the current control button (highlight it)
//}
