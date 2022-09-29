import * as React from 'react';
import HomePage from './pages/home-page';
import Header from './components/header/header';
import './global.scss';

const App = () => (
    <div>
        <Header/>
        <HomePage/>
    </div>
);

export default App;
