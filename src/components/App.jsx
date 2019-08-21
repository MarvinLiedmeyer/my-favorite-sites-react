import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader';
import Headline from './header/headline/Headline';
import Intro from './header/intro/Intro';
import CreateList from './top_sites/top_sites';
import Formular from './formular/formular'

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <div className="tapp">
                <Headline />
                <Intro />
                <CreateList />
                <Formular />
            </div>
        );
    }
}

export default hot(module)(App);
