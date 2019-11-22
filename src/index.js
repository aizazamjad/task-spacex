import React from 'react';
import ReactDOM from 'react-dom';
import Launch from './launches';
import Rockets from './rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'reactstrap';
import './index.css';


ReactDOM.render(<Row><h1>SpaceX</h1><Col xs="6"><Launch /></Col><Col xs="6"><Rockets /></Col></Row>, document.getElementById('root'));