import React, { Component } from "react";

class ReactLifecycle extends React.Component {
  constructor() {
    super();

    this.state = {
      age: 31,
      totalRecords: [],
      interval: null,
    };
  }

  //   static getDerivedStateFromProps(props, state) {
  //     return {
  //       age: props.ageProp,
  //     };
  //   }

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ age: 23 });
  //       fetch("https://jsonplaceholder.typicode.com/todos")
  //         .then((response) => response.json())
  //         .then((json) => this.setState({ totalRecords: json }));
  //     }, 3000);
  //   }

  componentDidMount() {
    const intervalId = setInterval(() => {
      console.log("component Did mount ");
    }, 1000);
    this.setState(intervalId);
  }
  handleAgeChange = () => {
    this.setState({ age: 47 });
    this.forceUpdate();
  };

  //   shouldComponentUpdate() {
  //     return true;
  //   }

  // getSnapshotBeforeUpdate(prevProp, preState) {
  //     console.log(preState);
  // }

  //   componentDidUpdate() {
  //     setTimeout(() => {
  //       this.setState({ age: 23 });
  //       fetch("https://jsonplaceholder.typicode.com/todos")
  //         .then((response) => response.json())
  //         .then((json) => this.setState({ totalRecords: json }));
  //     }, 3000);
  //   }

  componentWillUnmount() {
    console.log("Unmount");
    clearInterval(this.state.interval)
  }

  render() {
    return (
      <div>
        <h3>ReactLifecycle age - {this.state.age}</h3>
        <h4>Total Records {this.state.totalRecords?.length ?? 0}</h4>
        <button onClick={this.handleAgeChange}> Change Age </button>
      </div>
    );
  }
}

export default ReactLifecycle;
