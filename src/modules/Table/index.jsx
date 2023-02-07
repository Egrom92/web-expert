import { useState } from 'react'
import { TR, TH } from './components';
import { useSelector } from "react-redux";
import Scelet from './components/TR/Scelet';
import { UserModal } from '../../pages/User';
import { Button, Modal } from '../../ui';
import { useDispatch } from "react-redux";
import { remove, setActiveUser, setUserNewData } from '../../store/users'

function Table() {
    const { users, loading, user } = useSelector((state) => state.users);
    const [showModaEditlUser, setShowModaEditlUser] = useState(false)
    const [showModaDeletelUser, setShowModaDeletelUser] = useState(false)

    const dispatch = useDispatch()


    const handelOpenModaEditUser = (user) => {
        dispatch(setActiveUser(user))
        setShowModaEditlUser(true)
    }

    const handelOpenModaDeletelUser = (user) => {
        setShowModaDeletelUser(true)
        dispatch(setActiveUser(user))
    }

    const handelDeleteUser = (user) => {
        dispatch(remove(user.id));
        setShowModaDeletelUser(false)
    }

    return (
        <>
            <section className='table'>
                <div className="container">
                    <TH />
                    {loading && <Scelet count={10} />}
                    {!loading && users.map(user =>
                        <TR
                            editUser={() => handelOpenModaEditUser(user)}
                            deleteUser={() => handelOpenModaDeletelUser(user)}
                            key={user.id}
                            user={user}
                        />)}
                </div>
            </section>
            <UserModal onSave={setUserNewData} user={user} showModal={showModaEditlUser} setShowModal={setShowModaEditlUser} />
            <Modal className='table__delete-modal' show={showModaDeletelUser} close={setShowModaDeletelUser}>
                <p>Are you sure you want to delete the user?</p>
                {<Button onClick={() => handelDeleteUser(user)} className='table__delete-modal-button' actionName='done' />}
            </Modal>
        </>

    )
}

export default Table