if (window.matchMedia("(min-width: 768px)").matches) {
    document.getElementById("myNavBar").innerHTML = '<ul class="nav navbar-nav navbar-right"><li><a href="#about">About</a></li><li><a href="#services">Services</a></li><li><a href="#portfolio">Portfolio</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#contact">Contact</a></li></ul>';
}

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(document).scrollTop() > 150) {
			$("nav").addClass("navbar-opaque");
		} else {
			$("nav").removeClass("navbar-opaque")
		}
	})
});

//SMOOTH SCROLLING
$(document).ready(function() {
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
		event.preventDefault;
		var hash = this.hash;
		
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900, function(){
			window.location.hash = hash;
		});
	});
});

//SLIDE IN ANIMATION
$(window).scroll(function() {
	$(".slideanim").each(function(){
		var pos = $(this).offset().top;
		
		var winTop = $(window).scrollTop();
		if(pos < winTop + 600) {
			$(this).addClass("slide");
		}
	});
});


//GOOGLE MAP
function initializeMap() {
	var myCenter = new google.maps.LatLng(-33.949185, 18.686489);
var styles =[
    {
      stylers: [
        { hue: "#f4511e" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "on" }
      ]
    }
];

// Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 15,
    center: myCenter,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  
  var marker=new google.maps.Marker({
  position:myCenter,
  });

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initializeMap);