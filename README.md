<h1>Desafio Fundação Certi</h1>

<h3>DESCRIÇÃO!</h3>

<p>Na linguagem de sua preferência, crie um servidor HTTP que, para cada requisição GET, retorne um JSON cuja chave extenso seja a versão por extenso do número inteiro enviado no path. Os números podem estar no intervalo [-99999, 99999].

> Exemplos:
λ curl http://localhost:3000/1 </br>
{ "extenso": "um" }</br></br>
λ curl http://localhost:3000/-1042</br>
{ "extenso": "menos mil e quarenta e dois" }</br></br>
λ curl http://localhost:3000/94587</br>
{ "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }</p>


<h3>INICIANDO O PROJETO SEM O DOCKER</h3>

<p>Faça o clone do projeto</p></br>

<p>Após fazer o clone do projeto, você pode usar um gerenciador de dependências de sua escolha, aqui utilizaremos o yarn.</p></br>

<p>No seu terminal digite o comando: </br></br>

yarn install </br></br>

para instalar as dependências</p></br>

<p>Depois de todas as dependências instaladas agora vamos inicializar o servidor</p></br>

<p>No seu terminal digite o comando: </br></br>

yarn start </br></br>

para iniciar o servidor</p></br></br>

<h3>TESTANDO O PROJETO</h3>

<p>Para testar o projeto você pode utilizar um cliente http como Insomnia ou o Postman </br>
utilizar um navegador de sua escolha e digitar no campo de busca: </br>

No seu browser ou em um cliente http digite: </br> </br>

http://localhost:3000/ e um numero de sua escolha.

</p>


<h3>INICIANDO O PROJETO COM O DOCKER</h3>

<p>No seu terminal digite o comando: </br></br>

docker-compose up </br></br>

</p>

<h3>TESTANDO O PROJETO</h3>

<p>Para testar o projeto você pode utilizar um cliente http como Insomnia ou o Postman </br></br>
utilizar um navegador de sua escolha e digitar no campo de busca: </br></br>

No seu browser ou em um cliente http digite: </br> </br>

http://localhost:3000/ e um numero de sua escolha.

</p>
