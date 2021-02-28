// import logo from './logo.svg'
import { Component } from 'react';
import { CardList, SearchBar } from './components';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value});
  }
  
  // Called when component rendered on the DOM first time 
  componentDidMount() {
    console.log("App Component Mounted");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  // Renders everytime there is a state change
  render() {
    console.log("App Render");
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField))
    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
      <SearchBar placeholder="Search Monsters" handleChange={this.handleChange}></SearchBar>
      <CardList monsters={filteredMonsters}>
      </CardList>
      </div>
    );
  }
}

export default App;
