import React, { Component } from 'react';

export default class MainLayout extends Component {
  render() {
    return (
      <section className='main-layout'>
        {this.props.children}
      </section>
    );
  }
}
