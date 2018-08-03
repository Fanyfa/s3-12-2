import React from 'react';

class PersonDetail extends React.Component {
  render() {
    return (
      <li>
      {/* <img src={this.props.item.picture.medium} alt=""/>
      <h6>{this.props.item.location.city}</h6>
      <h6>{this.props.item.dob.age}</h6> */}
      <p>This is child number {this.props.match.params.id}</p>
      </li>
    );
  }
}

export default PersonDetail;