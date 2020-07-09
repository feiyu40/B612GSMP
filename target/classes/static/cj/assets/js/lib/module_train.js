(function($) {
    "use strict";
    //页面刚加载应有服务器把信息填充进来
    $("#mt_sure").click(
    	function(){
    		$.post(
    			"",{id:$("#mt_id").val(),desc:$("#mt_desc").val(),upload:$("#mt_file").val(),conf:$("#mt_file2").val()}
    		);
		}
	);
})(jQuery);
