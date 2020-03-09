# Teste Software Enginner - Testfy

Este pequeno teste tem como propósito disponibilizar um arquivo pdf gerado dinamicamente através de algumas informações fornecidas por um usuário.

Você deve considerar que o arquivo pdf gerado esteja num tamanho A4 para uma possível impressão.

## Requisitos

Para isto, você deverá construir uma API que terá uma única rota. Nesta rota, serão passados os seguintes parâmetros:
- Nome do usuário;  
- Data de nascimento;  
- Telefone.

Com os dados fornecidos, será gerado um arquivo pdf que contém apenas o texto desses 3 parâmetros passados. A ideia é só exibir essas informações no documento, o layout não será avaliado aqui.

A resposta dessa rota deve conter o arquivo pdf para download.

O projeto deve ter um README.md com as instruções sobre como executar e utilizar a API

## Restrições
- O serviço deve ser escrito em Node.js  
- Não será utilizado nenhum banco de dados


## Instalação Local

Após clonar o repositório em seu computador, basta seguir as instruções a seguir:  

1. Ter o Node.js instalado, versão 8.11.2 ou acima;  
2. Executar o comando `yarn install` para instalar as dependências do projeto;   
3. Copiar o arquivo `.env.example.dev` nomeando-a como `.env`. Esse arquivo contém os *environments*;    
4. Executar `yarn dev` para executar a API localmente.

* O arquivo `.env.example` não deve ser utilizado localmente em ambiente de **desenvolvimento**. Esse arquivo é EXCLUSIVAMENTE utilizado no servidor de **produção**.


## Testes Locais - Postman

Para testes em seu computador, tenha instalado o Postman, e, siga os passos abaixo.  

1. Crie uma nova requisição do tipo POST, com o endereço `http://localhost:4000/api/v1/generator/create`.  

2. No body, selecione JSON, e preencha o body conforme o exemplo abaixo: 
```
{
	"name": "Ednilson Amaral",
	"birthdate": "07-01-1992",
	"phone": 15996740359
}
```  

3. Execute a requisição.

4. Irá retornar uma mensagem similiar à `This response could not be previewed. Download the response to open it with an appropriate application.`, pois não estamos utilizando nenhum *template engine* para já mostrar o PDF gerado na tela. Então, clique em **Save Response** no canto direito da tela, e, em seguida, selecione **Save to a file** para salvar o arquivo PDF gerado no diretório que desejar. (exemplo de imagem abaixo)

![]