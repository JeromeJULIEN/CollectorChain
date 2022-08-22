import { Link } from "react-router-dom";
import "./styles.scss";


const NftCard = ({name, id, media}) => {
  
  return (
    <Link to={`/nft/${id}`} className='nftCard'>
        <img src={media} alt="" className='nftCard__image'/>
        <div className='nftCard__title'>{name}</div>
    </Link>
  )
}


export default NftCard;
