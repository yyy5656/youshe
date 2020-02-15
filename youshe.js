//1.tab栏的获取，绑定点击事件
let tab_list=document.querySelector('.tab_list');
let lis=tab_list.querySelectorAll('li');
let items=document.querySelectorAll('.item');
for(let i=0;i<lis.length;i++){
    lis[i].setAttribute('index',i);
    lis[i].onmouseover=function(){//光标指向时变色
    for(let i=0;i<lis.length;i++){
        lis[i].className='';
    }
    this.className='li1';//选项卡模块
    let index=this.getAttribute('index');
    for(let i=0;i<items.length;i++){
        items[i].style.display='none';
    }
    items[index].style.display='block';
    items[index].addEventListener('mouseleave',function (params) {
    items[index].style.display='none';
    })
    li[index].addEventListener('mouseleave',function (params) {
    items[index].style.display='none';
    })
  }
} 
for(let i=0;i<lis.length;i++)
{
    lis[i].onmouseout=function(){
        this.className='';
    }
}


 
//轮播图
function animate(obj, target, callback) {
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        let step = (target - obj.offsetLeft) / 10;
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            if (callback) {
                // 调用函数
                callback();
            }
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}
//封装的动画函数，往右走为正，注意div要用position定位
//1.箭头的隐藏和出现
let arrow_r=document.querySelector('.arrow-r');
let arrow_l=document.querySelector('.arrow-l');
let lunbotu=document.querySelector('.lunbotu');
let ulWidth=(lunbotu.offsetWidth-295);//用offsetwidth获取的宽度会变小？
lunbotu.addEventListener('mouseenter',function(){
    arrow_l.style.display='block';
    arrow_r.style.display='block';
    clearInterval(timer);
    timer=null;
})
lunbotu.addEventListener ('mouseleave',function () {
    arrow_l.style.display='none';
    arrow_r.style.display='none';
    timer=setInterval(function () {
    arrow_r.click();//手动调用点击事件
},2000);
})
//小圆圈
let ul=lunbotu.querySelector('ul');
let ol=lunbotu.querySelector('.circle');
for(let i=0;i<ul.children.length-1;i++){
    let li=document.createElement('li');//创建li
    li.setAttribute('num',i);
    ol.appendChild(li);//插入到ol中
    li.addEventListener('click',function () {//排他思想
        for(var i=0;i<ol.children.length;i++){//那个想白点那个
            ol.children[i].id='';
        }
        this.id='circle1';
        let num=this.getAttribute('num');
        //移动的是ul，移动距离是num*图片的长度 且是负值
        num1=num;
        circle=num;
    if(num==1){
        animate(ul,-632);
    }
    else if(num==2){
        animate(ul,-1558);
    }
    else if(num==0){
    animate(ul,305);
    }
    });
}
ol.children[0].id='circle1';//要用id命名
//克隆第一张图片
// let first=ul.children[0].cloneNode(true);
// ul.appendChild(first);
//按钮动画5
let num1=0;
let circle=0;//控制小圆圈的播放
arrow_r.addEventListener('click',function () {
    if(num1==ul.children.length-1){
        ul.style.left=0;
        num1=0;
    }
    num1++;
    if(num1==1){//这里不应该是if手动调距离的，但是我用ulwidth就是有问题
        animate(ul,-num1*ulWidth);
    }
    else if(num1==2){
        animate(ul,-1558);
    }
    else if(num1==3){
        animate(ul,-2486)
    }
    
    circle++;
    if(circle==ol.children.length){//走到复制的图片就清0
        circle=0;
    }
    for(let i=0;i<ol.children.length;i++){
        ol.children[i].id='';
    }
    ol.children[circle].id='circle1';
});



arrow_l.addEventListener('click',function () {
    if(num1==0){
        ul.style.left=(ul.children.length-1)*ulWidth+'px';
        num1=ul.children.length-1;
    } 
    num1--;
    if(num1==2){
        animate(ul,-1558);
    }
    else if(num1==1){
        animate(ul,-623);
    }
    else if(num1==0){
        animate(ul,305)
    }
    circle--;
    if(circle<0){//走到复制的图片就清0
        circle=ol.children.length-1;
    }
    for(let i=0;i<ol.children.length;i++){
        ol.children[i].id='';
    }
    ol.children[circle].id='circle1';
});

// var timer=setInterval(function () {
//     arrow_r.click();//手动调用点击事件
    
// },2000);



//软件教程第一个盒子
var arrow1_l=document.querySelector('.arrow1-l');
var arrow1_r=document.querySelector('.arrow1-r');
var box1pic=document.querySelector('.box1cot1');
var num2=0;
var box1picWidth=300;
arrow1_r.addEventListener('click',function(){
    num2++;
    if(num2%2!=0){
        animate(box1pic,-box1picWidth);
    }
    if(num2%2==0){
    animate(box1pic,10); 
    }
}); 
var num2=0;
arrow1_l.addEventListener('click',function(){
    num2++;
    if(num2%2!=0){
        animate(box1pic,-box1picWidth);
    }
    if(num2%2==0){
    animate(box1pic,10); 
    }
})



//课程推荐

let arrow2_r=document.querySelector('.arrow2-r');
let arrow2_l=document.querySelector('.arrow2-l');
let box2pic=document.querySelector('.homelistbox4a');
let box2picWidth=1100;
let num3=0;
arrow2_r.addEventListener('click',function(){
    box2pic.style.left=box2pic.offsetLeft-1250+'px';
});   
let bottopcot2=document.querySelector('.bottopcot2');
let hi=document.querySelector('.bottopcot4');
    bottopcot2.addEventListener('mouseenter',function () {
        hi.style.display='block';
        bottopcot2.style.left=-30+'px'; 
    })
    bottopcot2.addEventListener('mouseleave',function () {
        hi.style.display='none';
        bottopcot2.style.left=30+'px';
    })

let triangle1=document.querySelector('.triangle');
let triangle2=document.querySelector('.triangle1');
let triangle3=document.querySelector('.triangle2');
let weibo=document.querySelector('.cot311-a');
let weiboseen=document.querySelector('.weibo');
let douyin=document.querySelector('.cot311-b');
let douyinseen=document.querySelector('.douyin');
let wechat=document.querySelector('.cot311-c');
let wechatseen=document.querySelector('.wechat');
function cliBlockandNone(obj,obj1,triangle) {
    obj.addEventListener('mouseenter',function (params) {
        obj1.style.display='block';
        triangle.style.display='block';
    })
    obj1.addEventListener('mouseenter',function (params) {
        obj1.style.display='block';
        triangle.style.display='block';
    })
    obj.addEventListener('mouseleave',function (params) {
        obj1.style.display='none';
        triangle.style.display='none';
    })
    obj1.addEventListener('mouseleave',function (params) {
        obj1.style.display='none';
        triangle.style.display='none';
    })
}
    cliBlockandNone(weibo,weiboseen,triangle1);
    cliBlockandNone(douyin,douyinseen,triangle2);
    cliBlockandNone(wechat,wechatseen,triangle3);


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("content1").innerHTML = myObj.dubao1;
        document.getElementById("content2").innerHTML = myObj.dubao2;
        document.getElementById("url1").src=myObj.url1;
        document.getElementById("url2").src=myObj.url2;
        document.getElementById("url3").src=myObj.url3;
        document.getElementById("url4").src=myObj.url4;
    }
};
xmlhttp.open("GET", "http://yapi.demo.qunar.com/mock/81152/youshe.ry", true);
xmlhttp.send();
