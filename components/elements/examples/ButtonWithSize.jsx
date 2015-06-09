import React from 'react'
import Button from '../Button.jsx'

var instance = (
  <div>
    <Button size="mini"> mini </Button>
    <Button size="tiny"> tiny </Button>
    <Button> normal </Button>
    <Button size="large"> large </Button>
    <Button size="big"> big </Button>
    <Button size="huge"> huge </Button>
    <Button size="massive"> massive </Button>
  </div> );

React.render(instance, mountNode);
