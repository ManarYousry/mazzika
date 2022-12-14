$(function () {

    //aos.init() function used to run animation on element when scroll
    AOS.init();
    $('.kk').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,

            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    })



    $(this).scroll(function () {
        if ($("body").scrollTop() > 100 || $("*").scrollTop() > 100) {
            $("#gotoTop").css("display", "block")


        } else {
            $("#gotoTop").css("display", "none")

        }
    });

    // When the user clicks on the button, scroll to the top of the document
    $("#gotoTop").click(function () {

        $("body").animate({  // For Safari
            scrollTop: "0"
        }, 1000)
        $("*").animate({    // For Chrome, Firefox, IE and Opera
            scrollTop: "0"
        }, 1000)
    });





    

    $("a[data-track] , button[data-track]").on("click", function () {
        var track = $(this).attr("data-track");
        $("#audio source").attr("src", track);
       handleTracks(track);

    })
     

})

var tracksList = new Array(); 
function handleTracks(elem)
{
var aud=$("audio");
aud.src=elem;
var audio = new Audio(elem);
audio = aud;
audio.onchange= handleChange(audio);
}

function handleChange(aud)
{
   var audElement = document.getElementById('audio');
   audElement.src = aud.src;
}

