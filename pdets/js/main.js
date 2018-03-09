 /* Efecto del scrolltop*/
 $(document).ready(function(){
  $('a[href^="#"]').click(function(){

    var the_id = $(this).attr("href");

    $('html, body').animate({
      scrollTop:$(the_id).offset().top
    }, 1200);

    return false;});
});
 /* /efecto del scrolltop*/

 /*Efecto scroll logo*/
 $(document).scroll(function() {
  var logo = $(this).scrollTop();
  if (logo > 600) {
    $('.logomenu').fadeIn();
  } else {
    $('.logomenu').fadeOut();
  }
});
 /* /Efecto scroll logo*/
 /* Redes sociales*/
 var list = ['facebook', 'twitter'];
 $(function () {
  $('#compartir').sharrre({
    share: {
      facebook: true,
      twitter: true
    },
    buttons: {
      facebook: {
        popup: {
          width: 700,
          height: 500
        }
      },
      twitter: {}
    },
    url: 'http://ideaspaz.org/',

    enableCounter: false,
    enableHover: false,
    template: function () {
      content = '';
      for (i in list) {
        service = list[i];
        content += '<li><a class="' + service + '"><i class="fa fa-' + service + '"></i></a></li>';

      }
      return content;
    }(),
    render: function (api, options) {
      for (i in list) {
        service = list[i];
        $(api.element).on('click', '.' + service, function () {
          api.openPopup(this.className);
        });
      }
    }
  });
});/* /Redes sociales */
 var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
 '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
 'Imagery © <a href="http://mapbox.com">Mapbox</a>',
 mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

 var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});

 var grayscale2   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});
 var grayscale3   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});

 var map = L.map('mapa1',{
  center: [3.84233, -70.55322],
  zoom: 6,
  scrollWheelZoom: false,
  minZooom: 4,
  maxZoom: 10,
  zoomControl: true,
  layers: [grayscale]
});

 function puntos ( feature, layer){
   layer.bindPopup('<p>' + feature.properties.municipios + '</p>');
   layer.on('click', function(e) {
    var latlng = L.latLng(50.5, 30.5);
      // map.fitBounds(e.target.getBounds(),7);

    });
 };

 var myStyle1 = {
  fillColor: "#009FBF",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var col = L.geoJson(AltoPataNortedelCauca, {
  onEachFeature: puntos,
  style: myStyle1
});
col.addTo(map);

/*=============================================*/

var myStyle2 = {
  fillColor: "#006A7F",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var ara = L.geoJson(arauca, {
  onEachFeature: puntos,
  style: myStyle2
});
ara.addTo(map);

/*=============================================*/

var myStyle3 = {
  fillColor: "#00D4FF",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var boja = L.geoJson(BajoCauca, {
  onEachFeature: puntos,
  style: myStyle3
});
boja.addTo(map);

/*=============================================*/

var myStyle4 = {
  fillColor: "#003540",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var cata = L.geoJson(choc, {
  onEachFeature: puntos,
  style: myStyle4
});
cata.addTo(map);

/*=============================================*/

var myStyle5 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var catatum = L.geoJson(catatumbo, {
  onEachFeature: puntos,
  style: myStyle5
});
catatum.addTo(map);

/*=============================================*/

var myStyle6 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var caque = L.geoJson(CuencadelCagunyPiedemonteCaqueteo, {
  onEachFeature: puntos,
  style: myStyle6
});
caque.addTo(map);

/*=============================================*/

var myStyle8 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var montes = L.geoJson(MontesdeMara, {
  onEachFeature: puntos,
  style: myStyle8
});
montes.addTo(map);

/*=============================================*/

var myStyle9 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var sierra = L.geoJson(SierraNevadaPerij, {
  onEachFeature: puntos,
  style: myStyle9
});
sierra.addTo(map);

/*=============================================*/

var myStyle10 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var surde = L.geoJson(SurdeBolvar, {
  onEachFeature: puntos,
  style: myStyle10
});
surde.addTo(map);

/*=============================================*/

var myStyle11 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var uraba = L.geoJson(UrabAntioqueo, {
  onEachFeature: puntos,
  style: myStyle11
});
uraba.addTo(map);

/*=============================================*/

var myStyle12 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var surTolima = L.geoJson(SurdelTolima, {
  onEachFeature: puntos,
  style: myStyle12
});
surTolima.addTo(map);

/*=============================================*/

var myStyle13 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var surCordoba = L.geoJson(SurdeCrdoba, {
  onEachFeature: puntos,
  style: myStyle13
});
surCordoba.addTo(map);

/*=============================================*/

var myStyle14 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var putuMayo = L.geoJson(putumayo, {
  onEachFeature: puntos,
  style: myStyle14
});
putuMayo.addTo(map);

/*=============================================*/

var myStyle15 = {
  fillColor: "#00BEE5",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var paciFrontNa = L.geoJson(PacficoyFronteraNariense, {
  onEachFeature: puntos,
  style: myStyle15
});
paciFrontNa.addTo(map);


/*=============================================*/

var myStyle16 = {
  fillColor: "#ff7800",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var pacficoMed = L.geoJson(PacficoMedio, {
  onEachFeature: puntos,
  style: myStyle16
});
pacficoMed.addTo(map);

/*=============================================*/

var myStyle17 = {
  fillColor: "#ff7800",
  color: "#666",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var maca = L.geoJson(macarena, {
  onEachFeature: puntos,
  style: myStyle17
});
maca.addTo(map);


var controlPunt = {
  "boja": col,
};


/*=============================================*/

// AsambleaSus
// AudienciasPub *
// Cdmr *
// Ctjt *
// CtPaz *
// Mic *
// PisccF *
// RendicionCuentas *
// CtjtA *

$('#piscc i').click( function(){
  AsambleaSus.remove();
  AudienciasPub.remove();
  Cdmr.remove();
  Ctjt.remove();
  CtPaz.remove();
  PisccF.addTo(map);
  Mic.remove();
  RendicionCuentas.remove();
  RendicionCuentasF.remove();
  CtjtA.remove();
  var dataId = $(this).attr("data-ventana");
  var loco = "." + dataId;
  $(loco).removeClass("hidden");
  $('.ventana-sup').addClass("hidden");
  $(loco).addClass("block");

});

$('#mic i').click( function(){
  AsambleaSus.remove();
  AudienciasPub.remove();
  Cdmr.remove();
  Mic.addTo(map);
  Ctjt.remove();
  CtPaz.remove();
  PisccF.remove();
  RendicionCuentas.remove();
  RendicionCuentasF.remove();
  CtjtA.remove();
  var dataId = $(this).attr("data-ventana");
  var loco = "." + dataId;
  $(loco).removeClass("hidden");
  $('.ventana-sup').removeClass("block");
  $('.ventana-sup').addClass("hidden");
  $(loco).addClass("block");
});

$('#cjt i').click( function(){
  AsambleaSus.remove();
  AudienciasPub.remove();
  Cdmr.remove();
  Ctjt.addTo(map);
  CtjtA.addTo(map);
  CtPaz.remove();
  PisccF.remove();
  Mic.remove();
  RendicionCuentas.remove();
  RendicionCuentasF.remove();
  var dataId = $(this).attr("data-ventana");
  var loco = "." + dataId;
  $(loco).removeClass("hidden");
  $('.ventana-sup').addClass("hidden");
  $(loco).addClass("block");
});


$('#apc i').click( function(){
  AudienciasPub.addTo(map);
  AsambleaSus.remove();
  Cdmr.remove();
  Ctjt.remove();
  CtPaz.remove();
  PisccF.remove();
  Mic.remove();
  RendicionCuentas.remove();
  RendicionCuentasF.remove();
  CtjtA.remove();
  var dataId = $(this).attr("data-ventana");
  var loco = "." + dataId;
  $(loco).removeClass("hidden");
  $('.ventana-sup').addClass("hidden");
  $(loco).addClass("block");
});

$('#ctpaz i').click( function(){
  AsambleaSus.remove();
  AudienciasPub.remove();
  Ctjt.remove();
  Cdmr.remove();
// CtPaz.remove();
CtPaz.addTo(map);
PisccF.remove();
Mic.remove();
RendicionCuentas.remove();
RendicionCuentasF.remove();
CtjtA.remove();
var dataId = $(this).attr("data-ventana");
var loco = "." + dataId;
$(loco).removeClass("hidden");
$('.ventana-sup').addClass("hidden");
$(loco).addClass("block");
});

$('#rdc i').click( function(){
  AsambleaSus.remove();
  AudienciasPub.remove();
  Ctjt.remove();
  Cdmr.remove();
  CtPaz.remove();
  PisccF.remove();
  Mic.remove();
  RendicionCuentas.remove();
// RendicionCuentasF.remove();
RendicionCuentasF.addTo(map);
CtjtA.remove();
var dataId = $(this).attr("data-ventana");
var loco = "." + dataId;
$(loco).removeClass("hidden");
$('.ventana-sup').addClass("hidden");
$(loco).addClass("block");
});

$('#cjt2 i').click( function(){
  AsambleaSus.remove();
  AudienciasPub.remove();
  Ctjt.remove();
  Cdmr.addTo(map);
// Cdmr.remove();
CtPaz.remove();
PisccF.remove();
Mic.remove();
RendicionCuentas.remove();
RendicionCuentasF.remove();
CtjtA.remove();
var dataId = $(this).attr("data-ventana");
var loco = "." + dataId;
$(loco).removeClass("hidden");
$('.ventana-sup').addClass("hidden");
$(loco).addClass("block");
});

$('#rdc2 i').click( function(){
  AsambleaSus.addTo(map);	
//AsambleaSus.remove();
AudienciasPub.remove();
Ctjt.remove();
Cdmr.remove();
CtPaz.remove();
PisccF.remove();
Mic.remove();
RendicionCuentas.remove();
RendicionCuentasF.remove();
CtjtA.remove();
var dataId = $(this).attr("data-ventana");
var loco = "." + dataId;
$(loco).removeClass("hidden");
$('.ventana-sup').addClass("hidden");
$(loco).addClass("block");
});


$('#todos i').click( function(){
  AsambleaSus.addTo(map);	
//AsambleaSus.remove();
AudienciasPub.addTo(map);
Ctjt.addTo(map);
CtjtA.addTo(map);
Cdmr.addTo(map);
CtPaz.addTo(map);
PisccF.addTo(map);
Mic.addTo(map);
RendicionCuentas.addTo(map);
RendicionCuentasF.addTo(map);
var dataId = $(this).attr("data-ventana");
var loco = "." + dataId;
$('.ventana-sup').removeClass("block");
$('.ventana-sup').addClass("hidden");
$(".botonera").removeClass("top");
$("span").removeClass("inline");
$("span i.labeld").addClass("hidden");
$("span i.labeld").removeClass("block");
$("span i.desple").addClass("block");

});

$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 2000);
      return false;
    }
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.navbar').addClass("navbar-fixed");
  } else {
    $('.navbar').removeClass("navbar-fixed");
  };

});

$('.botonera .desple').click( function(){
	$(".botonera").addClass("top");
	$("span").addClass("inline");
  $("span i.desple").removeClass("block");
  $("span i.labeld").addClass("block");
  $("span i.desple").addClass("hidden");

})

$(".ventana").click( function(){
  $(this).removeClass("ventana-open");
  $(".contet-ventana").removeClass("block");
})