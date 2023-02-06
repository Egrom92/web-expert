import Skeleton from 'react-loading-skeleton'
import { NavLink } from 'react-router-dom'
import Template from './Template'
import { Button } from '../../../../ui'

function TR(props) {
    const { className, user, editUser } = props

    const CN = `TR${className ? ' ' + className : ''}`

    const handleClick = (e) => {
        e.preventDefault();
        editUser()
        console.log('handleClick');
        // add code here to run the functions for edit and delete buttons
    };


    return (
        <NavLink
            to={`/user/${user.id}`}
            className={CN}
        >
            <Template user={user} Skeleton={Skeleton} />
            <span className='action'>
                {user ?
                    <>
                        <Button onClick={e => handleClick(e)} className='TR__edit' actionName='edit' />
                        <Button className='TR__delete' actionName='delete' />
                    </> :
                    null
                }
            </span>
        </NavLink>

    )
}

export default TR