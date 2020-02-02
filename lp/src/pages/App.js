import React from "react";
import './App.css';
import { Row, Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import CarouselHome from "../components/CarouselHome";
import CardsDigimon from "../components/CardsDigimon";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <CarouselHome />
      <h1>Digimons</h1>
      <Container>
        <Row>
          <CardsDigimon />
        </Row>
      </Container>
      <br/>
      <Footer />
    </>
  );
}

export default App;
