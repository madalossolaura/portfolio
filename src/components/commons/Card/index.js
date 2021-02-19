import React from "react";
import CardWrapper from "./styles";

function Card() {
	return (
		<CardWrapper>
			<CardWrapper.Image
				src="https://via.placeholder.com/300x150"
				alt="Placeholder"
			/>
			<CardWrapper.Text>Projeto</CardWrapper.Text>
		</CardWrapper>
	);
}

export default Card;