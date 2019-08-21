import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Headline extends PureComponent {
    render() {
        const { headline } = this.props;

        return <h1>{"Die beliebtesten Chayns-Seiten"}</h1>;
    }
}

export default Headline;
