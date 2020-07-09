(function($) {
    "use strict";
    $("#mfd_sure").click(function(){
    	$.post(//文件名
    			"",{file:$("#mfd_file").val()}
    		);
    });
    $("#mfdl_sure").click(function(){
    	$.post(//文件名
    			"",{module:$("#mfdl_module").val(),upload:$("#mfdl_file").val(),predict:$("#mfdl_file2").val()}
    		);
    });
})(jQuery);