import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
      },
    };
    console.log("Child Constructor!");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount!");

    const data = await fetch("https://api.github.com/users/PiyushPandey99075");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update!");
  }

  componentWillUnmount() {
    console.log("Component Will unmount!");
  }
  render() {
    console.log("Child Render!");

    const { name } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Contact: +91-812177385</h2>
      </div>
    );
  }
}

export default UserClass;
