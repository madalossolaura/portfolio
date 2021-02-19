import styled from "styled-components";

const CardWrapper = styled.div`
	width: 300px;
	max-height: 350px;
    border: 1px solid #f0f0f0;
`;

CardWrapper.Image = styled.img`
	max-width: 100%;
	object-fit: cover;
`;

CardWrapper.Text = styled.h3`
    font-size: 12px;
    color: #555555;
    text-align: center;
`;


export default CardWrapper;