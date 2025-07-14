package ua.school.back.dto;

import lombok.Data;
import ua.school.back.model.SchoolType;

@Data
public class CreateSchoolRequestDto {

    private String name;

    private String edrpou;

    private String region;

    private SchoolType schoolType;

}
