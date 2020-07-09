(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1)
                    && (filter.Age === undefined || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },
        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;

    db.clients = [
        {
            "变量名": "公积金交纳额",
            "数据源": "四川税务局",
            "变量ID": "acc_fund",
            "变量类型": "float",
            "变量说明": "应用于个人授信额模型/信用评估模型等计算,数据尚不完全",
            "允许调用": false
        },
        {
            "变量名": "公积金交纳额",
            "数据源": "四川税务局",
            "变量ID": "acc_fund",
            "变量类型": "float",
            "变量说明": "应用于个人授信额模型/信用评估模型等计算,数据尚不完全",
            "允许调用": false
        },
        {
           "变量名": "公积金交纳额",
            "数据源": "四川税务局",
            "变量ID": "acc_fund",
            "变量类型": "float",
            "变量说明": "应用于个人授信额模型/信用评估模型等计算,数据尚不完全",
            "允许调用": false
        },
        {
            "变量名": "公积金交纳额",
            "数据源": "四川税务局",
            "变量ID": "acc_fund",
            "变量类型": "float",
            "变量说明": "应用于个人授信额模型/信用评估模型等计算,数据尚不完全",
            "允许调用": false
        }
    ];


}());