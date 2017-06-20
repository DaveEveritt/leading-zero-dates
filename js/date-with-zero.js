{
  'use strict';
  const d = new Date();
  
  zeroPrefix = function (needZero) {
    return (needZero < 10) ? `0${needZero}` : needZero;
  };
  
  const now = {
    day: zeroPrefix(d.getDate()),
    month: zeroPrefix(d.getMonth()+1),
    year: d.getFullYear()
  }

  document.getElementById("date").innerHTML=`${now.day}/${now.month}/${now.year}`;
}
