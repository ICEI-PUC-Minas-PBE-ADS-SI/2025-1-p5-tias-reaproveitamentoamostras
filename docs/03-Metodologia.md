
# Metodologia

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>

Descreva aqui a metodologia de trabalho do grupo para abordar o problema. Inclua definições sobre os ambientes de trabalho utilizados pela equipe para desenvolver o projeto. Isso abrange a relação dos ambientes utilizados, a estrutura para a gestão do código-fonte, além da definição do processo e das ferramentas por meio dos quais a equipe se organiza (gestão de equipes).


## Controle de versão

A ferramenta de controle de versão adotada no projeto foi o [Git](https://git-scm.com/), sendo que o [GitHub](https://github.com) foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gestão de tags, merges, commits e branches é realizada. Discuta também como a gestão de issues foi feita.

> **Links úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e GitHub](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Planejamento do projeto

###  Divisão de papéis

> Apresente a divisão de papéis entre os membros do grupo em cada Sprint. O desejável é que, em cada Sprint, o aluno assuma papéis diferentes na equipe. Siga o modelo do exemplo abaixo:

#### Sprint 1
- _Scrum master_: Viviane
- Protótipos: Arthur
- Testes: João
- Documentação: Ana Julia, Bruno, Marcos

#### Sprint 2
- _Scrum master_: Viviane
- Desenvolvedor _front-end_: Marcos
- Desenvolvedor _back-end_: Ana Julia
- Testes: Bruno, Arthur, Joao

#### Sprint 3
- _Scrum master_: Viviane
- Desenvolvedor _front-end_: Marcos
- Desenvolvedor _back-end_:  Ana Julia
- Testes: Bruno, Arthur, Joao
  
###  Quadro de tarefas

> Apresente a divisão de tarefas entre os membros do grupo e o acompanhamento da execução, conforme o exemplo abaixo.

#### Sprint 1

Atualizado em: 16/03/2025

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Viviane        | README | 23/02/2025     | 16/03/2025  | ✔️    | 23/02/2025      |
| Viviane        | Contexto    | 16/03/2025    | 16/03/2025 | ✔️   |      16/03/2025           |
| Viviane        | Especificações  | 16/03/2025     | 16/03/2025 | ✔️     |          16/03/2025        |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
|   Ana Julia  | Documentação |   15/03/2025      |  16/03/2025  |  ✔️    | 15/03/2025  |
|   Ana Julia  | Slide |   15/03/2025      |  16/03/2025  |  ✔️    | 15/03/2025  |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Arthur        | Diagrama de Caso de Uso | 16/03/2025     | 16/03/2025  | ✔️    | 16/03/2025      |


#### Sprint 2

Atualizado em: 06/04/2025

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Arthur       | Preenchimento do item 4 - Processo 1 | 06/04/2025     | 06/04/2025 | ✔️    | 06/04/2025      |
| Arthur       | Documentação    | 03/04/2025     | 06/04/2025 | ✔️    | 05/04/2025                | 
| Arthur       | Assinar Carta de Apresentação | 30/03/2025     | 06/04/2025 | ✔️    | 30/03/2025                | 
| Arthur       | Criar Apresentação de Slides | 04/04/2025     | 06/04/2025 | ✔️    | 06/04/2025              | 

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
|  Ana Julia    | Realização do item 4 - Processo 2   | 06/04/2025    | 06/04/2025 | ✔️    | 06/04/2025     |
|  Ana Julia       | Assinar carta de apresentação  | 30/03/2025    | 06/04/2025 | ✔️    | 30/03/2025     |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Bruno        | (Item 04) Modelagem dos processos de negócio | 05/03/2025     | 06/04/2025  | ✔️    | 06/04/2025      |


#### Sprint 3

Atualizado em: 11/05/2025

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Arthur       | Elaboração do Diagrama de Classes | 04/05/2025     | 11/05/2025 | ✔️    | 04/05/2025      |
| Arthur       | Realização da página "Tecnologias" | 11/05/2025     | 11/05/2025 | ✔️    | 11/05/2025                |
| Arthur       | Elaboração do Diagrama de Tecnologias | 08/05/2025     | 11/05/2025 | ✔️    | 11/05/2025                | 
| Arthur       | Elaboração do Diagrama User FLow | 11/05/2025     | 11/05/2025 | ✔️    | 11/05/2025                | 
| Arthur       | Preenchimento das Telas do processo 2: Cadastro de Gerenciamento de Amostras na Seção 5 | 11/05/2025     | 11/05/2025 | ✔️    | 11/05/2025                | 

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Ana Julia       | Criação dos protótipos de tela | 28/04/2025     | 11/05/2025 | ✔️    | 10/05/2025      |
| Ana Julia       | Preenchimento do Wireframe na Seção 5 | 11/05/2025     | 11/05/2025 | ✔️    | 11/05/2025      |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Bruno         | Realização da Jornada do Usuário (processo 5) | 10/04/2025     | 11/05/2025 | ✔️    | 11/05/2025      |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Marcos         | Slides | 10/04/2025     | 11/05/2025 | ✔️    | 11/05/2025      |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| João Santos       | Criação dos protótipos de tela | 29/04/2025     | 11/05/2025 | ✔️    | 10/05/2025      |
| João Santos       | Preenchimento do Wireframe na Seção 6 | 11/05/2025     | 11/05/2025 | ✔️    | 11/05/2025      |

#### Sprint 4

Atualizado em: 08/06/2025

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Arthur       | Alteração de Copy na page GraosDisponiveis | 08/06/2025     | 08/06/2025 | ✔️    | 08/06/2025      |
| Arthur       | Melhoria de Layout na page About | 07/06/2025     | 08/06/2025 | ✔️    | 08/06/2025                |
| Arthur       | Elaboração dos slides para apresentação | 08/06/2025     | 08/06/2025 | ✔️    | 08/06/2025                | 

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Ana Julia    | Alteração de melhoria de depuração na parte de UserProfile| 07/06/2025     | 08/06/2025 | ✔️    | 08/06/2025      |
| Ana Julia      | Melhoria de estilização na parte de userdashboard | 08/06/2025     | 08/06/2025 | ✔️    | 08/06/2025       |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| João       | Testes na aplicação | 06/06/2025     | 08/06/2025 | ✔️    | 07/06/2025      |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Bruno       | Melhoria na formatação das paginas de login e cadastro | 07/06/2025     | 08/06/2025 | ✔️    | 08/06/2025      |


#### Sprint 5

Atualizado em: 29/06/2025
| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Ana Julia    | Gravação do Pitch| 28/06/2025     | 29/06/2025 | ✔️    | 28/06/2025      |
| Ana Julia      | Edição do campo 05-Projeto-interface | 29/06/2025     | 29/06/2025 | ✔️    | 29/06/2025       |

| Responsável   | Tarefa/Requisito | Iniciado em    | Prazo      | Status | Terminado em    |
| :----         |    :----         |      :----:    | :----:     | :----: | :----:          |
| Arthur    | Gravação do Pitch | 28/06/2025     | 29/06/2025 | ✔️    | 28/06/2025      |
| Arthur    | Preenchimento do campo 09-registro-testes-software | 27/06/2025     | 29/06/2025 | ✔️    | 29/06/2025       |
| Arthur    | Edição da pasta presentation | 29/06/2025     | 29/06/2025 | ✔️    | 29/06/2025       |


Legenda:
- ✔️: terminado
- 📝: em execução
- ⌛: atrasado
- ❌: não iniciado


> **Links úteis**:
> - [11 passos essenciais para implantar Scrum no seu projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo

Coloque informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.
 
> **Links úteis**:
> - [Planejamento e gestão ágil de projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Como criar backlogs no GitHub](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial slack](https://slack.com/intl/en-br/)


## Relação de ambientes de trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas. Todos os ambientes e frameworks utilizados no desenvolvimento da aplicação estão listados na seção abaixo.

### Ferramentas

Liste todas as ferramentas que foram empregadas no projeto, justificando a escolha delas, sempre que possível.

Exemplo: os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente                            | Plataforma                         | Link de acesso                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte         | GitHub                             | https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras/tree/main/src/front                            |
| Documentos do projeto               | GitHub                             | https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras/tree/main/docs                            |
| Projeto de interface                | Figma                              | http://....                            |
| Gerenciamento do projeto            | GitHub Projects                    | https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras                            |
| Hospedagem                          | Vercel                             | https://reamostra-git-main-marvinreissantos-projects.vercel.app/                            |
 
