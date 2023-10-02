import Header from "../Shared/Header/Header";
import LeftSideContent from "../Shared/LeftSideContent/LeftSideContent";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideContent from "../Shared/RightSideContant/RightSideContent";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideContent></LeftSideContent>
                </div>
                <div className="md:col-span-2">
                    <h3 className="text-3xl">News coming soon...</h3>
                </div>
                <div>
                    <RightSideContent></RightSideContent>
                </div>
            </div>
        </div>
    );
};

export default Home;