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
import { INFOS } from "../shared/infos";

function RenderPhotoItem({ INFOS, onClick }) {
  return (
    <Card>
      <Link to={`/photo/${INFOS.id}`}>
        <CardImg width="100%" src={INFOS.image} alt={INFOS.name} />
        <CardImgOverlay>
          <CardTitle>{INFOS.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Photo = (props) => {
  console.log(props);
  return (
    <div>
      {props.infos?.map((info) => {
        return (
          <div className="col-12 col-md-5 m-1" key={info.id}>
            <RenderPhotoItem info={info} onClick={props.onClick} />
          </div>
        );
      })}
    </div>
  );

  // return <div className="container">{Photo}</div>;
};

export default Photo;
