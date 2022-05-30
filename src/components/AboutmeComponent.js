import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="body d-flex align-items-center justify-content-center">
      <div className="d-flex align-content-around justify-content-evenly flex-wrap">
        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <CardImg
              alt="Frenchfries"
              src={Frenchfries}
              style={{ width: "150px", height: "100px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5"> Frenchfries</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                hot dishes!
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                harum consequuntur, ipsa illum ut a? Suscipit illum enim cumque
                deserunt?
              </CardText>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center btn btn-outline-dark btn-small"
              >
                Bucket
              </button>
            </CardBody>
          </div>
        </Card>

        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <CardImg
              alt="Hamburger"
              src={Hamburger2}
              style={{ width: "150px", height: "100px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5">Hamburger</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Main Menu !
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                harum consequuntur, ipsa illum ut a? Suscipit illum enim cumque
                deserunt?
              </CardText>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center btn btn-outline-dark btn-small"
              >
                Bucket
              </button>
            </CardBody>
          </div>
        </Card>

        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-items-center justify-content-center">
            <CardImg
              alt="Hamburger"
              src={Hamburger2}
              style={{ width: "150px", height: "100px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5"> Hamburger</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Main Menu !
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                harum consequuntur, ipsa illum ut a? Suscipit illum enim cumque
                deserunt?
              </CardText>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center btn btn-outline-dark btn-small"
              >
                Bucket
              </button>
            </CardBody>
          </div>
        </Card>
      </div>

      <div className="d-flex align-content-around justify-content-evenly flex-wrap">
        <Card style={{ width: "300px", height: "350px" }}>
          <div className="d-flex align-content-between justify-content-center">
            <CardImg
              alt="Frenchfries"
              src={Frenchfries}
              style={{ width: "150px", height: "100px" }}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <CardBody>
              <CardTitle tag="h5"> Frenchfries</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                hot dishes!
              </CardSubtitle>
              <CardText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                harum consequuntur, ipsa illum ut a? Suscipit illum enim cumque
                deserunt?
              </CardText>
              <button
                type="button"
                className="d-flex align-items-center justify-content-center btn btn-outline-dark btn-small"
              >
                Bucket
              </button>
            </CardBody>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Menu;
