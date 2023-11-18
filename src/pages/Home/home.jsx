import HomeSideBar from "./homeSideBar";
import DisplayProducts from "./displayProducts";

function Home() {
  return (
    <div className="App">
      <div className="flex  ">
        <div className="w-1/5  mt-20 pl-5 font-['Agbalumo'] ">
          <HomeSideBar />
        </div>
        <div className="w-4/5 mt-20">
          <DisplayProducts />
        </div>
      </div>
    </div>
  );
}

export default Home;
