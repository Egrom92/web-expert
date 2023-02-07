import { useState } from 'react'
import { Button } from '../../../../ui'
import { filterUsersByName } from '../../../../store/users'
import { useDispatch } from 'react-redux'

function Search() {
    const [openInput, setopenInput] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()

    const handleSearch = (searchValue) => {
        setSearchValue(searchValue)
      dispatch(filterUsersByName(searchValue))
    }

    return (
        <div className='search'>
            {openInput &&
                <input
                    type="text"
                    value={searchValue}
                    onChange={e => handleSearch(e.target.value)}
                    placeholder='Search by name, min 3 leter'
                />
            }
            <Button onClick={() => setopenInput(!openInput)} className='search__button' actionName='search' />
        </div>
    );
}

export default Search;
