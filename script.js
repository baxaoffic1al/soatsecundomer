function updateClock() {
  var now = new Date();
  var dname = now.getDay();
  var dnum = now.getDate();
  var yr = now.getFullYear();
  var mo = now.getMonth();
  var hou = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var milisec = now.getMilliseconds();
  var pe = "AM"


  if(hou == 0 ) {
    hou = 12;
  }
  if(hou > 12 ) {
    hou = hou - 12;
    pe = "PM"
  }

  Number.prototype.pad = function(digits) {
    for(var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  }


  var months = ["Yanvar" , "Fevral" , "Mart", "Aprel" , "May" , "Iyun" , "Iyul" , "Avgust" , "Sentabr" , "Oktabr", "Noyabr" , "Dekabr"];
  var week  = ["Yakshanba","Dushanba", "Seshanba" , "Chorshanba" , "Payshanba", "Juma", "Shanba"];
  var ids = ["dayname","month","daynum","year","hour","minutes","seconds","milisec","period"];
  var values = [week[dname],months[mo],dnum.pad(2),yr,hou.pad(2),min.pad(2),sec.pad(2),milisec.pad(2),pe];


  for (var i = 0; i < ids.length; i++)
  document.getElementById(ids[i]).firstChild.nodeValue = values[i];

}


function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1)
}




// secundomer 
// secundomer 


const secundomerSec = document.querySelector('.secundomer__seconds')
const secundomerMin = document.querySelector('.secundomer__minutes')
const secundomerHour = document.querySelector('.secundomer__hours')
const secundomerBtn = document.querySelector('.secundomer__btn')


secundomerBtn.addEventListener('click' , function() {
  if (this.innerHTML.toLowerCase() == `start`) {
    secundomerBtn.innerHTML = `stop`
    interval = setInterval(() => {
      secundomer()
    },1000)
  }else if(this.innerHTML.toLowerCase() == `stop`){
    secundomerBtn.innerHTML = `clear`
    clearInterval(interval)
  }else if(this.innerHTML.toLowerCase() == `clear`){
    secundomerBtn.innerHTML = `start`
    secundomerSec.innerHTML = 0
    secundomerMin.innerHTML = 0
    secundomerHour.innerHTML = 0
    sanoq = 0
  } 
})


 let sanoq = 0

function secundomer(){
  sanoq++
  if(sanoq <= 59){
    secundomerSec.innerHTML = sanoq
  }
  if (sanoq > 59) {
    sanoq = 0
    secundomerMin.innerHTML++
  }
  if (secundomerMin.innerHTML > 59 ) {
    secundomerMin.innerHTML = 0
    secundomerHour.innerHTML++
  }
}






