### 3.3.1 Processo 1 – Destinação das Amostras após Análise
 
![image alt](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras/blob/afe914fd60795baf88edef5fa189448e920c04dd/docs/images/tobe.jpeg)
#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 1. 
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

**Cadastrar Amostra no Sistema como Disponível**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nome da amostra | caixa de texto  |                |      ---             |
| Código da amostra | número | endereço único por amostra | ---             |
| Quantidade de amostras | número  |                   |         0          |
| Status da Amostra | seleção única | Disponível ou Indisponível | Indisponível |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Cadastrar Amostra  | Início da atividade de publicar amostra no catálogo | (default/cancel/  ) |

**Publicar Amostra no Catálogo Digital**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Exibir nome da amostra no catálogo | caixa de texto  |                |    ---               |
| Exibir código da amostra no catálogo | número | endereço único por amostra |    ---          |
| Exibir quantidade de amostras restantes no catálogo | número  |                   |         0          |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Publicar Amostra no Catálogo  | Início da atividade de notificar usuários interessados | (default/cancel/  ) |

**Notificar Usuários Interessados**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Disparar mensagem ao usuário interessado | campo de texto | endereço de email válido     |      ---             |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Notificar Interessados | Início da atividade de notificar usuários interessados | (default/cancel/  ) |

**Visualizar Notificação e Doação Disponível**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| login | caixa de texto | endereço de email válido |     ---              |
| senha | caixa de texto | mínimo 8 caracteres, 1 caractere maíusculo e 1 caractere especial |       ---            |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Entrar | Início da atividade de entrar em contato com a Clastec | (default/cancel/  ) |

**Entrar em Contato com a Clastec**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** | 
| ---             | ---              | ---            | ---               | 
| Contatar com a Clastec | número | endereço de telefone válido  |            ---       |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Ligar para Clastec | Início da atividade de notificar usuários interessados | (default/cancel/  ) |

**Confirmar Retirada com o Beneficiário (data e hora)**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** | 
| ---             | ---              | ---            | ---               | 
| Gerar código de retirada | número | valor único  |          ---         |
| Agendar data da retirada | data | formato de data válida  |         ---          |
| Agendar hora de retirada | hora | formato de hora válida  |          ---         |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Confirmar Retirada | Início da atividade de atualizar status da amostra | (default/cancel/  ) |

**Atualizar Status da Amostra como Indisponível**

| **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| ---             | ---              | ---            | ---               |
| Nome da amostra | caixa de texto  |                |         ---          |
| Código da amostra | número | endereço único por amostra |       ---       |
| Quantidade de amostras | número  |                   |         0          |
| Status da Amostra | seleção única | Disponível ou Indisponível | Indisponível |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| ---                  | ---                            | ---               |
| Cadastrar Amostra  | fim do processo Destinação das Amostras após Análise | (default/cancel/  ) |


