import './styles.scss';
import { Panel, PanelGroup } from 'rsuite';
import { Link } from 'react-router-dom';

const Nft = () => {
  return (
    <div className='nft'>
        <h1 className="nft__title"><Link to='/collection/id'>Collection Name :</Link> NFT name</h1>    
        <div className="nft__image">NFT image</div>
        <div className="nft__actionsButtons">
            <ion-icon name="bookmarks-outline"></ion-icon>
            <ion-icon name="share-social-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div className="nft__price">
            <div className="nft__price__current">
                <p>Current price</p>
                <h3>12</h3>
            </div>
            <div className="nft__price__buy">
                <button type='button'>Buy</button>
            </div>
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
                        <p>Swatch for life</p>
                    </div>
                    <div className="nft__infos__main__rarity">
                        <h3>Rarity</h3>
                        <p>1 on 2500</p>
                    </div>
                </div>
            </Panel>
            <Panel header='Description'>
                <a className='nft__infos__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, animi nihil et ex ipsam magnam rem accusamus quis dignissimos minus qui corrupti eos minima sint quasi ipsum sapiente vel? Eos, dolor. Quisquam porro, debitis quia voluptate sequi distinctio assumenda similique! Repellat labore error voluptates praesentium odio minima, asperiores commodi quos. </a>
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