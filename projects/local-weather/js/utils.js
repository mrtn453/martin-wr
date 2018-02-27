function getTime(date) {
  if(metric){
    var hour = date.getHours();
    var minute = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
    return hour + ":" + minute;
  } else {
    var hour = date.getHours();
    var ampm = "AM";
    if(hour >= 12){
      if(hour > 12) hour -= 12;
      ampm = "PM";
    }
    var minute = date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes();
    return hour + ":" + minute + " " + ampm;
  }
}

function FtoC(degree) {return (degree - 32) * 5/9;}

function mphToKmh(val) {return val * 1.609344;}

function typeToIcon(type){
  switch(type){
    case "01d": return "wi-day-sunny"; break;
    case "02d": return "wi-night-cloudy"; break;
    case "03d": return "wi-cloudy"; break;
    case "04d": return "wi-cloudy"; break;
    case "09d": return "wi-day-showers"; break;
    case "10d": return "wi-day-rain"; break;
    case "11d": return "wi-thunderstorm"; break;
    case "13d": return "wi-snow"; break;
    case "50d": return "wi-fog"; break;
    case "01n": return "wi-night-clear"; break;
    case "02n": return "wi-day-cloudy"; break;
    case "03n": return "wi-cloudy"; break;
    case "04n": return "wi-cloudy"; break;
    case "09n": return "wi-night-showers"; break;
    case "10n": return "wi-night-rain"; break;
    case "11n": return "wi-thunderstorm"; break;
    case "13n": return "wi-snow"; break;
    case "50n": return "wi-fog"; break;
  }
}
