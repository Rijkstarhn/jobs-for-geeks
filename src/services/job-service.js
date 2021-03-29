const findJobs = (description, location) => {
    return fetch(`https://jobs.github.com/positions.json?description=${description}&location=${location}&page=1`)
        .then(response => response.json())
}

const findJobByID = (jobId) => {
    return fetch(`https://jobs.github.com/positions/${jobId}.json`)
        .then(response => response.json())
}

export default {
    findJobs, findJobByID
}