import React from "react";
import heroImg from "../assets/coffee2-nBtrVATQ.png";

const Home = () => {
	return (
		<div className=" min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
			<div className="container pb-8 sm:pb-0 px-4 ">
				<div className="grid grid-cols-1 sm:grid-cols-2">
					{/* text section */}
					<div className=" order-2 sm:order-1 flex flex-col justify-center gap-6">
						<h1
							data-aos="fade-up"
							data-aos-once="true"
							className="text-5xl sm:text-6xl lg:text-7xl font-bold"
						>
							We serve the richest{" "}
							<span
								data-aos="zoom-out"
								data-aos-delay="300"
								className=" text-primary font-cursive"
							>
								Coffeee
							</span>{" "}
							in the city
						</h1>
						<div data-aos="fade-up" data-aos-delay="400">
							<button className=" bg-gradient-to-r from-primary to-secondry border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">
								Coffee And Code
							</button>
						</div>
					</div>
					{/* photo section */}
					<div
						data-aos="zoom-in"
						data-duration="300"
						className=" min-h[450px] flex justify-center items-center order-1 sm:order-2 relative"
					>
						<img
							className="w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin"
							src={heroImg}
							alt="heroImg"
						/>
						<div
							data-aos="fade-left"
							className=" bg-gradient-to-r from-primary to-secondry border-primary rounded-xl absolute p-3 top-10 left-10"
						>
							<h1>Hi Coder</h1>
						</div>
						<div
							data-aos="fade-right"
							className=" bg-gradient-to-r from-primary to-secondry border-primary rounded-xl absolute p-3 bottom-10 right-10"
						>
							<h1>Best Coffee</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
