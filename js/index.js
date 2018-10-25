//图片轮播
function task(){
    var show=document.querySelector('#banner>img.show')
    show.className='';
    if(show.nextElementSibling!==null)
    show.nextElementSibling.className='show';
    else
    show.parentElement.children[0].className='show'
  }
  var timer=setInterval(task,3000);
  banner.onmouseover=function(){
    clearInterval(timer)
  }
  banner.onmouseout=function(){
    timer=setInterval(task,3000)
  }

//下拉菜单
  var divs=document.querySelectorAll('div.cts ul li div')
  for(var div of divs){
    div.style.display='none'
  }
  var lis=document.querySelectorAll('div.cts>ul>li');
  for(var li of lis){
    li.onmouseenter=function(){
      this.children[1].style.display='block'
    }
    li.onmouseleave=function(){
      this.children[1].style.display='none'
    }
  }
  //六个div鼠标悬停阴影
  var as=document.querySelectorAll('.container>a')
  for(var a of as){
    a.onmouseenter=function(){
      this.children[1].style.display='block'
    }
    a.onmouseleave=function(){
      this.children[1].style.display='none'
    }
  }

  //定位框
  window.onscroll=function(){
    var scrollTop=document.documentElement.scrollTop
    
    var img=document.querySelector('div.qq')
   
    switch(true){
      case scrollTop==0:img.style.bottom='-328px';
      break;
      case scrollTop>0&&scrollTop<=300:img.style.bottom='-228px';
      break;
      case scrollTop>300&&scrollTop<=600:img.style.bottom='-115px';
      break;
      case scrollTop>600&&scrollTop<=900:img.style.bottom='0';
      break;
      default:img.style.bottom='300px';
     
    }
    
  }

  //谈话框
  function task(){
    var div=document.getElementsByClassName('take')[0]
    div.style.bottom=0
  }
  var timer=setInterval(task,5000);
  