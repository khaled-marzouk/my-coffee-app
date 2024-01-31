import React from "react";
import bgImg from "../assets/coffee-beans-bg-Mg2HxwYr.png";
import AppleStore from "../assets/app_store-aoAyJ2T_.png";
import PlayStore from "../assets/play_store-25MAnoNl.png";
const bgImage = {
	backgroundImage: `url(${bgImg})`,
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "100%",
	width: "100%",
};
const AppStore = () => {
	return (
		<div style={bgImage} className="py-14">
			<div className=" container px-14">
				<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 text-center ">
					<div className=" flex flex-col gap-4 max-w-xl mx-auto">
						<h1 className="text-2xl sm:text-left text-center sm:text-4xl font-semibold text-white/90 pl-3">
							Coffee Cafe is available for Android and IOS
						</h1>
						<div className="flex justify-center sm:justify-start items-center flex-wrap">
							<a href="#">
								<img
									className=" max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
									src={AppleStore}
									alt="AppelStore"
								/>
							</a>
							<a href="#">
								<img
									className=" max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
									src={PlayStore}
									alt="PlayStore"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppStore;
