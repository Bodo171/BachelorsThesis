import {Link} from 'react-router-dom'

const StyledLink = ({to, children}) =>{
    return <Link className='styledLink' to={to}>{children}</Link>
}

export default StyledLink;