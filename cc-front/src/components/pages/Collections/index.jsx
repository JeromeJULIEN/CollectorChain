import { useSelector } from 'react-redux'
import CollectionCard from '../../card/CollectionCard'
import SearchBarCollections from '../../searchBars/SearchBarCollectionsByCategory'
import './styles.scss'

const Collections = () => {
  
    const list = useSelector(state => state.collections.list)

    return (
    <div className='collections'>
        <div className="collections__title">
             <h1 >Collections</h1>
        </div>
        <SearchBarCollections/>
        <div className="collections__list">
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

export default Collections