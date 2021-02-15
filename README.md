<h1>Desafio Fundação Certi</h1>

<h3>DESCRIÇÃO!</h3>

<p>Na linguagem de sua preferência, crie um servidor HTTP que, para cada requisição GET, retorne um JSON cuja chave extenso seja a versão por extenso do número inteiro enviado no path. Os números podem estar no intervalo [-99999, 99999].

> Exemplos:
λ curl http://localhost:3000/1
{ "extenso": "um" }
λ curl http://localhost:3000/-1042
{ "extenso": "menos mil e quarenta e dois" }
λ curl http://localhost:3000/94587
{ "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }</p>


<h3>INICIANDO O PROJETO SEM O DOCKER</h3>

<p>Faça o clone do projeto</p>

<p>Após fazer o clone do projete, você pode usar um gerenciador de dependências de sua escolha, aqui utilizaremos o yarn.</p>

<p>No seu terminal digite o comando: </br>

yarn install </br>

para instalar as dependências</p>

<p>Depois de todas as dependências instaladas agora vamos inicializar o servidor</p>

<p>No seu terminal digite o comando: </br>

yarn start </br>

para iniciar o servidor</p>

<h3>INICIANDO O PROJETO COM O DOCKER</h3>

<p>No seu terminal digite o comando: </br>

docker-compose up

</p>

<h3>TESTANDO O PROJETO</h3>

<p>Para testar o projeto você pode utilizar um cliente http como Insomnia ou o Postman </br>
utilizar um navegador de sua escolha e digitar no campo de busca: </br>

localhost:3000/ e um numero de sua escolha

</p>
