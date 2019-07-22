
document.getElementById("BU1").onclick=点击;
function 点击(){
    var 账户=document.getElementById("account").value;
    var 密码=document.getElementById("password").value;
    var 邮箱=document.getElementById("Emale").value;
    var 电话=document.getElementById("plone").value;
    var 识别码=document.getElementById("code").value;
    if(账户==""||密码==""){
    alert("账户或者密码不能为空");
    }else if(邮箱=="")
    {alert("请输入正确的邮箱地址！")
    }else if(电话==""){
        alert("请输入电话号码")
    }else if(识别码==""){
    alert("请输入正确的机器识别码")
    }
  
} 



