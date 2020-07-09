(function($) {
    "use strict";
    $("#regist_post_email").click(
    	function(){
    		//传输邮箱号后服务器返回true表示发送成功，false表示发送失败
    		$.post(
				"",{email: $("#regist_email").val()},
    			function(data){
    				if(data=='111')
    					$("#error_regist_email").html("该邮箱已经被注册了");
    				else if(data=='222')
    					$("#error_regist_email").html("验证码已发送，请注意查收");
    				else
    					$("#error_regist_email").html("验证码发送失败，请重试");
    			}
    		);
    	}
    );
    $("#regist").click(
    	function() {
			var oname = document.getElementById("regist_name");
			var opassword = document.getElementById("regist_password");
			var opassword2 = document.getElementById("regist_password2");
			var okey = document.getElementById("regist_key");
			var oError = document.getElementById("error_regist");
			var isError = true;
			if (oname.value.length > 20 || oname.value.length < 3) {
				oError.innerHTML = "<span style='color:#e94c66'>用户名请输入3-20位字符</span>";
				isError = false;
				return;
			}
			if (opassword.value.length > 20 || opassword.value.length < 6) {
				oError.innerHTML = "<span style='color:#e94c66'>密码请输入6-20位字符</span>";
				isError = false;
				return;
			}
			//判断密码是否一致
			 if(opassword.value!=opassword2.value){
				  oError.innerHTML = "<span >两次输入密码不一致</span>";
				  isError = false;
				  return;
			 }
			$.post(
				"", {
					email: $("#regist_email").val(),
					code: $("#regist_email_yanzheng").val(),
					name: $("#regist_name").val(),
					password: $("#regist_password").val(),
					identify: $("#regist_key").val()
				},
				function (data) {
					if (data == '333')
						$("#error_regist").html("验证码错误，请重试");
					else
						window.location.href = ".";
				}
			);
		});
})(jQuery);
