import React from 'react';
import { render } from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './app.scss';


function App() {
    return <p styleName="para">Hi, <b>there</b></p>;
}

const AppStyles = CSSModules(App, styles);

render(<AppStyles />, document.getElementById('app'));
