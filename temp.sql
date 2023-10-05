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

------
SELECT 
    staff_results.employee AS "Продавец", 
    CONCAT (staff_results.sells_sum, " рублей") AS "Результат"
FROM occupations
INNER JOIN (
    SELECT 
        staff.occupation_id, 
        CONCAT(staff.surname, " ", staff.name) AS employee, 
        staff_sells.sells_sum
    FROM staff
    INNER JOIN (
        SELECT 
            sells.staff_id, 
            ROUND(SUM(bills_sum.price_sum), 2) AS sells_sum
        FROM sells
        INNER JOIN (
            SELECT 
                bills.bill_number, 
                ROUND(SUM(goods.price), 2) AS price_sum
            FROM bills
            INNER JOIN goods
            WHERE bills.goods_id=goods.id
            GROUP BY bill_number
        ) AS bills_sum
        WHERE sells.bill_number = bills_sum.bill_number
        GROUP BY sells.staff_id
    ) AS staff_sells 
    WHERE staff.id = staff_sells.staff_id
) AS staff_results
WHERE occupations.id = staff_results.occupation_id AND occupations.id = 4
ORDER BY staff_results.sells_sum DESC LIMIT 3;