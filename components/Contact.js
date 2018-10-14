'use strict';

var Contact = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired,
	},
	render: function () {
		return (
			<div className={'classItem'}>
				<img className={'contactImage'} src={'http://icons.veryicon.com/png/Application/iOS8%20Cirtangle%20Concept/Contacts.png'}>
				<p className={'contactLabel'}>
					Imię: {this.props.item.firstName}
				<\p>
				<p className={'contactLabel'}>
					Nazwisko {this.props.item.lastName}
				<\p>
				<a className={'contactEmail'} href={'mailto' + this.props.item.email}>
					{this.props.item.email}
				<\a>
			<\div>
			);
	}
});