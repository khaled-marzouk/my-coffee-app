import React from "react";
import Slider from "react-slick";
const TestemonialData = [
	{
		id: 1,
		name: "Dilshed",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
		img: "https://picsum.photos/101/101",
	},
	{
		id: 2,
		name: "Sabir ali",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
		img: "https://picsum.photos/102/102",
	},
	{
		id: 3,
		name: "Dipnakar Kumar",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
		img: "https://picsum.photos/103/103",
	},
	{
		id: 4,
		name: "Satya Narayan",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
		img: "https://picsum.photos/104/104",
	},
];
const Testemonial = () => {
	const settings = {
		dots: true,
		arrows: false,
		speed: 500,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: "linear",
		pauseOnHover: true,
		pauseOnFocus: true,
		responsive: [
			{
				breakpoint: 10000,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="py-14 mb-20">
			<div className="container">
				<div className=" text-center mb-10">
					<h1 className="font-bold font-cursive text-4xl text-gray-800">
						Testimonials
					</h1>
				</div>
				{/* testemonial card section  */}
				<div>
					<Slider {...settings}>
						{TestemonialData.map((data) => (
							<div className="my-6">
								<div
									key={data.id}
									className="flex flex-col shadow-lg px-6 py-8 mx-4 rounded-xl bg-primary/10 gap-4 relative"
								>
									{/* image section */}
									<div className="mb-2">
										<img
											className=" rounded-full w-20 h-20"
											src={data.img}
											alt=""
										/>
									</div>
									{/* content section */}
									<div className="flex flex-col gap-4 items-start">
										<div className=" space-y-3">
											<p className=" text-gray-500 text-xs">{data.text}</p>
											<h1 className="font-bold font-cursive text-black/60 text-xl">
												{data.name}
											</h1>
										</div>
									</div>
									<p className="text-black/20 text-8xl  font-serif absolute top-0 right-0">
										,,
									</p>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Testemonial;
