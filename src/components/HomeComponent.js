import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function Home(props) {
  return (
    <div
      className="body d-flex align-items-center justify-content-center"
      style={{ marginTop: 50, marginBottom: 50, gap: 20 }}
    >
      <div
        className="d-flex align-content-around justify-content-evenly flex-wrap"
        style={{ gap: 20 }}
      >
        <Card style={{ width: "500px", height: "300px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <CardImg
              alt="breaking"
              src="assets\images\breaking.jpg"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
        </Card>

        <Card style={{ width: "500px", height: "300px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <CardImg
              alt="Feature"
              src="assets\images\Feature.jpg"
              style={{ width: "500px", height: "300px" }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Home;
