import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'


export const AddModal = ({editItem,getTutorials}) => {
    const { id, description: newDescription, title: newTitle } = editItem

    const [title, setTitle] = useState(newTitle)
    const [description, setDescription] = useState(newDescription)

    const BASE_URL='https://tutorial-api.fullstack.clarusway.com/tutorials'

    useEffect(() => {
      
      setTitle(newTitle)
      setDescription(newDescription)

    }, [newTitle,newDescription])
    
  
    const editTutor=async(tutor)=>{

      try {
        await axios.put(`${BASE_URL}/${id}/`, tutor);
      } catch (error) {
        console.log(error);
      }
      getTutorials();

    }

    const handleSubmit = e => {
      e.preventDefault();
      editTutor({ title, description });
    };

    return (
      <div
        className="modal fade"
        id="open-modal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title text-danger fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setDescription("")
                  setTitle("")
                }}
              />
            </div>
            <div className="modal-body">
              <form onClick={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
  
                <div className="text-end">
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
