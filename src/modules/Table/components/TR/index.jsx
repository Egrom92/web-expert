import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import Template from './Template'
import { Button } from '../../../../ui'

function TR(props) {
    const { className, user, editUser, deleteUser } = props

    const CN = `TR${className ? ' ' + className : ''}`

    const handleEditUser = (e) => {
        e.preventDefault();
        editUser()
    };

    const handleDeeteUser = (e) => {
        e.preventDefault();
        deleteUser()
    }

    return (
        <NavLink
            to={`/user/${user.id}`}
            className={CN}
        >
            <Template user={user} Skeleton={Skeleton} />
            <span className='action'>
                {user ?
                    <>
                        <Button onClick={e => handleEditUser(e)} className='TR__edit' actionName='edit' />
                        <Button onClick={e => handleDeeteUser(e)} className='TR__delete' actionName='delete' />
                    </> :
                    null
                }
            </span>
        </NavLink>

    )
}

export default TR