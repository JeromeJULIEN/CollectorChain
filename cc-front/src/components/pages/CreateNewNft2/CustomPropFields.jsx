import { useState } from 'react'
import { Input } from 'rsuite'
import './styles.scss'

const CustomPropFields = ({index}) => {

    const [isValidated, setIsValidated] = useState(false)

    const validateProp = () => {
        setIsValidated(true)
    }


    return (
        <div className="customProperties__property">
            <Input name={`property${index}`} placeholder='property'/>
            <Input name={`tag${index}`} placeholder='tag'/>
            {isValidated?
                <button ><ion-icon name="trash"></ion-icon></button>
                : 
                <button onClick={validateProp}><ion-icon name="checkbox"></ion-icon></button> }
           
            
        </div>
    )
}

export default CustomPropFields