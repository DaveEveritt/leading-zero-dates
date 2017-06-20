{
  'use strict';
  const u = new Date(document.lastModified);
  
  zeroPrefix = function (needZero) {
    return (needZero < 10) ? `0${needZero}` : needZero;
  };
  
  const upd = {
    day: zeroPrefix(u.getDate()),
    month: zeroPrefix(u.getMonth()+1),
    year: u.getFullYear()
  }

  document.getElementById("update").innerHTML=`${upd.day}/${upd.month}/${upd.year}`;
}
