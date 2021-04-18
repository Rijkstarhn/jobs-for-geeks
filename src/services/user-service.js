<<<<<<< HEAD
const API_URL = "http://localhost:4000/api/users";

export const findAllUsers = () =>
    fetch(API_URL)
        .then(response => response.json())

export const createUser = (username, user) =>
    fetch(`${API_URL}/${username}`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteUser = (uid) =>
    fetch(`${API_URL}/${uid}`, {
        method:'DELETE',
    })
        .then(response => response.json())


export const updateUser = (uid, user) =>
    fetch(`${API_URL}/${uid}`, {
        method: 'PUT',
        credentials: 'same-origin',
        body: JSON.stringify(user),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findUserForUsername= (username) =>
    fetch(`${API_URL}/${username}`)
        .then(response =>response.json())


export default {
    createUser,
    deleteUser,
    updateUser,
    findUserForUsername,
    findAllUsers
};
=======
const findAllUsers = () => {
    return fetch(`https://localhost:4000/api/users`)
        .then(response => response.json())
}

const findUserByName = (name) => {
    return fetch(`https://localhost:4000/api/users/${name}`)
        .then(response => response.json())
}

export default {
    findAllUsers, findUserByName,
}
>>>>>>> 45372905d0bce2ad286fc6e733035604110e3841
