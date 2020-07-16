import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDetail: "profile",
    };
  }

  updateState = (detail) => {
    this.setState({
      selectedDetail: detail,
    });
  };

  render() {
    // {
    //   console.log(this.state.selectedDetail);
    // // }
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = () => {
      if (this.state.selectedDetail === "profile") {
        return <Profile />;
      } else if (this.state.selectedDetail === "photo") {
        return <Photos />;
      } else if (this.state.selectedDetail === "cocktail") {
        return <Cocktails />;
      } else {
        return <Pokemon />;
      }
    };

    return (
      <div>
        <MenuBar selectDetail={this.updateState} />
        {detailsToDisplay()}
      </div>
    );
  }
}

export default MainBox;
