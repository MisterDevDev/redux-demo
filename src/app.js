import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      notes: [],
    };
  }

  createDog = () => {
    this.setState({
      dogs: [...this.state.dogs, { id: uuidv4(), tag: "NewDog" }],
    });
  };

  createNote = (id) => {
    this.setState({
      notes: [...this.state.notes, { id: uuidv4(), dogId: id }],
    });
  };

  render() {
    const { dogs, notes } = this.state;
    return (
      <div>
        <h2>Dog World!!</h2>
        <div className="app-body">
          <div className="flex-column">
            <button onClick={this.createDog}>Create Dog</button>
            {dogs.map((dog) => {
              return (
                <div key={dog.id}>
                  <div>
                    Dog #:
                    <br />
                    {dog.id.slice(0, 8)}
                  </div>
                  <button  onClick={() => this.createNote(dog.id)}>
                    Create Note
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex-column">
            <h3> Notes: </h3>
            {notes.map((note) => {
              return (
                <div key={note.id}>
                  Write a note about Dog #{note.dogId.slice(0, 8)}!
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
