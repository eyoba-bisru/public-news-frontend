function tConvert(hours, minutes) {
  // Check correct time format and split into components
  let AmOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  if (minutes == 0) {
    minutes = "00";
  }
  let finalTime = hours + ":" + minutes + " " + AmOrPm;
  return finalTime;
}

export default tConvert;
