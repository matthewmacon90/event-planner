import ProfileHome from "./home-components/ProfileHome";
import Advertisement from "./home-components/Advertisement";
import './HomeStyles.css';

const HomePage = () => {
    return (
        <div className="home-container">
            <h1>Welcome to my page!</h1>
            <p>Need an event planner, happy to help!</p>
            <div className="home-main">
                <div className="home-left-side">
                    <ProfileHome />
                </div>
                <div className="home-right-side">
                    <Advertisement />
                </div>
            </div>
        </div>
    )
};

export default HomePage;