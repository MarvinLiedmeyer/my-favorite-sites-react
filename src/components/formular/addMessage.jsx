const addMessage = async ({
    id, name, email, address, comment
}) => {
    await chayns.login();

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
};

export default addMessage;
