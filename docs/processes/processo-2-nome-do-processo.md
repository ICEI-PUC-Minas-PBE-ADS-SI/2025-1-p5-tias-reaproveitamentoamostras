### 3.3.2 Processo 2 – TO BE Processo Cadastro e Gerenciamento das Amostras
 
_Apresente aqui o nome e as oportunidades de melhoria para o processo 2. 
Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN._

![image alt](https://github.com/ananhik/2025-1-p5-tias-reaproveitamentoamostras/blob/e2ecd915f5b7cc3d96bd3189e75261c4562ecf09/docs/images/WhatsApp%20Image%202025-04-06%20at%205.28.58%20PM.jpeg)

#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 2. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_

**Registrar no sistema da amostra, quantidade, pedido, localização, validade e outros**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Quantidade     | Número  | deve ser varialvel tipo inteira |           0     |
| Pedido           | Caixa de Texto   | Não possui |      -     |
| Localização          | Caixa de Texto   |Não possui |    -       |
| Validade        | Data  | Não possui |     -      |

| **Comandos**         |  **Destino**                   | **Tipo** |
| ---                  | ---                            | ---               |
| Botão de Registrar              | Início da atividade de Atualizar catálogo de estoque e status    | Default           |


**Atualizar catálogo de estoque e status**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Catálogo | Imagem/área de texto  |      Deve ser realizada automaticamente pelo sistema     |          -         |
|  Status            |   Caixa de texto          |      Deve ser realizada automaticamente pelo sistema         |        -           |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Atualização do catálogo |Início da atividade de Alertar fim do prazo de armazenagem obrigatória de 15 dias e status  | Realizado pelo sistema |



**Alertar fim do prazo de armazenagem obrigatória de 15 dias e status**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Alerta | Área de texto/data  | Deve ser realizada automaticamente pelo sistema|   -     |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Alerta emetido pelo sistema |Início da atividade de Alertar proximidade do vencimento para amostras disponíveis | Realizado pelo sistema  |


**Alertar proximidade do vencimento para amostras disponíveis**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Alerta | área de texto/data  | Deve ser realizada automaticamente pelo sistema|         -          |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Alerta emetido pelo sistema | Início da atividade de Alertar amostras vencidas e solicitar descarte | Realizado pelo sistema   |

**Alertar amostras vencidas e solicitar descarte**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Alerta | área de texto/data  | Deve ser realizada automaticamente pelo sistema|          -         |
|  Solicitar descarte               |     Área de texto             |      Deve ser realizada automaticamente pelo sistema          |           -        |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Alerta emetido pelo sistema | Alerta gera a solicitação de descarte |  Deve ser realizada automaticamente pelo sistema   |
|      Solicitar descarte                 |         Início da atividade de Atualizar status da amostra para vencida              |     Realizado pelo sistema               |

**Atualizar status da amostra para vencida**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Status | área de texto  |Deve ser realizada pelo sistema|          -         |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Alerta emetido pelo sistema | Alerta gera a solicitação de descarte |  Deve ser realizada automaticamente pelo sistema   |
|      Solicitar descarte                 |           Início da atividade de Descrtar amostra vencida                 |     Realizado pelo sistema               |

**Descrtar amostra vencida**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Descartar amostras vencidas| Tarefa manual  |Atividade deve ser manualmente|        -           |


| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Descartar amostra | Fim do processo| Realizado manualmente  |



