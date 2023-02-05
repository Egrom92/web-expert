import { useEffect } from 'react'
import { Table, Header } from '../../modules'
import { useDispatch } from "react-redux";
import { loadAll } from "../../store/users";
import { Search } from "./components"
import { Button } from '../../ui'

function Users() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAll());
  }, [dispatch]);
  
  return (
    <>
      <Header>
        <Search />
        <Button className='header__add' actionName='add'/>
      </Header>
      <Table />
    </>
  );
}

export default Users;