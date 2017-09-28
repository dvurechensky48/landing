window.onload = function() {
    timer();
    auto_height();
}

window.onresize = function() {
    auto_height();
}

/// SCROLL
function Go_to_form(){
  var V = 0.15;
  var form = document.getElementById('form');
  var w = window.pageYOffset,
        t = form.getBoundingClientRect().top - 100,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step)} 
    }

    
    return false;
  } 

  document.getElementById('but1').onclick = function() {
    Go_to_form();
  };
  document.getElementById('but2').onclick = function() {
    Go_to_form();
  };
   document.getElementById('but3').onclick = function() {
    Go_to_form();
  };


  ///TIMER

/*  <div>
<span>Осталось:&nbsp;</span><span class="afss_day_bv">0</span> д.
<span class="afss_hours_bv">00</span>&nbsp;час.&nbsp;
<span class="afss_mins_bv">00</span>&nbsp;мин.&nbsp;
<span class="afss_secs_bv">00&nbsp;</span>&nbsp;сек.
</div>
 */
 function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2017,9,26,11,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var d = document.getElementById('day');
    var h = document.getElementById('hour');
    var m = document.getElementById('min');
    var s = document.getElementById('sec');
    d.innerHTML = days;
   	h.innerHTML = hours;
   	m.innerHTML = minutes;
   	s.innerHTML = seconds;
    setTimeout(timer, 1000);
}

// AUTO HEIGHT

function auto_height()
{
	var content = document.getElementsByClassName('content');
	var content_clock = document.getElementsByClassName('content_clock');
	console.log(content_clock);
	for(i=0;i<content.length;i++)
	{
		height = content[i].clientHeight;
		content_clock[i].style.marginTop = height / 2 - content_clock[i].clientHeight + 'px';
		console.log('Сработало');
	}
}


