{
  'use strict';
  const d = new Date();
  
  zeroPrefix = function (needZero) {
    return (needZero < 10) ? `0${needZero}` : needZero;
  };
  
  const now = {
    day: function() {
      const day = d.getDate();
      return zeroPrefix(day);
    },
    month: function() {
      const month = d.getMonth()+1;
      return zeroPrefix(month);
    },
    year: d.getFullYear()
  }

  document.getElementById("date").innerHTML=`${now.day()}/${now.month()}/${now.year}`;
}
