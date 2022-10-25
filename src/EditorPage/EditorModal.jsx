import React from 'react';
import './EditorModal.css';
import { useForm, } from "react-hook-form";
import axios from "axios";




function EditorModal({setOpenModal}) {
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
      
          <div className='dialogContainer'>

            <dialog open className='dialogbox-Modal' > 
              <h3>EDIT YOUR PROFILE </h3>
              <br />
            <form onSubmit={handleSubmit(submitData)}>  
          <div className='put'>
            <input type="file" />
            <br />
            <br/>
            <input type="text" name='edit'{...register("edit")} placeholder='Edit your name'/>
              </div>  
              <br />
              <br />
            <div className='bioModal'>
            <textarea name="Bio" {...register("Bio")} id="" cols="80" rows="10" placeholder='Edit your Bio' ></textarea>
                  </div>
                  <br />
            <div className='btnModal'>
                    <button type='submit'>OK</button>&nbsp;&nbsp;&nbsp;
                    <button type='submit' onClick={()=>setOpenModal(false)}>CANCEL</button>
            </div>
            </form>
              </dialog>
              </div>
    
  )
} 

export default EditorModal;

