import React from "react";
import { PersonType } from "../../types";
import { Card, Col, Row } from "react-bootstrap";


interface PersonProps {
  person: PersonType;
}

function PersonBody({ person }: PersonProps) {
  return (
    <Card.Body>
      <Row>
        <Col>
          <Row data-testid="height">Height: {person.height} cm</Row>
          <Row data-testid="weight">Weight: {person.mass} kg</Row>
          <Row data-testid="species">Species: {person.species}</Row>
          <Row data-testid="birth year">Birth Year: {person.birth_year}</Row>
          <Row data-testid="homeworld">Homeworld: {person.homeworld}</Row>
          <Row data-testid="films">
            Apearned in:{" "}
            <ul className="m-2">
              {person.films.map((films) => (
                <li key= {films}>{films}</li>
              ))}
            </ul>
          </Row>
        </Col>
        <Col>
          <img src={`../img/${person.name.replace(/\s/g, "")}.png`} alt= "200x200"></img>
        </Col>
      </Row>
    </Card.Body>
  );
}

export default PersonBody;
