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