var index=0;
var arrimg=['./imgs/img.png','./imgs/img1.png','./imgs/img2.png','./imgs/img3.png','./imgs/img4.png'];
setInterval(function() {
    index++;
    index=index>4?index=0:index;
   $("section>.banner>img").attr('src',arrimg[index]);
   $("section>.banner>p>span").html(index+1);

},2000)



var map = new BMap.Map("mapdiv");          // 创建地图实例  
var point = new BMap.Point(113.69,34.80);  // 创建点坐标  
map.centerAndZoom(point, 15); 
map.enableScrollWheelZoom(true);

function setrem() {
    var windowwidth = window.innerWidth;
    var newpx = (windowwidth / 320) * 100;
    $('html').css('fontSize', newpx);
}
setrem();
window.onresize =function(){
    setrem();
};


$(document).on('swipeRight',function(){
    window.history.back(-1);
})


$("#indexhtml").on('click',function(){
    window.location.href='index.html';
})