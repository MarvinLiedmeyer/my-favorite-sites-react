import React, { PureComponent } from 'react';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Headline extends PureComponent {
    render() {
        return <h1>Die beliebtesten Chayns-Seiten</h1>;
    }
}

export default Headline;
