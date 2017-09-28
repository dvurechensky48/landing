
window.onload = function autoHeight()
{
	var bodyElem = document.querySelectorAll('body > .selection');
	var screenH = window.screen.height;
  var screenW = window.innerWidth;
  console.log(screenH);
	var container = document.getElementsByClassName('autoPos');
  window.scrollTo(0, 0);
  if(screenW <= 768)
  {
    for(i=0;i<bodyElem.length;i++)
    {
      bodyElem[i].style.height = container.clientHeight + 'px';
    }
     document.body.style.display = 'block';
  }
  else if(screenW > 768)
  {
    for(i=0;i<bodyElem.length;i++)
    {
      bodyElem[i].style.height = screenH + 'px';
      
    }
    
  
    document.documentElement.style.overflow = 'hidden'; 
    document.body.style.display = 'block';
    console.log(container.length);
    for(i=0;i<container.length;i++)
    {
      var conH = container[i].clientHeight;
      container[i].style.position = 'relative';
      container[i].style.top = 50 + '%';
      container[i].style.marginTop = - conH / 2 + 'px';
      console.log(container[i].clientHeight);
    }
  }

  



	setTimeout(oneList, 200);

 
}

function chekIn()
{
  var elem = document.getElementsByClassName("inLeft");
  var status = document.getElementById('nav-toggle').checked;
  if(status == true)
  {
    for(i=0;i<elem.length;i++)
    {
      elem[i].style.transform= 'translateX(0px)';
    }
    
  }
  else
  {
    for(i=0;i<elem.length;i++)
    {
      elem[i].style.transform= 'translateX(320px)';
    }
  }
}

function wheelOn(where)
{
	var bodyElem = document.querySelectorAll('body > .selection');
	var wheelTop = window.pageYOffset;
	var postion = 0;
	for(i=0;i<bodyElem.length;i++)
	{
		postion = postion + bodyElem[i].clientHeight;
		wheelTopFor = wheelTop + bodyElem[i].clientHeight;

		if(wheelTopFor == postion)
		{
      // && i > 0 && i < bodyElem.length - 1
			if(where == 'Up' && i > 0)
			{
				var elem = bodyElem[i - 1];
				var obl = i -1;
        go(elem, 0.75,obl);
        return obl;

				
			}
			else if(where == 'Down' && i < bodyElem.length - 1)
			{
				var elem = bodyElem[i + 1];
				var obl = i + 1;
        go(elem, 0.75,obl);
				return obl;
			}
			else
			{
				console.log('Ошибка');
				var obl = undefined;
				return obl;

			}
			
		}
    else
    {
      var obl = undefined;

    }
		

	}
}


