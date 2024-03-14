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

    const contactsMap = document.querySelector("#js-contactsMap");

    if (contactsMap) {
        const mapStyles = [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8ec3b9"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1a3646"
                }
              ]
            },
            {
              "featureType": "administrative.country",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#64779e"
                }
              ]
            },
            {
              "featureType": "administrative.province",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#4b6878"
                }
              ]
            },
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#334e87"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#6f9ba5"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#3C7680"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#304a7d"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#2c6675"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#255763"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#b0d5ce"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#023e58"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#98a5be"
                }
              ]
            },
            {
              "featureType": "transit",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#1d2c4d"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#283d6a"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#3a4762"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#0e1626"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#4e6d70"
                }
              ]
            }
        ];
        const mapCenter = new google.maps.LatLng(56.49387, 84.96274);
        const mapOptions = {
            center: mapCenter,
            disableDefaultUI: true,
            draggable: true,
            gestureHandling: "cooperative",
            scrollwheel: false,
            styles: mapStyles,
            zoom: 15,
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_BOTTOM
            }
        }
        const map = new google.maps.Map(contactsMap, mapOptions); 

        const point = new google.maps.LatLng(56.49385, 84.96274);
        const mapPin = new google.maps.MarkerImage(
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABHCAYAAABoIjt5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQWSURBVHgB7Zo/SBtRGMC/O8+ikERbcFCjlVKljYsgWO3SSltdSoeig13qVHAolXYpuOhSKEjpn00o2KVdbAviJAUdtTSQKS1W2qgxGTLU/AGVRq/ve+FJcl4uDVxezPn94LjkvXcvye++fO/L5RQokvOtrTo4nI3NTQVKgAqENEi2REi2REi2REi2REi2REi2REi2REi2REi2REi2REi2REi2REi2REi2REi2REi2REi2RKqgSOrr6iat+gcGBmBsbAwSiQSEw2HTMdPT09Db2wv7+/vg9XpzNjwG+8bHx8Hj8fANwfkQbB8aGoLFxcWjuXw+H3+MY2OxmOn7EMetrKzw17UiHo9PQQmwPbLxgw8ND3Nx+cD+gcFB/sGNG4LH4hhEtAmheCJEn5irt6+PjwsGg1woHm98H+I4cfLKgQYVgPiGoLBCzM3N8ag+iVRUzhappBAY5b7OTjhplC2y8eucHakoEtOAFdjvbWmBQuBciXgcThplk41CRD4uBfkW53JScaVfeGsLKhWqsyVCsiVS9D1the71Ez9O+CJlqB5Em1gYzfIqtok5cEE0zoH1My6uIt/jXGaLq3EO43FWlOpeP9tlOwG6sdIBkGyJkGyJkGyJkGyJVMRVP8HbhjMghYaLtldcN/3rCkW2REi2REi2RCoqZ5cSze2GmsZm/ji19gNKgeMju6apGXrez8O1JT8Xmo1v8jnc+PYT6rt7oNpdxyUfpFJwdX6Ji9fcHrb38u1s9xU+tv3JxFEbbsXgeNnVrjrY+jDLxTXevms6ppZJ241kLorhXlEyJyKdTMBeNMy33WimP7ttL1rcHxSOl43RHFv+wiQloeH6LdMxu9Ht3OeR7aOUYieOlu3quAzJtSCPxsjCR54KXB2Xjo07SOZexnV3+FjUboPdOFp2bZM3k3dZ3t7xf+VtZtH9N0v2hQcP+cn5PvkU7MbR1QjPr5FMhOL+j38VWkdG4ffMm5xxtexk4JX99scTcI5F/+q9OxTZxeBmKQTlZoO5GyO9ngnNBnM0noz1F88ArePiWAocKxulGokufOILJaYKM7AS+TXzmuf2lpH7YDcV9beYHReiRG2MZRueEM3lOVbCZY8xtqdTCZ6eigUvRJ26X5DZAlGambh89XOxdbURujYiEZItEbqVwQS6lcEBkGyJkGyJkGyCIAiCIMoL/6X0uaut3qNqj9jTUV3R20DXQwoos+ph+lV/ILQDhC0oKNpVpS0x610m/YGqg3Q/CbcHFSM6j2ikK61q40DYgqqz1GE1QAHd/r8sTikqYI62QlGs+4n/RgUdNqwGsMgOAWELLI3ArNWAQ0V5B4QtqNph+iXbB0x7FQhoLt5P2ICKZR2Wd7oCU6y2DvFWllrweZWLlX3LVPbZxT97bZuWEDy9awAAAABJRU5ErkJggg==",
            new google.maps.Size(91, 71), //size
            new google.maps.Point(0, 0),  //origin point
            new google.maps.Point(0, 71)  //offset point
        );
        new google.maps.Marker({
            position: point,
            map: map,
            icon: mapPin,
            title: "TAGREE digital"
        });
    }

    const jsSelectric = $('select').selectric();
    if (jsSelectric.length) {
      jsSelectric.selectric({
        nativeOnMobile: false
      });
    }

    const mobileMask = $('.js-mobileMask');
    if (mobileMask.length) {
      mobileMask.mask('+7 (000) 000 00 00', { placeholder: "+7 (___) ___ __ __" });
    }

    const dateField = $('.js-dateField');
    if (dateField.length) {
      const pickerInit = function (pick) {
        const dateInput = pick.find(".js-dateInput");
        const dateDay = pick.find(".js-dateDay");
        const dateMonth = pick.find(".js-dateMonth");
        const dateYear = pick.find(".js-dateYear");
        const dateConfig = {
          autoClose: true,
          minDate: new Date(),
          navTitles: {
            days: "MMMM <i>yyyy</i>"
          },
          onSelect: function ({ date }) {
            dateDay.val(date ? ("0" + date.getDate()).slice(-2) : "");
            dateMonth.val(date ? ("0" + (date.getMonth() + 1)).slice(-2) : "");
            dateYear.val(date ? date.getFullYear() : "");
          }
        };
        new AirDatepicker(dateInput[0], dateConfig);
      };
      $.each(dateField, function (i) {
        pickerInit($(this));
      });
    }

    const eventForm = $('#js-eventForm');
    if (eventForm.length) {
      eventForm.validate({
        errorElement: "span"
      });
    }

    const subscribeForm = $("#js-subscribeForm");
    if (subscribeForm.length) {
      const subscribeAction = subscribeForm.attr("action");
      const subscribeEmail = subscribeForm.find("#js-subscribeEmail");
      subscribeForm.validate({
        errorElement: "span",
        submitHandler: function (form, event) {
          event.preventDefault();
          $.ajax({
            url: subscribeAction,
            method: "POST",
            data: {
              email: subscribeEmail.val()
            },
            success: function () {
              subscribeEmail.val("");
              subscribeEmail.blur();
              alert("Вы успешно подписались на рассылку новостей");
            },
            error: function () {
              alert("Что-то пошло не так, попробуйте еще раз");
            }
          });
        }
      });
    }
})();