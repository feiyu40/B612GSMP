package com.practice.springboot.mapper;

import com.practice.springboot.entity.Goods;
import java.util.List;

public interface GoodsMapper {
    List<Goods> findAll();
}
