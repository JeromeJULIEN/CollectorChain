import { useSelector } from 'react-redux';
import NftCard from '../../card/NftCard';
import SearchBarCollection from '../../searchBars/SearchBarCollection';
import SearchBarFavorites from '../../searchBars/SearchBarFavorites';
import './styles.scss';

const Favorites = () => {

    const list = useSelector(state => state.user.favorites)
    const count = list.length

    return (
        <div className='favorite'>
        <div className="favorite__title">
            <div className="favorite__title__text">
                <div className='favorite__title__text__main'>
                    <div className="favorite__title__text__main__head">
                        <h1 >My favorites collection</h1>
                        <ion-icon name="share-social-outline"></ion-icon>
                    </div>
                </div>
                <div className="favorite__title__text__stats">
                    <div className="favorite__title__text__stats__items">
                        <h3>items</h3>
                        <p>{count}</p>
                    </div>
                    <div className="favorite__title__text__stats__owners">
                        <h3>owners</h3>
                        <p>98</p>
                    </div>
                    <div className="favorite__title__text__stats__floorPrice">
                        <h3>Floor price</h3>
                        <p>0,94</p>
                    </div>
                </div>
            </div>
        </div>
        <SearchBarFavorites/>
        <div className="favorite__list">
        {/* display de la liste sous forme de carte */}
        {list.map((nft) => {
            return (
            <NftCard key={nft.id} {...nft}/>
            )
        })}
        </div>
    </div>
    )
}

export default Favorites