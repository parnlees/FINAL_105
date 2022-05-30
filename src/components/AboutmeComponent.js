import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

function Aboutme() {
  return (
    <div
      className="body d-flex align-items-center justify-content-center"
      style={{ marginTop: 50, marginBottom: 50, gap: 20 }}
    >
      <div
        className="d-flex align-content-around justify-content-evenly flex-wrap"
        style={{ gap: 20 }}
      >
        <Card style={{ width: "300px", height: "350px" }}>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ marginTop: 70 }}
          >
            <CardImg
              alt="avartar"
              src="assets\images\avatar.jpg"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody className="d-flex align-content-around justify-content-evenly flex-wrap">
              <CardText>
                <b>Yanisa</b>
              </CardText>
            </CardBody>
          </div>
        </Card>

        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-items-center justify-content-center"></div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5">Yanisa Jaroenjan</CardTitle>

              <CardText>
                Year 1 at Bachelor of Science (Information Technology) King
                Mongkut's Institute of Technology
              </CardText>
            </CardBody>
          </div>
        </Card>
      </div>

      <div
        className="d-flex align-content-around justify-content-evenly flex-wrap"
        style={{ gap: 20 }}
      >
        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-items-center justify-content-center"></div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5">My favorite subject</CardTitle>

              <CardText>
                1. Math because it's contains a fixed formula.
              </CardText>
              <CardText>
                2. English, I want to work in a foreign company.
              </CardText>
              <CardText>3. CSC102 because I love JAVA.</CardText>
            </CardBody>
          </div>
        </Card>

        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-content-between justify-content-center"></div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5">My fovorite movies</CardTitle>
              <CardText>
                1. Harry Potter, it's fun and including a lot of magic !<br />{" "}
                2. Doreamon the movies, I love their relationship and special
                thing of Doreamon. <br /> 3. Conan the movies, I love it because
                they from Japan too. I love plot and style of this movies.
                deserunt?
              </CardText>
            </CardBody>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Aboutme;
