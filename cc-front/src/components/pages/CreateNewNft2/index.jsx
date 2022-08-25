import './styles.scss'
import { AutoComplete, InputPicker, Input } from 'rsuite'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ObjectPicture from '../CreateNewNft1/ObjectPicture';
import Footer from '../../Footer';
import CustomPropFields from './CustomPropFields';

const CreateNewNft2 = () => {

    // import des données des catégories pour alimenter l'inputPicker
    const data = useSelector(state => state.categories.list).map(item => ({label: item, value: item }));

    // import de l'image temp du process de creation
    const tempPicture = useSelector(state => state.createNft.tempMedia)

    // gestion de l'apparission d'un champ custom prop au click
    const [customProps, setCustomProps] = useState([])
    const addCustomProp = () => {
        setCustomProps([...customProps, 'p'])
    }

    // state local pour envoie des infos au reducer createNft au moment de la validation finale
    const [description, setDescription] = useState('')
    console.log('description >>>', description)

    const changeDescription = event => {
        setDescription(event)
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
                <InputPicker data={data} className='category__input'/>
                <button className='button button--newCategory'>Or ask for a new category</button>
            </div>
            <div className="properties">
                <h3>Object main properties</h3>
                <div className="properties__property">
                    <p>Collection</p>
                    <Input placeholder='object brand'/>
                    <p>Model</p>
                    <Input placeholder='object brand model'/>
                    <p>Serial</p>
                    <Input placeholder='object serial number'/>
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
                <Input as='textarea' rows={3} placeholder='Describe your NFT' onChange={changeDescription}/>
            </div>
            <div className="picture">
                <h3>NFT picture</h3>
                <p>Upload the base picture for NFT profile picture creation</p>
            </div>
        </div>
    )
}

export default CreateNewNft2