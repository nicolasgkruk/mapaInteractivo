streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView
  var posicionCentral = {
    lat: -34.592868, 
    lng: -58.4199791
  }

  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
    mapa = new google.maps.Map(document.getElementById('map'), {
      center: {lat: posicionCentral.lat, lng: posicionCentral.lng},
      zoom: 15
    });
    
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
