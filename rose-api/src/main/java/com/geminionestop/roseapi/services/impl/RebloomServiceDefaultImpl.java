package com.geminionestop.roseapi.services.impl;

import com.geminionestop.roseapi.models.RoseModel;
import com.geminionestop.roseapi.repository.RoseRepository;
import com.geminionestop.roseapi.services.RebloomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RebloomServiceDefaultImpl implements RebloomService {
    private final RoseRepository roseRepository;

    @Override
    public List<String> getReblooms() {
        List<RoseModel> roses = roseRepository.findAll();

        return new ArrayList<>(new HashSet<>(roses.stream().map(RoseModel::getReblooms).toList())).stream().sorted().toList();
    }
}
