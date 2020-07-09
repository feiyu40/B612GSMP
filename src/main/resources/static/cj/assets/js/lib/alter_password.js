(function($) {
    "use strict";
    //页面刚加载应有服务器把信息填充进来
    //点击“确认”按钮

	$("#password_email").click(
		function() {
			$.post(
				"",{},
    			function(data){
    				if(data=='false') {
    					toastr.success('验证码发送成功','Success',  {
							timeOut: 5000,
							"closeButton": true,
							"debug": false,
							"newestOnTop": true,
							"progressBar": true,
							"positionClass": "toast-top-right",
							"preventDuplicates": true,
							"onclick": null,
							"showDuration": "300",
							"hideDuration": "1000",
							"extendedTimeOut": "1000",
							"showEasing": "swing",
							"hideEasing": "linear",
							"showMethod": "fadeIn",
							"hideMethod": "fadeOut",
							"tapToDismiss": false

						});
					}
    				else {
						toastr.warning('验证码发送失败', 'Fail', {
							timeOut: 5000,
							"closeButton": true,
							"debug": false,
							"newestOnTop": true,
							"progressBar": true,
							"positionClass": "toast-top-right",
							"preventDuplicates": true,
							"onclick": null,
							"showDuration": "300",
							"hideDuration": "1000",
							"extendedTimeOut": "1000",
							"showEasing": "swing",
							"hideEasing": "linear",
							"showMethod": "fadeIn",
							"hideMethod": "fadeOut",
							"tapToDismiss": false
						});
					}
    			}
    		);
	});
    $("#password").click(
    	function(){
			var opassword = document.getElementById("new_password");
			var opassword2 = document.getElementById("new_password2");
			var oError2 = document.getElementById("error_password2");
    		if(opassword.value!=opassword2.value){
				  oError2.innerHTML = "<span >两次输入密码不一致</span>";
				  return;
			 }
    		$.post(
    			"",{yanzheng:$("#password_yanzheng").val(),new_password:$("#new_password").val()},
    			function (data) {
					if (data == 'false'){
						toastr.success( '验证码发送成功','Success', {
							timeOut: 5000,
							"closeButton": true,
							"debug": false,
							"newestOnTop": true,
							"progressBar": true,
							"positionClass": "toast-top-right",
							"preventDuplicates": true,
							"onclick": null,
							"showDuration": "300",
							"hideDuration": "1000",
							"extendedTimeOut": "1000",
							"showEasing": "swing",
							"hideEasing": "linear",
							"showMethod": "fadeIn",
							"hideMethod": "fadeOut",
							"tapToDismiss": false

						});
					}
						//$("#error_password2").html("修改密码失败，请确认相关信息填写正确");
					else{
						toastr.warning( '验证码发送失败', 'Fail',{
							timeOut: 5000,
							"closeButton": true,
							"debug": false,
							"newestOnTop": true,
							"progressBar": true,
							"positionClass": "toast-top-right",
							"preventDuplicates": true,
							"onclick": null,
							"showDuration": "300",
							"hideDuration": "1000",
							"extendedTimeOut": "1000",
							"showEasing": "swing",
							"hideEasing": "linear",
							"showMethod": "fadeIn",
							"hideMethod": "fadeOut",
							"tapToDismiss": false

						});
					}
						//$("#error_password2").html("修改密码成功");
				}
    		);
		}
	);
})(jQuery);