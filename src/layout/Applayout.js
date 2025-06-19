import Header from "./header";
import Footer from "./footer";

function Applayout({ children }) {
  return (
    <>
      <Header />
      <div className="container mt-4">
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Applayout;
