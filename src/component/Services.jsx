import React from "react";
import img from "../assets/coffee2-nBtrVATQ.png";
const servicesData = [
	{
		name: "Espresso",
		img: img,
		id: 1,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
		aosdelay: 100,
	},
	{
		name: "Americano",
		img: img,
		id: 2,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
		aosdelay: 200,
	},
	{
		name: "Cappuccino",
		img: img,
		id: 3,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, magni.",
		aosdelay: 300,
	},
];
const Services = () => {
	return (
		<>
			<div id="services"></div>
			<div className="py-10">
				<div className=" container">
					{/* header title  */}
					<div data-aos="fade-up" className=" text-center mb-20">
						<h1 className=" text-4xl font-bold font-cursive text-center text-gray-800">
							Best Coffee for you{" "}
						</h1>
					</div>
					{/* services card section  */}
					<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-4 place-items-center">
						{servicesData.map((data, index) => {
							return (
								<div
									data-aos="fade-up"
									data-aos-delay={data.aosdelay}
									key={index}
									className=" rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative:"
								>
									<div className="h-[122px]">
										<img
											className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-110 group-hover:rotate-6 duration-300"
											src={data.img}
											alt=""
										/>
									</div>
									<div className=" p-4 text-center">
										<h3 className="text-xl font-bold">{data.name}</h3>
										<p className=" text-gray-500 group-hover:text-white duration-300 text-sm">
											{data.description}
										</p>
									</div>
								</div>
							);
						})}
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
