import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <main className='mb-32 flex flex-col items-center'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
