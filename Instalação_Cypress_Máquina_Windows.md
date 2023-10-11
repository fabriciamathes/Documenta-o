Instalação Cypress na máquina, seguir os passos para Windows

Baixar a versão desktop: para contornar um firewall corporativo.
## Para realizar download direto para versões antigas, realizar via URL passando a versão desejada https://download.cypress.io/desktop/11.2.0

1. Baixar o cypress.zip  →  (não precisa descompactar).
2. Depois de baixado, executar como administrado "Windows PowerShell" e digitar o comando:
setx CYPRESS_INSTALL_BINARY C:\Users\seunome\Downloads\cypress.zip (caminho onde o cypress.zip foi baixado)
3. Depois acessar o "CMD" e digitar o comando:
  a) npm install cypress@11.2.0;
  b) caso com o install dê erro, execurar direto o npm run cypress no terminal do VsCode;
Obs: se a instalação do cypress ocorreu com sucesso, será criada a pasta da versão no diretório:
    C:\Users\fabricia_mathes\AppData\Local\Cypress\Cache

#### Observações
Se você tentar efetuar o npm install cypress@11.2.0 e obter a mensagem abaixo, efetue os passos a seguir.

#### Mensagem

SSL certificate problem: self signed certificate in certificate chain

#### Como solucionar

Execute o comando abaixo:

npm set strict-ssl false

