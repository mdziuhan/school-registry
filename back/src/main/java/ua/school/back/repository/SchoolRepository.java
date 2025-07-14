package ua.school.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.QueryByExampleExecutor;
import ua.school.back.model.School;

public interface SchoolRepository extends JpaRepository<School, Long>, QueryByExampleExecutor<School> {
}
