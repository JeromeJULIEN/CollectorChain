import './styles.scss';
import { Panel, PanelGroup } from 'rsuite';
import { Link, useParams } from 'react-router-dom';
import NftCard from '../../card/NftCard';
import SlideAuto from '../../slides/SlideAuto';
import { SwiperSlide } from 'swiper/react';
import Slide_2x2 from '../../slides/Slide_2x2';

const Nft = ({nfts}) => {
    // on récupère l'id de la route paramétré
    const {id} = useParams();
   // on recherche le nft correspondant dans la liste courante du state
    const displayedNft = nfts.find(nft => nft.id == id)
    
 

  return (
    <div className='nft'>
        <h1 className="nft__title"><Link to='/collection/id'>Collection Name : </Link>{displayedNft.name}</h1>    
        <img src={displayedNft.media} alt="" className='nft__image'/>
        <div className="nft__actionsButtons">
            <ion-icon name="bookmarks-outline"></ion-icon>
            <ion-icon name="share-social-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div className="nft__price">
            {displayedNft.forSale?
            <>
            <div className="nft__price__current">
                <p>Current price</p>
                <h3>{displayedNft.price}</h3>
            </div>
            <div className="nft__price__buy">
                <button type='button'>Buy</button>
            </div>
            </>
            :
            <>
            <p>This nft is not for sale</p>
            <button type='button'>Contact the owner</button>
            </>
        }
        </div>

        <PanelGroup className="nft__infos" accordion bordered>
            <Panel header='Main informations' defaultExpanded>
                <div className="nft__infos__main">
                    <div className="nft__infos__main__author">
                        <h3>Author</h3>
                        <p>Rolex King</p>
                    </div>
                    <div className="nft__infos__main__owner">
                        <h3>Owner</h3>
                        <p>{displayedNft.user_id}</p>
                    </div>
                    <div className="nft__infos__main__rarity">
                        <h3>Rarity</h3>
                        <p>1 on 2500</p>
                    </div>
                </div>
            </Panel>
            <Panel header='Description' defaultExpanded>
                <a className='nft__infos__description'>{displayedNft.description}</a>
            </Panel>
            <Panel header='Details'>
                <div className="nft__infos__details">
                        <h3>Contract adress</h3>
                        <p>0x7dae....a057</p>
                        <h3>Token ID</h3>
                        <p>2504</p>
                        <h3>Creator Earnings</h3> 
                        <p>2.5%</p>
                </div>
            </Panel>
            <Panel header='Properties'>
                <div className="nft__infos__properties">
                    <p>Chronograph</p>
                    <p>Automatic</p>
                    <p>Saphir glass</p>
                    <p>Chronograph</p>
                    <p>Automatic</p>
                    <p>Saphir glass</p>
                    <p>Chronograph</p>
                    <p>Automatic</p>
                    <p>Saphir glass</p>

                </div>
            </Panel>
        </PanelGroup>       
      
        
    </div>
  )
}

export default Nft