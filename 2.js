var m = document.getElementById("M");//获取播放器id
var text=document.getElementById("txt");
m.autoplay = true;//控制播放器在浏览器准备就绪的时候立即开始播放
var lyr=new Array(20);
var time=new Array(20);
alert("把屏幕横过来！用浏览器播放");
setInterval(function(){
    var size= (m.currentTime).toFixed(1);
    for(var i=0;i<20;i++){
        if(size==time[i]){
        wz(lyr[i])
        };
        }

},1000/60);


function wz(t){
    text.innerHTML=(t);
    text.style.color='red';
}

lyr[0]="你是信的开头诗的内容　童话的结尾";
lyr[1]="你是理所当然的奇迹　你是月色真美";
lyr[2]="你是圣诞老人送给我　好孩子的礼物";
lyr[3]="你是三千美丽世界里　我的一瓢水";
lyr[4]="所以让我再靠近一点点　因为你太温暖";
lyr[5]="我会再变得坚强一点点　因为你太柔软";
lyr[6]="交换无名指金色的契约　给彼此岁月";
lyr[7]="说好从今以后都牵着手　因为要走很远";
lyr[8]="你是我万水千山的冒险　要找的标记点";
lyr[9]="你是分割我人生的线　又将它们相连";
lyr[10]="你是前世千次的回眸　虔诚牵的手";
lyr[11]="你是其余所有的一切　是我的世界";
lyr[12]="所以请你再闪亮一点点　尽管我太平凡";
lyr[13]="我会再变得柔软一点点　因为你太敏感";
lyr[14]="交换无名指金色的契约　给彼此岁月";
lyr[15]="说好从今以后都牵着手　不管要走多远";
lyr[16]="让我再靠近一点点　因为你太温暖";
lyr[17]="我会再变得坚强一点点　因为你太柔软";
lyr[18]="交换无名指金色的契约　给彼此岁月";
lyr[19]="说好从今以后都牵着手　因为要走很远";
lyr[20]="";
time[0]=21.7;
time[1]=27.2;
time[2]=32.9;
time[3]=38.6;
time[4]=44.2;
time[5]=49.7;
time[6]=55.4;
time[7]=61.2;
time[8]=89.7;
time[9]=95.2;
time[10]=100.9;
time[11]=106.4;
time[12]=112.0;
time[13]=118.0;
time[14]=123.0;
time[15]=129.0;
time[16]=158.0;
time[17]=163.0;
time[18]=168.6;
time[19]=174.3;
time[20]=183.0;
