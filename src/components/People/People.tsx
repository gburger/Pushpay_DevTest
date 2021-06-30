import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap'

import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'

async function getPerson(id: number) {
    let person: PersonType

    person = {
        name: '',
        height: '',
        mass: '',
        birth_year: '',
        homeworld: '',
        species: '',
        films: [''],
    }
    ;(async () => {
        await fetchJson<{
            name: string
            height: string
            mass: string
            birth_year: string
            homeworld: string
            films: string[]
            species: string
        }>('people/' + id)
            .then((Response) => {
                person.name = Response.name
                person.height = Response.height
                person.mass = Response.mass
                person.birth_year = Response.birth_year
                person.homeworld = Response.homeworld
                person.species = Response.species
                person.films = Response.films
            })
            .catch(() => {
                console.log('Person id' + id + 'missing')
                return
            })
            .then(() => {
                if (person.species.length === 0) {
                    person.species = 'Human'
                } else {
                    let url = person.species[0].substring(
                        'https://swapi.dev/api/'.length
                    )
                    fetchJson<{ name: string }>(url).then((Response) => {
                        person.species = Response.name
                    })
                }
            })
            .then(() => {
                let url = person.homeworld.substring(
                    'https://swapi.dev/api/'.length
                )
                fetchJson<{ name: string }>(url).then((Response) => {
                    person.homeworld = Response.name
                })
            })
            .then(() => {
                for (let i = 1; i < person.films.length; i++) {
                    let url = person.films[i].substring(
                        'https://swapi.dev/api/'.length
                    )
                    fetchJson<{ title: string }>(url).then((Response) => {
                        person.films[i] = Response.title
                    })
                }
            })
    })()
    return person
}

function People() {
    const [people, setPeople] = React.useState<PersonType[]>([])
    console.log('i have started')
    React.useEffect(() => {
        let numPeople = 0
        let temp: PersonType[] = [
            {
                name: '',
                height: '',
                mass: '',
                birth_year: '',
                homeworld: '',
                films: [''],
                species: '',
            },
        ]

        ;(async () => {
            await fetchJson<{ count: string }>('/people').then((Response) => {
                numPeople = parseInt(Response.count)
            })
        })()
        ;(async () => {
            console.log(numPeople)
            for (let i = 1; i < 82; i++) {
                if (i === 17) continue
                await getPerson(i).then((person) => {
                    //let temp: PersonType[] = people

                    temp[i - 1] = person
                    setPeople(temp)
                })
            }
        })()
    }, [])

    return (
        <div className="d-flex justify-content-center">
            <Accordion>
                {console.log(people)}
                {people.map((person) => (
                    <Person person={person} />
                ))}
            </Accordion>
        </div>
    )
}

export default People
