import React from "react";
import { Card } from "react-bootstrap";
import faker from "faker";
import styles from "./bottomcard.module.scss";

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
				<Card.Img variant="top" src={faker.image.city()} />
			</Card>
			<Card.Text style={{ textAlign: "initial" }}>
				Exclusive premium events, from exhibitions to unique collectibles.
			</Card.Text>
		</div>
	);
};

export default BottomCard;
