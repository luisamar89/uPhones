mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}


/*-----------------------*/


function initMap() {

 // Map option
  var options = {
    center: {lat: 38.693340 , lng: -9.351400},
    zoom: 12
  }

  map = new google.maps.Map(document.getElementById("map"),options)

}

//Marker

const marker = new google.maps.Marker({
  position:{lat: 38.69105, lng: -9.32215},
  map:map
});


/*----------*/