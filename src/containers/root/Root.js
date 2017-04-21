import React, { Component } from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../../components/hello-word/HelloWorld';

class Root extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      //
    }
  }

  render()
  {
    return (
      <HelloWorld />
    );
  }
}

export default connect(null, null)(Root);