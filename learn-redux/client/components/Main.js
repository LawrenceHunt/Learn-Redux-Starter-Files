import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {

  render() {
    console.log('this is: ', this)
    return (
      <div>
        <h1>
          <Link to="/">Poopxtagram</Link>
        </h1>
        {console.log('this is 2: ', this)}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

export default Main;
