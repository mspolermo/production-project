SELECT
    staff.id as ID,
    CONCAT(staff.surname, " ", staff.name) AS "Сотрудник",
    occupations.title AS "Должность"
FROM staff
INNER JOIN occupations 
WHERE 
    occupations.id = staff.occupation_id 
    AND occupations.id BETWEEN 2 and 4
ORDER BY staff.id;

