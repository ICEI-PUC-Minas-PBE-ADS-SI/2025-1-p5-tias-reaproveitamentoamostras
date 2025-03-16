# Especificação do projeto

 Esta página detalha a especificação do projeto ReAmostra, incluindo as personas envolvidas, histórias de usuários, requisitos funcionais e não funcionais, além das restrições e o diagrama de casos de uso. A definição dessas informações tem como base a <a href="01-Contexto.md"> Documentação de contexto</a>, permitindo a construção de uma solução alinhada às necessidades dos usuários.

A empresa parceira, Clastec, enfrenta desafios na redistribuição de amostras de grãos ainda em condições de uso, enquanto ONGs e comunidades vulneráveis necessitam de alimentos. O ReAmostra propõe uma solução digital para conectar doadores e beneficiários, permitindo que a Clastec registre doações disponíveis e informe interessados, garantindo eficiência, rastreabilidade e redução do desperdício.

## Personas

|PERSONA|IDADE |PROFISSÃO|DESCRIÇÃO|OBJETIVOS|
|------|-------------------|-------------|-------------|-------------|
|1. Maria de Jesus|38 anos|Coordenadora de ONG de segurança alimentar|Ana trabalha na administração de uma ONG que distribui alimentos para comunidades vulneráveis. Possui conhecimento básico em tecnologia e precisa de um sistema simples e funcional para receber e solicitar doações|Facilitar o acesso a doações regulares de alimentos para atender famílias em situação de vulnerabilidade|
|2. Eduardo Martins|42 anos|Funcionário da Clastec|Eduardo é responsável pelo controle de qualidade das amostras analisadas pela Clastec. Ele precisa de uma ferramenta eficiente para gerenciar a disponibilização das amostras reaproveitáveis|Registrar e disponibilizar amostras para doação, reduzindo desperdícios|
|3. Marcos Silva|50 anos|Funcionário da Clastec|Marcos trabalha na área de logística da Clastec e é responsável por organizar a separação das amostras e coordenar sua retirada pelos beneficiários|Confirmar com o beneficiário a retirada da amostra e atualizar o status da amostra como "Indisponível" no sistema|
|4. Patrícia Oliveira|35 anos|Diretora da Clastec|Patrícia é diretora da Clastec e precisa acompanhar o andamento do projeto para garantir que a redistribuição das amostras seja eficiente e transparente|Visualizar um painel com informações sobre amostras disponíveis, doações realizadas e instituições/pessoas beneficiadas|
|5. Ricardo Gomes|46 anos|Funcionário da Clastec|Ricardo é responsável por definir as permissões de acesso ao sistema e gerenciar os funcionários envolvidos na redistribuição das amostras|Cadastrar os funcionários que podem gerenciar as amostras e confirmar a entrega das doações|

## Histórias de usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Membro de ONG  | Receber notificações sobre alimentos disponíveis para doação e informar meu interesse em receber os alimentos | Contribuir no projeto de arrecadação e distribuição de alimentos da ONG |
|Funcionário da Clastec| Registrar e disponibilizar alimentos para doação | Evitar desperdício e otimizar a redistribuição |
|Funcionário da Clastec| Confirmar com o beneficiado a separação da amostra e os detalhes para retirada. Além de atualizar o status da amostra como "Indisponível". | Evitar desperdício e otimizar a redistribuição |
|Funcionário da Clastec| Cadastrar os funcionários que podem gerenciar as amostras e confirmar a entrega das doações. | Garantir permissões adequadas no sistema |
|Diretor da Clastec| Visualizar um painel de amostras disponíveis, amostras doadas e quem recebeu a doação | Acompanhar o andamento da redistribuição e ver o histórico de doações |


## Requisitos

As tabelas a seguir apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade dos requisitos, eles foram classificados como obrigatórios, importantes ou opcionais.

### Requisitos funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir o cadastro de usuário administrador com acesso para gerenciar amostras | ALTA | 
|RF-002| Permitir que qualquer pessoa se cadastre como usuário comum interessado em receber doações | ALTA |
|RF-003| Permitir que o usuário comum escolha quais tipos de alimentos ele tem interesse | MÉDIA |
|RF-004| Disponibilizar um catálogo com informações sobre as amostras disponíveis | MÉDIA |
|RF-005| Enviar e-mail aos interessados informando novos alimentos disponíveis para doação e o como entrar em contato para receber | ALTA |
|RF-006| Permitir que usuário administrador edite uma amostra como indisponível e registre o usuário comum que recebeu a doação | ALTA |
|RF-007| Disponibilizar um relatório de histórico de doações e amostras disponíveis | MÉDIA |

### Requisitos não funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser acessível via dispositivos móveis e desktop | ALTA | 
|RNF-002| O tempo de resposta das solicitações não deve ultrapassar 3 segundos |  MÉDIA | 
|RNF-003| A interface deve ser intuitiva para usuários com pouco conhecimento tecnológico |  ALTA | 
|RNF-004| O sistema deve garantir a segurança e privacidade dos dados dos usuários |  ALTA | 
|RNF-005| O sistema deve ser escalável para atender no mínimo 40 usuários conectados oa mesmo tempo sem perda de desempenho |  MÉDIA | 


## Restrições

O projeto está restrito aos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|001| O projeto deverá ser entregue até o final do semestre |
|002| O custo total do projeto não deve exceder o orçamento definido       |
|003| Deve atender às políticas de segurança alimentar e normas regulatórias|
|004| O sistema não permitirá solicitação de doações; as doações serão feitas mediante disponibilidade da empresa|
|005| O sistema não gerencia a entrega de amostras; a retirada será responsabilidade do beneficiado, que deve combinar com o funcionário |

## Diagrama de casos de uso

![image alt](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras/blob/ffba79ae979fd90f0307638236e6084c99be2177/docs/images/diagrama_caso_uso.png)
