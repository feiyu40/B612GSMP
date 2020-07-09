        $(function() {

            $("#jsGrid").jsGrid({
                height: "100%",
                width: "80%",
                filtering: false,
                editing: true,
                sorting: true,
                paging: true,
                autoload: true,
                pageSize: 15,
                pageButtonCount: 5,
                deleteConfirm: "Do you really want to delete the module?",
                controller: db,
                fields: [
                    { name: "模型名", type: "text", width: 200 },
                    { name: "模型编号", type: "text", width: 100 ,editing:false},
                    { name: "模型部署人", type: "text", width: 100 ,editing:false},
                    { name: "部署时间", type:"text",width:250 ,editing:false},// "select"},// items: db.countries, valueField: "Id", textField: "Name" },
                    { name: "允许调用", type: "checkbox", title: "允许调用", sorting: false },
                    { type: "control" }
                ]
            });
            $("#jsGrid1").jsGrid({
                height: "100%",
                width: "100%%",
                filtering: false,
                inserting: true,
                editing: true,
                sorting: true,
                paging: true,
                autoload: true,
                pageSize: 15,
                pageButtonCount: 5,
                deleteConfirm: "Do you really want to delete the module?",
                controller: db,
                fields: [
                    { name: "变量名", type: "text", width: 150 },
                    { name: "数据源", type: "text", width: 150 ,editing:false},
                    { name: "变量ID", type: "text", width: 100 },
                    { name: "变量类型", type:"text",width:100 },
                    { name: "变量说明", type:"text",width:200 },
                    { name: "允许调用", type: "checkbox", title: "允许调用", sorting: false },
                    { type: "control" }
                ]
            });
        });