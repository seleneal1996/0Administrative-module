import Footer from "../../components/Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="home short">
      <div className="header">
        <Navbar />
      </div>
      <div className={`container-fluid`}>
        <Sidebar />
        <div className="main">
          <div className="container mt-4">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
