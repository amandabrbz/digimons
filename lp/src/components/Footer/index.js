import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <Card className="cardFooter bg-dark">
          <Card.Footer className="text-muted">Amanda Barboza</Card.Footer>
        </Card>
      </>
    );
  }
}
