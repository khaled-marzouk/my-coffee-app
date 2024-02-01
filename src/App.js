import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Services from "./component/Services";
import Banners from "./component/Banners";
import AppStore from "./component/AppStore";
import Testemonial from "./component/Testemonial";
import Footer from "./component/Footer";

function App() {
	useEffect(() => {
		Aos.init({
			offset: 100,
			duration: 700,
			easing: "ease-in",
			delay: 100,
		});
	});
	return (
		<>
			<div className=" overflow-x-hidden">
				<Navbar />
				<Home />
				<Services />
				<Banners />
				<AppStore />
				<Testemonial />
				<Footer />
			</div>
		</>
	);
}

export default App;
