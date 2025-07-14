package ua.school.back.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import ua.school.back.dto.CreateSchoolRequestDto;
import ua.school.back.dto.SchoolDto;
import ua.school.back.mapper.SchoolMapper;
import ua.school.back.model.School;
import ua.school.back.model.SchoolType;
import ua.school.back.repository.SchoolRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SchoolServiceImpl implements SchoolService {

    private final SchoolRepository schoolRepository;

    @Override
    public List<SchoolDto> getSchools(String region, SchoolType schoolType, Boolean active) {
        School school = new School();
        if (region != null) {
            school.setRegion(region);
        }
        if (schoolType != null) {
            school.setSchoolType(schoolType);
        }
        if (active != null) {
            school.setActive(active);
        }
        Example<School> example = Example.of(school);
        return schoolRepository.findAll(example)
                .stream()
                .map(SchoolMapper::mapToSchoolDto)
                .collect(Collectors.toList());
    }

    public SchoolDto create(CreateSchoolRequestDto requestDto) {
        School school = SchoolMapper.mapToSchool(requestDto);
        School savedSchool = schoolRepository.save(school);
        return SchoolMapper.mapToSchoolDto(savedSchool);

    }

    public Boolean deactivate(Long schoolId) {
        School school = schoolRepository.findById(schoolId).orElseThrow();
        school.setActive(false);
        schoolRepository.save(school);
        return true;
    }
}
