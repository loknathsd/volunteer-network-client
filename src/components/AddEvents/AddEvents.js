import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL,setImageURL] = useState(null)
    const onSubmit = data => {
      const eventData = {
        name :data.name,
        imageURL : imageURL
      }
      const url =`http://localhost:5055/addEvent`

      fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(eventData)

      })
      .then(res =>console.log('data base is connected', res))
    };
    const handleImageUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','27857de30973670589e3e40a5817902c')
        imageData.append('image', event.target.files[0])
    
        axios.post('https://api.imgbb.com/1/upload' , imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  defaultValue="Event" {...register("name")} />
                <br />

                <input type="file" onChange={handleImageUpload} /> <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;
 