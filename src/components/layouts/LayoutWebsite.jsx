import { Outlet } from "react-router-dom";
import FooterWebsite from "../FooterWebsite";
import HeaderWebsite from "../HeaderWebsite";
// import Signup from "../../pages/Signup";
// eslint-disable-next-line react/prop-types
const LayoutWebsite = ({products}) => {
  return (
      <div className="app">
        <HeaderWebsite products={products}/>

        <main>
          <Outlet/>
        </main>

        <FooterWebsite />
        {/* <Signup /> */}
      </div>
  );
};

export default LayoutWebsite;
