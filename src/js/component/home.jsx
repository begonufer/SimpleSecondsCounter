import React from "react";
import SecondsCounter from "./SecondsCounter.jsx"

const Home = () => {
	return (
		<>	
			<div id="todo">
				<div className="d-flex justify-content-center bg-black " id="contenedor">
					<SecondsCounter units={0} tens={0} hundreds={0} thousandUnit={0} tensUnit={0} hundredsUnit={0} />
				</div>			
			</div>
		</>
	);
};

export default Home;

