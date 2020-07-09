package com.practice.springboot.controller;

import com.github.pagehelper.PageInfo;
import com.practice.springboot.entity.Goods;
import com.practice.springboot.model.LayuiPageInfo;
import com.practice.springboot.service.GoodsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class TestController {
    @GetMapping("/test")
    public String test() {
        return "<h1>Hello SpringBoot!</h1>";
    }

    @RequestMapping("/login")
    public String login() {
        return "login";
    }

    @RequestMapping("/register")
    public String register() {
        return "register";
    }

    @Resource
    GoodsService goodsService;

    @GetMapping("/goods")
    public List<Goods> getGoods(){
        return goodsService.findAll();
    }

    //http://127.0.0.1:8088/list?page=1&limit=10
    @GetMapping("/list")
    LayuiPageInfo goodslist(Integer page,Integer limit){
        List<Goods> datas = goodsService.findAll(page,limit);
        PageInfo<Goods> pageInfo = new PageInfo<Goods>(datas);

        LayuiPageInfo result = new LayuiPageInfo();
        result.setCode(0);
        result.setMsg("");
        result.setData(datas);
        result.setCount(pageInfo.getTotal());
        return result;
    }
}
