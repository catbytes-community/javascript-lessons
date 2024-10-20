const allUsers = [
  {
    name: "Marina",
    lastName: "Kim",
  },
  {
    name: "Elena",
    lastName: "Last name 1",
  },
  {
    name: "Julia",
    lastName: "Last name 2", // key value pair
  },
];

// .filter --> in-built method in JavaScript to work with Array

// task: filter the list of users to include only Julia
console.log(allUsers.filter((user) => user.name === "Julia")[0]); // filter the list to only include elements with value "Julia"

// запрос к АПИ (нам нужно получить все товары из Германии)
// Бэкенд отправляет запрос к базе данных (SQL Query)

// Database schema -->
// usersTable
// Marina --> linked with ordersTable

// ordersTable
// orderId, userName (Marina), orderAmount (USD 100)
// orderId, userName (Marina), orderAmount (USD 1000)
