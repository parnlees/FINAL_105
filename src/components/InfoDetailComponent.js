import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

class InfoDetail extends Component {
  renderInfo() {
    const info = this.props.infos[this.props.InfoDetail];
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/photo">test</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{InfoDetail.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{InfoDetail.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderInfos()}</div>
        </div>
      </div>
    );
  }

  render() {
    return <div></div>;
  }
}

export default InfoDetail;
