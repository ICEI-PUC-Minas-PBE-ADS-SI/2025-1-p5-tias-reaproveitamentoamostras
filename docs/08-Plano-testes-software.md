# Plano de Testes de Software

O plano de testes de software foi elaborado com base na especificação do sistema e compreende um conjunto de casos de teste que foram executados à medida que a implementação foi sendo desenvolvida e finalizada.

Neste documento, apresentamos os cenários de teste utilizados para validar a aplicação, selecionando aqueles que comprovam o atendimento aos requisitos funcionais definidos.

Cada cenário de teste está enumerado sequencialmente, detalhando as funcionalidades avaliadas, o perfil dos usuários envolvidos nos testes e as ferramentas utilizadas para sua execução.

O sistema foi testado de forma criteriosa pelo grupo, garantindo que todos os casos de teste estejam claramente associados aos seus respectivos requisitos, conforme definido na <a href="02-Especificacao.md">Especificação do projeto</a>, assegurando rastreabilidade e alinhamento com os objetivos do sistema.

# Requisitos do Sistema

---

## Requisitos Funcionais

| ID     | Descrição do Requisito                                                                 | Prioridade |
|--------|----------------------------------------------------------------------------------------|------------|
| RF-001 | Permitir o cadastro de usuário administrador com acesso para gerenciar amostras        | ALTA       |
| RF-002 | Permitir que qualquer pessoa se cadastre como usuário comum interessado em receber doações | ALTA       |
| RF-003 | Permitir que o usuário comum escolha quais tipos de alimentos ele tem interesse        | MÉDIA      |
| RF-004 | Disponibilizar um catálogo com informações sobre as amostras disponíveis                | MÉDIA      |
| RF-005 | Enviar e-mail aos interessados informando novos alimentos disponíveis para doação e como entrar em contato para receber | ALTA       |
| RF-006 | Permitir que usuário administrador edite uma amostra como indisponível e registre o usuário comum que recebeu a doação | ALTA       |
| RF-007 | Disponibilizar um relatório de histórico de doações e amostras disponíveis             | MÉDIA      |

---

## Requisitos Não Funcionais

| ID      | Descrição do Requisito                                                        | Prioridade |
|---------|-------------------------------------------------------------------------------|------------|
| RNF-001 | O sistema deve ser acessível via dispositivos móveis e desktop                | ALTA       |
| RNF-002 | O tempo de resposta das solicitações não deve ultrapassar 3 segundos          | MÉDIA      |
| RNF-003 | A interface deve ser intuitiva para usuários com pouco conhecimento tecnológico | ALTA       |
| RNF-004 | O sistema deve garantir a segurança e privacidade dos dados dos usuários       | ALTA       |
| RNF-005 | O sistema deve ser escalável para atender no mínimo 40 usuários conectados ao mesmo tempo sem perda de desempenho | MÉDIA      |

---

# Plano de Testes

| **Caso de teste**                | **CT-001 – Cadastro de Usuário**                                         |
|---------------------------------|-------------------------------------------------------------------------|
| Requisito associado             | RF-001 - A aplicação deve permitir o cadastro de usuários interessados em receber doações. |
| Objetivo do teste               | Verificar se o usuário consegue se cadastrar corretamente no sistema.   |
| Passos                         | - Acessar o navegador <br> - Informar o endereço do sistema <br> - Clicar em "Cadastrar" <br> - Preencher todos os campos obrigatórios <br> - Confirmar cadastro |
| Critério de êxito              | - O cadastro é concluído com sucesso e usuário recebe confirmação.       |
| Responsável pela elaboração    | Ana Julia Ferreira Soares                                                 |
| Responsável pelo teste         | Arthur Santos Bezerra                                                    |

---

| **Caso de teste**                | **CT-002 – Login de Usuário**                                            |
|---------------------------------|-------------------------------------------------------------------------|
| Requisito associado             | RF-002 - A aplicação deve permitir que usuários façam login com e-mail e senha. |
| Objetivo do teste               | Verificar se o usuário consegue realizar login na aplicação.            |
| Passos                         | - Acessar o navegador <br> - Informar o endereço do sistema <br> - Clicar em "Entrar" <br> - Inserir e-mail e senha válidos <br> - Confirmar login |
| Critério de êxito              | - Usuário é autenticado e direcionado para o painel principal.           |
| Responsável pela elaboração    | Bruno Maciel dos Santos                                                  |
| Responsável pelo teste         | João Vinicius Rodrigues Santos                                          |

---

| **Caso de teste**                | **CT-003 – Cadastro de Amostras**                                       |
|---------------------------------|-------------------------------------------------------------------------|
| Requisito associado             | RF-003 - O sistema deve permitir o cadastro das amostras disponíveis para doação. |
| Objetivo do teste               | Verificar se o administrador consegue cadastrar amostras no sistema.    |
| Passos                         | - Acessar o sistema como administrador <br> - Navegar até área de cadastro de amostras <br> - Preencher informações obrigatórias da amostra <br> - Salvar cadastro |
| Critério de êxito              | - Amostra é salva e aparece no catálogo para os usuários.                |
| Responsável pela elaboração    | João Vinicius Rodrigues Santos                                          |
| Responsável pelo teste         | Marcos Vinicius dos Reis Santos                                         |

---

| **Caso de teste**                | **CT-004 – Visualização do Catálogo de Amostras**                       |
|---------------------------------|-------------------------------------------------------------------------|
| Requisito associado             | RF-004 - Disponibilizar um catálogo com informações sobre as amostras disponíveis. |
| Objetivo do teste               | Verificar se o usuário consegue visualizar as amostras disponíveis no catálogo. |
| Passos                         | - Acessar o sistema <br> - Navegar até a página de catálogo de amostras <br> - Visualizar informações como nome, peso, descrição e foto das amostras |
| Critério de êxito              | - Amostras são exibidas com todas as informações corretas.              |
| Responsável pela elaboração    | Marcos Vinicius dos Reis Santos                                         |
| Responsável pelo teste         | Viviane Cristina de Souza Santos                                        |

---

| **Caso de teste**                | **CT-005 – Inscrição para Recebimento de Doações**                      |
|---------------------------------|-------------------------------------------------------------------------|
| Requisito associado             | RF-005 - Interessados devem poder se inscrever para participar dos sorteios de doações. |
| Objetivo do teste               | Verificar se o usuário consegue realizar inscrição para o sorteio de doações. |
| Passos                         | - Acessar o sistema <br> - Navegar até a área de inscrições <br> - Preencher dados necessários para inscrição <br> - Confirmar inscrição |
| Critério de êxito              | - Inscrição é realizada com sucesso e usuário recebe confirmação.        |
| Responsável pela elaboração    | Viviane Cristina de Souza Santos                                        |
| Responsável pelo teste         | Ana Julia Ferreira Soares                                               |

---

## Ferramentas de Testes (opcional)

Para a realização dos testes, utilizamos ferramentas como:

- Navegadores modernos (Google Chrome, Firefox) para testes manuais da interface.
- Insomnia para testar as APIs do back-end.
- Supabase Studio para verificar banco de dados e autenticação.
- Ferramentas de captura de tela e gravação para registro dos testes.

---

## Integrantes

- Ana Julia Ferreira Soares  
- Arthur Santos Bezerra  
- Bruno Maciel dos Santos  
- João Vinicius Rodrigues Santos  
- Marcos Vinicius dos Reis Santos  
- Viviane Cristina de Souza Santos  