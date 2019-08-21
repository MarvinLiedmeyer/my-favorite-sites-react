import React, { PureComponent } from 'react';
import { Accordion } from 'chayns-components';
import { Input } from 'chayns-components';
import { TextArea } from 'chayns-components';
import { Button, ChooseButton } from 'chayns-components';
import { text } from '@fortawesome/fontawesome-svg-core';

class Formular extends PureComponent {
    render() {
        return (
            <Accordion head="Hinzufügen">
                <div className="accordion__content">
                    <Input type="text" placeholder="Name" style={{ paddingTop: "16px" }}></Input>
                    <Input type="text" placeholder="E-Mail"></Input>
                    <Input type="text" placeholder="Internetadresse"></Input>
                    <TextArea placeholder="Kommentar"></TextArea>
                    <div style={{textAlign: "center"}}>
                        <Button style={{ margin: "16px"}}>Registrieren</Button>
                    </div>
                </div>
            </Accordion >
        )
    }
}

export default Formular;
