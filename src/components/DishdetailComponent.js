import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

class DishDetail extends Component {
  renderDish() {
    const dish = this.props.dishes[this.props.selectedDish];
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
          <div className="col-12 col-md-5 m-1">{this.renderComments()}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
        <div className="col-12 col-md-5 m-1">{this.renderComments()}</div>
      </>
    );
  }
}

export default DishDetail;
