import Desktop from "./device orientation/Desktop";
import Mobile from "./device orientation/Mobile";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div
      className={`relative text-lg bg-[#f9fafb] overflow-hidden dark:bg-[#09090b] dark:text-white flex items-center default-scroll`}
    >
      <Header />
      <main
        className={`flex min-h-svh lg:min-h-screen min-w-screen items-center justify-center`}
      >
        {/* insert content here */}
        <Desktop />
        <Mobile />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
