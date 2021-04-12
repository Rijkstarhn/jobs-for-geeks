import React from 'react'
import {Link} from "react-router-dom";
import JobRow from "./job-row";


const jobs = [
  {id:"c25080a2-83ec-4f62-bd6c-ad8c88c76b10",
    title:"job1",
    notes:"applied"
  },
  {id:"dbe48cc7-4dcd-46dd-aa3b-08b03a16ee59",
    title:"job2",
    notes:"interested"
  }
]

const JobTable = () => {
    return (
        <>
          <h1>My job list</h1>
          <div className="container dy-table">
            <table className="table">
              <tbody>
              <tr>
                <th className="d-none d-md-table-cell">Job Title</th>
                <th className="d-none d-lg-table-cell">Note</th>
                <th></th>

              </tr>

              {
                jobs.map((job, ndx) =>
                    <JobRow job={job}/>
                )
              }

              </tbody>
            </table>
          </div>
        </>
    )

}

export default JobTable