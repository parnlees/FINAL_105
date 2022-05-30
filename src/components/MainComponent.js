import React, { Component } from "react";
import Aboutme from "./AboutmeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Photo from "./PhotoComponent";
import { INFOS } from "../shared/infos";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import InfoDetail from "./InfoDetailComponent";

const InfoWithId = ({ match }) => {
  return (
    <InfoDetail
      comments={this.props.comments}
      Info={this.props.dishes}
      selectedInfo={match.params.infoId}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    infos: state.infos,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infos: INFOS,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedInfo: null,
    };
  }

  onInfoSelect(infoId) {
    this.setState({ selectedInfo: infoId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          info={this.props.Infos.filter((info) => info.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/Aboutme" component={Aboutme} />
            <Route
              exact
              path="/Photo"
              component={() => <Photo infos={this.props.photo} />}
            />
            <Route
              path="/photo/:infoId"
              component={() => <InfoDetail infos={this.state.selectedInfo} />}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
