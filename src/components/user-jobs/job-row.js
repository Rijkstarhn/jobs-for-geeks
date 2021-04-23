import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import userActions from "../../redux/actions/user-action";
import jobActions from "../../redux/actions/job-action";

const JobRow = (
    {
      job, update, deleteJ
    }) => {

  const [editing, setEditing] = useState(false)
  const [newNote, setNewNote] = useState(job.note)

  const deleteJob = (job) => {
    deleteJ(job._id, job)
    console.log("delete")
  }

  const updateJob = () => {
    job["note"] = newNote;
    console.log(job)
    update(job._id, job)
    setEditing(false)
    console.log("update")
  }
  return (
      <tr>
        <td>

          <Link to={`/details/${job.jobId}`}>
            {job.title}</Link>


        </td>
        <td className="d-none d-lg-table-cell">         {
          !editing && (
              <>
                {job.note}
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

const stateToPropsMapper = (state) => {
  return {}
}

const dispatchPropsMapper = (dispatch) => ({
  update: (jid, job) => jobActions.updateJob(dispatch, jid, job),
  deleteJ: (jid, job) => jobActions.deleteJob(dispatch, jid, job)
})

export default connect(stateToPropsMapper, dispatchPropsMapper)(JobRow)
