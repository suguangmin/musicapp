

function remSize () {
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth >= 750){
        deviceWidth = 750
    }
    if (deviceWidth <= 320){
        deviceWidth = 320
    }
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
    document.body.style.fontSize = 0.3 + 'rem'
    //设计稿是750px。
    //设置一半的宽度，那么就是375px
    //1rem == 100px的设计稿高度
    //表达一半的高度就是3.75rem
}

remSize()

window.onresize = function () {
    remSize();
}