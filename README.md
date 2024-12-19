# Projeto: Agenda Simples (RECODE PRO)

Este projeto é uma agenda simples desenvolvida em JavaScript, que permite adicionar, remover e listar contatos. Foi feito como um exercício durante uma mentoria para praticar JavaScript.

## Features

* Adicionar contatos com nome e telefone
* Remover contatos por posição ou nome
* Listar contatos existentes
* Validação de dados de entrada (nome e telefone)
* Confirmação de remoção de contatos

## Funcionalidades

* O projeto utiliza um array para armazenar os contatos
* A função [addContact()](cci:1://file:///c:/Users/LENOVO/Meu%20Drive%20%28lucasestevescosta@gmail.com%29/PROJETOS_Programa%C3%A7%C3%A3o/Projeto-Agenda-RECODE/scripts.js:42:0-63:1) adiciona um novo contato ao array
* A função [removeContactByIndex()](cci:1://file:///c:/Users/LENOVO/Meu%20Drive%20%28lucasestevescosta@gmail.com%29/PROJETOS_Programa%C3%A7%C3%A3o/Projeto-Agenda-RECODE/scripts.js:110:0-135:1) remove um contato por sua posição no array
* A função [removeContactByName()](cci:1://file:///c:/Users/LENOVO/Meu%20Drive%20%28lucasestevescosta@gmail.com%29/PROJETOS_Programa%C3%A7%C3%A3o/Projeto-Agenda-RECODE/scripts.js:138:0-161:1) remove um contato por seu nome
* A função [showContactList()](cci:1://file:///c:/Users/LENOVO/Meu%20Drive%20%28lucasestevescosta@gmail.com%29/PROJETOS_Programa%C3%A7%C3%A3o/Projeto-Agenda-RECODE/scripts.js:101:0-107:1) lista todos os contatos existentes

## Tecnologias utilizadas

* JavaScript
* HTML (para a interface de usuário)

## Como usar

1. Abra o arquivo `index.html` no navegador
2. Clique no botão "Adicionar contato" para adicionar um novo contato
3. Clique no botão "Remover contato" para remover um contato existente
4. Clique no botão "Listar contatos" para listar todos os contatos existentes

## Observações

Este projeto é uma simples agenda e não possui persistência de dados. Os contatos são armazenados apenas na memória do navegador e são perdidos quando o navegador é fechado.

## Possíveis melhorias e funcionalidades para acrescentar

* **Implementar busca de contatos**: adicionar uma funcionalidade de busca para encontrar contatos específicos pelo nome ou telefone
* **Adicionar validação de dados mais robusta**: melhorar a validação de dados de entrada para evitar erros e garantir a consistência dos dados
* **Implementar edição de contatos**: permitir que os usuários editem os contatos existentes
* **Melhorar a interface de usuário**: melhorar a aparência e a usabilidade da interface de usuário para torná-la mais atraente e fácil de usar

### Melhorias de Funcionalidade
-----------------------------

* **Implementar persistência de dados**: armazenar os contatos em um banco de dados ou em um arquivo para que sejam preservados mesmo após o navegador ser fechado
* **Adicionar suporte a múltiplos tipos de contatos**: permitir que os usuários adicionem diferentes tipos de contatos, como e-mails, endereços, etc.
* **Implementar compartilhamento de contatos**: permitir que os usuários compartilhem contatos com outros usuários
* **Adicionar suporte a importação e exportação de contatos**: permitir que os usuários importem e exportem contatos em formatos como CSV ou JSON

### Melhorias de Segurança
-------------------------

* **Implementar autenticação e autorização**: adicionar uma camada de segurança para garantir que apenas usuários autorizados possam acessar e modificar os contatos
* **Criptografar os dados**: criptografar os dados armazenados para garantir a privacidade e a segurança dos usuários

### Melhorias de Desempenho
-------------------------

* **Otimizar o código**: melhorar a eficiência do código para reduzir o tempo de resposta e melhorar a experiência do usuário
* **Implementar caching**: armazenar dados frequentemente acessados em cache para reduzir o tempo de resposta

Essas são apenas algumas das melhorias e adições que podem ser feitas no código. A ordem e a prioridade dessas melhorias dependem das necessidades e dos objetivos do projeto.