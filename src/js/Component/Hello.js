/**
 * @introduction  NAME
 * @authors       Null (email:Null@yhd.cn)
 * @date          DATE
 * @update        DATE
 */


import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <h1 className="title">
            Hello Webpack React!
          </h1>
        )
    }
}

export { Hello as default }
