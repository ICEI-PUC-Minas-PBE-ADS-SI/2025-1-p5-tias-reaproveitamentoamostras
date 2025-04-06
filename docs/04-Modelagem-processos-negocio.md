# Modelagem dos processos de negócio

<span style="color:red">Pré-requisitos: <a href="02-Especificacao.md"> Especificação do projeto</a></span>

> **Links úteis**:
> - [Modelagem de processos AS-IS x TO-BE](https://dheka.com.br/modelagem-as-is-to-be/)
> - [20 dicas práticas de modelagem de processos](https://dheka.com.br/20-dicas-praticas-de-modelagem-de-processos/)

## Modelagem da situação atual (Modelagem AS IS)

Atualmente, o processo de gerenciamento e destinação de amostras após análise é realizado de forma majoritariamente manual, com alto grau de intervenção humana, ausência de integração sistêmica e propenso a falhas e retrabalho. O fluxo se divide em dois grandes momentos:
1. Cadastro e gerenciamento de amostras (antes da análise)
	•	O processo se inicia com a entrega da amostra pelo cliente.
	•	Um funcionário é responsável por registrar os dados da amostra e do pedido manualmente em uma planilha (possivelmente em Excel).
	•	Em seguida, a amostra é analisada, e um relatório digital é emitido.
	•	Esse relatório é impresso com os dados da amostra e da análise.
	•	A amostra, junto ao relatório impresso, é armazenada por 15 dias.
	•	Após esse período, a amostra é encaminhada ao processo de destinação.
2. Destinação das amostras após análise
	•	O funcionário recebe a amostra analisada e a armazena temporariamente por mais 15 dias.
	•	Se a amostra tiver um destino definido, a gerência é informada sobre a disponibilidade da amostra.
	•	Caso contrário, ela permanece armazenada indefinidamente.
	•	Se houver contato com algum interessado, esse contato é feito de forma informal, e a retirada ou entrega também ocorre de maneira informal.
	•	Se a amostra não tiver destino nem contato interessado, ela permanece armazenada até vencer.
	•	Após vencimento, é descartada manualmente.
Problemas e ineficiências identificadas:
	•	Forte dependência de processos manuais, o que aumenta o risco de erro e retrabalho.
	•	Falta de controle automatizado de prazos, tanto para armazenamento quanto para descarte.
	•	Comunicações informais com interessados e gerência, sem registro formal ou sistematização.
	•	Ausência de um sistema integrado que centralize dados da amostra, histórico e ações.
	•	Processo de decisão subjetivo e pouco transparente quanto à destinação da amostra.
	•	Impressões desnecessárias de relatórios, o que gera consumo de recursos físicos.

## Descrição geral da proposta (Modelagem TO BE)
A proposta visa digitalizar e automatizar o processo de cadastro, gerenciamento e destinação de amostras, substituindo controles manuais e comunicações informais por um sistema integrado, que envolve tanto o cadastro da amostra quanto o processo de doação. A solução se apoia na criação de uma plataforma digital que interage com funcionários, beneficiários e a gerência de forma sincronizada.Cadastro e Gerenciamento de Amostras
	•	Registro digital direto no sistema, eliminando planilhas.
	•	Relatórios gerados eletronicamente, sem uso de papel.
	•	Controle automatizado de validade, localização e status.
	•	Alertas de vencimento para evitar perdas e atrasos.

Destinação das Amostras
	•	Amostras disponíveis são listadas em catálogo online.
	•	Notificações automáticas para beneficiários cadastrados.
	•	Solicitação, agendamento e retirada registrados no sistema.
	•	Histórico de doações atualizado automaticamente.

Oportunidades de Melhoria
	•	Menos erros e retrabalho.
	•	Mais transparência e rastreabilidade.
	•	Redução de papel e processos manuais.
	•	Acesso facilitado às doações.

Limites da Solução
	•	Requer capacitação dos usuários.
	•	Depende de infraestrutura tecnológica básica.
	•	Pode haver resistência à mudança no início.

Alinhamento com o Negócio
	•	Aumenta a eficiência e reduz desperdícios.
	•	Promove sustentabilidade e digitalização.
	•	Garante controle e acesso às informações em tempo real.

## Modelagem dos processos

[PROCESSO 1 - Destinação das Amostras após Análise](./processes/processo-1-nome-do-processo.md "Detalhamento do processo 1.")

[PROCESSO 2 - Cadastro de Gerenciamento de Amostras](./processes/processo-2-nome-do-processo.md "Detalhamento do processo 2.")


## Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Coloque no mínimo 5 indicadores.

Use o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Fonte de dados** | **Fórmula de cálculo** |
| ---           | ---           | ---           | ---             | ---             |
| Percentual de reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total de atendimentos | Tabela Reclamações | número total de reclamações / número total de atendimentos |
| Taxa de requisições atendidas | Melhorar a prestação de serviços medindo a porcentagem de requisições atendidas| Mede a % de requisições atendidas na semana | Tabela Solicitações | (número de requisições atendidas / número total de requisições) * 100 |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês | Tabela Pedidos | (número de pedidos entregues / número total de pedidos) * 100 |


Obs.: todas as informações necessárias para gerar os indicadores devem estar no diagrama de classe a ser apresentado posteriormente.
