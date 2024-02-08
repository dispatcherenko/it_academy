(function () {
    "use strict";

    const root = document.documentElement;

    const navToggle = document.querySelector("#js-navToggle");

    navToggle.addEventListener("click", function() {
        root.classList.toggle("show-nav");
    });

    const eventPP = document.querySelector("#js-eventPP");

    if (eventPP) {
        const closeEventPP = function(event) {
            function close() {
                root.classList.remove("show-event-popup");

                document.removeEventListener("keyup", closeEventPP);
                eventPP.removeEventListener("click", closeEventPP);
            }

            switch (event.type) {
                case "keyup":
                    if (event.key === "Escape" || event.keyCode === 27) {
                        close();
                    }
                    break;
                case "click":
                    if (event.target === this || 
                        event.target.classList.contains("js-ppCloseBtn")) {
                        close();
                    }
                    break;
            }
        }
        
        const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

        eventOpenBtn.addEventListener("click", function () {
            root.classList.add("show-event-popup");

            document.addEventListener("keyup", closeEventPP);
            eventPP.addEventListener("click", closeEventPP);
        }); 
             
        // eventPP.addEventListener("click", function (event) {
        //     if (
        //     event.target === this ||
        //     event.target.classList.contains("js-ppCloseBtn")
        //     ) {
        //         root.classList.remove("show-event-popup");
        //     }
        // });

        // document.addEventListener("keyup", function (event) {
        //     if (event.key === "Escape" || event.keyCode === 27) {
        //       root.classList.remove("show-event-popup");
        //     }
        // });
    }

    const swipers = document.querySelectorAll(".js-swiper");
    swipers.forEach(function (swpr) {
      new Swiper(swpr, {
        updateOnWindowResize: true,
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 0,
        speed: 500,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-arrow-next",
          prevEl: ".swiper-arrow-prev",
          disabledClass: "arrow--disabled"
        }
      });
    });    
})();