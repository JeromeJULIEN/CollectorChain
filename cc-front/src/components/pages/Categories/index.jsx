import { useSelector } from 'react-redux'
import Card from '../../Card'
import SearchBarCategories from '../../SeachBarCategories'
import './styles.scss'

const Categories = () => {

  // import depuis le state de la liste en cours
  const list=useSelector(state => state.card.list)

  return (
    <div className='categories'>
      <h1>Explore Categories</h1>
      <SearchBarCategories/>
      <div className="categories__list">
        {/* display de la liste sous forme de carte */}
        {list.map((text) => {
          return (
            <Card key={text} text={text}/>
          )
        })}

      </div>
    </div>
  )
}

export default Categories