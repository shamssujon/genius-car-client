import React, { useEffect, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services, setServices] = useState([]);
	const [sortBy, setSortby] = useState("asc");
	useEffect(() => {
		fetch(`http://localhost:7100/services?sortBy=${sortBy}`)
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, [sortBy]);
	return (
		<section className="py-10 lg:py-20">
			<div className="container">
				<div className="mx-auto mb-12 space-y-4 text-center lg:w-1/2">
					<h5 className="text-xl font-bold text-primary">Services</h5>
					<h2 className="text-3xl font-bold leading-tight md:text-5xl md:leading-tight">
						Our Services
					</h2>
					<p className="text-gray-500">
						The majority have suffered alteration in some form, by injected humour, or
						randomised words which don't look even slightly believable.
					</p>
				</div>
				<div className="mb-8 flex flex-wrap items-center justify-end gap-4">
					<p>Sort by:</p>
					<button
						onClick={() => {
							sortBy === "asc" ? setSortby("desc") : setSortby("asc");
						}}
						className="btn-primary btn w-40">
						{sortBy === "asc" ? (
							<>
								<span>Descending</span>
								<BsArrowDown />
							</>
						) : (
							<>
								<span>Ascending</span>
								<BsArrowUp />
							</>
						)}
					</button>
				</div>
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<ServiceCard key={service._id} service={service} />
					))}
				</div>
				<div className="mt-12 text-center">
					<Link className="btn-outline btn-primary btn inline-flex h-auto px-6 py-3 text-lg capitalize">
						More Services
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Services;
