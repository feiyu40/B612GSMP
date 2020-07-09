;(function($){
	$.extend({
		inputStyle:function(){
			function check(el,cl){
				$(el).each(function(){
					$(this).parent('i').removeClass(cl);

					var checked = $(this).prop('checked');
					if(checked){
						$(this).parent('i').addClass(cl);
						$(this).val("1");
					}
				})
			}	
			$('input[type="radio"]').on('click',function(){
				check('input[type="radio"]','radio_bg_check');
			})
		}
		
	})

})(jQuery)

//调用
$(function(){
	$.inputStyle();
})