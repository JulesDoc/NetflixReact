

import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [films, setFilms] = useState([
    { id: 1, title: 'Dirty Dancing', year: '1800'},
    { id: 2, title: 'Grease', year: '1900'},
    { id: 3, title: 'Zombieland', year: '2000'},
    { id: 4, title: 'Call me by your name', year: '2010'},
    { id: 5, title: 'Pretty Woman', year: '2022'}
]); 



return (
    <div className="container">
        <h3 className="p-3 text-center">Discover - Display a list of films</h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {films && films.map(user =>
                    <tr key={user.id}>
                        <td>{user.title}</td>
                        <td>{user.year}</td>
                        
                    </tr>
                )}
            </tbody>
        </table>
    </div>
);
}

export default App;
