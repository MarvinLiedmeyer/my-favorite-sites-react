const addMessage = async ({ id, name, email, address, comment }) => {

    await chayns.login();
    // if (!emailIsValid(email)) {
    //     chayns.dialog.alert('', 'Ungültige E-mail-Eingabe');
    //     return false;
    // }
    // if (!uRLIsValid(address)) {
    //     chayns.dialog.alert('', 'Ungültige Internetadress-Eingabe');
    //     return false;
    // }
    await chayns.intercom.sendMessageToPage({
        text: `${'Neue Seite'}
                        ${'ID: '} ${id}
                        ${'Name '} ${name}
                        ${'E-mail '} ${email}
                        ${'Adresse '} ${address}
                        ${'Kommentar '} ${comment}`
    });
    chayns.dialog.alert('', 'Danke fürs hinzufügen deiner Webseite. Deine Anfrage wird bearbeitet!');
    return true;
}

export default addMessage;