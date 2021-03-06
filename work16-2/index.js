function animate(obj,option) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function (){
        var flag = true;
        for (var k in option) {
            var leader = parseInt(getStyle(obj,k))|| 0;
            var target = option[k];
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            obj.style[k] = leader + 'px';
            if (leader !=target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
        }
    }, 15);
}
function getStyle(obj,attr) {
    if(window.getComputedStyle) {
        return window.getComputedStyle(obj,null)[attr];
    }else{
        return obj.currentStyle[attr];
    }
}
var obj = document.getElementById('box');
obj.onclick = function() {
    animate(obj, {'left':200,'top':50});
    //绑定小球单击事件，调用animate()函数自定义完成动画的实现。
    animate(obj,{'left':Math.random()*1000,'top':Math.random()*500});
    //Math.random()返回介于两数之间的一个随机数。
};