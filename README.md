
# TESTE DEV CloudOpss

Esse repositório tem como objetivo, entregar o desafio DEV CloudOpss

O desafio consiste em:

1. Criar uma API Rest com Python, que fará um cadastro de cliente, que tenha as seguintes características:
    
    · Suporte GET, POST, DELETE, UPDATE

    · Gere Logs com nível 1, 2, 3, 4 e 5

    · Suporte a banco de dados NoSQL

    · Tenha documentação declarada através de um endpoint(podendo ser Swagger)

2. Criar uma interface FrontEnd, para se conectar ao backend (API), e deve conter os seguintes campos:

    · Botão Novo Cadastro
    
    · Nome
    
    · Email
    
    · Telefone
    
    · Endereço completo
    
    · Profissão
    
    · Upload de Currículo
    
    · Botão para limpar

    · Botão para enviar
    
    · PopUp de envio com sucesso

3. Esta API e o FrontEnd precisam ter suporte ao Docker, para ser instalada em cluster ou local.

4. O projeto precisa seguir com circuito de desenvolvimento (recomendável usar o girflow).

5. Entregue seu projeto em um repositório do GitHub com README descrevendo como instalar o projeto.

# Prazos e Entregas:

1. O desafio não deve levar mais do que 3 horas para execução.

2. 5 dias de prazo para entrega.


# Sobre o projeto:

Foi bem desafiador para mim, trabalhar com tecnologias as quais não sou tão familiarizado, embora
conheça o básico de cada tecnologia, não possuo tanto aprofundamento, isso dificultou muito a execução
do projeto, foram 4 dias estudando como aplicar cada tecnologia, e ainda assim não consegui entregar o
projeto pronto. Acredito que, se tivesse mais tempo de estudo dessas tecnologias, conseguiria entregar
o projeto com a qualidade esperada, embora eu não tenha conseguido finalizar, foi muito bom e amadurecedor
essa experiência, gostei bastante da proposta do desafio, e pretendo continuar estudando para conseguir
finalizar esse projeto algum dia. Aprendi muito enquanto estudava e aplicava o pouco de conhecimento que
possuía sobre BackEnd e FrontEnd, quero aqui agradecer a oportunidade de ter participado desse processo
seletivo, foi muito importante para meu crescimento pessoal e com certeza utilizarei os novos conhecimentos
em um projeto futuro.

# Para instalar o projeto:

#### Pré-requisitos: 

· Necessário ter o Python 3.8 ou superior instalado na máquina

· Deve possuir o suporte ao Angular CLI

· Deve ter instalado em sua máquina o npm (necessário para utilizar o comando ng)

· Instalar as libs do Flask:

    · Flask
    · Flask-SQLAlchemy
    · Flask-Restful
    · Jsonify

#### Pode obter essas libs com o comando:
```bash
pip install flask flask-jsonpify flask-sqlalchemy flask-restful
```

#### Clone o repositório com:
```bash
git clone https://github.com/pajeeh/TESTE-DEV.git
```
#### Vá até o diretório:
```bash
cd TESTE-DEV
```
#### Execute o serviço ng:
```bash
ng serve -o
```
