import "./nav.css";

const Nav = () => {
	return (
		<nav className="navbar">
			<img src="../images/brand_logo.png" alt="logo" />

			<ul>
				<li>MENU</li>
				<li>LOCATION</li>
				<li>ABOUT</li>
				<li>CONTACT</li>
			</ul>

			<button>Login</button>
		</nav>
	);
};

export default Nav;
