import React from 'react'
import { Link } from 'react-router-dom'

const ProveYourself = ({uploadImage, picturesURL}) => {
  return (
    <div>
        <h3 className='title title--small' >Prove yourself</h3>
        <p className='text'>Take a picture of you, including the certificate of ownership and the object. An automated verification by be proceed</p>
        <div className="picture">
          <p className='picture__title'>Yourself picture</p>
          <ion-icon className='picture__trash' name="trash-outline"></ion-icon>
          <input type="file" accept='image/*' name='yourselfPicture' onChange={uploadImage}/>
          <img className='picture__image' src={picturesURL.yourselfPicture} alt="Yourself picture" />
        </div>
        <p className="text">Congratulation ! We can certify the information you've provided us</p>   
         <button type='button' className='button button--validation'><Link to='/creation/createnewnft2'>Continue to step 2</Link> </button>

    </div>
  )
}

export default ProveYourself