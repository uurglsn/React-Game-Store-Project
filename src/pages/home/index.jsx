import Slide from "./components/Slide";
import TopSeller from "./components/TopSeller";
import Epin from "./components/Epin";
import Discount from "./components/Discount";
import Skin from "./components/Skin";
import HomeLayout from "./layout";

const Home = () => {
    
    return (
        <>
            <HomeLayout>
                <div className="mx-auto container  pt-5">
                    <Slide />
                    <Discount />
                    <TopSeller />
                    <Skin />
                    <Epin />
                </div>
            </HomeLayout>
        </>
    );
}

export default Home;
