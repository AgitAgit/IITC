import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DisplayTable from './DisplayTable';

const customer1 = {
    customer_id: 1,
        store_id: 1,
            first_name: 'MARY',
                last_name: 'SMITH-ALLEN',
                    email: 'MARY.SMITH@sakilacustomer.org',
                        address_id: 5,
                            active: 0,
                                create_date: '2006 - 02 - 14T20: 04: 36.000Z',
                                    last_update: '2023 - 05 - 22T09: 25: 46.000Z'
}
const customer2 = {
    customer_id: 2,
        store_id: 1,
            first_name: 'PATRICIA',
                last_name: 'JOHNSON',
                    email: 'PATRICIA.JOHNSON@sakilacustomer.org',
                        address_id: 6,
                            active: 1,
                                create_date: '2006 - 02 - 14T20: 04: 36.000Z',
                                    last_update: '2005 - 08 - 23T14: 39: 35.000Z'
}
const film1 = {
    film_id: 1,
    title: 'ACADEMY DINOSAUR',
    description: 'A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies',
    release_year: 2006,
    language_id: 1,
    original_language_id: null,
    rental_duration: 6,
    rental_rate: '0.99',
    length: 86,
    replacement_cost: '20.99',
    rating: 'PG',
    special_features: 'Deleted Scenes,Behind the Scenes',
    last_update: '2006 - 02 - 15T03: 03: 42.000Z'
}
const film2 = {
    film_id: 2,
    title: 'ACE GOLDFINGER',
    description: 'A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China',
    release_year: 2006,
    language_id: 1,
    original_language_id: null,
    rental_duration: 3,
    rental_rate: '4.99',
    length: 48,
    replacement_cost: '12.99',
    rating: 'G',
    special_features: 'Trailers,Deleted Scenes',
    last_update: '2006 - 02 - 15T03: 03: 42.000Z'
}

const demoList = [customer1, customer2, customer1, customer2, customer1, customer2, customer1, customer2, customer1, customer2, customer1, customer2];

function requestData(setter, route) {
    fetch(`http://localhost:5000/api/data${route}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => setter(data))
        .catch(error => console.error(error));
}


function App() {
    const [display, setDisplay] = useState(demoList);
    

    return (
        <div className="App">
            <button onClick={() => requestData(setDisplay, "/customer") }>Display customers</button>
            <button onClick={() => requestData(setDisplay, "/film") }>Display films</button>
            <DisplayTable data={ display }></DisplayTable>
        </div>
    );
}

export default App;
