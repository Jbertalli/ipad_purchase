import Navbar from './Navbar';

const Layout = ({ children, user }) => {
    return (
        <div>
            <Navbar user={user} />
                {children}
        </div>
    );
}

export default Layout;
