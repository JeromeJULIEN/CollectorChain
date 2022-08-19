import React from 'react'

const Nft = () => {
  return (
    <div className='nft'>
        <h1 className="nft__title">NFT name</h1>    
        <div className="nft__image">NFT image</div>
        <div className="nft__actionsButtons">
            <ion-icon name="bookmarks-outline"></ion-icon>
            <ion-icon name="share-social-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div className="nft__mainInfos">
            <div className="nft__mainInfos__authorOwner">
                <div className="nft__mainInfos__authorOwner__author">
                    <p>Author</p>
                    <h3>bibi</h3>
                </div>
                <div className="nft__mainInfos__authorOwner__owner">
                    <p>Owner</p>
                    <h3>bubu</h3>
                </div>
            </div>
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
        
    </div>
  )
}

export default Nft