function createDivElements(arr) {
    const filteredUsers = arr.filter(user => !user.first_name);
    filteredUsers.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.className = "user";

        const avatarImg = document.createElement("img");
        avatarImg.src = user.avatar_url;
        avatarImg.alt = "Avatar";

        const userIdDiv = document.createElement("div");
        userIdDiv.textContent = `User ID: ${user.user_ID}`;

        const userLoginDiv = document.createElement("div");
        userLoginDiv.textContent = `User Login: ${user.user_login}`;

        userDiv.appendChild(avatarImg);
        userDiv.appendChild(userIdDiv);
        userDiv.appendChild(userLoginDiv);

        usersContainer.appendChild(userDiv);
    });
}
const BASE_URL = 'https://stage-two.i-wp-dev.com/wp-json/v4/'
// const data = {
//     email: "mournexxx@gmail.com",
//     password: "4fcMc463!"
// }
// const REGISTRATION_URL = BASE_URL + 'registration'
// 
// const postOptions = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// };
// fetch(postUrl, postOptions)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log("Успешный ответ от сервера:", data);
//     })
//     .catch(error => {
//         console.error("Произошла ошибка:", error);
//     });
// jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlLXR3by5pLXdwLWRldi5jb20vIiwiYXVkIjoiaHR0cHM6Ly9zdGFnZS10d28uaS13cC1kZXYuY29tLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjoxNiwidXNlcl9lbWFpbCI6Im1vdXJuZXh4eEBnbWFpbC5jb20iLCJ1c2VyX3Bhc3MiOiI0ZmNNYzQ2MyEifX0.mrr7x8hPrk7ZzTyup8vRiKLewsDss6ZGAY76fFbScr8', message: 'The User was created successfully'
const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdlLXR3by5pLXdwLWRldi5jb20vIiwiYXVkIjoiaHR0cHM6Ly9zdGFnZS10d28uaS13cC1kZXYuY29tLyIsImlhdCI6MTM1Njk5OTUyNCwibmJmIjoxMzU3MDAwMDAwLCJkYXRhIjp7ImlkIjoxNiwidXNlcl9lbWFpbCI6Im1vdXJuZXh4eEBnbWFpbC5jb20iLCJ1c2VyX3Bhc3MiOiI0ZmNNYzQ2MyEifX0.mrr7x8hPrk7ZzTyup8vRiKLewsDss6ZGAY76fFbScr8';
const USERS_URL = BASE_URL + 'users'
const getOptions = {
    method: "GET",
    headers: {
        Authorization: `Bearer ${jwtToken}`
    }
};

fetch(USERS_URL, getOptions)
    .then(response => response.json())
    .then(data => createDivElements(data))
    .catch(error => console.log(error))


const USER_URL = BASE_URL + 'user'
const putData = {
    id: 18,
    avatar_url: "https://cs5.pikabu.ru/images/big_size_comm/2015-04_2/14285721368204.jpg"
};
const putOptions = {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`
    },
    body: JSON.stringify(putData)
};

fetch(USER_URL, putOptions)




