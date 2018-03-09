var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});

var grayscale2   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});
var grayscale3   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr});

var map = L.map('map',{
  center: [3.84233, -74.55322],
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

// var controlvere = {
//   "<span id='capa1'>Capa 1</span>": col,
//   "Capa 2": ara,
//   "Capa 3": boja,
//   "Capa 4": cata,
//   "Capa 5": catatum,
//   "Capa 6": caque, 
//   "Capa 8": montes,
//   "Capa 9": sierra,
//   "Capa 10": surde,
//   "Capa 11": uraba,
//   "Capa 12": surTolima,
//   "Capa 13": surCordoba,
//   "Capa 14": putuMayo,
//   "Capa 15": paciFrontNa,
//   "Capa 16": pacficoMed
// };

// var update = document.getElementById('capa1');

// update.addEventListener("change", loco);

// function loco(){
//   alert("prueba");
// };

// var layerControl = L.control.layers(controlPunt, controlvere);


// layerControl._map = map;
// var controlDiv = layerControl.onAdd(map);

// document.getElementById('controles').appendChild(controlDiv);

// $("#controles").append(layerControl);

//================================= MAPA 2 ==================================//

var mapD = L.map('mapd',{
  center: [10.202502, -74.879413],
  zoom: 8,
  scrollWheelZoom: false,
  minZooom: 4,
  maxZoom: 10,
  zoomControl: true,
  layers: [grayscale2]
 });

var mapF = L.map('mapf',{
  center: [2.663283, -76.543841],
  zoom: 8,
  scrollWheelZoom: false,
  minZooom: 4,
  maxZoom: 10,
  zoomControl: true,
  layers: [grayscale3]
 });

function puntosD ( feature, layer, polygon){
  var contenido = '<h2>' + feature.properties.MUNICIPIO + '</h2><p><strong>Calidad: </strong><span class="' + feature.properties.CALICAL + '">' + feature.properties.CALIDAD + '</span></p><p><strong>Eficacia: </strong><span class="' + feature.properties.CALIEFI + '">' + feature.properties.EFICACIA + '</p>';


 layer.on('click',  function(e) {
  var latlng = L.latLng(50.5, 30.5);
    $(".ventana").removeClass("ventana-open");
      $("#" + feature.properties.class).addClass("ventana-open"); 
      $("#" + feature.properties.class).empty().append(contenido);
      mapD.fitBounds(e.target.getBounds(),7);
});
};

function puntosF ( feature, layer, polygon){
  var contenido = '<h2>' + feature.properties.MUNICIPIO + '</h2><p><strong>Calidad: </strong><span class="' + feature.properties.CALICAL + '">' + feature.properties.CALIDAD + '</span></p><p><strong>Eficacia: </strong><span class="' + feature.properties.CALIEFI + '">' + feature.properties.EFICACIA + '</p>';


 layer.on('click',  function(e) {
  var latlng = L.latLng(50.5, 30.5);
    $(".ventana").removeClass("ventana-open");
      $("#" + feature.properties.class).addClass("ventana-open"); 
      $("#" + feature.properties.class).empty().append(contenido);
      mapF.fitBounds(e.target.getBounds(),7);
});
};

 /*=============================================*/

var myStyleD01 = {
    fillColor: "#ff7800",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};

var AsambleaSus = L.geoJson(asambleaSus, {
  onEachFeature: puntosD,
  style: myStyleD01
});
AsambleaSus.addTo(mapF);

 /*=============================================*/

var myStyleD02 = {
    fillColor: "#ff7800",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};

var AudienciasPub = L.geoJson(audienciasPub, {
  onEachFeature: puntosD,
  style: myStyleD02
});
AudienciasPub.addTo(mapD);

 /*=============================================*/

var myStyleD02 = {
    fillColor: "#ff7800",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};

var Cdmr = L.geoJson(cdmr, {
  onEachFeature: puntosF,
  style: myStyleD02
});
Cdmr.addTo(mapF);

 /*=============================================*/

var myStyleD04 = {
    fillColor: "#ff7800",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};

var Ctjt = L.geoJson(ctjt, {
  onEachFeature: puntosF,
  style: myStyleD04
});

Ctjt.addTo(mapF);

 /*=============================================*/

var myStyleD05 = {
    fillColor: "#ff7800",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};

var CtPaz = L.geoJson(ctPaz, {
  onEachFeature: puntosF,
  style: myStyleD05
});
CtPaz.addTo(mapF);


 /*=============================================*/

var myStyleD06 = {
    fillColor: "#ff7800",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};

var Mic = L.geoJson(mic, {
  onEachFeature: puntosD,
  style: myStyleD06
});
Mic.addTo(mapD);

 /*=============================================*/

var myStyleD07 = {
    fillColor: "#ff7800",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};
var PisccF = L.geoJson(piscc, {
  onEachFeature: puntosF,
  style: myStyleD07
});
PisccF.addTo(mapF);

 /*=============================================*/

var myStyleD08 = {
    fillColor: "#f00",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};

var RendicionCuentas = L.geoJson(rendicionCuentas, {
  onEachFeature: puntosD,
  style: myStyleD08
});

var RendicionCuentasF = L.geoJson(rendicionCuentas, {
  onEachFeature: puntosF,
  style: myStyleD08
});
RendicionCuentas.addTo(mapD);
RendicionCuentasF.addTo(mapF);

 /*=============================================*/

var myStyleD09 = {
    fillColor: "#ff7800",
    color: "#666",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6
};

var CtjtA = L.geoJson(ctjtArri, {
  onEachFeature: puntosD,
  style: myStyleD09
});

CtjtA.addTo(mapD);

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
PisccF.addTo(mapF);
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
Mic.addTo(mapD);
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
Ctjt.addTo(mapF);
CtjtA.addTo(mapD);
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
AudienciasPub.addTo(mapD);
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
CtPaz.addTo(mapF);
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
RendicionCuentasF.addTo(mapF);
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
Cdmr.addTo(mapF);
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
AsambleaSus.addTo(mapF);	
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
AsambleaSus.addTo(mapF);	
//AsambleaSus.remove();
AudienciasPub.addTo(mapD);
Ctjt.addTo(mapF);
CtjtA.addTo(mapD);
Cdmr.addTo(mapF);
CtPaz.addTo(mapF);
PisccF.addTo(mapF);
Mic.addTo(mapD);
RendicionCuentas.addTo(mapF);
RendicionCuentasF.addTo(mapF);
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