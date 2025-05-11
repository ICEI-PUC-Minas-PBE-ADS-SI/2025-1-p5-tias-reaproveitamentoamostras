-- Arquivo: banco_de_dados.sql

-- Tabela: funcionario
CREATE TABLE funcionario (
    idusuario INT PRIMARY KEY,
    matricula VARCHAR(255) NOT NULL
);

-- Tabela: usuario
CREATE TABLE usuario (
    idusuario INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    celular VARCHAR(20),
    data_cadastro DATE NOT NULL
);

-- Tabela: administrador
CREATE TABLE administrador (
    idusuario INT PRIMARY KEY,
    FOREIGN KEY (idusuario) REFERENCES usuario(idusuario)
);

-- Tabela: reserva
CREATE TABLE reserva (
    idreserva INT PRIMARY KEY,
    idusuario INT NOT NULL,
    idbeneficiario INT NOT NULL,
    idamostra INT NOT NULL,
    data_reserva DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (idusuario) REFERENCES usuario(idusuario),
    FOREIGN KEY (idbeneficiario) REFERENCES beneficiario(idusuario),
    FOREIGN KEY (idamostra) REFERENCES amostra(idamostra)
);

-- Tabela: doacao
CREATE TABLE doacao (
    iddoacao INT PRIMARY KEY,
    idamostra INT NOT NULL,
    idreserva INT,
    iddoador INT NOT NULL,
    idbeneficiario INT NOT NULL,
    data_doacao DATE NOT NULL,
    observacao TEXT,
    FOREIGN KEY (idamostra) REFERENCES amostra(idamostra),
    FOREIGN KEY (idreserva) REFERENCES reserva(idreserva),
    FOREIGN KEY (iddoador) REFERENCES usuario(idusuario),
    FOREIGN KEY (idbeneficiario) REFERENCES beneficiario(idusuario)
);

-- Tabela: amostra
CREATE TABLE amostra (
    idamostra INT PRIMARY KEY,
    idproduto INT NOT NULL,
    data_analise DATE,
    data_vencimento DATE,
    peso_kg DECIMAL(10, 2),
    status VARCHAR(50) NOT NULL,
    FOREIGN KEY (idproduto) REFERENCES produto(idproduto)
);

-- Tabela: estoque
CREATE TABLE estoque (
    idamostra INT PRIMARY KEY,
    localizacao VARCHAR(255),
    FOREIGN KEY (idamostra) REFERENCES amostra(idamostra)
);

-- Tabela: beneficiario
CREATE TABLE beneficiario (
    idusuario INT PRIMARY KEY,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    endereco VARCHAR(255),
    motivo_doacao TEXT,
    FOREIGN KEY (idusuario) REFERENCES usuario(idusuario)
);

-- Tabela: notificacao
CREATE TABLE notificacao (
    idnotificacao INT PRIMARY KEY,
    idamostra INT NOT NULL,
    idbeneficiario INT NOT NULL,
    data_envio DATE NOT NULL,
    FOREIGN KEY (idamostra) REFERENCES amostra(idamostra),
    FOREIGN KEY (idbeneficiario) REFERENCES beneficiario(idusuario)
);

-- Tabela: interessado
CREATE TABLE interessado (
    idbeneficiario INT NOT NULL,
    idproduto INT NOT NULL,
    PRIMARY KEY (idbeneficiario, idproduto),
    FOREIGN KEY (idbeneficiario) REFERENCES beneficiario(idusuario),
    FOREIGN KEY (idproduto) REFERENCES produto(idproduto)
);

-- Tabela: produto
CREATE TABLE produto (
    idproduto INT PRIMARY KEY,
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