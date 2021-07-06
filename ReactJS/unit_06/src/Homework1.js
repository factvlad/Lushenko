import React from "react";

class Homework1 extends React.Component {
  constructor(props) {
    console.log(props);
    super();
    this.state = {
      s1: props.p1,
    };
    this.s2 = 202;
  }
  buttonHander = () => {
    let val1 = this.state.s1;
    this.setState({ s1: val1 + 50 });
    this.s2 = this.s2 + 50;
  };

  componentDidMount() {
    let val1 = this.state.s1;
    this.setState({ s1: val1 + 5 });

    this.s2 = this.s2 + 5;
  }

  render() {
    return (
      <>
        <div>{this.state.s1}</div>
        <div>{this.s2}</div>
        <button onClick={this.buttonHander}>PUSH</button>
      </>
    );
  }
}

export default Homework1;
