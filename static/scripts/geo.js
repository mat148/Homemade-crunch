let nyList = ['Albany', 'Amsterdam', 'Auburn', 'Batavia', 'Beacon', 'Binghamton', 'Buffalo', 'Canandaigua', 'Cohoes', 'Corning', 'Cortland', 'Dunkirk', 'Elmira', 'Fulton', 'Geneva', 'Glen Cove', 'Glens Falls', 'Gloversville', 'Hornell', 'Hudson', 'Ithaca', 'Jamestown', 'Johnstown', 'Kingston', 'Lackawanna', 'Little Falls', 'Lockport', 'Long Beach', 'Mechanicville', 'Middletown', 'Mount Vernon', 'New Rochelle', 'New York', 'Newburgh', 'Niagara Falls', 'North Tonawanda', 'Norwich', 'Ogdensburg', 'Olean', 'Oneida', 'Oneonta', 'Oswego', 'Peekskill', 'Plattsburgh', 'Port Jervis', 'Poughkeepsie', 'Rensselaer', 'Rochester', 'Rome', 'Rye', 'Salamanca', 'Saratoga Springs', 'Schenectady', 'Sherrill', 'Syracuse', 'Tonawanda', 'Troy', 'Utica', 'Watertown', 'Watervliet', 'White Plains', 'Yonkers'];
var application;
var banner;

document.addEventListener('DOMContentLoaded', function(event) {
  var locationCookie = getCookie('location-cookie');
  application = document.getElementsByClassName('v-application');
  banner = document.getElementsByClassName('v-banner');

  if(!locationCookie) {
    console.log('no cookie');

    setCookie('location-cookie','true',7);
    async function fetchGeoLocation() {
      const response = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=1eef312cdda9428cac26815c9d3bdd26');
      const geoData = await response.json();
      return geoData;
    }

    fetchGeoLocation().then(geoData => {
      compareCity(geoData.city);
    });

  } else {
    console.log('yes cookie');
    application[0].classList.add('alert-open');
    banner[0].classList.add('alert-open');
  }
});

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function compareCity(city) {
  var i;
  for(i = 0; i < nyList.length; i++) {
    if(nyList[i].toLowerCase().replace(/\s/g, '') == city.toLowerCase().replace(/\s/g, '')) {
      console.log(city);

      application[0].classList.add('alert-open');
      banner[0].classList.add('alert-open');
    }
  }
}
