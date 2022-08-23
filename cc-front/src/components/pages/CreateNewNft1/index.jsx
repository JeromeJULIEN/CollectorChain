import './styles.scss'

const CreateNewNft1 = () => {
  return (
    <div className='createNewNft'>
      <div className="createNewNft__title">
        <h1>Create your NFT</h1>  
        <p>Add a new NFT to your showcase. You will need a picture of the object’s serial number and the certificate of ownership associated to. The process has two steps : object and ownership validation, and then, NFT characterization and creation</p>
      </div>
      <div className="createNewNft__step1">
        <h2>Process step 1 : Object and ownership validation</h2>
        <h3>Picture of the object</h3>
        <p>Upload a overall picture of the object. And another one where the serial number have to be clearly visible. An automated verification will be proceed. Supported files :....</p>
      </div>
    </div>
  )
}

export default CreateNewNft1