function go(elem, V, obl){
	var w = window.pageYOffset,
        t = elem.getBoundingClientRect().top,
        start = null;
        requestAnimationFrame(step);
        
    function step(time) {
      if (start === null) start = time;
     var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step);} 
      else{colorMenu(obl);}
    }
 
  }

  function go_menu(obl, V){
  amount_page(obl);
  var bodyElem = document.querySelectorAll('body > .selection');
  var w = window.pageYOffset,
        t = bodyElem[obl].getBoundingClientRect().top,
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

/*
   if (user.browser.family === 'Firefox') {  
    addEventListener("MozMousePixelScroll", function onWheel(event);)
   }
*/


  function onWheel(event){
    var delta = 0;
    if (!event) event = window.event; // Событие IE.
    // Установим кроссбраузерную delta
    if (event.wheelDelta) { 
        // IE, Opera, safari, chrome - кратность дельта равна 120
        delta = event.wheelDelta/120;
        console.log(event.wheelDelta);
    } else{ 
        // Mozilla, кратность дельта равна 3
        delta = -event.detail/3;
    }
    if (delta) {
        // Отменим текущее событие - событие поумолчанию (скролинг окна).
        if (event.preventDefault) {
            event.preventDefault();
        }
        event.returnValue = false; // для IE
        
        // если дельта больше 0, то колесо крутят вверх, иначе вниз
        var dir = delta > 0 ? 'Up' : 'Down';
       
    }
   
   
    if (window.innerWidth > 900)
    {
        var obl = wheelOn(dir);
        amount_page(obl);
      
    }
   	else 
    {
      document.body.style.overflow = 'visible';
    }
   	
    
    
};

if ('onwheel' in document)
  {
    // IE9+, FF17+, Ch31+
    addEventListener("wheel", onWheel);

  } 

 addEventListener("MozMousePixelScroll", onWheel);



  

  function obl(e) {
  	var bodyElem = document.querySelectorAll('body > .selection');
	var wheelTop = window.pageYOffset;
	for(i=0;i<bodyElem.length;i++)
	{
		if(wheelTop < bodyElem[i].getBoundingClientRect().bottom - 1 && wheelTop +  bodyElem[i].clientHeight > bodyElem[i].getBoundingClientRect().top)
		{
			document.title = i;
		}
	}
  };

  function oneList()
  {
  	var L_top = document.getElementById('L_top');
	var L_right = document.getElementById('L_right');
	var L_bottom = document.getElementById('L_bottom');
	var L_left = document.getElementById('L_left');

	L_top.style.left = 0 ;
	L_right.style.top = 0;
	L_bottom.style.right = 0;
	L_left.style.bottom = 0;
  }

  function colorMenu(obl)
  {
    var navCoin = document.getElementById('navCoinId');
    var nav = document.getElementById('nav');
    var obl_res = undefined;

   if(obl == 0)
  	{
  		color = '1px solid rgba(0,0,0,0.01)';
      nav.style.borderBottom = color;
      navCoinId.innerHTML="";
  	}
  	else if(obl == 1)
  	{
  		color = '1px solid white';
      nav.style.borderBottom = color;
      obl_res = writeTextByJS('Цены на наши услуги');

    }
  	else if(obl == 2)
  	{
  		color = '3px solid white';
      nav.style.borderBottom = color;
      writeTextByJS('Как мы работаем');
  	}
  	else if(obl == 3)
  	{
  		color = '1px solid white';
      nav.style.borderBottom = color;
      writeTextByJS('Наши последние работы');
  	}
    else if(obl == 4)
    {
      color = '1px solid white';
      nav.style.borderBottom = color;
      writeTextByJS('Обратная связь');
    }
  	else if(obl == undefined)
  	{
      return;
  	}
  	
  }

  function BackStyle2(x)
  {
    var style2 = document.getElementsByClassName('style2')[0];
    style2.style.backgroundPositionX = x*1/100 + 'px';

  }

function shake_on(x){
  bb = document.getElementsByClassName('bb');
  bb[x].classList.add("shake");
}
function shake_off(){
  bb = document.getElementsByClassName('bb');
  for(i=0;i<bb.length;i++){
    bb[i].classList.remove("shake");
  }
}


 function amount_page(obl)
 {
   if(obl == undefined)
    {
      return;
    }
  
  var bodyElem = document.querySelectorAll('body > .selection');
  var amount = document.querySelector('#amount > ul');
  amount.innerHTML = "";
 
     for(i=0;i<bodyElem.length;i++)
    {

      if(i == obl)
      {
        amount.innerHTML += '<li class="active"></li>';
      }
      else
      {
        amount.innerHTML += '<li onclick="go_menu('+i+', 0.25);"></li>';
      }
      
    }
    
 
 } 

function writeTextByJS(text){

  var innerElem = document.getElementById('navCoinId');
  var classElem = document.querySelector('#navCoin > h2');
  

   classElem.classList.add('bounceInLeft');
   innerElem.innerHTML = text;
   
  setTimeout(function(){
     classElem.classList.remove('bounceInLeft');
  },200);

  
 
  
     
 
}
  