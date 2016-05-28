/**
 * @introduction  Entry
 * @authors       Tongao (email:tongao@yhd.cn)
 * @date          2016-04-26 10:18
 * @update        2016-04-26 10:18
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
