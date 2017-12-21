 function $ ( pElementID ) {
		return document.getElementById(pElementID);
	}

 <!--用户名验证开始-->

 function checkUser ( pUserName ) {
		var oContainer = $("userNameInfor");
		oContainer.className = "font_error";
		var reg = /^(\w|[\u4E00-\u9FA5])*$/;    //用户名验证的正则表达式	
	  
		if ( pUserName.value == "" ) {
			oContainer.innerHTML = "请输入用户名！"
			return false;
		 }
		if ( pUserName.value.charAt(0) == "_" ) {
		   oContainer.innerHTML = "用户名不能以下划线开头，请重新填写！"
		   return false;
		}  
		if (pUserName.value.length> 20 || pUserName.value.length< 6 ) {
			oContainer.innerHTML = "用户名最长只能占20位字符，最短6个字符，请重新填写！"
			return false;
		}
		if ( !reg.test(pUserName.value) ) {
			oContainer.innerHTML = "名字中只能用数字、字母、下划线和汉字，请重新填写！";
			return false;
		}
	     	oContainer.className = "font_true";
			oContainer.innerHTML = "你填写的用户名是有效的！";
			return true;
	}
  <!--用户名验证结束-->
<!--密码验证结束-->
  function  checkpass(pass){    //密码验证
        var pwd = $("passinfor"); 
		var pattern = /^[A-Za-z0-9_!@#$%^&*()]+$/;    //密码验证正则表达式，英文、数字及字符
		if(pass.value==""){
		 pwd.className="font_error"
		pwd.innerHTML="密码不能为空";
		return false;
		}
        if(pass.value.length<6){
		 pwd.className="font_error"
		pwd.innerHTML="密码不能少于6位";
		return false;
		}
		if(!pattern.test(pass.value)){
		 pwd.className="font_error"
		pwd.innerHTML = "密码只能是数字、字母、字符！";
			return false;
		}
		 pwd.className="font_true"
		pwd.innerHTML = "您设置的密码符合要求！";
		return true;
  }

  function  checkrepass(pass,repass){  //确认密码验证
        var repwd=$("repassinfor");
        repwd.className="font_error"
		if(repass.value==""){
		 repwd.className="font_error"
		repwd.innerHTML="确认密码不能为空";
		return false;
		}
        if(pass.value != repass.value){  //确认密码是否与密码一致
		repwd.className="font_error"
		repwd.innerHTML="两次输入的密码不一样，请重新输入！";
		return false;
		}
		repwd.className="font_true";
		repwd.innerHTML="两次输入的密码一致！";
		return true;
		
  }
<!--密码验证结束-->  
<!--电子邮件地址验证开始-->   
function checkemail(email){
var  einfor=$("emailinfor");
   if(!email.value.match(/^\w+((-{1,2}\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-{1,2})[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) ){
  //  if(email.value.indexOf('@',0)==-1){
  einfor.className="font_error";
  einfor.innerHTML="您输入的电子邮件格式不正确，请重新输入！";
  return false;			
  }
 		einfor.className="font_true";
		einfor.innerHTML="你输入的电子邮件地址正确！";
		return true; 
  }
 <!--电子邮件地址验证结束--> 
 
  