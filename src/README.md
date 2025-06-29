# Código do Projeto

Este repositório contém os arquivos-fonte da aplicação desenvolvida, incluindo **front-end**, **back-end** e **scripts de banco de dados**.

## Estrutura do Projeto

- [📦 Código do Front-end](../src/front) — Interface do usuário, construído com tecnologias web (HTML/CSS/JavaScript/React).
- [🔧 Código do Back-end](../src/back) — Lógica do servidor, API e integração com banco de dados.
- [🗄️ Scripts SQL](../src/db) — Scripts para criação da estrutura do banco de dados.

---

## Back-end e Supabase

A aplicação utiliza o **Supabase** como plataforma de backend.

O [Supabase](https://supabase.com/) é uma alternativa open-source ao Firebase que fornece:

- Banco de dados gerenciado PostgreSQL
- Autenticação de usuários
- API REST e em tempo real geradas automaticamente
- Armazenamento de arquivos e painel de administração

No projeto, o Supabase foi utilizado para:
- Gerenciar o banco de dados PostgreSQL
- Executar autenticação e regras de acesso
- Gerar APIs automáticas para o front-end

O script de criação da estrutura inicial do banco de dados está disponível em:

📄 [`migration.sql`](../src/db/migration.sql)

---

## Instalação do Site

Para tornar o nosso sistema acessível publicamente utilizamos a Vercel e o Supabase.

> 🔗 [**Acesse o sistema online**](https://reamostra-git-main-marvinreissantos-projects.vercel.app)

---

## Histórico de Versões

### [1.3.5] - 29/06/2025
#### Adicionado
- Estrutura inicial do front-end e back-end
- Script de migração do banco de dados (`migration.sql`)
- Integração com Supabase para autenticação e banco de dados
- Organização do projeto em pastas (`/front`, `/back`, `/db`)
- README inicial com instruções de instalação e uso

---

### [1.3.0] - 15/06/2025
#### Melhorado
- Implementação das rotas principais da API no back-end
- Ajustes na autenticação usando Supabase
- Documentação parcial dos endpoints no README

---

### [1.2.0] - 01/06/2025
#### Adicionado
- Layout inicial do front-end com telas básicas
- Configuração inicial do banco de dados PostgreSQL
- Scripts SQL para criação das tabelas básicas

---

### [1.1.0] - 20/05/2025
#### Corrigido
- Correção de bugs no fluxo de login
- Ajuste nas permissões de acesso no banco de dados
- Pequenas melhorias na interface do usuário

---

### [1.0.0] - 10/05/2025
#### Versão Inicial
- Protótipo funcional com funcionalidades básicas implementadas
- Primeiros testes com usuários
- Definição do escopo inicial do projeto