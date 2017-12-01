import 'bootstrap-css';
import './static/css/base.css';
import './static/css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import WCharts from './Components/Whatap/WCharts';

ReactDOM.render(
    <WCharts />,
    document.getElementById('content')
);
