 function $ ( pElementID ) {
		return document.getElementById(pElementID);
	}

 <!--�û�����֤��ʼ-->

 function checkUser ( pUserName ) {
		var oContainer = $("userNameInfor");
		oContainer.className = "font_error";
		var reg = /^(\w|[\u4E00-\u9FA5])*$/;    //�û�����֤��������ʽ	
	  
		if ( pUserName.value == "" ) {
			oContainer.innerHTML = "�������û�����"
			return false;
		 }
		if ( pUserName.value.charAt(0) == "_" ) {
		   oContainer.innerHTML = "�û����������»��߿�ͷ����������д��"
		   return false;
		}  
		if (pUserName.value.length> 20 || pUserName.value.length< 6 ) {
			oContainer.innerHTML = "�û����ֻ��ռ20λ�ַ������6���ַ�����������д��"
			return false;
		}
		if ( !reg.test(pUserName.value) ) {
			oContainer.innerHTML = "������ֻ�������֡���ĸ���»��ߺͺ��֣���������д��";
			return false;
		}
	     	oContainer.className = "font_true";
			oContainer.innerHTML = "����д���û�������Ч�ģ�";
			return true;
	}
  <!--�û�����֤����-->
<!--������֤����-->
  function  checkpass(pass){    //������֤
        var pwd = $("passinfor"); 
		var pattern = /^[A-Za-z0-9_!@#$%^&*()]+$/;    //������֤������ʽ��Ӣ�ġ����ּ��ַ�
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
		pwd.innerHTML = "����ֻ�������֡���ĸ���ַ���";
			return false;
		}
		 pwd.className="font_true"
		pwd.innerHTML = "�����õ��������Ҫ��";
		return true;
  }

  function  checkrepass(pass,repass){  //ȷ��������֤
        var repwd=$("repassinfor");
        repwd.className="font_error"
		if(repass.value==""){
		 repwd.className="font_error"
		repwd.innerHTML="ȷ�����벻��Ϊ��";
		return false;
		}
        if(pass.value != repass.value){  //ȷ�������Ƿ�������һ��
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
 
  