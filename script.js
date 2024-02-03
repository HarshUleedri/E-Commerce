
tl = gsap.timeline();

function animation() {
  let mm = gsap.matchMedia();

  mm.add({
    phone: "( max-width: 600px )",
    desk: "(min-width: 601px"
  }, (context) => {
    let { phone, desk } = context.conditions
    phone ? 1 : 0, desk ? 1 : 0
    if (phone == 1) {
      tl.from(".nav h1", {
        scale: 4,
        y: 250,
        x: 110,
        delay: 1,
        duration: 2,
        ease: "power2.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: " .mt-page ",
          scroller: "body",
          // markers: true,
          start: "2% top%",
          end: "bottom 0.1%",
          scrub: 2,
        }
      })
      tl.from(".nav .nav-part1, .nav-part1 h3, .nav-part1 button", {
        y: -18,
        delay: 1,
        duration: 3,
        opacity: 0,
        ease: "power2.inOut",
        stagger: 0.5,
        scrollTrigger: {
          trigger: " .page1",
          scroller: "body",
          // markers: true,
          start: "40% 10%",
          end: "60% 40%",
          scrub: 3,

        }

      })
      tl.from(".page1 .strip", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".page1",
          scroller: " body ",
          // markers:true,
          start: "10% 10%",
          end: "80% 40%",
          scrub: 0,
          pin: true,

        }
      })

      tl.from(".page1-content .page1-content-left h1, .page1-content-left h6 , .page1-content-right ", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.inout",
        stagger: 0.7,
        scrollTrigger: {
          trigger: ".page1",
          scroller: "body",
          // markers: true,
          start: "14% 13.9%",
          end: "50% 20%",
          scrub: 2,
          pin: true,

        }

      })
      tl.to(".page1-content-left h6", {
        y: 50,
        repeat: -1,
        duration: 0.7,
        yoyo: true,
      })
      gsap.to(".main .nav,.nav a", {
        y: -25,
        opacity: 1,
        duration: 1,
        backgroundColor: "#EFEDED",
        color: "black",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".page1",
          scroller: "body",
          // markers:true,
          start: "1% top",
          end: "50% 40%",
          scrub: 1,

        }
      })
      tl.to(".main .nav button", {
        backgroundColor: "black",
        color: "white",
        text: "Home",
        scrollTrigger: {
          trigger: ".page-2",
          scroller: "body",
          // markers:true,
          start: "50% top",
          end: "bottom 40%",
          scrub: 1,

        }
      })

      tl.from(".page-2-heading, .page-2-content-left, .page-2-content-middle, .page-2-content-right", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page-2",
          scroller: "body",
          // markers: true,
          start: "top 50%",
          end: "60% 70%",
          scrub: 1,
        }

      })
      tl.to(".page-2-content", {
        transform: "translateX(-100%)",
        duration: 1,
        scrollTrigger: {
          trigger: ".page-2",
          sroller: "body",
          // markers: true,
          start: "10% 10%",
          end: "60% 30%",
          snap: true,
          scrub: 1,
          pin: true,
        }
      })
      tl.from(".page-3-container .page-3-heading, .page-3-content, .page-3-bottom", {
        y: 200,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page-3",
          scroller: "body",
          // markers: true,
          start: "top 50%",
          end: "60% 70%",
          scrub: 1,
        }

      })

      tl.from(".footer .footer-heading, .footer-content .footer-content-1 p, .footer-content-2 p, .footer-icon i, .footer-bottom p", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".footer",
          scroller: "body",
          // markers: true,
          start: "top 50%",
          end: "30% 65%",
          scrub: 1,
        }

      })


    }
    else {


      tl.from(".nav h1", {
        scale: 10,
        y: 220,
        x: 600,
        delay: 1,
        duration: 2,
        ease: "power2.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: " .mt-page ",
          scroller: "body",
          // markers: true,
          start: "2% top%",
          end: "bottom 0.1%",
          scrub: 2,
        }
      })
      tl.from(".nav .nav-part1, .nav-part1 h3, .nav-part1 button", {
        y: -18,
        delay: 1,
        duration: 3,
        opacity: 0,
        ease: "power2.inOut",
        stagger: 0.5,
        scrollTrigger: {
          trigger: " .page1",
          scroller: "body",
          // markers: true,
          start: "40% 10%",
          end: "60% 40%",
          scrub: 3,

        }

      })
      tl.from(".page1 .strip", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".page1",
          scroller: " body ",
          // markers:true,
          start: "10% 10%",
          end: "80% 40%",
          scrub: 0,
          pin: true,

        }
      })

      tl.from(".page1-content .page1-content-left h1, .page1-content-left h6 , .page1-content-right ", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.inout",
        stagger: 0.7,
        scrollTrigger: {
          trigger: ".page1",
          scroller: "body",
          // markers: true,
          start: "14% 13.9%",
          end: "50% 20%",
          scrub: 2,
          pin: true,

        }

      })
      tl.to(".page1-content-left h6", {
        y: 50,
        repeat: -1,
        duration: 0.7,
        yoyo: true,
      })
      gsap.to(".main .nav, .nav a", {
        y: -25,
        opacity: 1,
        duration: 1,
        backgroundColor: "white",
        color: "black",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".page-2",
          scroller: "body",
          // markers:true,
          start: "50% top",
          end: "bottom 40%",
          scrub: 1,

        }
      })
      tl.to(".main .nav button", {
        backgroundColor: "black",
        color: "white",
        text: "Home",
        scrollTrigger: {
          trigger: ".page-2",
          scroller: "body",
          // markers:true,
          start: "50% top",
          end: "bottom 40%",
          scrub: 1,

        }
      })

      tl.from(".page-2-heading, .page-2-content-left, .page-2-content-middle, .page-2-content-right", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page-2",
          scroller: "body",
          // markers: true,
          start: "top 50%",
          end: "60% 70%",
          scrub: 1,
        }

      })
      tl.to(".page-2-content", {
        transform: "translateX(-100%)",
        duration: 1,
        scrollTrigger: {
          trigger: ".page-2",
          sroller: "body",
          // markers: true,
          start: "10% 10%",
          end: "60% 30%",
          snap: true,
          scrub: 1,
          pin: true,
        }
      })
      tl.from(".page-3-container .page-3-heading, .page-3-content, .page-3-bottom", {
        y: 200,
        opacity: 0,
        duration: 2,
        delay: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".page-3",
          scroller: "body",
          // markers: true,
          start: "top 50%",
          end: "60% 70%",
          scrub: 1,
        }

      })

      tl.from(".footer .footer-heading, .footer-content .footer-content-1 p, .footer-content-2 p, .footer-icon i, .footer-bottom p", {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".footer",
          scroller: "body",
          // markers: true,
          start: "top 50%",
          end: "60% 70%",
          scrub: 1,
        }

      })


    }

  })


}
animation();
function swiperjs() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCouser: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

}
swiperjs();
function menu() {

  var menu = document.querySelector(".menu");
  var menuicon = document.querySelector(".menu-icon");
  var navicon = document.querySelector(".ri-menu-3-line");

  menuicon.addEventListener("click", function () {
    menu.style.top = "-100%"

  })

  navicon.addEventListener("click", function () {
    menu.style.top = 0

  })

};
menu();






