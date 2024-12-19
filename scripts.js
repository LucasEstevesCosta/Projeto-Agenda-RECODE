let agenda = [];

showMenu();


function showMenu() {
    let option = ''

    while (option != '0') {
        option = prompt(
            'Escolha uma opção:\n' +
            '1 - Adicionar contato\n' +
            '2 - Listar contatos\n' +
            '3 - Remover contato pela posição\n' +
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

    while (nameIsEmpty(addName)) {
        alert('O nome precisa ser preenchido.');
        addName = prompt('Digite o nome do contato:');
    }

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
    if (agendaIsEmpty(false)) {
        return;
    }

    let contacts = agenda.map((contact, index) => {
        return `Contato ${index + 1} - Nome: ${contact.name} - Telefone: ${contact.telephone}`
    })
    return contacts.join('\n');
};


function agendaIsEmpty(msg = '', showAlert = true) {
    if (agenda.length === 0) {
        if (showAlert) {
            alert(msg);
        }
        return true;
    } else {
        return false;
    }
}

function nameIsEmpty(name) {
    if (!name) {
        return true;
    }
}


function showContactList() {
    if (agendaIsEmpty(msg = 'Não há contatos para exibir.')) {
        return;
    }
    const contactList = createContactList()
    alert(contactList);
}


function removeContactByIndex() {
    if (agendaIsEmpty(msg = 'Não há contatos para remover.')) {
        return;
    }

    const contactList = createContactList()

    const option = prompt(`${contactList}\n
        Qual a posição do contato que deseja remover?`
    );

    if (nameIsEmpty(option)) {
        alert('Opção inválida.');
        return;
    }

    const removedContact = agenda[option - 1];
    const confirmation = prompt(`Tem certeza que deseja remover o contato ${removedContact}? [S] para sim e [N] para não`).toUpperCase();
    if (confirmation === 'S') {
        agenda.splice(option - 1, 1);
        alert('Contato removido com sucesso.');
    } else {
        alert('Operação cancelada.');
        return;
    }
}


function removeContactByName() {
    if (agendaIsEmpty(msg = 'Não há contatos para remover.')) {
        return;
    }

    const nameToRemove = prompt('Digite o nome do contato que deseja remover:');
    const indexToRemove = agenda.findIndex((contact) => {
        return contact.name.toLowerCase() === nameToRemove.toLowerCase();
    })

    if (indexToRemove === -1) {
        alert('Contato nao encontrado.');
        return;
    } else {
        const removedContact = agenda.splice(indexToRemove, 1)[0];
        const confirmation = prompt(`Tem certeza que deseja remover o contato ${removedContact.name}? [S] para sim e [N] para não`).toUpperCase();
        if (confirmation === 'S') {
        alert(`Contato ${removedContact.name} removido com sucesso.`);
        } else {
            alert('Operação cancelada.');
            return;
        }
    }
}