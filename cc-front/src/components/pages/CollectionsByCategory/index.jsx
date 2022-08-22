import { useSelector } from 'react-redux'
import CollectionCard from '../../card/CollectionCard'
import SearchBarCollectionsByCategory from '../../searchBars/SearchBarCollectionsByCategory'

import './styles.scss'

const CollectionsByCategory = () => {
  
    const list = useSelector(state => state.collections.list)

    return (
    <div className='collectionsByCategory'>
        <div className="collectionsByCategory__title">
             <h1 >Category name</h1>
        </div>
        <SearchBarCollectionsByCategory/>
        <div className="collectionsByCategory__list">
        {/* display de la liste sous forme de carte */}
        {list.map((text) => {
          return (
            <CollectionCard key={text} text={text}/>
          )
        })}

      </div>
    </div>
  )
}

export default CollectionsByCategory