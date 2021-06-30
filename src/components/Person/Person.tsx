import React, { useState } from 'react'
import { PersonType } from '../../types'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

interface PersonProps {
    person: PersonType
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
                                Height: {person.height} cm <br />
                                Weight: {person.mass} kg <br />
                                Species: {person.species} <br />
                                Birth Year: {person.birth_year} <br />
                                Homeworld: {person.homeworld} <br />
                            </Col>
                            <Col>
                                <Image
                                    src={
                                        process.env.PUBLIC_URL +
                                        '/' +
                                        person.name +
                                        '.png'
                                    }
                                    className="center"
                                />
                            </Col>
                        </Row>
                        <Row>
                            Apearned in: {person.films} <br />
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </div>
    )
}

export default Person
