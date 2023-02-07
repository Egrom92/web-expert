import { capitalizeFirstLetter } from '../../../../helpers'
import _ from 'lodash';
import {dataLabelPaths} from '../../data'


function UserData(props) {
    const { className, user, loading } = props

    const CN = `user-section${className ? ' ' + className : ''}`

    const dataList = Object.entries(dataLabelPaths).map(([key, value]) => {
        if (key === "name") return null;
        return (
          <li key={key} className="user__data">
            <span className="user__data-label">{capitalizeFirstLetter(key)}</span>
            <span className="user__data-value">{_.get(user, value)}</span>
          </li>
        );
      });

    return (
        <section className={CN}>
            <div className="container">
                <div className="user">
                    {loading ? 'Loading...' :
                        <>
                            <h1 className='user__name'>{user?.name}</h1>
                            <ul className="user__data-list">
                                {dataList}
                            </ul>
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default UserData