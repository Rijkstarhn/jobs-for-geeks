// const JOB_API_URL = 'http://localhost:4000'
const JOB_API_URL = 'https://webbew-jobsforgeeks-server.herokuapp.com/'

const findJobs = (description, location, isFullTime) => {

    return fetch(`${JOB_API_URL}/search/${description}/${location}/${isFullTime}`)
    .then(response => response.json())
    // if (isFullTime) {
    //     return fetch(`${JOB_API_URL}/description=${description}&location=${location}&full_time=true&page=1`)
    //         .then(response => response.json())
    // }
    // return fetch(`https://jobs.github.com/positions.json?description=${description}&location=${location}&page=1`)
    //     .then(response => response.json())
}

const findAllJobs = () => {
    return fetch(`${JOB_API_URL}/search/default`)
    .then(response => response.json())
}

const findJobByID = (jobId) => {
    return fetch(`${JOB_API_URL}/search/id/${jobId}`)
    .then(response => response.json())
}

export default {
    findJobs, findJobByID, findAllJobs
}