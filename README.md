
# Chat-SmartDiet

## Descrição do Projeto

O **Chat-SmartDiet** é um complemento ao sistema **SmartDiet**. Este projeto é um servidor WebSocket que fornece funcionalidades de chat em tempo real entre nutricionistas e pacientes. O objetivo é oferecer uma comunicação direta e segura para o acompanhamento contínuo entre nutricionista e paciente. O servidor WebSocket permite que nutricionistas se comuniquem com múltiplos pacientes e vice-versa, mantendo a interação no contexto do SmartDiet. 

## Tecnologias Utilizadas

- **Node.js** (Backend)
- **Express** (Framework para servidores HTTP)
- **WebSocket** (Comunicação em tempo real)
- **PostgreSQL** (Banco de Dados)
- **dotenv** (Gerenciamento de variáveis de ambiente)

## Requisitos

- **Node.js** (>= 20.16.0)
- **PostgreSQL** (>= 16.4)

### Extensões do PostgreSQL Necessárias

- **pg** (conector para PostgreSQL)
- **dotenv** (carregar variáveis de ambiente de arquivos .env)

## Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/MatheusMoreira6/Chat-SmartDiet.git
cd Chat-SmartDiet
```

### Passo 2: Instalar Dependências

- Instale as dependências do Node.js:
  ```bash
  npm install
  ```

### Passo 3: Configurar o Banco de Dados

1. Crie um banco de dados no PostgreSQL.
2. Renomeie o arquivo `.env.example` para `.env` e configure as credenciais de acesso ao banco de dados:
   
   ```bash
   DB_CONNECTION=pgsql
   DB_HOST=127.0.0.1
   DB_PORT=5432
   DB_DATABASE=nome_do_banco_de_dados
   DB_USERNAME=seu_usuario
   DB_PASSWORD=sua_senha
   ```

### Passo 4: Executar o Projeto

Inicie o servidor WebSocket:

```bash
npm start
```

O servidor WebSocket estará rodando na porta definida no arquivo `.env` (geralmente 8080).

## Como Funciona

- Quando um usuário (nutricionista ou paciente) se conecta ao WebSocket, ele envia um identificador (ID) e o tipo de usuário (nutricionista ou paciente).
- O servidor mantém a comunicação entre os usuários, permitindo que mensagens sejam enviadas entre o nutricionista e seus pacientes ou entre um paciente e seu nutricionista.
- As mensagens são enviadas em tempo real, garantindo uma comunicação eficiente.

## Desenvolvedores

- **Danilo Silva de Lima**
  - CGM: 802.245
- **Matheus Moreira Mendes**
  - CGM: 802.238

## Licença

Este projeto é desenvolvido para fins acadêmicos no **Centro Universitário da Grande Dourados**.
