import "./hero.css";

const Hero = () => {
	return (
		<div className="container">
			<div className="hero-content">
				<h1>YOUR FEET DESERVES THE BEST</h1>
				<p>
					YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
					WE’RE HERE TO HELP YOU WITH OUR SHOES.
				</p>

				<div className="call-to-action">
					<button id="primary-btn">Shop Now</button>
					<button id="secondary-btn">Category</button>
				</div>

				<div className="shop">
					<p>Also available on</p>
					<img src="../images/amazon.png" alt="amazon logo" />
					<img src="../images/flipkart.png" alt="flipkart logo" />
				</div>
			</div>
			<div className="hero-image">
				<img src="..//images/shoe_image.png" alt="Nike Shoe" />
			</div>
		</div>
	);
};

export default Hero;
