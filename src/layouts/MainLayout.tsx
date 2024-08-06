import Navbar from "../component/Navbar";

const MainLayout = (props: any) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
};
export default MainLayout;
