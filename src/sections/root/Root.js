import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/root.css';
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
      <div className={"src-containers-root--container"}>
        <HelloWorld />
      </div>
    );
  }
}

export default connect(null, null)(Root);