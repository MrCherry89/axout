$(document).ready(function () {
  $(".main-menu li a").smoothScroll({
    speed: 800,
  });

  $(".main-menu li a").on("click", function (e) {
    $(".drop-menu").removeClass("is-active");
    $(".menu-wrap").removeClass("open");
    $("body, html").removeClass("overflow");
    $(".header-top").removeClass("mobile");
  });

  new WOW().init();
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 1);

  AOS.init();

  $(".button_su_inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".button_circle").css({
      left: relX,
      top: relY,
    });
    $(this).prev(".button_circle").removeClass("desplode-circle");
    $(this).prev(".button_circle").addClass("explode-circle");
  });

  $(".button_su_inner").mouseleave(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".button_circle").css({
      left: relX,
      top: relY,
    });
    $(this).prev(".button_circle").removeClass("explode-circle");
    $(this).prev(".button_circle").addClass("desplode-circle");
  });

  if ($(".scrollClass").length) {
    gsap.to(".scrollClass", {
      scrollTrigger: {
        trigger: ".scrollClass",
        toggleClass: "hide",
        start: "top 70%",
        end: "bottom 10%",
      },
    });
  }

  if ($(".scrollClass2").length) {
    gsap.to(".scrollClass2", {
      scrollTrigger: {
        trigger: ".scrollClass2",
        toggleClass: "hide",
        start: "top 70%",
        end: "bottom 10%",
      },
    });
  }

  if ($(".scrollClass3").length) {
    gsap.to(".scrollClass3", {
      scrollTrigger: {
        trigger: ".scrollClass3",
        toggleClass: "hide",
        start: "top 70%",
        end: "bottom 10%",
      },
    });
  }

  if ($(".scrollLeft").length) {
    gsap.to(".scrollLeft", {
      scrollTrigger: {
        trigger: ".scrollLeft",
        toggleClass: "hide",
        start: "top 70%",
        end: "bottom 10%",
      },
    });
  }

  if ($(".scrollRight").length) {
    gsap.to(".scrollRight", {
      scrollTrigger: {
        trigger: ".scrollRight",
        toggleClass: "hide",
        start: "top 70%",
        end: "bottom 10%",
      },
    });
  }

  $("#form").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните имя",
      },
      phone: {
        required: "Заполните номер",
      },
    },
  });

  $("#form").on("submit", function (e) {
    e.preventDefault();
    if ($("#form").valid()) {
      $(this).closest(".form-wrap").hide();
      $(".form-valid").show();
    }
  });

  $("#form2").validate({
    rules: {
      name: {
        required: true,
      },
      phone: {
        required: true,
      },
    },
    messages: {
      name: {
        required: "Заполните имя",
      },
      phone: {
        required: "Заполните номер",
      },
    },
  });

  $(".tab-menu li a").on("click", function (e) {
    e.preventDefault();

    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content .tab-content-item").removeClass("active");
    $(".tab-content .tab-content-item").eq(index).addClass("active");
    $("#experience-img .img").removeClass("active");
    $("#experience-img .img").eq(index).addClass("active");
  });

  $(".tab-menu-2 li a").on("click", function (e) {
    e.preventDefault();

    $(this).closest(".tab-menu-2").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-2 .tab-content-item").removeClass("active");
    $(".tab-content-2 .tab-content-item").eq(index).addClass("active");
  });

  let bg = document.querySelector(".mouse-parallax-bg");
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    bg.style.transform = "translate(-" + x * 50 + "px)";
  });

  let bg2 = document.querySelector(".mouse-parallax-bg2");
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    bg2.style.transform = "translate(" + x * 50 + "px)";
  });

  if ($(window).width() >= 767) {
    let bg3 = document.querySelector(".mouse-parallax-bg3");
    window.addEventListener("mousemove", function (e) {
      let x = e.clientX / window.innerWidth;
      bg3.style.transform = "translate(-" + x * 100 + "px)";
    });
  }

  $(".drop-menu").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".header-top").toggleClass("mobile");
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });

  if ($(".panel.one").length) {
    ScrollTrigger.create({
      trigger: ".panel.one",
      start: "top top",
      end: "max",
      pin: true,
      pinSpacing: false,
    });
  }

  if ($(".panel.two").length) {
    ScrollTrigger.create({
      trigger: ".panel.two",
      start: () => "top " + $(".panel.one .top").innerHeight(),
      end: "max",
      pin: true,
      pinSpacing: false,
    });
  }

  if ($(".panel.three").length) {
    ScrollTrigger.create({
      trigger: ".panel.three",
      start: () => "top " + $(".panel.one .top").innerHeight() * 2,
      end: "max",
      pin: true,
      pinSpacing: false,
    });
  }
  if ($(".main-content").length) {
    ScrollTrigger.create({
      trigger: ".main-content",
      start: () => "top " + $(".panel.one .top").innerHeight() * 3,
      end: () => -$(".panel.one .top").innerHeight() * 3,
      pin: true,
      pinSpacing: false,
    });
  }

  if ($(".mountain-images .bottle").length) {
    gsap.to(".mountain-images .bottle", {
      y: 100,
      duration: 3,
      scrollTrigger: {
        trigger: ".mountain-images .bottle",
        start: "top top",
        end: "bottom bottom",
        scrub: 3,
      },
    });
  }

  if ($(".unique-bg").length) {
    gsap.to(".unique-bg", {
      scale: 1.25,
      duration: 5,
      scrollTrigger: {
        trigger: ".unique-bg",
        start: "top top",
        end: "bottom bottom",
        scrub: 5,
      },
    });
  }

  var windowHeight = $(window).height();
  var playedVideos = [false, false, false];

  $(document).scroll(function () {
    var windowScrollTop = $(document).scrollTop();

    $(".panel").each(function (i) {
      var elementOffset = $(this).offset().top;
      if (
        !playedVideos[i] &&
        windowScrollTop > elementOffset - windowHeight / 2
      ) {
        $(this).find(".video-desktop")[0].play();
        $(this).find(".video-mobile")[0].play();
        playedVideos[i] = true;
      } else if (
        (playedVideos[i] && windowScrollTop < elementOffset - windowHeight) ||
        (playedVideos[i] && windowScrollTop > elementOffset + windowHeight)
      ) {
        $(this).find(".video-desktop")[0].currentTime = 0;
        $(this).find(".video-mobile")[0].currentTime = 0;
        playedVideos[i] = false;
      }
    });
  });

  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-zoom-in",
    removalDelay: 500,
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
  });
});
