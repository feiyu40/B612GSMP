(function($) {
    "use strict";
    $("#sign_f").click(function(){
    	var ozheng = document.getElementById("zheng_f");
		var olang = document.getElementById("lang_f");
		if(ozheng.value=="1"){
			$.post("",{type:"1",email:$("#email_login_f").val(),password:$("#password_login_f").val()},
    	function(data){
    		if(data=='false')
    			$("#error_login_f").html("账号或密码错误，请重试");
    		else if(data=='true')
    			window.location.href="gover";
    	}
		);
		 }
		else if(olang.value=="1"){
			$.post("",{type:"2",email:$("#email_login_f").val(),password:$("#password_login_f").val()},
    	function(data){
			if(data=='false')
    			$("#error_login_f").html("账号或密码错误，请重试");
    		else if(data=='true')
    			window.location.href="node_state";
		});

    }});
})(jQuery);