package com.practice.springboot.service;

import com.github.pagehelper.PageHelper;
import com.practice.springboot.entity.Goods;
import com.practice.springboot.mapper.GoodsMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class GoodsService {
    @Resource
    private GoodsMapper goodsMapper;
    public List<Goods> findAll(){
        return goodsMapper.findAll();
    }

    public List<Goods> findAll(Integer page, Integer limit) {
        PageHelper.startPage(page,limit);
        return goodsMapper.findAll();
    }
}
