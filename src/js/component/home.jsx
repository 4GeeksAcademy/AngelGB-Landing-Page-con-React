import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card"
import Boton from "./Boton.jsx"
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar titulo="4geeks" a1={"Home"} a2={"About"} a3={"Services"} a4={"Contact"} />
			<div className="container">
				<Jumbotron titulo="Aprendiendo" parrafo="palabras palabras palabras" />
				<div class="row row-cols-1 row-cols-md-4 g-4">
					<Card cardtitle="Titulo" cardtext="" />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer text={"copoiasii 1234"} />
		</div>
	);
};

export default Home;
