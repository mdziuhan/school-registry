package ua.school.back.service;

import ua.school.back.dto.CreateSchoolRequestDto;
import ua.school.back.dto.SchoolDto;
import ua.school.back.model.SchoolType;

import java.util.List;

public interface SchoolService {

    List<SchoolDto> getSchools(String region, SchoolType schoolType, Boolean active);

    SchoolDto create(CreateSchoolRequestDto requestDto);

    Boolean deactivate(Long id);
}
