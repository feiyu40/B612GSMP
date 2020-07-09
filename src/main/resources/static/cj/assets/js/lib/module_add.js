(function($) {
    "use strict";
    //页面刚加载应有服务器把信息填充进来
    $("#ma_sure").click(
    	function(){
    		$.post(
    			//还有使用的数据没有传递
    			"",{name:$("#ma_name").val(),id:$("#ma_id").val(),operator:$("#ma_operator").val(),tel:$("#ma_tel").val(),desc:$("#ma_desc").val(),state:$("#ma_state").val(),dsl:$("#ma_file").val()}
    		);
		}
	);
})(jQuery);
