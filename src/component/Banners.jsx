import React from "react";
import spiningImg from "../assets/coffee-white-SjY7b5HH.png";
import bgImg from "../assets/coffee-texture-vhsRo6rJ.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const bgImage = {
	backgroundImage: `url(${bgImg})`,
	backgroundColor: "#270c03",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "100%",
	width: "100%",
};
const Banners = () => {
	return (
		<div style={bgImage}>
			<div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0  px-4 mx-auto">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{/* img section  */}
					<div data-aos="zoom-in">
						<img
							className=" max-w-[430px] w-full  mx-auto spin drop-shadow-xl"
							src={spiningImg}
							alt="spiningImg"
						/>
					</div>
					{/* text section  */}
					<div className=" flex flex-col justify-center gap-6 sm:pt-0">
						<h1
							data-aos="fade-up"
							className="font-bold font-cursive text-3xl sm:text-4xl"
						>
							Premium Blen Coffee
						</h1>
						<p
							data-aos="fade-up"
							className=" text-gray-500 text-sm tracking-wide leading-5"
						>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
							reiciendis inventore iste ratione ex alias quis magni at optio
						</p>
						<div className="grid grid-cols-2 gap-6">
							{/* left side */}
							<div data-aos="fade-up" className="flex flex-col gap-4">
								<div className="flex  items-center text-center gap-3">
									<GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
									<span>Premium Coffee</span>
								</div>
								<div
									data-aos="fade-up"
									data-aos-delay="300"
									className="flex  items-center text-center gap-3"
								>
									<IoFastFood
										className="text-2xl h-12 w-12 shadow-sm p-3
									rounded-full bg-orange-100"
									/>
									<span>Premium Coffee</span>
								</div>
								<div
									data-aos="fade-up"
									data-aos-delay="300"
									className="flex  items-center text-center gap-3"
								>
									<GiFoodTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
									<span>Premium Coffee</span>
								</div>
							</div>
							{/* rght side */}
							<div
								data-aos="fade-left"
								data-aos-delay="300"
								className="flex flex-col gap-4 border-l-4 border-primary/50 pl-6"
							>
								<h1 className="font-bold font-cursive text-2xl">Tea Lover</h1>
								<p className=" text-gray-500 text-sm">
									Much like writing code, brewing the perfect cup of tea
									requires patience, precision, and a dash of passion to create
									a comforting blend of flavors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banners;
