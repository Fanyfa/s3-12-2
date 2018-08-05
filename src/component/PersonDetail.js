import React from 'react';

class PersonDetail extends React.Component {
  render() {
    console.log(this.props);
    if (this.props.data.length === 0) {
      return null;
    } else {
      return (
        <li>
        <p>{this.props.data[this.props.match.params.id].name.first}</p>
        <p>{this.props.data[this.props.match.params.id].cell}</p>
        </li>
      );
    }
  }
}

export default PersonDetail;