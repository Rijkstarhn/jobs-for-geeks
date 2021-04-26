const API_URL = "http://localhost:4000/api/users";
//const API_URL = 'https://webbew-jobsforgeeks-server.herokuapp.com/api/users'

const findAllUsers = () => {
  return fetch(`${API_URL}`)
  .then(response => response.json())
}

const findUserByName = (name) => {
  return fetch(`${API_URL}/${name}`)
  .then(response => response.json())
}

export const login = (user) => {
  // console.log("user:", user);
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
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
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json()).catch(
      error => console.log("sign up error"))
}

const updateUser = (uid, user) => {

  return fetch(`${API_URL}/${uid}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    }
  })
}

const createJobForUser = (uid, job) => {
  return fetch(`${API_URL}/${uid}/jobs`, {
    method: 'POST',
    body: JSON.stringify(job),
    headers: {
      'content-type': 'application/json'
    }
  }).then(response => response.json()).catch(error => console.log("error"))
}

const findAllUsersSavedJobs = (uid) => {
  return fetch(`${API_URL}/${uid}/jobs`)
  .then(response => response.json())
}

const createSeekerForRecruiter = (uid, seeker) => {
  return fetch(`${API_URL}/${uid}/seekers`, {
    method: 'POST',
    body: JSON.stringify(seeker),
    headers: {
      'content-type': 'application/json'
    }
  })
      .then(response => response.json()).catch(error => console.log("error"))
}

const findAllSeekersForRecruiter = (uid) => {
  return fetch(`${API_URL}/${uid}/seekers`)
      .then(response => response.json())
}

const deleteSeekerForRecruiter = (uid, seeker) => {
  return fetch(`${API_URL}/${uid}/seekers`, {
    method: 'DELETE',
    body: JSON.stringify(seeker),
    headers: {
      'content-type': 'application/json'
    }
  })
      .then(response => response.json()).catch(error => console.log("error"))
}

const updateSeekerForRecruiter = (uid, seeker) => {
  return fetch(`${API_URL}/${uid}`, {
    method: 'PUT',
    body: JSON.stringify(seeker),
    headers: {
      'content-type': 'application/json'
    }
  })
}

export default {
  findAllUsers,
  findUserByName,
  login,
  register,
  updateUser,
  createJobForUser,
  findAllUsersSavedJobs,
  createSeekerForRecruiter,
  deleteSeekerForRecruiter,
  findAllSeekersForRecruiter,
  updateSeekerForRecruiter,
}
