import Directory from "../../directory/Directory.jsx";

import categories from "../../../data";

function Home() {
    return (
        <>
        <Directory categories={categories} />
        </>
    );
}

export default Home;