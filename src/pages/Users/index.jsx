import { useEffect, useState } from 'react'
import { Table, Header } from '../../modules'
import { useDispatch } from "react-redux";
import { loadAll } from "../../store/users";
import { Search, UserAdd } from "./components"

function Users() {
  const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAll());
  }, [dispatch]);
  
  return (
    <>
      <Header>
        <Search />
        <UserAdd showModal={showModal} setShowModal={setShowModal}/>
      </Header>
      <Table />
    </>
  );
}

export default Users;