import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import './styles.scss'

const CreateNewNft1 = () => {
  
  const [isStep1Validated, setIsStep1Validated] = useState(false)


  //! Gestion des scroll automatique lors de validation des étapes
  const step2Ref = useRef(null);
  const validateStep1 = () => {
    step2Ref.current.scrollIntoView()
    setIsStep1Validated(true)
  }

  //! Gestion de l'upload des images
  // Creation d'un state local pour stocker les images
  const[pictures, setPictures] = useState([])
  // Creation d'un state local pour stocker le chemin URL des images
  const[picturesURL, setPicturesURL] = useState([])
  console.log('pictures >>>',pictures)
  console.log('pictures URL >>>', picturesURL)
  // Fonction pour stocker l'image dans le state local
  const uploadImage = (event) => {
    console.log('file >>>',event.target.files)
    setPictures(pictures => ({
      ...pictures,
      [event.target.name]:event.target.files
    }))
    //? Il faut stocker un chemin URL pour afficher l'image. Je n'y arrive pas...
    // setPicturesURL(picturesURL => ({
    //   ...picturesURL,
    //   [event.target.name]:URL.createObjectURL(event.target.files)
    // }))
  }
  //! Fin gestion upload image
  
  return (
    <div className='createNewNft'>
      <div className="createNewNft__title">
        <h1>Create your NFT</h1>  
        <p className='text' >Add a new NFT to your showcase. You will need a picture of the object’s serial number and the certificate of ownership associated to. The process has two steps : object and ownership validation, and then, NFT characterization and creation</p>
      </div>
      {/* STEP 1 */}
      <div className="createNewNft__step1">
        <h2 className='title title--big'>Process step 1 : Object and ownership validation</h2>
        <h3 className='title title--small'>Pictures of the object</h3>
        <p className='text'>Upload a overall picture of the object. And another one where the serial number have to be clearly visible. An automated verification will be proceed. Supported files :....</p>
        <div className="picture">
          <p className='picture__title'>Overall picture</p>
          <ion-icon className='picture__trash' name="trash-outline"></ion-icon>
          <input type="file" accept='image/*' name='overallPicture' onChange={uploadImage}/>
          <img className='picture__image' src={picturesURL.overallPicture} alt="Overall picture" />
        </div>
        <div className="picture">
          <p className='picture__title'>Serial picture</p>
          <ion-icon className='picture__trash' name="trash-outline"></ion-icon>
          <input type="file" accept='image/*' name='serialPicture' onChange={uploadImage}/>
          <img className='picture__image' src={picturesURL.serialPicture} alt="Serial picture" />
        </div>
          <p className="text">The serial number identified on the object is : 'xxxxx'</p>
          <p className="text">Validate or upload a new serial picture</p>
        <div className="createNewNft__step1__validation">
          
          {isStep1Validated?  
          <>
            <h3 className='title title--small'>Pictures of the object </h3> 
            <ion-icon className='iconValidation' green name="checkmark-done-circle"></ion-icon>
          </>
            : 
            <button type='button' className='button button--validation' onClick={validateStep1}>Validate</button>}
        </div>
        {/* STEP 2 */}
        <h3 className='title title--small' ref={step2Ref}>Pictures of the certificate of ownership</h3>
        <p className='text'>The serial number have to be clearly visible. An automated verification will be proceed. Supported files :....</p>
        <div className="picture">
          <p className='picture__title'>Serial picture</p>
          <ion-icon className='picture__trash' name="trash-outline"></ion-icon>
          <input type="file" accept='image/*' name='serialPicture' onChange={uploadImage}/>
          <img className='picture__image' src={picturesURL.serialPicture} alt="Serial picture" />
        </div>
      
        <p className="text">The serial number identified on the document is conform</p>
        <button type='button' className='button button--validation'>Validate</button>
      </div>
    </div>
  )
}

export default CreateNewNft1