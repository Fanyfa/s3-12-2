import React from 'react';
import { Link } from 'react-router-dom';

class Lista extends React.Component {
  render() {
    return (
      <ul>
        {this.props.data.map(function (item,index) {
          return (
            <div>
              <li>
                <Link to={`/PersonDetail/${index}`}>{item.name.first}</Link>
              </li>
            </div>
          )
        })}
      </ul>
    );
  }
}

export default Lista;