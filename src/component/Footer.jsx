import React from "react";
import bgImg from "../assets/coffee-footer-68P4qxM0.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
const FooterLinks = [
	{
		title: "Home",
		link: "/#",
	},
	{
		title: "About",
		link: "/#about",
	},
	{
		title: "Contact",
		link: "/#contact",
	},
	{
		title: "Blog",
		link: "/#blog",
	},
];
const bgImage = {
	backgroundImage: `url(${bgImg})`,
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	height: "100%",
	width: "100%",
};
const Footer = () => {
	return (
		<div style={bgImage} className="text-white">
			<div className=" bg-black/40 min-h-[400px]">
				<div className="container grid md:grid-cols-3 pt-5 pb-20 ">
					<div className="py-8 px-4">
						<a
							href="#"
							className=" font-bold font-cursive text-2xl tracking-widest sm:text-3xl"
						>
							Coffee Cafe
						</a>
						<p className="pt-4">
							Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your Perfect
							Espresso Escape
						</p>
					</div>
					{/* footer links  */}
					<div className=" col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
						<div className="py-8 px-4">
							<h1 className="text-xl font-semibold sm:text-left mb-3">
								Footer Links
							</h1>
							<ul className=" space-y-3">
								{FooterLinks.map((data, index) => (
									<li key={index}>
										<a
											className=" inline-block hover:scale-105 duration-200"
											href={data.link}
										>
											{data.title}
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className="py-8 px-4">
							<h1 className="text-xl font-semibold sm:text-left mb-3">
								Footer Links
							</h1>
							<ul className=" space-y-3">
								{FooterLinks.map((data, index) => (
									<li key={index}>
										<a
											className=" inline-block hover:scale-105 duration-200"
											href={data.link}
										>
											{data.title}
										</a>
									</li>
								))}
							</ul>
						</div>
						{/* copant address */}
						<div className=" col-span-2 sm:col-auto py-8 px-4 ">
							<h1 className="text-xl font-semibold sm:text-left mb-3">
								Address
							</h1>
							<p className="mb-3">Egypt, Mahallah</p>
							<p className="mb-3">+20 1146857103</p>
							<div className="flex gap-4">
								<a href="https://www.facebook.com/kanass.khaled">
									<FaFacebook className="text-3xl hover:scale-105 duration-200" />
								</a>
								<a href="https://www.instagram.com/kmarzouq/">
									<FaInstagram className="text-3xl hover:scale-105 duration-200" />
								</a>
								<a href="https://www.linkedin.com/in/khaled-marzouk-7a91b82a1/">
									<FaLinkedin className="text-3xl hover:scale-105 duration-200" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
