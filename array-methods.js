const getUsers = require("./db/users.js").getUsers;

const users = getUsers();

/**
 * Metodos de arrays mas usados
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 * pop
 * push
 * shift
 * unshift
 * map
 * filter
 * find
 * some
 * every
 * reduce
 * sort
 * forEach
 */

/**
 * Ejercicios:
 * 1. Obtener un array con los nombres completos (name + last_name) de todos los usuarios.
 * 2. Filtrar los usuarios que son mayores de 30 años.
 * 3. Encontrar el primer usuario que vive en "Managua".
 * 4. Verificar si hay algún usuario sin número de teléfono.
 * 5. Comprobar si todos los usuarios tienen correo electrónico.
 * 6. Calcular la edad promedio de los usuarios.
 * 7. Ordenar los usuarios por edad, de menor a mayor.
 * 8. Obtener un objeto que agrupe a los usuarios por ciudad.
 * 9. Obtener un objeto que agrupe a los usuarios por género.
 * 10. Contar cuántos usuarios hay de cada género.
//  * 11. Contar cuántos usuarios hay de cada ciudad.
 * 12. Contar cuántos usuarios no tienen teléfono.
 * 13. Obtener un array con los correos electrónicos de los usuarios mayores de 25 años.
 * 14. Obtener un array con los nombres de los usuarios que viven en "León" y son menores de 40 años.
 * 15. Obtener un objeto que agrupe a los usuarios por género y dentro de cada género, agruparlos por ciudad.
 * 16. Obtener un objeto que agrupe a los usuarios por ciudad y dentro de cada ciudad, agruparlos por género.
 * 17. Obtener un objeto que agrupe a los usuarios por las primeras letras de su nombre.
 * 18. Obtener un objeto que agrupe a los usuarios por las primeras letras de su apellido.
 * 19. Obtener un objeto que agrupe a los usuarios por edad (18-25, 26-35, 36-45, 46-55, 56+).
 * 20. Obtener un array remapeado usando camelCase para las llaves de los objetos.
//  * 22. Obtener un array solo con usuarios que no tengan valores nulos o undefined en ninguna de sus propiedades.
 * 23. Obtener un array con solo las claves de los objetos.
 * 24. Obtener un array con solo los valores de los objetos.
 */


// ejercicio 11

const CityUserNumber = users
.reduce((acc, items) => {
  acc[items.city] = (acc[items.city] || 0) + 1;
  return acc;
}, []);

console.log('ejercicio 11', CityUserNumber);

// ejercicio 11


//ejercicio 22

const UserNotNull = users.filter(
  (user) =>
    user.name !== null &&
    user.last_name !== null &&
    user.age !== null &&
    user.gender !== null &&
    user.email !== null &&
    user.phone !== null &&
    user.city !== null
);

console.log('ejercicio 22', UserNotNull);
