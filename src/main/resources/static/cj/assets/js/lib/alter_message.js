(function($) {
    "use strict";
    //页面刚加载应有服务器把信息填充进来
    $("#message").click(
    	function(){
    		toastr.success('信息修改成功!',{
			timeOut: 3000,
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
    		$.post(
    			"",{email:$("#message_email").val(),name:$("#message_name").val(),sex:$("#message_sex").val(),phone:$("#message_phone").val()}
    		);
		}
	);
})(jQuery);
