import React, { PureComponent } from 'react';
import { Accordion } from 'chayns-components';
import { List, ListItem } from 'chayns-components';


class CreateList extends PureComponent {
    render() {
        return (
            <Accordion head="Top Seiten" onSearch={console.log} searchPlaceholder="Suchen...">
                <div className="accordion__content">
                    Hello World!
            </div>
            </Accordion >
        )
    }
}

export default CreateList;
