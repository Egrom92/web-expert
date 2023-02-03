import {useState} from 'react'
import {Input, Button} from '../../../../ui'

function Search() {
    const [openInput, setopenInput] = useState(false)



    return (
        <div className='search'>
            {openInput ? <Input/> : null}
            <Button onClick={() => setopenInput(!openInput)} className='search__button' actionName='search'/>
            <Button className='search__add' actionName='add'/>
        </div>
    );
  }
  
  export default Search;