const API_URL = "http://localhost:4000/api/jobs";
//const API_URL = 'https://webbew-jobsforgeeks-server.herokuapp.com/api/jobs'

export const findAllJobs = () =>
    fetch(API_URL)
        .then(response => response.json())

// export const createJob = (userId, job) =>
//     fetch(`${API_URL}/${userId}/job`, {
//         method: 'POST',
//         body: JSON.stringify(job),
//         headers:{
//             'content-type': 'application/json'
//         }
//     })
//         .then(response => response.json())

export const deleteJob = (jobId) =>
    fetch(`${API_URL}/${jobId}`, {
        method:'DELETE',
    })
        .then(response => response.json())


export const updateJob = (jobId, job) =>
    fetch(`${API_URL}/${jobId}`, {
        method: 'PUT',
        credentials: 'same-origin',
        body: JSON.stringify(job),
        headers:{
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findJobForUser= (userId) =>
    fetch(`${API_URL}/${userId}/job`)
        .then(response =>response.json())

export const findJobById=(jobId) =>
    fetch(`${API_URL}/${jobId}`)
        .then(response => response.json())


export default {
    deleteJob,
    updateJob,
    findJobForUser,
    findAllJobs,
    findJobById,
};