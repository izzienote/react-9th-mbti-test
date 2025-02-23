import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="h-screen bg-gray-100 flex justify-center items-center mt-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
