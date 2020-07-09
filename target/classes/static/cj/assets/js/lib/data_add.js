(function($) {
    "use strict";
    //页面刚加载应有服务器把信息填充进来
    $("#bt_data_add").click(
    	function(){
    		toastr.success('数据录入成功!',{
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
    		$.post(//数据名/变量名/操作人/数据描述/授权状态/文件名
    			"",{name:$("#data_add_name").val(),b_name:$("#data_add_b_name").val(),operator:$("#data_add_oper").val(),descripts:$("data_add_desc").val(),state:$("#data_add_state").val(),file:$("#data_add_file").val()}
    		);
		}
	);
})(jQuery);
