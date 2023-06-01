const iconManager = () => {
  const myIcons = {
    day: './assets/day.png',
    night: './assets/night.png',
  }

  const daytime = document.getElementById('daytime');

  function setDaytime(time) {
    if(time === 1) {
      daytime.src = myIcons.day;
    } else {
      daytime.src = myIcons.night;
    }
  }

  return { myIcons, setDaytime }
}

export default iconManager;