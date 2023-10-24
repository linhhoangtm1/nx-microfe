import { Outlet, useNavigate } from 'react-router-dom';
import SharedModule from 'shared/Module';

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <SharedModule component="Topbar" navigate={navigate} />
      <SharedModule component="Navbar" navigate={navigate} />
      <Outlet />
      <SharedModule component="Footer" navigate={navigate} />
    </>
  );
};

export default Layout;
