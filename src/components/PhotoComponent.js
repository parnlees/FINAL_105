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

function RenderPhotoItem({ info, onClick }) {
  return (
    <Card>
      <Link to={`/photo/${info.id}`}>
        <CardImg width="100%" src={info.image} alt={info.name} />
        <CardImgOverlay>
          <CardTitle>{info.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Photo = (props) => {
  console.log(props);
  const Photo =
    props ??
    props.infos.map((info) => {
      return (
        <div className="col-12 col-md-5 m-1" key={info.id}>
          <RenderPhotoItem info={info} onClick={props.onClick} />
        </div>
      );
    });

  return <div className="container">{Photo}</div>;
};

export default Photo;
