import './styles.scss'
import { Dropdown } from "@nextui-org/react";

const SearchBarCollection = () => {
  return (
    <div className='searchBarCollection'>
        <form className='searchBarCollection__form'>
            <input 
                type='text' 
                placeholder='Search NFT by property or tag'
                name='searchNFTField'
            />
        </form>
        <div className="searchBarCollection__filters">
        <Dropdown>
            <Dropdown.Button flat>Property</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="popularityToUp">Functionnality</Dropdown.Item>
                <Dropdown.Item key="popularityToDown">Finish</Dropdown.Item>
                <Dropdown.Item key="priceToUp">Rarity</Dropdown.Item> 
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Button flat>Tag</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="popularityToUp">Timer</Dropdown.Item>
                <Dropdown.Item key="popularityToDown">Leather</Dropdown.Item>
                <Dropdown.Item key="priceToUp">Chronograph</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
            <Dropdown.Button flat>Order by</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="popularityToUp">Popularity low to high</Dropdown.Item>
                <Dropdown.Item key="popularityToDown">Popularity high to low</Dropdown.Item>
                <Dropdown.Item key="priceToUp">Price low to high</Dropdown.Item>
                <Dropdown.Item key="priceToDown">Price high to low</Dropdown.Item> 
            </Dropdown.Menu>
        </Dropdown>
        </div>

    </div>
  )
}

export default SearchBarCollection