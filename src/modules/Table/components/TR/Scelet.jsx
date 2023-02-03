import Skeleton from 'react-loading-skeleton'
import Template from './Template'

function Scelet({ count }) {

    return Array(count)
        .fill(0)
        .map((_, i) => (
            <div key={i} className='TR'>
                <Template Skeleton={Skeleton}/>
            </div>
        ));
}
export default Scelet;