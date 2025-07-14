package ua.school.back.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "school")
public class School {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String edrpou;

    private String region;

    @Column(name = "school_type")
    private SchoolType schoolType;

    private Boolean active;

}
