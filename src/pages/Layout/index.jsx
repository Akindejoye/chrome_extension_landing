import { Outlet } from "react-router-dom";
import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/footer";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <main className="layout__main">
        <Outlet />
      </main>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
