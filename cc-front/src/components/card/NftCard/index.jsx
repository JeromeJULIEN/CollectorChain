import { Link } from 'react-router-dom'
import './styles.scss'

const NftCard = ({text}) => {
  return (
    <Link to='/nft/id' className='nftCard'><div >{text}</div></Link>
  )
}

export default NftCard