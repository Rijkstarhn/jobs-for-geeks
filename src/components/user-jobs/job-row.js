import React, {useState} from 'react'
import {Link} from "react-router-dom";

const JobRow = (
    {
      job
    }) => {

  const [editing, setEditing] = useState(false)
  const [newNote, setNewNote] = useState(job.notes)
  const deleteJob = (course) => {
    console.log("delete")
  }

  const updateJob = () => {
    setEditing(false)
    console.log("update")
  }
  return (
      <tr>
        <td>

                <Link to={`/details/${job.id}`}>
                  {job.title}</Link>


        </td>
        <td className="d-none d-lg-table-cell">         {
          !editing && (
              <>
                {job.notes}
              </>
          )

        }
          {
            editing && <input className="form-control"
                              value={newNote}
                              onChange={e => {
                                setNewNote(e.target.value)
                              }
                              }

            ></input>
          }
        </td>

        <td>
          {editing && <i className="fas fa-times float-right fa-2x"
                         onClick={() => {
                           setEditing(false)
                           deleteJob(job)
                         }
                         }></i>}
          {editing && <i className="fas fa-check float-right fa-2x"
                         onClick={updateJob}></i>}
          {!editing && <i className="fas fa-edit float-right fa-2x"
                          onClick={() => {
                            //
                            // console.log('HERE',title)
                            // console.log('HERE',newTitle)
                            // setNewTitle(title)
                            setEditing(true)
                          }}></i>}
        </td>
      </tr>)
}

export default JobRow