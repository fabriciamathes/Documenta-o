#Gerar chave SSH

## Download Git Bash
https://git-scm.com/download

// - Abrir o bash (Git Bash para Windows)
// - Digitar no bash:

### Linux:
ssh-keygen

### Windows
ssh-keygen.exe

// - Dar Enter até o final... e vai aparecer a mensagem:
"You public key been saved in /c/Users/Fabricia/.ssh/id_rsa.pub"

## Comando para verificar chave gerada:
// - Digitar o caomando no bash
cat  /c/Users/Fabricia/.ssh/id_rsa.pub

// - Será exibido o conteudo do .pub, copiar ele.

// Adicionar Chave SSH no Git
/*
- Abrir o git:
* Clicar na foto do perfil à diretita;
* Acessar Manage Account;
* Clicar no menu SSH Keys e colar lá
*/

"OBS: Na primeira vez que clonar um projeto, vai haver uma pergunta de permissão para usar o FINGERPRINT, "
"Responder 'YES' e depois não será mais perguntado"
