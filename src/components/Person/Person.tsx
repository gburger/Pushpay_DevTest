import React, { useState } from "react";
import { PersonType } from "../../types";

import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

interface PersonProps {
  person: PersonType;
}

function Person({ person }: PersonProps) {
  return (
    <div>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={person.name}>
          {person.name}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={person.name}>
          <Card.Body>
            <Row>
              <Col>
                <Row>
                  Height: {person.height} cm <br />
                </Row>

                <Row>
                  Weight: {person.mass} kg <br />
                </Row>
                <Row>
                  Species: {person.species} <br />
                </Row>
                <Row>
                  Birth Year: {person.birth_year} <br />
                </Row>
                <Row>
                  Homeworld: {person.homeworld} <br />
                </Row>
                <Row>
                  Apearned in:{" "}
                  <ul className="m-2">
                    {person.films.map((films) => (
                      <li>{films} </li>
                    ))}
                  </ul>
                </Row>
              </Col>
              <Col>
                <img src={`../img/${person.name.replace(/\s/g, "")}.png`}></img>
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </div>
  );
}

export default Person;
