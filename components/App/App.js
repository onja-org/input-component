import React from 'react';
import Input from '../Input/Input';

import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 'Text',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({
			value,
		});
		console.log('value in state', this.state.value);
	}

	render() {
		return (
			<main>
				<h1>Input component</h1>
				<fieldset>
					{`<Input />`}
					<Input placeholder="Uncontrolled input" />
				</fieldset>
				<fieldset>
					{`<Input helperText="We added state here" value={this.state.value} handleChange={this.handleChange} placeholder="This is a controlled input" />`}
					<Input
						helperText="We added state here"
						value={this.state.value}
						handleChange={this.handleChange}
						placeholder="This is a controlled input"
					/>
				</fieldset>
				<fieldset>
					{`<Input error helperText="This is an error input" placeholder="Write something else" label="This is an error label"/>`}
					<Input
						error
						helperText="This is an error input"
						placeholder="Write something else"
						label="This is an error label"
					/>
				</fieldset>
				<fieldset>
					{`<Input disabled placeholder="Oops" label="This is disabled"/>`}
					<Input disabled placeholder="Oops" label="This is disabled" />
				</fieldset>
				<fieldset>
					{`<Input label="Schedule an appointment" startIcon="magnifying-glass"/>`}
					<Input label="Schedule an appointment" startIcon="magnifying-glass" />
				</fieldset>
				<fieldset>
					{`<Input size="sm"/>`}
					<Input size="sm" />
				</fieldset>
				<fieldset>
					{`<Input size="md"/>`}
					<Input size="md" />
				</fieldset>
				<fieldset>
					{`<Input size="lg" endIcon="check-circled"/>`}
					<Input size="lg" endIcon="check-circled" />
				</fieldset>
				<fieldset>
					{`<Input fullWidth/>`}
					<Input fullWidth />
				</fieldset>
				<fieldset>
					{`<Input multiline row="4" error/>`}
					<Input multiline row="4" error />
				</fieldset>
			</main>
		);
	}
}

export default App;
