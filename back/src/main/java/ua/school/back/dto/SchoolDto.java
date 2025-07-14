package ua.school.back.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import ua.school.back.model.SchoolType;

@Data
@AllArgsConstructor
public class SchoolDto {

    private Long id;

    private String name;

    private String edrpou;

    private String region;

    private SchoolType schoolType;

    private Boolean active;

}
