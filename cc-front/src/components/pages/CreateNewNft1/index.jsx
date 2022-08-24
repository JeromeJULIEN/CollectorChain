import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import CertificatePicture from './certificatePicture'
import ObjectPicture from './ObjectPicture'
import ProveYourself from './ProveYourself'
import './styles.scss'

const CreateNewNft1 = () => {
  
   //! Gestion de la validation des étapes
   const [isStep1Validated, setIsStep1Validated] = useState(false)
   const [isStep2Validated, setIsStep2Validated] = useState(false)
 
   const validateStep1 = () => {
     setIsStep1Validated(true)
   };
 
   const validateStep2 = () => {
     console.log('click')
     setIsStep2Validated(true)
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
    setPicturesURL(picturesURL => ({
      ...picturesURL,
      [event.target.name]:URL.createObjectURL(event.target.files[0])
    }))
  }
  //! Fin gestion upload image
  
  return (
    <div className='createNewNft'>
    <div className="createNewNft__title">
      <h1>Create your NFT</h1>  
      <p className='text' >Add a new NFT to your showcase. You will need a picture of the object’s serial number and the certificate of ownership associated to. The process has two steps : object and ownership validation, and then, NFT characterization and creation</p>
    </div>
    {/* STEP 1 */}
    <ObjectPicture uploadImage={uploadImage} picturesURL={picturesURL} isStep1Validated={isStep1Validated} validateStep1={validateStep1}/>
    {/* STEP 2 */}
    {isStep1Validated ?
    <CertificatePicture uploadImage={uploadImage} picturesURL={picturesURL} isStep2Validated={isStep2Validated} validateStep2={validateStep2}/>
    :
    ''
    }
    {/* STEP 3 */}
    {isStep2Validated?
    <ProveYourself uploadImage={uploadImage} picturesURL={picturesURL}/>
    :
    ''
    }
    </div>
  )
}

export default CreateNewNft1