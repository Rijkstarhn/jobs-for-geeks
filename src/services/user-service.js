
const API_URL = "http://localhost:4000/api/users";

const findAllUsers = () => {
    return fetch(`https://localhost:4000/api/users`)
        .then(response => response.json())
}

const findUserByName = (name) => {
    return fetch(`https://localhost:4000/api/users/${name}`)
        .then(response => response.json())
}

export const login = (user) =>
    fetch(`${API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }
    })
    .then(response => response.json()).catch(error => console.log("error"))

export default {
    findAllUsers, findUserByName,login
}
