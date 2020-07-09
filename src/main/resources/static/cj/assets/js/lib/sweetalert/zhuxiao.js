document.querySelector('.sweet-confirm').onclick = function(){
    swal({
            title: " 你确定要注销该账号 ?",
            text: "该账号将失去访问本管理平台的资格，所有缓存数据集将清空防止信息泄露！！",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it !!",
            closeOnConfirm: false
        },
        function(){
            swal("Deleted !!", "本账号已被注销 !!", "success");
            // does't have delete the person
            window.location.href="login";
        });
};
