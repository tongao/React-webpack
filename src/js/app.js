/**
 * @introduction  Entry
 * @authors       Null (email:Null)
 * @date          Null
 * @update        Null
 */

import '../css/app.scss';

// import react
import React from 'react';
import { render } from 'react-dom';

// import Hello
import Hello from './Component/Hello';

// Render
render(
  <Hello />,
  document.getElementById('app')
);
