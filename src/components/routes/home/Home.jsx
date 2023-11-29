import Directory from "../../directory/Directory";

import categories from "../../../data";
import Navigation from "../navigation/Navigation";

function Home() {
    return (
        <>
        <Navigation />
        <Directory categories={categories} />
        </>
    );
}

export default Home;