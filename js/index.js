function resize(Origin,type){
    var widths=document.documentElement.clientWidth;
    var heights=document.documentElement.clientHeight;
    var type=type||"x";
    if(type=="x"){
        var scale=widths/Origin*100;
    }else if(type=="y"){
        var scale=heights/Origin*100;
    }
    document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
}
resize(750,"x");

$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination : '.swiper-pagination',
        paginationType : 'custom',
        paginationCustomRender: function (swiper, current, total) {
            return current + ' / ' + total;
        }
    });

    var menu_swiper = new Swiper('.menu_swiper', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });

    var show_swiper = new Swiper('.show_swiper',{
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });

})
