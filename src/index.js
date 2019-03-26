import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header'
import Section1 from './components/section1/Section1'

const App = () => {
    return (
        <div>
            <Header />
            <Section1 />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))