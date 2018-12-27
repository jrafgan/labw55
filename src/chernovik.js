

class App extends Component {
    state = {
        people: [
            {name: 'Dmitrii', age: 29, hobby: 'Hobby: Video Games', id: 'd1'},
            {name: 'John', age: 30, hobby: 'Likes drinking alone', id: 'j1'},
            {name: 'Jack', age: 69, hobby: 'Collects post stamps', id: 'j2'},
            {name: 'Haru-kun', age: 19, hobby: 'Otaku desu!', id: 'h1'},
        ],
        showTask: true
    };

    changeName = (event, index) => {
        const people = [...this.state.people];
        const newTask = {...this.state.people[index]};

        newTask.name = event.target.value;

        people[index] = newTask;

        this.setState({people: people});
    };

    increaseAge = id => {
        const index = this.state.people.findIndex(newTask => newTask.id === id);

        const people = [...this.state.people];
        const newTask = {...this.state.people[index]};

        newTask.age++;

        people[index] = newTask;

        this.setState({people});
    };

    removenewTask = index => {
        const people = [...this.state.people];
        people.splice(index, 1);

        this.setState({people});
    };

    togglePeople = () => {
        this.setState({
            showTask: !this.state.showTask
        });
    };

    render() {
        let people = null;

        if (this.state.showTask) {
            people = this.state.people.map((newTask, index) => (
                <newTask
                    name={newTask.name}
                    age={newTask.age}
                    onClick={() => this.increaseAge(newTask.id)}
                    onChange={event => this.changeName(event, index)}
                    remove={() => this.removenewTask(index)}
                >
                    <i>{newTask.hobby}</i>
                </newTask>
            ));
        }

        return (
            <div className="App">
                <div>
                    <button onClick={this.togglePeople}>Toggle People</button>
                </div>
                {people}
            </div>
        );
    }
}

