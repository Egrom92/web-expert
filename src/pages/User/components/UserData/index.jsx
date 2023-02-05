import Skeleton from 'react-loading-skeleton'
import { capitalizeFirstLetter } from '../../../../helpers'
import _ from 'lodash';


function UserData(props) {
    const { className, user, loading, dataLabelPaths } = props

    const CN = `user-section${className ? ' ' + className : ''}`

    return (
        <section className={CN}>
            <div className="container">
                <div className="user">
                    {loading ? 'Loading...' :
                        <>
                            <h1 className='user__name'>{user?.name}</h1>
                            <ul className="user__data-list">
                                {dataLabelPaths.map((el, key) => (
                                    <li key={key} className="user__data">
                                        <span className="user__data-label">{capitalizeFirstLetter(el)}</span>
                                        <span className="user__data-value">{_.get(user, el)}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default UserData