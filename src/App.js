import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person
        firstName={"Sophia"}
        lastName={"Smith"}
        age={21}
        hair={"black"} />
      <Person
        firstName={"Megan"}
        lastName={"Rapinoe"}
        age={37}
        hair={"pink"} />
      <Person
        firstName={"Alex"}
        lastName={"Morgan"}
        age={33}
        hair={"brown"} />
      <Person
        firstName={"Becky"}
        lastName={"Sauerbrunn"}
        age={37}
        hair={"blond"} />
    </div>
  );
}

export default App;
