const findJobsByTitle = (title) => {
    return fetch(`https://jobs.github.com/positions.json?description=${title}&page=1`)
        .then(response => response.json())
}

const findJobByID = (jobId) => {
    return fetch(`https://jobs.github.com/positions/${jobId}.json`)
        .then(response => response.json())
}

export default {
    findJobsByTitle, findJobByID
}