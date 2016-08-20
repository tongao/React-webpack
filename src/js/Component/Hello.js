/**
 * @introduction  NAME
 * @authors       Null (email:Null)
 * @date          DATE
 * @update        DATE
 */


import React, {  PropTypes } from 'react';

class Hello extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
          <h1 className='title'>
            Hello Webpack React!
          </h1>
        )
    }
}
export { Hello as default }
