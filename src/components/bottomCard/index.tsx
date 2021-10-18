import React from "react";
import { Card } from "react-bootstrap";
const BottomCard = () => {
	return (
		<div>
			<Card
				border="dark"
				style={{
					width: "20rem",
					margin: 10,
					height: 150,
					overflow: "hidden",
				}}
			>
				<Card.Img
					variant="top"
					src="https://mdbcdn.b-cdn.net/img/new/standard/city/053.jpg"
				/>
			</Card>
			<Card.Text style={{ textAlign: "initial" }}>
				Exclusive premium events, from exhibitions to unique collectibles.
			</Card.Text>
		</div>
	);
};

export default BottomCard;
