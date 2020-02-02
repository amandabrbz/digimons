import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import api from "../../services/api";
import './CardsDigimon.css';

export default class CardsDigimon extends Component {
  state = {
    digimons: [{}]
  };

  async componentDidMount() {
    const digimons_api = await api.get("digimon");

    this.setState({
      digimons: digimons_api.data
    });
  }

  render() {
    return (
      <>
        {this.state.digimons.map(digimon => (
          digimon.id <= 20 ? 
          <Col sm>
            <Card className="cardDigi">
              <Card.Img variant="center" src={digimon.img} className="cardImg" />
              <Card.Body className="cardBody">
                <Card.Title>{digimon.name}</Card.Title>
                <Card.Text>{digimon.level}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          : ''
        ))}
      </>
    );
  }
}
