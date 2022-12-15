## 🚀 Sobre mim
| Autora   | Descricao |
| :------------------- | :----------------- |
|  | Oie, sou Thaysa, estudante de Sistemas de Informacao, comunicadora social e especialista em Direitos Humanos, concluinte da turma Todas Em Tech Backend On18 da {Reprograma}. Vivo em Recife, sou mae de um menino chamado Gabo, adoro aprender coisas novas e no momento estou aprendendo a surfar e migrando minha carreira da area de comunicacao para a tecnologia. |

# PROJETO: LANTANA

### O problema
O projeto Lantana ganhou forma a partir de uma inquietacao que surgiu nas aulas da pos-graducao em Direitos Humanos: a desigualdade no acesso aos direitos. 
O acesso à Justiça é um direito humano fundamental, podendo ser visto como o mais básico dos direitos humanos, pois é garantidor de todos os demais direitos. 
A educação é uma porta de entrada ampla para o acesso aos direitos fundamentais, entrando com um impacto futuro. 
Estruturalmente a existência do feminino em suas várias formas e colocada à margem, não consegue usufruir plenamente dos direitos que lhes são fundamentais. 
Por um lado há a falta de acesso, por outro o sistema mantenedor desse tratamento desigual. 
Mulheres que sofrem de diferentes formas. 
Mães que são violadas nos seus direitos parentais. 
Mulheres trans que tem seu livre acesso cerceado nos shoppings. 
A dor das mulheres cis, trans, das pessoas mais vulneraveis socialmente está sendo sentida agora. 
O que é possível fazer, hoje, para diminuí-la?

### O que é a Lantana?
A Lantana tem o objetivo de fortalecer uma rede de conexão entre as mulheres através da facilitação do acesso à Justiça. Através de uma conexão entre mulheres da área jurídica que desejam ser voluntárias oferecendo consultorias gratuitas para mulheres que estejam em situação de vulnerabilidade social e apartadas dos seus direitos. Por meio do cadastro virtual na Lantana, os usuários poderão ter acesso a consultoria com uma especialista na área.

é uma API que provê o cadastro tanto de profissionais da área jurídica, quanto de usuários com necessidade de orientação. E um CRUD completo integrado com o banco de dados e estruturada em uma arquitetura MVC, possui rotas específicas de cadastro (POST), alterações cadastrais (PATCH) , para deletar cadastros (DELETE) e rotas de pesquisa no banco de dados (GET). Além disso, ela possui dois modelos de Schema, pois as necessidades de informações das consultoras e das usuárias são distintas.

### Lantana?
A planta arbustiva Lantana camara, conhecida popularmente como lantana, camará ou cambará. Originária das Américas (Central e do Sul). Arbusto perene, muito usado no paisagismo e na medicina popular. Folhagem rústica, flores delicadas e pequenas, que unidas formam um buquê extremamente vistoso. Capaz de se proliferar rapidamente, tornando difícil sua erradicação, cada planta é capaz de produzir até 12.000 frutos.


## Estrutura MVC

```
📁projeto-final
├── 📁node_modules
├── 📁src
    ├── 📁controllers
        ├── 📄clientesController.js
        ├── 📄consultorasController.js
    ├── 📁database
        ├── 📄mongoConfig.js
    ├── 📁models
        ├── 📄ClienteSchema.js
        ├── 📄ConsultoraSchema.js
    ├── 📁routes
        ├── 📄clientesRoutes.js
       	├── 📄consultorasRoutes.js
        ├── 📄indexRoutes.js
    ├── app.js
├── 📄.env
├── 📄.gitignore
├── 📄package-lock.json
├── 📄package.json
├── 📄README.md
├── 📄server.js
├── 📄vercel.json
```

## Documentação da API

### ROTAS:

```
/consultoras
```

| HTTP   | Rota       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/buscar` | Retorna todas as consultoras cadastradas|
| `GET` | `/:id` | Retorna consultora por id|
| `POST` | `/cadastrar` | Cadastra nova consultora |
| `PATCH` | `/:id` | Realiza alteracoes na consultora por id |
| `DELETE` | `/:id` | Apaga consultora por id |


```
/clientes
```

| HTTP   | Rota       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `/buscar` | Retorna todas as clientes cadastradas|
| `GET` | `/:id` | Retorna clienet por id|
| `POST` | `/cadastrar` | Cadastra nova cliente |
| `PATCH` | `/:id` | Realiza alteracoes na cliente por id |
| `DELETE` | `/:id` | Apaga cliente por id |


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/thaysazooby/projeto-final
```

Entre no diretório do projeto

```bash
  cd projeto-final
```

Instale as dependências

```bash
NPM
npm init -y

Express | Cors
npm i express cors

Nodemon
npm i -D nodemon

Mongoose (banco de dados)
npm i mongoose

Dotenv (variavel de ambiente)
npm i dotenv
```

Inicie o servidor

```bash
  npm run start
```

## Schemas

### Consultoras
{"nome", "cpf", "oab", "especialidade", "endereco": {"cep", "rua", "numero", "estado", "cidade", "bairro"}, "disponibilidadeSemanal", "horario"}

### Clientes
{"nome", "cpf", "endereco": {"cep", "rua", "numero", "estado", "cidade", "bairro"}, "descricaoDoCaso"}