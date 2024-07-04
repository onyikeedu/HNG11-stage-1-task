jQuery(document).ready(function ($) {
    "use strict";
    window.onscroll = function(){
        var num = window.pageYOffset;
        $('#timeline').waypoint(function() {
            $(".fill").css("height", num);
        }, {
            offset: '100%'
        });
        if (num >= 160){
          document.querySelector('#scrollTop').classList.add('active');
        }
          else {
            document.querySelector('#scrollTop').classList.remove('active');
        }
    }  
});

//Time and Day

//Time
function updateTime() {
    const now = new Date();
    const utcString = now.toISOString();
    const currentTimeString = utcString.slice(11, 19);
    
    document.getElementById('currentTime').textContent = currentTimeString;
}
updateTime();
setInterval(updateTime, 1000);

//Day
function updateDayOfWeek() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()]; 
    document.getElementById('currentDayOfWeek').textContent = `${dayOfWeek}`;
}
updateDayOfWeek();
