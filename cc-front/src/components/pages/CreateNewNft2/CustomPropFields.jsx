import { useState } from 'react'
import { useSelector } from 'react-redux';
import { Input, InputPicker } from 'rsuite'
import './styles.scss'

const CustomPropFields = ({index}) => {

   // import des données des propriété pour alimenter l'inputPicker
   const data = useSelector(state => state.properties.list).map(item => ({label: item, value: item }));

    const [isValidated, setIsValidated] = useState(false)

    const validateProp = () => {
        setIsValidated(true)
    }


    return (
        <div className="customProperties__property">
            <InputPicker data={data} name={`property${index}`} placeholder='property' disabled={isValidated?true:false} />
            <Input name={`tag${index}`} placeholder='tag' disabled={isValidated?true:false}/>
            {isValidated?
                <button ><ion-icon name="trash"></ion-icon></button>
                : 
                <button onClick={validateProp} ><ion-icon name="checkbox"></ion-icon></button> }
           
            
        </div>
    )
}

export default CustomPropFields