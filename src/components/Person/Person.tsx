import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { getPersonInfo } from "../../api";
import { PersonType } from "../../types";
import PersonBody from "../PersonBody";

interface props {
  person: PersonType;
}

function Person({ person }: props) {
  const [personInfo, setPerson] = React.useState<PersonType>();

  React.useEffect(() => {
    (async () => {
      await getPersonInfo(person).then((result) => setPerson(result));
    })();
  }, []);

  return (
    <Card data-testid={"card" + person.name}>
      <Accordion.Toggle
        as={Card.Header}
        eventKey={person.name}
        data-testid={"header" + person.name}
      >
        {person.name}
      </Accordion.Toggle>
      <Accordion.Collapse
        eventKey={person.name}
        data-testid={"body" + person.name}
      >
        <PersonBody person={person} />
      </Accordion.Collapse>
    </Card>
  );
}
export default Person;
