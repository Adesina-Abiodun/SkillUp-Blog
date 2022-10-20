import React from 'react'
import './EditorPost.css'
import { useForm } from "react-hook-form";
import axios from "axios";




function EditorPost() {
    const { register, handleSubmit } = useForm()
    const submitData = (data) => {
    console.log(data)
    axios
      .post(" ",data)
      .then((response) => {
        console.log(response)
        alert(response)

      });
  };


  return (
    <div>
          <dialog open className='dialogbox'>
              <h3>EDIT YOUR PROFILE </h3>
            <form onSubmit={handleSubmit(submitData)}>  
              <div>
            <input type="text" name='edit'{...register("edit")} placeholder='Edit your name'/>
              </div>  
              <br />
              <br />
            <div className='bio'>
            <textarea name="Bio" {...register("Bio")} id="" cols="80" rows="10" placeholder='Edit your Bio' ></textarea>
                  </div>
                  <br />
            <div className='btn'>
                    <button type='submit'>OK</button>&nbsp;&nbsp;&nbsp;
                    <button type='submit'>CANCEL</button>
            </div>
            </form>
      </dialog>
    </div>
  )
}

export default EditorPost;