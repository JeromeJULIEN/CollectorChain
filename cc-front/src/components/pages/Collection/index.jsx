
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchNftByCollectionId } from '../../../../store/actions/data'
import NftCard from '../../card/NftCard'
import SearchBarCollection from '../../searchBars/SearchBarCollection'
import './styles.scss'

const Collection = () => {
  
    const dispatch = useDispatch();

    const {id} = useParams()
    console.log('id de la collection >>>', id);
    
    const list = useSelector(state => state.nfts.list)
    //! Gestion donnée en local
    // const list = useSelector(state => state.nfts.list)
    // const selectedCollection = list.filter(nft => nft.collection_id == id)
    // console.log('filtered collection>>>', selectedCollection)
    
    //! Gestion données depuis API
    if(id){
        useEffect(() => {dispatch(fetchNftByCollectionId(id))},[])
    }


    return (
    <div className='collection'>
        <div className="collection__title">
            <div className="collection__title__image">Collection main image</div>
            <div className="collection__title__text">
                <div className='collection__title__text__main'>
                    <div className="collection__title__text__main__head">
                        <h1 >Collection title</h1>
                        <ion-icon name="share-social-outline"></ion-icon>
                    </div>
                    <p>Collection short description</p>
                </div>
                <div className="collection__title__text__stats">
                    <div className="collection__title__text__stats__items">
                        <h3>items</h3>
                        <p>145</p>
                    </div>
                    <div className="collection__title__text__stats__owners">
                        <h3>owners</h3>
                        <p>98</p>
                    </div>
                    <div className="collection__title__text__stats__floorPrice">
                        <h3>Floor price</h3>
                        <p>0,94</p>
                    </div>
                </div>
            </div>
        </div>
        <SearchBarCollection/>
        <div className="collection__list">
          {/* display de la liste sous forme de carte */}
          {list.map((nft) => {
            return (
              <NftCard key={nft.id} {...nft}/>
            )
          })}
        </div>
    </div>
    )}


export default Collection;
