
const API_URL = "http://localhost:4000/api/users";

const findAllUsers = () => {
    return fetch(`${API_URL}`)
        .then(response => response.json())
}

const findUserByName = (name) => {
    return fetch(`https://localhost:4000/api/users/${name}`)
        .then(response => response.json())
}

export const login = (user) => {
    // console.log("user:", user);
    return fetch(`${API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json()).catch(error => console.log("login error"))
}

const register = (regInfo) => {
    // alert(regInfo);
    // console.log('regInfo', regInfo);
    return fetch(`${API_URL}/register`, {
        method: 'POST',
        body: JSON.stringify(regInfo),
        headers:{
            'content-type': 'application/json'
        }
    }).then(response => response.json()).catch(error => console.log("sign up error"))
}

const updateUser = (uid, user) => {

    return fetch(`${API_URL}/${uid}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }
    })
}

const createSeekerForRecruiter = (uid, seekerId) => {
    return fetch(`${API_URL}/${uid}/seekers`, {
        method: 'POST',
        body: JSON.stringify(seekerId),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export default {
    findAllUsers, findUserByName,login, register,updateUser, createSeekerForRecruiter
}
