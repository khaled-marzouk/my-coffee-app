import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

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
			</div>
		</>
	);
}

export default App;
