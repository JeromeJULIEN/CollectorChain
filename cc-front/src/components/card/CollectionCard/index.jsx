import { Link } from 'react-router-dom'
import './styles.scss'

const CollectionCard = ({text}) => {
  return (
    <Link to='/collection/id' className='collectionCard'><div >{text}</div></Link>
  )
}

export default CollectionCard