import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadById } from "../../store/users";
import { IcoHome } from "../../svg";
import { Button, Modal } from '../../ui'
import { Header } from '../../modules'
import UserData from "./components/UserData";


function User() {
  const params = useParams();
  const history = useNavigate();
  const orderId = parseInt(params.userId, 10);

  const [showModal, setShowModal] = useState(true)

  const { user, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadById(orderId));
  }, [dispatch]);

  const dataLabelPaths = ['username', 'email', 'address.city', 'address.zipcode', 'phone', 'website', 'company.name']

  const openModalHandler = () => {

  }
  return (
    <>
      <Header>
        <NavLink className='btn goHome btn_home' to="/"><IcoHome /></NavLink>
        <Button actionName='edit' onClick={()=> setShowModal(!showModal)}/>
      </Header>
      <UserData user={user} dataLabelPaths={dataLabelPaths} loading={loading}/>
      <Modal show={showModal} close={() => setShowModal(false)}>
        
      </Modal>
    </>
  );
}

export default User;