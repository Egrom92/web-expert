import { useState } from 'react'
import { TR, TH } from './components';
import { useSelector } from "react-redux";
import Scelet from './components/TR/Scelet';
import { UserModal } from '../../pages/User';

function Table() {
    const { users, loading } = useSelector((state) => state.users);
    const [showModal, setShowModal] = useState(false)
    const [activeUser, setActiveUser] = useState(null)

    const editUserHandel = (user) => {
        setActiveUser(user)
        setShowModal(true)
    }

    return (
        <>
            <section className='table'>
                <div className="container">
                    <TH />
                    {loading && <Scelet count={10} />}
                    {!loading && users.map(user => <TR editUser={() => editUserHandel(user)} key={user.id} user={user} />)}
                </div>
            </section>
            <UserModal user={activeUser} showModal={showModal} setShowModal={setShowModal} />
        </>

    )
}

export default Table