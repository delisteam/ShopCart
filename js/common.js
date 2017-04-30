/**
 * Created by Administrator on 2017/4/8 0008.
 */
//公用JS文件，定义一个对象来承载封装的事件
window.ycd={};
//封装一个transitionEnd过度结束事件
ycd.transitionEnd=function(dom,callback){
    //需要绑定事件的DOM，绑定之后当触发时间的时候CALLBACK
    if(dom && typeof dom=='object') {
        dom.addEventListener('transitionEnd',function(){
            callback &&callback();
            //这是一个短路语句，如果CALLBACK存在则执行CALLBACK（），相当于第一个为TRUE才执行第二个
        });
        dom.addEventListener('webkitTransitionEnd',function(){
            callback &&callback();
        })
    }//判断有DOM并且是个对象
}
ycd.tap = function(dom,callback){

    if(dom && typeof  dom == 'object'){
        var isMove = false;
        var startTime = 0;
        dom.addEventListener('touchstart',function(e){
            //console.log('touchstart');
            //console.time('tap');/*记录tap这个参数现在的时间*/
            startTime = Date.now();
        });
        dom.addEventListener('touchmove',function(e){
            //console.log('touchmove');
            isMove = true;
        });
        dom.addEventListener('touchend',function(e){

            if(!isMove && (Date.now()-startTime) < 150){
                /*调用 callback*/
                callback && callback(e);
            }

            isMove = false;
            startTime = 0;
        });
    }
}