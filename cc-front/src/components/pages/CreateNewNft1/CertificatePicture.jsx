import React from 'react'

const CertificatePicture = ({uploadImage, picturesURL, validateStep2, isStep2Validated}) => {

  return (
    <div>
        <h3 className='title title--small' >Pictures of the certificate of ownership</h3>
        <p className='text'>The serial number have to be clearly visible. An automated verification will be proceed. Supported files :....</p>
        <div className="picture">
          <p className='picture__title'>Certificate of ownership</p>
          <ion-icon className='picture__trash' name="trash-outline"></ion-icon>
          <input type="file" accept='image/*' name='certificatePicture' onChange={uploadImage}/>
          <img className='picture__image' src={picturesURL.certificatePicture} alt="Certificate picture" />
        </div>
      
        <p className="text">The serial number identified on the document is conform</p>
        <div className="createNewNft__step1__validation">
                {isStep2Validated?  
                <>
                    <h3 className='title title--small'>Pictures of the certificate of ownership </h3> 
                    <ion-icon className='iconValidation' green name="checkmark-done-circle"></ion-icon>
                </>
                    : 
                    <button type='button' className='button button--validation' onClick={validateStep2}>Validate</button>}
        </div>
    </div>
  )
}

export default CertificatePicture