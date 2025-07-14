package ua.school.back.controller;

import jakarta.websocket.server.PathParam;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ua.school.back.dto.CreateSchoolRequestDto;
import ua.school.back.dto.SchoolDto;
import ua.school.back.model.SchoolType;
import ua.school.back.service.SchoolService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/schools")
@RequiredArgsConstructor
public class SchoolController {

    private final SchoolService schoolService;

    @GetMapping(value = "/")
    public ResponseEntity<List<SchoolDto>> getSchools(@PathParam("region") String region,
                                                      @PathParam("schoolType") SchoolType schoolType,
                                                      @PathParam("active") Boolean active) {
        return ResponseEntity.ok(schoolService.getSchools(region, schoolType, active));
    }

    @PostMapping(value = "/")
    public ResponseEntity<SchoolDto> createSchool(@RequestBody CreateSchoolRequestDto request) {
        return ResponseEntity.ok(schoolService.create(request));
    }

    @PatchMapping(value = "/{id}/deactivate")
    public ResponseEntity<Boolean> deactivateSchool(@PathVariable("id") Long schoolId) {
        return ResponseEntity.ok(schoolService.deactivate(schoolId));
    }

}
