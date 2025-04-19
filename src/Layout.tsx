import Desktop from "./device_orientation/Desktop";
import Mobile from "./device_orientation/Mobile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LayoutBG from "./components/LayoutBG";

const Layout = () => {
  return (
    <div
      className={`relative overflow-hidden flex items-center default-scroll text-black dark:text-white`}
    >
      <LayoutBG />
      <Header />
      <main
        className={`flex min-h-screen min-w-screen items-center justify-center`}
      >
        <Desktop />
        <Mobile />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
