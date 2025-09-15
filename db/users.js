const cities = [
  "Managua",
  "León",
  "Granada",
  "Masaya",
  "Matagalpa",
  "Nueva Guinea",
  "Chinandega",
  "Estelí",
  "Jinotega",
  "Bluefields",
  "Rivas",
  "Siuna",
];

const names = [
  "Carlos",
  "María",
  "José",
  "Ana",
  "Luis",
  "Carmen",
  "Juan",
  "Rosa",
  "Pedro",
  "Lucía",
  "Miguel",
  "Laura",
];

const lastNames = [
  "García",
  "Martínez",
  "López",
  "Rodríguez",
  "Hernández",
  "Pérez",
  "Gómez",
  "Sánchez",
  "Ramírez",
  "Torres",
];

const genders = ["M", "F"];
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

const users = Array.from({ length: 100 }, (_, i) => {
  const name = names[i % names.length];
  const lastName = lastNames[i % lastNames.length];
  const gender = genders[i % genders.length];
  const age = 18 + (i % 50); // entre 18 y 67
  const emailPrefix = alphabet[i % alphabet.length];
  const email = `${emailPrefix}${i}@example.com`;
  const phone =
    i % 7 === 0 ? null : `+5058${(1000000 + i).toString().slice(-6)}`;
  const city = cities[i % cities.length];

  return {
    name,
    last_name: lastName,
    age,
    gender,
    email,
    phone,
    city,
  };
});

export function getUsers() {
  return users;
}
