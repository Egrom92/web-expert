import { TR, TH } from './components'
import {useSelector} from "react-redux";
import Scelet from './components/TR/Scelet';

function Table() {
    const {users, loading} = useSelector((state) => state.users);

    return (
        <section className='table'>
            <div className="container">
                <TH />
                {loading && <Scelet count={10}/>}
                {!loading && users.map(user => <TR key={user.id} user={user} />)}
            </div>
        </section>
    )
}

export default Table