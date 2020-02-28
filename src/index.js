import React, { Component } from "react";
import PropTypes from "prop-types";
import { loadScript } from "./utils/load-script";
import styles from "./styles.css";

export default class ReactAlkMaps extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    text: PropTypes.string
  };

  componentDidMount() {
    loadScript(this.props.url, this.props.onLoad, this.props.onError);
    console.log(window.AlkMaps);
  }
  render() {
    const { text } = this.props;

    return (
      // <div className={styles.test}>
      //   Example Component: {text}
      // </div>
      <div></div>
    );
  }
}
