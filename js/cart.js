window.onload=function(){
    deleteBox();
    addValue();
    getTotalCount();
    checkoutBox();
    toggleAll();
}

function toggleAll(){
    var a=document.querySelectorAll('.shop_check');
    for(var i=0;i< a.length;i++){
        a[i].onclick=function(){
            var that=this;
           if(this.className=='jd_check_box shop_check'){
               that.className="jd_check_box shop_check checked";
               var b=this.parentNode.parentNode.nextSibling;
               var c= b.getElementsByClassName('product_box');
               for(var j=0;j< c.length;j++){
                   var d=c[j].getElementsByClassName('jd_check_box')[0];
                   d.setAttribute('class',"jd_check_box checked")
                   console.log(d);
               }
           }
            else{
               that.className="jd_check_box shop_check";
               var b=this.parentNode.parentNode.nextSibling;
               var c= b.getElementsByClassName('product_box');
               for(var j=0;j< c.length;j++){
                   var d=c[j].getElementsByClassName('jd_check_box')[0];
                   d.setAttribute('class',"jd_check_box")
                   console.log(d);
               }
           }

        }
    }
}
function checkoutBox(){
    var checkout=document.querySelectorAll(".product_box")
    for (var i=0;i<checkout.length;i++){
        var innercheck=checkout[i].querySelector(".check_box");
        innercheck.onclick=function(){
            var a=this.childNodes[1];
            if(a.className=='jd_check_box checked'){
            a.className='jd_check_box';
            }
           else{
                a.className='jd_check_box checked';
            }
        }
    }
}
function deleteBox(){
    var win=document.querySelector('.jd_win');
    var box=win.querySelector('.jd_win_box');
    var deleteList=document.querySelectorAll('.delete_box');
    var deleteBox=null;
    for(var i=0;i<deleteList.length;i++){
        deleteList[i].onclick=function(e){
            win.style.display="block";
            box.className="jd_win_box bounceInDown";
            deleteBox=this;
            var deleteUp=deleteBox.querySelector('span:first-child');
            deleteUp.style.webkitTransform="all 1s";
            deleteUp.style.transition="all 1s";
            deleteUp.style.webkitTransform="rotate(-30deg) translateY(2px)";
            deleteUp.style.Transform="rotate(-30deg) translateY(2px)";
            deleteUp.style.webkitTransformOrigin="left bottom"
            deleteUp.style.transformOrigin="left bottom"
        }
    }
    document.querySelector('.cancel').onclick=function(){
        win.style.display="none";
            var deleteUp = deleteBox.querySelector('span:first-child');
            deleteUp.style.webkitTransform = "none";
            deleteUp.style.transform = "none";
    };
    document.querySelector('.submit').onclick=function(){
        win.style.display="none";
        var delParent=deleteBox.parentElement.parentElement.parentElement.parentElement.parentElement
        var del=deleteBox.parentElement.parentElement.parentElement.parentElement;
        delParent.removeChild(del);
        getTotalCount()
    }
}
function addValue(){
    //注意区分querySelectorAll和querySelctor找了好久错误 - -!
   var addValueBox=document.querySelectorAll(".change_box");
    //需要一个变量去控制每个change_box
    var CountBox=null;
    for(var i=0;i<addValueBox.length;i++){
        addValueBox[i].onclick=function(){
            //改变Countbox的值，把THIS指向全局变量,这个时候点那个CHANGE_BOX就是那个
            var CountBox=this;
            var add=CountBox.getElementsByTagName("span")[1];
            var reduce=CountBox.getElementsByTagName("span")[0];
            var inputBox=CountBox.getElementsByTagName("input")[0];
            add.onclick=function(){
                if(parseInt(inputBox.value)>=0){
                    inputBox.value=parseInt(inputBox.value)+1;
                }
                getTotalCount()
            }
            reduce.onclick=function(){
                if(parseInt(inputBox.value)>=1){
                    inputBox.value=parseInt(inputBox.value)-1;
                }
            }
            getTotalCount()
        }
    }
}

function getTotalCount(){
    var shopCount=document.querySelectorAll(".jd_shop").length;
    var totalShop=document.querySelector('.bottom').querySelectorAll('span')[0];
    var totalPrice=document.querySelector('.bottom').querySelectorAll('span')[1];
    var Pricelist=document.querySelectorAll('.price');
    var Allprice=0;
    for(var i=0;i<Pricelist.length;i++){
        var sum=Pricelist[i].parentNode.childNodes[5].childNodes[3];
        var num=sum.querySelector('input').value;
        Allprice+=parseFloat(Pricelist[i].innerHTML.substr(1)*num);
    }
    totalShop.innerHTML=shopCount;
    totalPrice.innerHTML=Allprice;
}
