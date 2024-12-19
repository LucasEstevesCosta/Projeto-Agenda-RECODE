let agenda = [];

showMenu();


function showMenu() {
    let option = ''

    while (option != '0') {
        option = prompt(
            'Escolha uma opção:\n' +
            '1 - Adicionar contato\n' +
            '2 - Listar contatos\n' +
            '3 - Remover contato pelo número\n' +
            '4 - Remover contato pelo nome\n' +
            '0 - Sair'
        );

        switch (option) {
            case '1': 
                addContact();
                break;
            case '2': 
                showContactList();
                break;
            case '3': 
                removeContactByIndex();
                break;            
            case '4': 
                removeContactByName();
                break;
            case '0': 
                alert('Saindo...');
                break;
            default:
                alert('Opção inválida.');
                break;
        }
    };
};


function addContact() {
    let addName = prompt('Digite o nome do contato:');
    let addTelephone = prompt('Digite o telefone do contato:')

    while (addTelephone.length !== 9) {
        alert('Telefone precisa ter 9 dígitos.');
        addTelephone = prompt('Digite o telefone do contato:')
    };
    addName = capitalizeFirstLetter(addName);

    if (addName && addTelephone) {
        agenda.push({name: addName, telephone: addTelephone});
        alert('Contato adicionado com sucesso!');
    } else {
        alert('Estão faltando dados.')
    };
};


function capitalizeFirstLetter(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`;
}


function createContactList() {
    if (agendaEmpty(false)) {
        return;
    }

    let contacts = agenda.map((contact, index) => {
        return `Contato ${index + 1} - Nome: ${contact.name} - Telefone: ${contact.telephone}`
    })
    return contacts.join('\n');
};


function agendaEmpty(msg = '', showAlert = true) {
    if (agenda.length === 0) {
        if (showAlert) {
            alert(msg);
        }
        return true;
    } else {
        return false;
    }
}


function showContactList() {
    if (agendaEmpty(msg = 'Não há contatos para exibir.')) {
        return;
    }
    const contactList = createContactList()
    alert(contactList);
}


function removeContactByIndex() {
    if (agendaEmpty(msg = 'Não há contatos para remover.')) {
        return;
    }

    const contactList = createContactList()

    const option = prompt(`${contactList}\n
        Qual o número do contato que deseja remover?`
    );

    const confirmation = prompt(`Tem certeza que deseja remover o contato ${agenda[option - 1].name}? [S] para sim e [N] para não`).toUpperCase();
    if (confirmation === 'S') {
        agenda.splice(option - 1, 1);
        alert('Contato removido com sucesso.');
    } else {
        alert('Operação cancelada.');
        return;
    }
}


function removeContactByName() {

}