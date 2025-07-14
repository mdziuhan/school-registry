package ua.school.back.mapper;

import ua.school.back.dto.CreateSchoolRequestDto;
import ua.school.back.dto.SchoolDto;
import ua.school.back.model.School;

public class SchoolMapper {

    public static School mapToSchool(CreateSchoolRequestDto createSchoolRequestDto) {
        School school = new School();
        school.setName(createSchoolRequestDto.getName());
        school.setEdrpou(createSchoolRequestDto.getEdrpou());
        school.setRegion(createSchoolRequestDto.getRegion());
        school.setSchoolType(createSchoolRequestDto.getSchoolType());
        school.setActive(true);
        return school;
    }

    public static SchoolDto mapToSchoolDto(School school) {
        return new SchoolDto(
                school.getId(),
                school.getName(),
                school.getEdrpou(),
                school.getRegion(),
                school.getSchoolType(),
                school.getActive()
        );
    }

}
