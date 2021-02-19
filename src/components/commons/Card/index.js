import React from "react";
import CardWrapper from "./styles";

function Card() {
	return (
		<CardWrapper>
			<CardWrapper.Image
				src="https://via.placeholder.com/300x200"
				alt="Placeholder"
			/>
			<CardWrapper.Text>
                Lorem ipsum dolor sit
            </CardWrapper.Text>
		</CardWrapper>
	);
}

export default Card;