const iconManager = () => {
  const myIcons = {
    day: './assets/day.png',
    night: './assets/night.png',
    north: './assets/N.png',
    northEast: './assets/NE.png',
    east: './assets/E.png',
    southEast: './assets/SE.png',
    south: './assets/S.png',
    southWest: './assets/SW.png',
    west: './assets/W.png',
    northWest: './assets/NW.png'
  }

  const daytime = document.getElementById('daytime');
  const windDirection = document.getElementById('wind-direction');

  function setDaytime(time) {
    if(time === 1) {
      daytime.src = myIcons.day;
    } else {
      daytime.src = myIcons.night;
    }
  }

  function setWindDirection(direction) {
    switch(direction) {
      case 'N' :
        windDirection.src = myIcons.north;
        break;
      case 'NNE':
        windDirection.src = myIcons.north;
        break;
      case 'NE':
        windDirection.src = myIcons.northEast;
        break;
      case 'ENE':
        windDirection.src = myIcons.northEast;
        break;
      case 'E':
        windDirection.src = myIcons.east;
        break;
      case 'ESE':
        windDirection.src = myIcons.east;
        break;
      case 'SE':
        windDirection.src = myIcons.southEast;
        break;
      case 'SSE':
        windDirection.src = myIcons.southEast;
        break;
      case 'S':
        windDirection.src = myIcons.south;
        break;
      case 'SSW':
        windDirection.src = myIcons.south;
        break;
      case 'SW':
        windDirection.src = myIcons.southWest;
        break;
      case 'WSW':
        windDirection.src = myIcons.southWest;
        break;
      case 'W':
        windDirection.src = myIcons.west;
        break;
      case 'WNW':
        windDirection.src = myIcons.west;
        break;
      case 'NW':
        windDirection.src = myIcons.northWest;
        break;
      case 'NNW':
        windDirection.src = myIcons.northWest;
        break;
      default:
        windDirection.src = '';
        break;
    }
  }

  return { myIcons, setDaytime, setWindDirection }
}

export default iconManager;