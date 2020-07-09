(function($) {
    "use strict";
    $("#sign").click(function(){
    	var ozheng = document.getElementById("zheng");
		var olang = document.getElementById("lang");
		if(ozheng.value=="1"){
			$.post("",{type:"1",email:$("#email_login").val(),password:$("#password_login").val()},
    	function(data){
    		if(data=='false')
    			$("#error_login").html("账号或密码错误，请重试");
    		else if(data=='true')
    			window.location.href="gover";
    	});
		}
		else if(olang.value=="1"){
			$.post("",{type:"2",email:$("#email_login").val(),password:$("#password_login").val()},
    	function(data){$("#error_login").html(data);});
			if(data==false)
    			$("#error_login").html("账号或密码错误，请重试");
    		else
    			window.location.href="company";
		}
		
    })
})(jQuery);