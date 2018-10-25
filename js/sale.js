function task(){
    var end=new Date("2018/12/31 24:00:00");
    var now=new Date();
    var s=parseInt((end-now)/1000);
    if(s>0){
    var d=parseInt(s/3600/24);
    if(d<10) d="0"+d;
    //s/3600/24,再下取整
    var h=parseInt(s%(3600*24)/3600);
    if(h<10) h="0"+h;
    //s/(3600*24)的余数,再/3600,再下去整
    var m=parseInt(s%3600/60);
    if(m<10) m="0"+m;
    //s/3600的余数,再/60，再下取整
    s%=60;//s/60的余数
    if(s<10) s="0"+s;
    //距离下一个假期还有: ?天?小时?分?秒
    var h1=document.querySelector('div.main>div.img .time h1');
    
    h1.innerHTML='距离年底活动还有:'+d+"天"+h+"小时"+m+"分"+s+"秒";
    }else{
      clearInterval(timer);  //到点自动停止
      var h1=document.querySelector('div.main>div.img .time h1');
      h1.innerHTML='活动结束！！！'
    }
  }
    task(); //填补第一秒空白
    var timer=setInterval(task,1000);


  
  