import {useEffect} from 'react'
import { Table, Header } from '../../modules'
import { useDispatch } from "react-redux";
import { loadAll } from "../../store/users";

function Users() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadAll());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Table />
    </>
  );
}

export default Users;