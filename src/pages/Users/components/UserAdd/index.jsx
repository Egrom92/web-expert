import {Button} from '../../../../ui'
import {UserModal} from '../../../User'
import { createNewUser } from "../../../../store/users";

function UserAdd(props) {
    const {showModal, setShowModal} = props
    return (
        <>
            <Button className='header__add' onClick={() => setShowModal(true)} actionName='add' />
            <UserModal onSave={createNewUser} showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}
export default UserAdd;