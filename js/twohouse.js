var index=0;
$('section .menu ul').on('tap','li',function(){
    index=$(this).index();
    $(this).addClass('chcolor').siblings().removeClass('chcolor');
    $('section .menu .changecontent').children().eq(index).show().siblings().hide();
})

$('section .menu .changecontent .area').hide();

$(document).scroll(function(){
    // console.log($(window).scrollTop());
    if($(window).scrollTop()>=100){
        $('section .menu').css({
            position:' fixed',
              top: 0,
             left: 0
        })
    }else{
        $('section .menu').css({
            position:'relative',
              top: 0,
             left: 0
        })
    }
})

$(".zhezhao").on('tap',function(){
    $('section .menu .changecontent').children().hide();
    $(this).hide();
})
$('section .menu').on('tap',function(){
    $(".zhezhao").show();
})