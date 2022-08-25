import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input, InputPicker } from 'rsuite'
import { deleteProperty, storeProperty } from '../../../../store/actions/createNft';
import './styles.scss'

const CustomPropFields = ({index}) => {

    const dispatch = useDispatch();

    // state local pour stockage valeur property et tag
    const [property, setProperty] = useState('')
    const [tag, setTag] = useState('')
    
    console.log('property>>>', property)

    const changeProperty = (event) => {
        setProperty(event)
    }

    const changeTag = (event) => {
        setTag(event)
    }    

    // gestion validation 
    const [isValidated,setIsValidated] = useState(false)

    const validateProp = () => {
        setIsValidated(true)
        dispatch(storeProperty(property,tag))
    }

    // gestion suppression
    const [isDeleted,setIsDeleted] = useState(false)
    const deleteProp = () => {
        console.log('property depuis delete >>', property)
        setIsDeleted(true)
        dispatch(deleteProperty(property))
    }


    return (
        <>
        {isDeleted?'': <div className="customProperties__property" action="">
                <Input
                    name={`property${index}`} 
                    placeholder='property' 
                    disabled={isValidated?true:false}
                    onChange={changeProperty}
                />
                <Input 
                    name={`tag${index}`} 
                    placeholder='tag' 
                    disabled={isValidated?true:false}
                    onChange={changeTag}
                />
                {isValidated?
                <button onClick={deleteProp}><ion-icon name="trash" ></ion-icon></button>
                : 
                <button onClick={validateProp} ><ion-icon name="checkbox"></ion-icon></button> }            
        </div> }
        </>
    )
}

export default CustomPropFields