// Goal component - represents a single todo item
Goal = React.createClass({
    propTypes: {
        // This component gets the goal to display through a React prop.
        // We can use propTypes to indicate it is required
        goal: React.PropTypes.object.isRequired
    },

    toggleChecked() {
        // Set the checked poroperty to the opposite of its current value
        Goals.update(this.props.goal._id, {
            $set: {checked: !this.props.goal.checked}
        });
    },

    deleteThisGoal() {
        Goals.remove(this.props.goal._id);
    },

    render() {
        // Give goals a different className when they are checked off,
        const goalClassName = this.props.goal.checked ? "checked" : "";
        return (
            <li className={goalClassName}>
                <button className="delete" onClick={this.deleteThisGoal}>
                    &times;
                </button>

                <input
                    type="checkbox"
                    readOnly={true}
                    checked={this.props.goal.checked}
                    onClick={this.toggleChecked} />

                <span className="text">{this.props.goal.text}</span>
            </li>
       );
    }
});
