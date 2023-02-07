import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IcoHome } from "../../svg";
import { Button } from '../../ui'
import { Header } from '../../modules'
import { UserData, UserModal } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { loadById, setUserNewData } from '../../store/users'

function User() {
  const { user, loading } = useSelector((state) => state.users);
  const [showModal, setShowModal] = useState(false)

  const params = useParams();
  const userId = parseInt(params.userId, 10);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadById(userId));
  }, [dispatch, userId]);

  return (
    <>
      <Header>
        <NavLink className='btn goHome btn_home' to="/"><IcoHome /></NavLink>
        <Button actionName='edit' onClick={() => setShowModal(!showModal)} />
      </Header>
      <UserData user={user} loading={loading} />
      <UserModal onSave={setUserNewData} user={user} showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}



export default User;
export { UserModal }