import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Intro extends PureComponent {
    render() {
        const { intro } = this.props;

        return (
            <div className="tapp__intro">
                <p>{'In dieser Liste stehen die 50-beliebtesten Chayns-Seiten.'}</p>
                <p>{'Deine Seite ist nicht dabei?'}</p>
            </div>
        );
    }
}
export default Intro;
