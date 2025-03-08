import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor!");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount!");
  }

  render() {
    // console.log("Parent Render!");
    return (
      <div className="about-us">
        <h1>About Us</h1>
        <p>This is a react web applications</p>
        <UserClass name={"Piyush Pandey (class)"} location={"Neemuch"} />
      </div>
    );
  }
}

export default About;
