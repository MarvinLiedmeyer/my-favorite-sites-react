import React, { PureComponent } from 'react';
import {
    Accordion, Input, TextArea, Button
} from 'chayns-components';
import addMessage from './addMessage';
import {
    checkValidation, nameRegex, emailRegex, addressRegex
} from '../../utils/validation';

class Formular extends PureComponent {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            address: '',
            comment: ''
        };
    }

    render() {
        const {
            name, email, address, comment
        } = this.state;

        return (
            <Accordion head="Hinzufügen">
                <div className="accordion__content">
                    <Input
                        className="name"
                        type="text"
                        placeholder="Name"
                        required
                        regExp={nameRegex}
                        onChange={v => this.setState({ name: v })}
                        value={name}
                        style={{ paddingTop: '16px' }}
                    />
                    <Input
                        className="email"
                        type="text"
                        placeholder="E-Mail"
                        required
                        regExp={emailRegex}
                        value={email}
                        onChange={v => this.setState({ email: v })}
                    />
                    <Input
                        className="address"
                        type="text"
                        placeholder="Internetadresse"
                        required
                        regExp={addressRegex}
                        value={address}
                        onChange={v => this.setState({ address: v })}
                    />
                    <TextArea
                        className="comment"
                        placeholder="Kommentar"
                        value={comment}
                        onChange={v => this.setState({ comment: v })}

                    />
                    <div style={{ textAlign: 'center' }}>
                        <Button
                            disabled={!checkValidation(name, email, address)}
                            style={{ margin: '16px' }}
                            onClick={() => addMessage({
                                id: chayns.env.user.id,
                                email,
                                name,
                                comment,
                                address
                            }).then(() => {
                                this.setState({
                                    name: '',
                                    email: '',
                                    address: '',
                                    comment: ''
                                });
                            })
                            }
                        >
                            Registrieren

                        </Button>
                    </div>
                </div>
            </Accordion >
        );
    }
}

export default Formular;
