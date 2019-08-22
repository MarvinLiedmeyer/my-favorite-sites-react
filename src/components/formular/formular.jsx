import React, { PureComponent } from 'react';
import { Accordion } from 'chayns-components';
import { Input } from 'chayns-components';
import { TextArea } from 'chayns-components';
import { Button, ChooseButton } from 'chayns-components';
import { text } from '@fortawesome/fontawesome-svg-core';
import addMessage from "/Dev/Projects/MyFavSites/My-Favorit-Sites-React/src/components/addMessage"

class Formular extends PureComponent {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            address: '',
            comment: ''
        }
    }
    render() {
        const { name, email, address, comment } = this.state;

        return (
            <Accordion head="Hinzufügen">
                <div className="accordion__content">
                    <Input
                        className="name"
                        type="text"
                        placeholder="Name"
                        onChange={(v) => this.setState({ name: v })}
                        value={name}
                        style={{ paddingTop: "16px" }}
                    />
                    <Input
                        className="email"
                        type="text"
                        placeholder="E-Mail"
                        value={email}
                        onChange={(v) => this.setState({ email: v })}
                    />
                    <Input
                        className="address"
                        type="text"
                        placeholder="Internetadresse"
                        value={address}
                        onChange={(v) => this.setState({ address: v })}
                    />
                    <TextArea
                        className="comment"
                        placeholder="Kommentar"
                        value={comment}
                        onChange={(v) => this.setState({ comment: v })}
                    />
                    <div style={{ textAlign: "center" }}>
                        <Button
                            style={{ margin: "16px" }}
                            onClick={() => addMessage({
                                name: chayns.env.user.id,
                                email: email,
                                name: name,
                                comment: comment,
                                address: address
                            }).then(result => {
                                name: ''
                                email: ''
                                address: ''
                                comment: ''
                            })
                            }
                        >Registrieren</Button>
                    </div>
                </div>
            </Accordion >
        )
    }
}

export default Formular;
