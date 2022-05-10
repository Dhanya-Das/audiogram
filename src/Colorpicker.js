import React, { useState, useEffect } from 'react';
class Colorpicker extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        color: '#1569a8',
        active: false
      };
    }
    
    handleChange = (e) => {
      this.setState({
        oldColor: this.state.color,
        color: e.target.value,
        active: !this.state.active,
      });
    };
    
    render() {
      return <div className="background" style={{ background: this.state.active ? this.state.oldColor : this.state.color }} >
        <div className={this.state.active ? 'overlay active' : 'overlay'} style={{ background: this.state.active ? this.state.color : this.state.oldColor }} />
        <h1 className="title">React html5 Color Input</h1>
        <label className="color-selector">
          <span className="circle" style={{ background: this.state.color }} />
          <span>{this.state.color}</span>
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
            className="hidden"
           />
        </label>
      </div>;
    }
  }
  
export default Colorpicker;