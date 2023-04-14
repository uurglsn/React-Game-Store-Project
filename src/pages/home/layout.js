import Announcement from "../../components/Announcement";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const HomeLayout = ({ children }) => {
    return (
        <>
            <Announcement />
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default HomeLayout;