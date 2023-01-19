import Navbar from './Navbar';
// import { useRouter } from 'next/router';

const Layout = ({ children, user }) => {

//   const router = useRouter();

  return (
    <div>
      {/* {router.pathname !== '/newCart' && (  */}
        <Navbar user={user} />
      {/* )} */}
      {children}
    </div>
  );
};

export default Layout;
