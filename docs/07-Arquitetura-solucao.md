# Arquitetura da solução

<span style="color:red">Pré-requisitos: <a href="05-Projeto-interface.md"> Projeto de interface</a></span>

<!--

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](images/arquitetura.png)
-->

## Diagrama de classes

![Diagrama de Classes](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras/blob/3bfab5b0256be4bf62036deb86534f563853565e/docs/images/diagrama_classe_tias.png)

##  Modelo de dados

O desenvolvimento da solução proposta requer a existência de bases de dados que permitam realizar o cadastro de dados e os controles associados aos processos identificados, assim como suas recuperações.

Utilizando a notação do DER (Diagrama Entidade-Relacionamento), elabore um modelo, usando alguma ferramenta, que contemple todas as entidades e atributos associados às atividades dos processos identificados. Deve ser gerado um único DER que suporte todos os processos escolhidos, visando, assim, uma base de dados integrada. O modelo deve contemplar também o controle de acesso dos usuários (partes interessadas nos processos) de acordo com os papéis definidos nos modelos do processo de negócio.

Apresente o modelo de dados por meio de um modelo relacional que contemple todos os conceitos e atributos apresentados na modelagem dos processos.

### Modelo ER

O Modelo ER representa, por meio de um diagrama, como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.

![modeloER](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras/blob/850c146e430cc0e92b7d0b5e0e0cb196f80a6203/docs/images/modelo_entidade.png)

### Esquema relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 

![modelo relacional](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras/blob/54e0a75048a2dd442438caf8a713daa9af52f185/docs/images/modelo_relacao.jpeg)


### Modelo físico

Insira aqui o script de criação das tabelas do banco de dados.

Veja um exemplo:

```sql
-- Tabela: funcionario
CREATE TABLE funcionario (
    idusuario INTEGER PRIMARY KEY,
    matricula VARCHAR(255) NOT NULL
);

-- Tabela: usuario
CREATE TABLE usuario (
    idusuario INTEGER PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    celular VARCHAR(20),
    data_cadastro DATE NOT NULL
);

-- Tabela: administrador
CREATE TABLE administrador (
    idusuario INTEGER PRIMARY KEY
);

-- Tabela: reserva
CREATE TABLE reserva (
    idreserva INTEGER PRIMARY KEY,
    idusuario INTEGER NOT NULL,
    idbeneficiario INTEGER NOT NULL,
    idamostra INTEGER NOT NULL,
    data_reserva DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (idusuario) REFERENCES usuario(idusuario),
    FOREIGN KEY (idbeneficiario) REFERENCES beneficiario(idusuario),
    FOREIGN KEY (idamostra) REFERENCES amostra(idamostra)
);

-- Tabela: doacao
CREATE TABLE doacao (
    iddoacao INTEGER PRIMARY KEY,
    idamostra INTEGER NOT NULL,
    idreserva INTEGER,
    iddoador INTEGER NOT NULL,
    idbeneficiario INTEGER NOT NULL,
    data_doacao DATE NOT NULL,
    observacao TEXT,
    FOREIGN KEY (idamostra) REFERENCES amostra(idamostra),
    FOREIGN KEY (idreserva) REFERENCES reserva(idreserva),
    FOREIGN KEY (iddoador) REFERENCES usuario(idusuario),
    FOREIGN KEY (idbeneficiario) REFERENCES beneficiario(idusuario)
);

-- Tabela: amostra
CREATE TABLE amostra (
    idamostra INTEGER PRIMARY KEY,
    idproduto INTEGER NOT NULL,
    data_analise DATE,
    data_vencimento DATE,
    peso_kg DECIMAL(10, 2),
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (idproduto) REFERENCES produto(idproduto)
);

-- Tabela: estoque
CREATE TABLE estoque (
    idamostra INTEGER PRIMARY KEY,
    localizacao VARCHAR(255),
    FOREIGN KEY (idamostra) REFERENCES amostra(idamostra)
);

-- Tabela: beneficiario
CREATE TABLE beneficiario (
    idusuario INTEGER PRIMARY KEY,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    endereco VARCHAR(255),
    motivo_doacao TEXT,
    FOREIGN KEY (idusuario) REFERENCES usuario(idusuario)
);

-- Tabela: notificacao
CREATE TABLE notificacao (
    idnotificacao INTEGER PRIMARY KEY,
    idamostra INTEGER NOT NULL,
    idbeneficiario INTEGER NOT NULL,
    data_envio DATE NOT NULL,
    FOREIGN KEY (idamostra) REFERENCES amostra(idamostra),
    FOREIGN KEY (idbeneficiario) REFERENCES beneficiario(idusuario)
);

-- Tabela: interessado
CREATE TABLE interessado (
    idbeneficiario INTEGER NOT NULL,
    idproduto INTEGER NOT NULL,
    PRIMARY KEY (idbeneficiario, idproduto),
    FOREIGN KEY (idbeneficiario) REFERENCES beneficiario(idusuario),
    FOREIGN KEY (idproduto) REFERENCES produto(idproduto)
);

-- Tabela: produto
CREATE TABLE produto (
    idproduto INTEGER PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tipo VARCHAR(100),
    descricao TEXT,
    destino VARCHAR(255)
);

-- Adicionando a chave estrangeira na tabela funcionario referenciando usuario
ALTER TABLE funcionario
ADD CONSTRAINT fk_funcionario_usuario
FOREIGN KEY (idusuario)
REFERENCES usuario(idusuario);

-- Adicionando a chave estrangeira na tabela administrador referenciando usuario
ALTER TABLE administrador
ADD CONSTRAINT fk_administrador_usuario
FOREIGN KEY (idusuario)
REFERENCES usuario(idusuario);
```
<!--Esse script deverá ser incluído em um arquivo .sql na pasta [de scripts SQL](../src/db).-->


## Tecnologias

| **Dimensão**   | **Tecnologia**  |
| ---            | ---             |
| Front-end      | Figma + HTML + CSS + JS |
| Back-end       | PHP         |
| SGBD           | MySQL           |
| Deploy         | Vercel          |

![Diagrama Tecnologias](https://github.com/ICEI-PUC-Minas-PBE-ADS-SI/2025-1-p5-tias-reaproveitamentoamostras/blob/849b91040ddb0ea91dfdddcb458ff6bfc41479a9/docs/images/diagrama_tecnologias.png)

<!--

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foram realizados.

> **Links úteis**:
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando seu site no Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de software

Conceituar qualidade é uma tarefa complexa, mas ela pode ser vista como um método gerencial que, por meio de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto do desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem atendidas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, esse nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software. Com base nessas características e nas respectivas subcaracterísticas, identifique as subcaracterísticas que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software, considerando alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão à equipe avaliar os objetos de interesse.

> **Links úteis**:
> - [ISO/IEC 25010:2011 - Systems and Software Engineering — Systems and Software Quality Requirements and Evaluation (SQuaRE) — System and Software Quality Models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de software - Engenharia de Software](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209)
