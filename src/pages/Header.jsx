
import { Outlet, Link } from 'react-router-dom';
export default function Header() {
    return(
        <>
        <Link to ="/">Home</Link>
        <Link to ="/Pages">Pages</Link>
        <Link to ="/About">About</Link>
        <Outlet />
        </>
    )
}
