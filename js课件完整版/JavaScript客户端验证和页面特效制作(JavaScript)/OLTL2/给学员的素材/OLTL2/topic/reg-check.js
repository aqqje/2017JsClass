 function $ ( pElementID ) {
		return document.getElementById(pElementID);
	}
	<!--�û�����֤��ʼ-->

 function checkUser ( pUserName ) {
		var oContainer = $("userInfor");
		oContainer.className = "font_error";
		var reg = /^[A-Za-z0-9]+$/;	
	  
		if ( pUserName.value == "" ) {
			oContainer.innerHTML = "�������û�����"
			return false;
		 }
		
		if (pUserName.value.length> 16 || pUserName.value.length< 4 ) {
			oContainer.innerHTML = "�û����ֻ��ռ16λ�ַ������4���ַ�����������д��"
			return false;
		}
		if ( !reg.test(pUserName.value) ) {
			oContainer.innerHTML = "������ֻ�������֡���ĸ����������д��";
			return false;
		}
	     	oContainer.className = "font_true";
			oContainer.innerHTML = "����д���û�������Ч�ģ�";
			return true;
	}
  <!--�û�����֤����-->
  <!--������֤����-->
  function  checkpwd(pass){
        var pwd = $("pwdinfor"); 
		var pattern = /^[A-Za-z0-9_!@#$%^&*()]+$/;
		if(pass.value==""){
		 pwd.className="font_error"
		pwd.innerHTML="���벻��Ϊ��";
		return false;
		}
        if(pass.value.length<6){
		 pwd.className="font_error"
		pwd.innerHTML="���벻������6λ";
		return false;
		}
		if(!pattern.test(pass.value)){
		 pwd.className="font_error"
		pwd.innerHTML = "����ֻ�������֡���ĸ�������ַ���";
			return false;
		}
		 pwd.className="font_true"
		pwd.innerHTML = "�����õ��������Ҫ��";
		return true;
  }

  function  checkrepwd(pass,repass){
        var repwd=$("repwdinfor");
        repwd.className="font_error"
		if(repass.value==""){
		 repwd.className="font_error"
		repwd.innerHTML="ȷ�����벻��Ϊ��";
		return false;
		}
        if(pass.value != repass.value){
		repwd.className="font_error"
		repwd.innerHTML="������������벻һ�������������룡";
		return false;
		}
		repwd.className="font_true";
		repwd.innerHTML="�������������һ�£�";
		return true;
		
  }
<!--������֤����-->  
<!--�����ʼ���ַ��֤��ʼ-->   
function checkemail(email){
var  einfor=$("emailinfor");
   if(!email.value.match(/^\w+((-{1,2}\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-{1,2})[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) ){
  //  if(email.value.indexOf('@',0)==-1){
  einfor.className="font_error";
  einfor.innerHTML="������ĵ����ʼ���ʽ����ȷ�����������룡";
  return false;			
  }
 		einfor.className="font_true";
		einfor.innerHTML="������ĵ����ʼ���ַ��ȷ��";
		return true; 
  }
 <!--�����ʼ���ַ��֤����--> 
 <!--������֤��ʼ-->
 function checkquest (quest) {
		var que= $("questInfor");
		que.className = "font_error";
		if ( quest.value == "" ) {
			que.innerHTML = "��ѡ�����⣡"
			return false;
		 }
	     	que.className = "font_true";
			que.innerHTML = "���μ���ѡ������⣡";
			return true;
	}
  <!--������֤����-->
 <!--�ش���֤��ʼ-->
 function checkans ( answer ) {
		var ans= $("ansInfor");
		ans.className = "font_error";
		if ( answer.value == "" ) {
			ans.innerHTML = "����������ش�"
			return false;
		 }
	     	ans.className = "font_true";
			ans.innerHTML = "����ش�������һ�����";
			return true;
	}
  <!--�ش���֤����-->