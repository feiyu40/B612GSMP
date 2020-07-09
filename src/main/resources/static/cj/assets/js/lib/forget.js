(function($) {
    "use strict";
    //点击“发送验证号”的事件
    $("#forget_post_email").click(
    	function(){
    		//传输邮箱号后服务器返回true表示发送成功，false表示发送失败
			$.post(
    			"",{email:$("#forget_email").val()},
    			function(data){
    				if(data=='111')
    					$("#error_forget_email").html("验证号已发送，请注意查收");
    				else if(data=='222')
    					$("#error_forget_email").html("验证码发送失败，请重试");
    				else
    					$("#error_forget_email").html("邮箱不存在");
    			}
    		);

    	}
    );
    //点击“提交”按钮
    $("#forget").click(
    	function() {
			var oname = document.getElementById("regist_name");
			var opassword = document.getElementById("forget_password");
			var opassword2 = document.getElementById("forget_password2");
			var oError = document.getElementById("forget_error");
			var isError = true;
			//判断密码格式是否正确
			if (opassword.value.length > 20 || opassword.value.length < 6) {
				oError.innerHTML = "<span style='color:#e94c66'>密码请输入6-20位字符</span>";
				isError = false;
				return;
			}
			//判断密码是否一致
			if (opassword.value != opassword2.value) {
				oError.innerHTML = "<span >两次输入密码不一致</span>";
				isError = false;
				return;
			}
			//服务器返回true表示注册成功，false表示注册失败
			//发送内容:邮箱，验证号，密码
			$.post(
				"", {
					email: $("#forget_email").val(),
					code: $("#forget_email_yanzheng").val(),
					password: $("#forget_password").val()
				},
				function (data) {
					if (data == '333')
						$("#forget_error").html("验证码错误，请重试");
					else
						window.location.href = ".";//跳转到登录界面
				}
			);
		});
})(jQuery);