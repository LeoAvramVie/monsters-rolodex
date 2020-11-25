import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import {Searchbox} from "./components/search-box/search-box.component";

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
     }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({monsters: user}))

    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {monsters, searchField} = this.state;
        const filteredMonsters = monsters
            .filter(monster => monster.name.toLowerCase()
                .includes(searchField.toLowerCase()))
        return (
            <div className="App">
                <h1 align="center">Leos Monster Rolodex</h1>
                <Searchbox
                    placeholder='Suche Monster'
                    handleChange={this.handleChange}
                />
                <CardList monsters={filteredMonsters}>
                </CardList>
            </div>
        );
    }
}

export default App;
