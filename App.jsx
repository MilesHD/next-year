// App component - represents the whole app
App = React.createClass({

    // this mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Goals colleciton and puts them on this.data.goals
    getMeteorData() {
        return {
            goals: Goals.find({}, {sort: {createdAt: -1}}).fetch()
        }
    },

    // Componenet re-rendered every time gaols collection changes
    renderGoals() {
        return this.data.goals.map((goal) => {
            return <Goal key={goal._id} goal={goal} />;
        });
    },

    // Inserts a new goal document into the Goals collection
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        var text = React.findDOMNode(this.refs.textInput).value.trim();

        Goals.insert({
            text: text,
            createdAt: new Date()
        });

        // Clear form
        React.findDOMNode(this.refs.textInput).value = '';
    },

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Next Year</h1>

                    <form className="new-goal" onSubmit={this.handleSubmit}>
                        <input type="text" ref="textInput" placeholder="What are you going to do? (Write Past Tense)" />
                    </form>
                </header>
                <ul>
                    {this.renderGoals()}
                </ul>
            </div>
        );
    }

});
