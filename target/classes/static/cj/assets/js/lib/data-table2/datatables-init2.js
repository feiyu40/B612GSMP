(function ($) {
    $('#bootstrap-data-table').DataTable({
        lengthMenu: [[10, 20, 50, -1], [10, 20, 50, "All"]],
    });
        //设置需要显示的列
        var columns_dq= [
					{ "data": "name" },
					{ "data": "from" },
					{ "data": "module" },
					{ "data": "date" },
		];
        var columns_dm= [
					{ "data": "name" },
					{ "data": "bian_name" },
					{ "data": "operator" },
					{ "data": "describe" },
					{ "data": "from" },
					{ "data": "time" },
		];
        var columns_mq=[
					{ "data": "name" },
					{ "data": "no" },
					{ "data": "operator" },
					{ "data": "useable" },
					{ "data": "trainable" },
					{ "data": "ban_no" },
		];
        $.ajax({
            url: "",
			type: 'POST',
			dataType: "json",
            contentType:"application/json",
			async:false,
			success:function (list) {
                //bootstrap table初始化数据
				 $('#bootstrap-data-table-export').DataTable({
       				 lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
					 bProcessing:false,
					 columns:columns_dq,
                     data:list.data,
                });
				 $('#table_dm').DataTable({
					 //dom: 'lBfrtip',
       				 lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
					 bProcessing:false,
					 columns:columns_dm,
                     data:list.data,
                });
				$('#table_mq').DataTable({
					 //dom: 'lBfrtip',
       				 lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
					 bProcessing:false,
					 columns:columns_mq,
                     data:list.data,
                });
            }
        });

	$('#row-select').DataTable( {
			initComplete: function () {
				this.api().columns().every( function () {
					var column = this;
					var select = $('<select class="form-control"><option value=""></option></select>')
						.appendTo( $(column.footer()).empty() )
						.on( 'change', function () {
							var val = $.fn.dataTable.util.escapeRegex(
								$(this).val()
							);

							column
								.search( val ? '^'+val+'$' : '', true, false )
								.draw();
						} );

					column.data().unique().sort().each( function ( d, j ) {
						select.append( '<option value="'+d+'">'+d+'</option>' )
					} );
				} );
			}
	} );

})(jQuery);