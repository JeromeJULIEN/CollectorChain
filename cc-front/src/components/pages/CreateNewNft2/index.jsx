import './styles.scss'
import { AutoComplete, InputPicker, Input } from 'rsuite'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import ObjectPicture from '../CreateNewNft1/ObjectPicture';
import Footer from '../../Footer';

const CreateNewNft2 = () => {

    // import des données des catégories pour alimenter l'inputPicker
    const data = useSelector(state => state.categories.list).map(item => ({label: item, value: item }));

    // import de l'image temp du process de creation
    const tempPicture = useSelector(state => state.nfts.nftToCreate.tempMedia)

    const [customProps, setCustomProps] = useState([])

    const addCustomProp = () => {
        customProps.push('i')
        console.log(customProps)
        setCustomProps(customProps)
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
            <div className="properties">
                <h3>Object custom properties</h3>
                <div className="properties__property">
                    <p>Add a new property</p>
                    <button onClick={addCustomProp}><ion-icon name="add-circle"></ion-icon></button>
                    {customProps.map((prop,i) => (
                        <>
                            <Input key={i} placeholder='property'/>
                            <Input key={i} placeholder='tag'/>
                        </>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default CreateNewNft2