import './styles.scss'
import { AutoComplete, InputPicker, Input, Loader } from 'rsuite'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ObjectPicture from '../CreateNewNft1/ObjectPicture';
import Footer from '../../Footer';
import CustomPropFields from './CustomPropFields';
import { changeNftField, deleteNftMedia, storeCategory, storeNftMedia } from '../../../../store/actions/createNft';
import { wait } from '../../../../utils/wait';

const CreateNewNft2 = () => {

    const dispatch=(useDispatch());

    // import des données des catégories pour alimenter l'inputPicker
    const data = useSelector(state => state.categories.list).map(item => ({label: item, value: item }));

    // import de l'image temp du process de creation
    const tempPicture = useSelector(state => state.createNft.tempMedia)

    // gestion de l'apparission d'un champ custom prop au click
    const [customProps, setCustomProps] = useState([])
    const addCustomProp = () => {
        setCustomProps([...customProps, 'p'])
    }

    //! state local pour envoie des infos au reducer createNft au moment de la validation finale
    //CATEGORY
    const[category, setCategory] = useState('')
    console.log('category>>>',category)
    const changeCategory = (event) => {
        setCategory(event)
    }
    
    //PICTURE
    const [picture,setPicture] = useState('')
    const createNft = useSelector(state => state.createNft)

	const uploadImage = (event) => {
		setPicture(event.target.files);
		// Il faut stocker un chemin URL pour afficher l'image
		dispatch(storeNftMedia(event.target.files[0]));
	};
	const deleteImage = (event) => {
		setPicture('');
		// Il faut stocker un chemin URL pour afficher l'image
		dispatch(deleteNftMedia());
	};

    // VALIDATION FORMULAIRE
    const [isValidated, setIsValidated] = useState(false)
    const [isLoading, setIsLoading] =useState(false)

    const validateCreation = async () => {
        dispatch(storeCategory(category))
        setIsLoading(true)
        await wait(2000)
        setIsLoading(false)
        setIsValidated(true)
    }

    //!Gestion de la mise à jour du state lors du changement des inputs
    const handleChangeField = (event, item) => {
		console.log('event>>>',event)
        console.log(item.target.name);
		dispatch(changeNftField(event, item.target.name))
	}

    return (
        <div className='createNewNft2'>
            <div className="onGoingCreation">
                <div className="onGoingCreation__text">
                    <p>Ongoing creation :</p>
                    <button className='button button--save'><Link to='/'>Save and continue later</Link></button>
                </div>
                <div className="onGoingCreation__image">
                    <img src={tempPicture} alt="on going creation" />
                </div>
            </div>
            <div className="category">
                <h3>Object category</h3>
                <p>Select the category of the object :</p>
                <InputPicker data={data} className='category__input' onChange={changeCategory}/>
                <button className='button button--newCategory'>Or ask for a new category</button>
            </div>
            <div className="properties">
                <h3>Object main properties</h3>
                <div className="properties__property">
                    <p>Name</p>
                    <Input placeholder='NFT name' name='name' onChange={handleChangeField}/>
                    <p>Collection</p>
                    <Input placeholder='object brand' name='collection' onChange={handleChangeField}/>
                    <p>Model</p>
                    <Input placeholder='object brand model' name='model' onChange={handleChangeField}/>
                    <p>Serial</p>
                    <Input placeholder='object serial number' name='serial' onChange={handleChangeField}/>
                </div>
            </div>
            <div className="customProperties">
                <h3>Object custom properties</h3>
                <div className="customProperties__add">
                    <p>Add a new property</p>
                    <button onClick={addCustomProp}><ion-icon name="add-circle"></ion-icon></button>
                </div>
                {customProps.map((prop,i) => (
                        <CustomPropFields key={i} index={i}/>
                ))}
            </div>
            <div className="description">
                <h3>Object description</h3>
                <p>Highlight your NFT ! (max xxx words)</p>
                <Input as='textarea' rows={3} placeholder='Describe your NFT' name='description' onChange={handleChangeField}/>
            </div>
            <div className="picture__title">
                <h3>NFT picture</h3>
                <p>Upload the base picture for NFT profile picture creation</p>
                <div className="picture__picture">
					{createNft.media ? (
						<div className="picture__trash-icon" onClick={deleteImage}>
							<ion-icon className="picture__trash" name="trash-outline" id="overallPicture" size="large"></ion-icon>
						</div>
					) : (
						""
					)}
					{!createNft.media? (
						<>
							<label htmlFor="OverallPictureInput" className="picture__add-icon">
								<ion-icon name="add-circle-outline" size="large"></ion-icon>
							</label>
							<input type="file" accept="image/*" name="overallPicture" onChange={uploadImage} className="picture__input" id="OverallPictureInput" />
						</>
					) : (
						""
					)}
					{createNft.media ? <img className="picture__image" src={createNft.media} alt="Overall picture" /> : ""}
				</div>
            </div>
            <div className="validation">
                <button className='button button--validation' onClick={validateCreation}>Validate your creation</button>
                {isLoading? <Loader className='validation__loader' size='lg' vertical/>:''}
                {isValidated?
                <p className="validation__text">
                    <strong>Congratulation ! </strong>You’ve finished the creation process. Collector Chain will proceed your demand <strong>in the next hours.</strong> You will receive an NFT creation validation demand with the final informations. Once validated by your side, your new NFT <strong>will be automaticly displayed in your showcase</strong> 
                </p>
                :''              
                }
            </div>
        </div>
    )
}

export default CreateNewNft2