import { NavLink, useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadById } from "../../store/users";
import { IcoHome } from "../../svg";
import { Button } from '../../ui'
import { Header } from '../../modules'
import UserData from "./components/UserData";


function User() {
  const params = useParams();
  const history = useNavigate();
  const orderId = parseInt(params.userId, 10);

  const { user, loading } = useSelector((state) => state.users);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadById(orderId));
  }, [dispatch]);

  const dataLabelPaths = ['username', 'email', 'address.city', 'address.zipcode', 'phone', 'website', 'company.name']

  return (
    <>
      <Header>
        <NavLink className='btn goHome btn_home' to="/"><IcoHome /></NavLink>
        <Button actionName='edit' />
      </Header>
      <UserData user={user} dataLabelPaths={dataLabelPaths} loading={loading}/>
    </>
  );
}

export default User;