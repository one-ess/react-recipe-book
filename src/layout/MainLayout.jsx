import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
