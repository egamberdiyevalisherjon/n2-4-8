let newUser = {
  fName: "Eshmat",
  lName: "Toshmatov",
  email: "eshmat@gmail.com",
  age: 32,
  isMarried: true,
};

// async function post(url, data) {
//   return await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-type": "application/json",
//       token: "dkhfaihfiha.sgdjkfghsierhoiadbvsjdbvalsd.akuhdiugfagd7824",
//     },
//   }).then((res) => res.json());
// }

// post("https://jsonplaceholder.typicode.com/users", newUser).then((data) => {
//   console.log(data);
// });

// let data = {
//   email: "eve.holt@reqres.in",
//   password: "cityslicka",
// };

// fetch("https://reqres.in/api/login", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => {
//     let token = data.token;

//     localStorage.setItem("token", token);
//   });

// fetch("https://facebook.com/", { mode: "no-cors" });

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.token = "token1";

axios.post("/users", newUser).then((res) => {
  console.log(res.data);
});

axios.get("/todos").then((res) => {
  console.log(res.data);
});

axios.post(
  "https://reqres.in/api/login",
  {
    email: "sdf@df.com",
    password: "dfsdf",
    token: "sdfsd",
  },
  {
    headers: {
      token: "token2",
    },
  }
);
