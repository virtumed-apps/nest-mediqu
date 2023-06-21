# NGS1.01 - Controle de versão do software

## 1. Controle de versão do software [NGS1.01.01]

**Versão do software**

  - [ ] O S-RES (conjunto de componentes principais) deve apresentar as informações de identificação do software desenvolvido pelo fornecedor, contendo minimamente o nome do software, nome do fornecedor, identificação completa da versão e/ou release e/ou build. Essas informações deverão corresponder à da versão certificada do produto, e será utilizada como referência em todos os documentos, selo, e outros documentos relacionados à certificação.

b) Essas informações deverão estar disponíveis minimamente:

  - [ ] Na tela inicial do S-RES;
  - [ ] Nas telas de cada módulo (por exemplo, cabeçalho, rodapé ou ainda em um item de um menu), de modo que quando o sistema esteja em uso essas informações estejam sempre acessíveis;
  - [ ] Impressões geradas oriundas do S-RES. Neste caso, tais informações deverão ser exibidas minimamente na última página do documento impresso (em um cabeçalho ou rodapé, por exemplo).
  - [ ] Arquivo de exportação da trilha de auditoria.

---
# NGS1.02 - Identificação e autenticação de pessoas

## 1. Identificação e autenticação de pessoas [NGS1.02.01]

**Método de autenticação de pessoa**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ]  Todo usuário do S-RES deve ser identificado e autenticado antes de qualquer acesso a dados ou funcionalidades do S-RES.

b) Utilizar, em todos os processos autenticação de pessoa, no mínimo um dos seguintes métodos de autenticação de pessoa:
  - [ ] Digitação de um nome de usuário e senha secreta de acesso;
  - [ ] Certificado digital e PIN (Personal Identifier Number);
  - [ ] Validação biométrica associada ao PIN (Personal Identifier Number);

  - [ ] As credenciais para autenticação no S-RES devem ser validadas após a submissão das mesmas ao serviço de autenticação do sistema no lado do servidor, evitando que a validação ocorra somente no lado do cliente.

  - [ ] Em caso de aplicação móvel, a autenticação pode ser realizada no lado do cliente, caso haja uso do aplicativo de forma off-line. No momento da sincronização dos dados, deve haver a autenticação no lado servidor antes do registro dos dados no sistema. 

Nota: Quaisquer outras técnicas diferentes das exigidas acima, tais como OTP (one-time password) e Captcha, são considerados complementares, podendo ser utilizados apenas em conjunto com um dos métodos supracitados.

## 2. Identificação e autenticação de pessoas [NGS1.02.02]

**Proteção dos parâmetros de autenticação de usuário**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve armazenar de forma protegida todos os dados ou parâmetros utilizados no processo de autenticação de usuário. 

  a) Método: Nome de usuário e senha
  - [ ] A senha deve ser armazenada em banco de dados, de forma codificada por algoritmo de hash aberto (público) de no mínimo 160 bits.
  - [ ] As codificações das senhas de acesso dos usuários devem ser protegidas contra acesso não autorizado. Apenas o usuário do banco de dados utilizado pela aplicação deve ter acesso às mesmas.

  b) Método: Biometria (condição: somente para pessoas)
  - [ ] Os templates biométricos das pessoas devem ser protegidos contra acesso não autorizado. Apenas o usuário do banco de dados utilizado pela aplicação deve ter acesso aos mesmos.
  - [ ] As amostras biométricas coletadas e transmitidas durante o processo de autenticação devem ser protegidas contra acesso não autorizado.
  - [ ] Em caso de aplicação móvel, deve ser utilizada a biometria do sistema operacional. 

  c) Método: One-time password (OTP)
  - [ ] As sementes de geração dos valores numéricos devem ser protegidas contra acesso não autorizado. Apenas o usuário do banco de dados utilizado pela aplicação deve ter acesso às mesmas.

## 3. Identificação e autenticação de pessoas [NGS1.02.03]

**Qualidade da Senha**

Condição 1: Utilização de autenticação baseada no método de usuário e senha.

Condição 2: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

a) O S-RES deve exigir que toda senha de usuário seja definida seguindo minimamente os seguintes critérios:
  - [ ] Pelo menos 8 caracteres
  - [ ] Pelo menos um caractere alfabético
  - [ ] Pelo menos um caractere numérico

## 4. Identificação e autenticação de pessoas [NGS1.02.06]

**Geração de senha para o usuário pelo administrador**
Condição 1: Utilização de autenticação baseada no método de usuário e senha.

Condição 2: Para a modalidade Consultório Individual, esse requisito é aplicável apenas para S-RES oferecido como SaaS.

Condição 3: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve permitir a geração de uma senha para um usuário pelo administrador do sistema.

  - [ ] A senha pode ser definida de forma manual pelo administrador ou de forma automática pelo S-RES.

  - [ ] O S-RES deve forçar que o usuário realize a troca de senha caso a mesma tenha sido definida manualmente pelo administrador. 

  - [ ] A troca deve ocorrer imediatamente após o usuário acessar o S-RES pela primeira vez após a geração da senha. Adicionalmente, nenhuma ação poderá ser efetuada pelo usuário no S-RES até que o mesmo efetue a troca de senha.

## 5. Identificação e autenticação de pessoas [NGS1.02.08]

**Troca de senha pelo próprio usuário**

Condição 1: Utilização de autenticação baseada no método de usuário e senha.

Condição 2: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve permitir que um usuário efetue a troca de sua senha no sistema, sendo que a mesma deve seguir as regras de parametrização da qualidade da senha.

## 6. Identificação e autenticação de pessoas [NGS1.02.11]

**Igualdade de Senhas** 

Condição 1: Utilização de autenticação baseada no método de usuário e senha.

Condição 2: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] Em todos os processos de troca de senha, o S-RES deve exigir que a nova senha do usuário seja diferente da atual e da imediatamente anterior.

## 7. Identificação e autenticação de pessoas [NGS1.02.12]

**Obtenção de nova Senha**

Condição 1: Utilização de autenticação baseada no método de usuário e senha.

Condição 2: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

a) No momento em que o usuário solicitar a recuperação de senha, o S-RES deve realizar uma das seguintes opções:

  - [ ] Gerar uma nova senha automaticamente e enviá-la ao usuário, ou
  - [ ] Encaminhar ao usuário instruções para que o mesmo possa definir uma nova senha.

b)  Complementos...
  - [ ] O S-RES deve permitir que, na tela inicial de login no sistema, o usuário possa obter uma nova senha (opção “esqueci a senha”).

  - [ ] A geração e envio da senha ou encaminhamento  das instruções  deve ser realizado por meio de um canal (SMS ou e-mail, por exemplo) cuja identificação tenha sido registrada previamente no cadastro do usuário.

## 8. Identificação e autenticação de pessoas [NGS1.02.13]

**Controles de tentativas de Login**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve possuir, em todos os processos de autenticação de usuário, independentemente do método utilizado, mecanismos para bloquear seu acesso após um número máximo configurável de tentativas consecutivas de login com autenticação inválida, que não exceda a 10 tentativas. 

  - [ ] Após o bloqueio da conta de um usuário, o sistema só deve permitir login deste após o seu desbloqueio pelo administrador ou por algum método definido pelo sistema que impeça o acesso por pessoas não autorizadas. 

## 9. Identificação e autenticação de pessoas [NGS1.02.16]

**Informações de autenticação inválida**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

Em caso de autenticação inválida em tentativa de acesso, a mensagem de erro emitida pelo sistema para o usuário não deve informar qual o motivo da falha da autenticação. Por exemplo, pode-se emitir uma mensagem informando que os dados de autenticação estão incorretos, sem especificar que o usuário não existe ou que a senha está incorreta.

## 10. Identificação e autenticação de pessoas [NGS1.02.17]

**Revelação de credenciais na interface de autenticação**

Condição 1: Utilização de autenticação baseada no método de usuário e senha. 

Condição 2: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve impedir que a interface de usuário utilizada para digitação de credenciais de acesso (nome de usuário e senha, por exemplo) permita a memorização ou visualização de dados anteriores (lista de logins já digitados, lembrança automática de senhas associadas a um login, etc.).
 
  - [ ] Toda e qualquer digitação direta de senhas deve ser feita por meio de máscara de caracteres que impeça sua visualização por outras pessoas.

## 11. Identificação e autenticação de pessoas [NGS1.02.20]

**Bloqueio ou encerramento por inatividade**

  - [ ] A sessão de usuário deve ser automaticamente bloqueada ou encerrada forçadamente pelo sistema após um período de inatividade. 

  - [ ] O período máximo de inatividade deve ser configurável e armazenado no banco de dados.

  - [ ] Caso o S-RES possibilite ao usuário o desbloqueio de sessão, essa operação deve ser permitida apenas quando o desbloqueio for realizado pelo mesmo usuário bloqueado. Para que o desbloqueio de sessão seja realizado, o sistema deve requerer novo processo de autenticação do usuário bloqueado. Outro usuário deve ter a possibilidade de encerrar a sessão bloqueada anteriormente (sem reativá-la) para que só então possa prosseguir com uma nova sessão.

  - [ ] Após o bloqueio ou encerramento da sessão de usuário, as informações em tela não deverão mais estar visíveis, sendo necessária uma nova autenticação para a retomada da atividade.

  - [ ] Não deve ser possível para qualquer usuário do sistema desativar ou desabilitar tais controles.

## 12. Identificação e autenticação de pessoas [NGS1.02.23]

**Segurança contra roubo de sessão de usuário**

  - [ ] A sessão de comunicação remota entre cliente e servidor deve possuir controles de segurança que impeçam o roubo ou reuso da sessão do usuário. 

  - [ ] As credenciais de acesso não devem ser transmitidas entre as partes na forma de texto claro.

  - [ ] Deve haver controles que impeçam o reuso de identificadores de sessão do usuário (ataques de replay e covert-channel) e roubo da sessão.

  - [ ] Não deve ser possível para qualquer usuário do sistema desativar ou desabilitar tais controles.

---

# NGS1.03 - Autorização e controle de acesso

## 1. Autorização e controle de acesso [NGS1.03.01]

**Impedir acesso por pessoas não autorizadas**

  - [ ] Todo acesso ou visualização de dados do S-RES deve ser realizado apenas por usuários previamente autorizados. Tal autorização deve ser provida por meio de permissões atribuídas a perfis de usuário.

## 2. Autorização e controle de acesso [NGS1.03.02]

**Perfis mínimos de usuário**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve disponibilizar minimamente três perfis de usuário: administrador do sistema, profissional administrativo (sem acesso aos dados clínicos) e profissional de saúde.

## 3. Autorização e controle de acesso [NGS1.03.03]

**Gerenciamento de perfis**

  - [ ] O S-RES deve permitir o gerenciamento (cadastro, ativação/inativação e alteração) de perfis, por meio da aplicação.

    - [ ] O S-RES deve permitir a atribuição de permissões específicas a um determinado perfil. Tais permissões podem ser pré-definidas no S-RES de acordo com as suas funcionalidades ou telas oferecidas (por exemplo, permissão para realizar prescrição eletrônica, permissão para realização de agendamentos, etc.).

## 4. Autorização e controle de acesso [NGS1.03.07]

**Atribuição de mais de um perfil para um usuário**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve permitir que mais de um perfil possa ser atribuído a um usuário (por exemplo, profissional de saúde e administrador).

  - [ ] Tal atribuição deverá implicar na necessidade de escolha de um perfil pelo usuário no momento do login ou no acúmulo de permissões para o usuário de acordo com os perfis a ele atribuídos.

## 5. Autorização e controle de acesso [NGS1.03.08]

**Gerenciamento de usuários**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve permitir o gerenciamento (cadastro, ativação/inativação e alteração de cadastro) de usuários, por meio da aplicação.

## 6. Autorização e controle de acesso [NGS1.03.09]

**Identidade única da pessoa e responsabilização**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] Identidade única: toda pessoa usuária do S-RES deverá ser identificada individualmente.

  - [ ] Vinculação a número legal e único: toda pessoa usuária do S-RES deverá ser vinculada  minimamente a um documento de identificação pessoal unívoco segundo a legislação brasileira vigente (por exemplo, Número de Cadastro de Pessoa Física - CPF). Qualquer alteração de cadastro nesse documento deverá exigir uma justificativa no usuário.

  - [ ] Unicidade de identificação de usuários: a informação de identificação de tal documento deverá ser validada em todos os processos de inclusão ou alteração de pessoas para garantir a unicidade, ou seja, o S-RES não deve permitir a associação de um mesmo documento de identificação a dois usuários no sistema. 

  - [ ] Exclusão de usuários: Para fins de responsabilização, não deve ser possível remover o cadastro ou o vínculo  de um usuário a um profissional, caso alguma operação tenha sido realizada pelo mesmo.

  - [ ] Unicidade em modalidade SaaS: caso o S-RES opere na modalidade SaaS, a unicidade do identificador da pessoa deve ser por organização.

## 7. Autorização e controle de acesso [NGS1.03.10]

**Usuário mínimo ativo**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve garantir que haja ao menos um usuário ativo com perfil de administrador e/ou gestor de acessos (por exemplo, por meio da criação de um usuário administrador fixo que não pode ser inativado ou ter suas permissões alteradas).

## 8. Autorização e controle de acesso [NGS1.03.11]

**Restrição de autoconcessão de direitos**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES não deve permitir que usuários com permissão de gerenciamento de usuários e perfis possam alterar permissões de acesso de seu próprio usuário no S-RES (autoconcessão).

---

# NGS1.04 - Disponibilidade do RES

## 1. Disponibilidade do RES [NGS1.04.01]

**Geração de cópia de segurança**

  - [ ] O S-RES deve permitir a geração de cópia de segurança ("backup full"), pela aplicação ou SGBD, contendo informações suficientes para restauração.

  - [ ] A geração de cópia de segurança deve exportar os atributos de segurança e metadados em conjunto com os dados.

Nota: Considera-se como atributos de segurança todos os parâmetros e configurações existentes. 

## 2. Disponibilidade do RES [NGS1.04.03]

**Sigilo da cópia de segurança**

  - [ ] O S-RES (aplicação ou SGBD) deve garantir o sigilo de suas cópias de segurança (por exemplo, realizando encriptação automática).

## 3. Disponibilidade do RES [NGS1.04.04]

**Restauração de cópia de segurança**

  - [ ] O S-RES deve permitir a restauração da cópia de segurança, pela aplicação ou SGBD.

  - [ ] Na restauração de uma cópia de segurança os atributos de segurança e metadados devem ser automaticamente recuperados, sem a intervenção do administrador.

## 4. Disponibilidade do RES [NGS1.04.05]

**Integridade na restauração da cópia de segurança**

- [ ] O S-RES deve possuir controle de integridade da cópia de segurança. 

- [ ] A verificação da integridade deverá ocorrer durante a restauração da cópia, gerando um alerta caso ocorra alguma falha. O processo de restauração deve garantir sua completude de forma que toda informação seja restaurada. Caso haja algum erro durante a restauração, nenhuma informação deverá então ser restaurada, retornando-se, portanto, ao estado anterior (rollback).

## 5. Disponibilidade do RES [NGS1.04.06]

**Alerta limiar de ocupação**

Condição: S-RES não dispõe de infraestrutura com espaço de armazenamento dinâmico.

  - [ ] S-RES deve permitir o gerenciamento do espaço de armazenamento de registros por meio da configuração de um limiar de ocupação. 

  - [ ] O S-RES deve ainda permitir a configuração de um ou mais usuários com perfil de administrador do sistema que deverão receber uma notificação do S-RES no caso desse limite de ocupação ser atingido.

---

# NGS1.05 - Comunicação entre componentes do S-RES

## 1. Comunicação entre componentes do S-RES [NGS1.05.01]

**Segurança da comunicação com componente de interação com o usuário**

  - [ ] A sessão de comunicação entre o componente de interação com o usuário (ex.: browser ou executável cliente) e os outros componentes do S-RES (ex.: servidor de aplicação, banco de dados, etc) deve oferecer os seguintes serviços de segurança: autenticação do servidor, integridade dos dados e confidencialidade dos dados.

  - [ ] O serviço de segurança empregado deve implementar criptografia dos dados em trânsito (por exemplo, uso de HTTPS).

## 2. Comunicação entre componentes do S-RES [NGS1.05.02]

**Processamento de dados no lado servidor**

Condição: S-RES em arquitetura Web.

  - [ ] Todo processamento (modificação) de dados de RES deve ocorrer no lado do servidor. Todos os dados apresentados no lado cliente devem ter sido gerados e processados no lado servidor.

  - [ ] Todos os processos de validação de dados devem ser realizados no lado do servidor.

Nota: Opcionalmente, por questões de performance, poderá haver validação de dados inicialmente no lado cliente desde que seguida de validação no lado do servidor.

## 3. Comunicação entre componentes do S-RES [NGS1.05.03]

**Segurança da comunicação entre componentes**

Condição: S-RES ser composto por componentes distribuídos.

  - [ ] A comunicação entre componentes distribuídos (como, por exemplo, entre a aplicação e o banco de dados) deve oferecer os seguintes serviços de segurança: autenticação dos parceiros (ambas as partes), integridade dos dados e confidencialidade dos dados (criptografia).

Nota: A segurança pode ser aplicada ao canal de comunicação ou às mensagens trocadas.

## 4. Comunicação entre componentes do S-RES [NGS1.05.04]

**Integridade e origem de componentes dinâmicos**

Condição: S-RES utilizar componentes que exijam download (descarregamento do servidor para o cliente) para sua execução (ex.: ActiveX, Applet, aplicações para tablet, etc) por parte do usuário.

Possuir controle de integridade e possibilidade de verificação da origem/autoria (ex.: pelo uso de assinatura digital do componente) de componentes que exijam download para sua execução.

---

# NGS1.06 - Segurança de dados

## 1. Segurança de dados [NGS1.06.01]

**Utilização de SGBD** 

  - [ ] Todos os dados de RES em S-RES devem ser armazenados integral e exclusivamente por um Sistema de Gerenciamento de Banco de Dados (SGBD) que contemple minimamente o sigilo dos dados.

  - [ ] Arquivos e documentos anexados ou gerados pelo S-RES (por exemplo, laudos em PDF, áudios, vídeos, etc.) podem, opcionalmente, ser armazenados em estrutura de diretórios, desde que o S-RES garanta o sigilo desses documentos de forma que os mesmos somente possam ser visualizados por meio de seu acesso pelo S-RES. Adicionalmente, o nome dos arquivos e diretórios não podem conter qualquer informação que permita a identificação de seu conteúdo.

## 2. Segurança de dados [NGS1.06.03]

**Validação de entrada**

  - [ ] Os dados inseridos pelo usuário nos campos de entrada (inputs, caixas de texto, etc) devem ser validados antes de serem processados, de forma a prevenir ataques de buffer overflow e injeção de dados.

## 3. Segurança de dados [NGS1.06.04]

**Segregação dos dados organizados**

Condição: S-RES ofertado na modalidade SaaS.

  - [ ]  Todos os dados do RES devem ser segregados por organização, ou seja, nenhum dado do RES de uma organização pode ser acessado ou visualizado por usuário de outra organização, salvo quando consentido pelo paciente segundo acordo de privacidade.

Nota: A regra não se aplica obrigatoriamente para usuários de TI ou administrativos que sejam responsáveis pela gestão e controle centralizado (multi-organização).

---

# NGS1.07 - Auditoria

## 1. Auditoria [NGS1.07.01]

**Auditoria contínua**

O S-RES deve gerar registros de auditoria de forma contínua e permanente, não sendo permitida a sua desativação ou interrupção, ainda que temporária.

## 2. Auditoria [NGS1.07.02]

**Proteção dos registros de auditoria**

  - [ ] Os registros de auditoria devem ser protegidos contra acesso não autorizado e contra qualquer tipo de alteração. 

  - [ ] Apenas usuários com perfil de auditor ou, na ausência deste, o administrador do sistema, podem ter acesso (consulta) a esses dados.

## 3. Auditoria [NGS1.07.03]

**Eventos registrados na trilha de auditoria**

O S-RES deverá registrar em trilha de auditoria minimamente os seguintes tipos de eventos, quando contemplados pelo sistema:

a) Quanto ao RES:
  - [ ] Criação, duplicação, consulta, inativação de registros do RES;
  - [ ] Importação e exportação de dados;
  - [ ] Impressão de registros do RES; 
  - [ ] Solicitação de acesso de emergência a um prontuário;
  - [ ] Registro ou alteração de termos de consentimento;
  - [ ] Criação, inativação e alterações de regras de apoio à decisão clínica (por exemplo, alteração de regra de sexo x diagnóstico, por exemplo);

b) Quanto às ações de usuário:
  - [ ] Tentativas de autenticação de usuário, com ou sem sucesso;
  - [ ] Troca de senha;
  - [ ] Realização de assinatura digital;
  - [ ] Validação de assinatura digital;
  - [ ] Falha na realização ou validação de assinatura digital;
  - [ ] Registro de solicitação de esquecimento.

c) Quanto às ações operacionais:
  - [ ] Atividades de gerenciamento de usuários e perfis, incluindo inativação/bloqueio e ativação/desbloqueio de conta de usuário;
  - [ ] Realização e restauração de cópia de segurança.

## 4. Auditoria [NGS1.07.05]

**Informações do registro de auditoria**

a) O S-RES deve registrar, para cada registro de auditoria, minimamente  as seguintes informações:
 - [ ]  Número de identificação unívoca do registro da trilha; 
 - [ ]  Data e hora do evento;
 - [ ]  Tipo de evento (por exemplo: criação de atendimento, acesso ao prontuário, acesso a documento de sumário de alta, impressão de documento, troca de senha, etc.);
 - [ ]  Identificação do componente gerador do evento (endereço IP ou MAC address, por exemplo);
 - [ ]  Identificação do usuário gerador do evento, quando aplicável;
 - [ ]  Identificador único e permanente do registro afetado pelo evento (por exemplo, identificador do paciente cujo prontuário foi acessado);
 - [ ]  Informações complementares relevantes sobre o evento (ex.: motivo da falha na validação de assinatura digital, descrição do erro relativo à execução de processos operacionais, etc).

## 5. Auditoria [NGS1.07.06]

**Privacidade do paciente na trilha de auditoria**

  - [ ] Dados clínicos ou dados de identificação do paciente não poderão ser registrados na trilha de auditoria.

## 6. Auditoria [NGS1.07.07]

**Visualização dos registros da trilha de auditoria**

  - [ ] O S-RES deve possuir uma interface na aplicação para visualização dos registros de auditoria em ordem cronológica. 

  - [ ] Todos os registros da trilha de auditoria devem ser passíveis de visualização por meio dessa interface. 

  - [ ] Tal interface deve permitir a filtragem de registros minimamente por data, evento, identificador único e permanente do usuário e identificador único e permanente do registro afetado (por exemplo, identificador do paciente).

---

# NGS1.08 - Documentação

## 1. Documentação [NGS1.08.01]

**Tópicos dos manuais**

a) O S-RES deve possuir manuais que apresentem minimamente as seguintes informações:
  - [ ]  Instruções de uso do S-RES para os usuários contemplando todos os perfis/papéis existentes (por exemplo: administrador, operador, operador de backup, etc);
  - [ ]  Visão geral do S-RES, incluindo formas de operação, requisitos do ambiente computacional;
  - [ ]  Instalação e configuração do S-RES;
  - [ ]  Instalação e configuração dos componentes complementares e/ou distribuídos (ex: SGBD, sistema operacional, etc);
  - [ ]  Recomendação sobre a forma de configuração segura do S-RES e componentes complementares e/ou distribuídos, e forma de operação segura do S-RES;
  - [ ]  Instruções explicitando quaisquer limitações e restrições relacionadas à compatibilidade do S-RES e/ou seu funcionamento (por exemplo, mídias compatíveis para uso do certificado digital);
  - [ ]  Compatibilidade com versões anteriores do S-RES.

b) Os manuais poderão ser apresentados em documentos separados ou em um mesmo documento dividido em diferentes capítulos, em suporte em papel e/ou eletrônico. Essa separação deve incluir minimamente os temas: instalação, operação, administração e recomendações de segurança.

Nota 1: Os manuais podem ser disponibilizados em quaisquer formatos abertos e inteligíveis, tais como texto (impresso ou eletrônico), audiovisual, etc.

Nota 2: No caso de SaaS, os manuais dirigidos à instalação e configuração do S-RES e de seus componentes podem ficar restritos ao fornecedor (administrador da plataforma), sendo dispensada a sua disponibilização aos usuários finais.

## 2. Documentação [NGS1.08.02]

**Referência à versão do software na documentação**

 - [ ] Todos os manuais devem indicar, no início do documento, seu versionamento documental, bem como a identificação da versão do S-RES a que se referem.

## 3. Documentação [NGS1.08.03]

**Operações de backup**

Condição: S-RES cuja operação de backup é realizada pelo próprio fornecedor do sistema ou pelo estabelecimento de saúde.

  - [ ] O manual de instalação deve informar como realizar a configuração de um usuário com permissão de operação de backup. 
  - [ ] O manual de instalação deve informar como configurar o SGBD de forma que as atividades de exportação e restauração de uma cópia de segurança dos dados possa ser realizada somente pelo usuário com permissão de operação de backup. 

  - [ ] Os manuais pertinentes devem conter indicações de cautela caso existam outros usuários com permissão de geração ou restauração de cópia de segurança (ex.: usuário 'sa' ou equivalente). 

  - [ ] Caso o S-RES não possua a funcionalidade de exportação e restauração em sua interface diretamente, deve referenciar em seu manual procedimento ou link do fabricante do SGBD contendo informações pertinentes a execução destas tarefas.

## 4. Documentação [NGS1.08.04]

**Restrição de acesso a entidades não autenticadas e autorizadas**

  - [ ] O manual de instalação deve informar como configurar o SGBD e todos os demais componentes complementares e/ou distribuídos do S-RES de forma a impedir o acesso de entidades (usuários ou outros sistemas) não autenticadas ou não autorizadas pelo controle de acesso.

## 5. Documentação [NGS1.08.05]

**Configuração da segurança da comunicação entre componentes**

Condição: S-RES ser composto por componentes distribuídos.

  - [ ] O manual de instalação deve informar que a comunicação entre os componentes distribuídos do S-RES deve implementar os serviços de segurança de autenticação de parceiro, integridade e sigilo dos dados, e dar orientações para tal configuração. 

## 6. Documentação [NGS1.08.06]

**Sincronização de relógio**

  - [ ] O manual de administração e operação deve informar ao administrador que os componentes complementares e/ou distribuídos do S-RES devem estar com seus relógios sincronizados e referenciados ao UTC (Coordinated Universal Time). O manual deve também informar de que forma esta sincronização pode ser configurada no ambiente computacional.

## 7. Documentação [NGS1.08.07]

**Guarda da cópia de segurança**

  - [ ] O manual de operação deve informar que as cópias de segurança do RES devem ser guardadas em local físico ou lógico seguro, em ambiente físico distinto afastado do local original, em repositório provido de controle de acesso e com garantia de sigilo.

## 8. Documentação [NGS1.08.08]

**Segregação dos componentes**

Condição: S-RES composto por componentes distribuídos.

  - [ ] O manual de instalação deve informar claramente se  o S-RES possui uma segregação lógica e física, se for o caso, dos diferentes componentes do sistema, tais como servidor de banco de dados, servidor de aplicação, servidor de autenticação, servidor de backup, servidor de validação de certificados digitais, etc. 

  - [ ] O manual deve exemplificar uma ou mais arquiteturas de configuração, propiciando o atendimento do cenário de componentes distribuídos.

  - [ ] O manual deve conter um diagrama que represente a  comunicação entre componentes e seus respectivos métodos de comunicação segura.

## 9. Documentação [NGS1.08.09]

**Importação de dados de dispositivos externos de saúde**

Condição: possibilidade de importação automática de dados de dispositivos externos de saúde.

  - [ ] O manual deve indicar os procedimentos necessários para importação, incluindo parametrização quando aplicável. 

  - [ ] O manual deve conter um aviso de que, em caso de importação de dados de dispositivos externos de saúde, é necessário que exista um termo de responsabilidade referente à aferição e calibração periódica desses dispositivos, ou que haja um profissional de saúde que valide essas informações antes de sua aceitação pelo S-RES.

## 10. Documentação [NGS1.08.10]

**Idioma**

  - [ ] Deve haver versão em Português do Brasil para todos os manuais do S-RES.

## 11. Documentação [NGS1.08.11]

**Recomendações sobre configurações de segurança**

  - [ ] Os manuais devem conter informações, alertas e/ou recomendações sobre configurações relacionadas à segurança do S-RES (por exemplo, tempo máximo para periodicidade de troca de senha, tempo máximo para expiração de sessão, etc.).

## 12. Documentação [NGS1.08.12]

**Histórico de alteração**

  - [ ] Gerar e manter documentação contendo o histórico descritivo das alterações realizadas no S-RES ("release notes"), contendo a data, modificações e responsável, além de permitir a inclusão do impacto das alterações (módulos, funções, serviços afetados, etc) e restrições de compatibilidade, quando houver. 

---

# NGS1.09 - Tempo

## 1. Tempo [NGS1.09.01]

**Fonte Temporal**

  - [ ] Todo registro de tempo do S-RES deverá ser baseado em uma fonte de referência temporal configurável, ou seja, utilizar a referência de tempo do servidor e não da estação do usuário, exceto no caso de aplicação “desktop” (onde o sistema está em um único computador, sem servidor separado).

  - [ ] O registro de tempo deve ser contínuo, utilizando o protocolo de sincronismo de tempo NTP. 

## 2. Tempo [NGS1.09.02]

**Uniformidade da representação para exportação de tempo**

  - [ ] Na exportação de dados do RES, todos os registros de tempo devem ser apresentados no formato RFC 3339.

## 3. Tempo [NGS1.09.03]

**Registro do tempo no banco de dados**

  - [ ] Todo registro de tempo deve ser armazenado no banco de dados de acordo com a referência temporal configurada no servidor em uma estrutura lógica que inclua dia, mês, ano, hora, minuto, segundo (quando aplicável), milissegundo (quando aplicável) e fuso horário (UTC).

## 4. Tempo [NGS1.09.04]

**Uniformidade da representação para entrada de tempo**

  - [ ] Toda entrada de data completa deve respeitar a sequência dia seguido do mês seguido do ano.

  - [ ] Toda entrada de horário deve respeitar a sequência hora seguida dos minutos.

## 5. Tempo [NGS1.09.05]

**Uniformidade da representação para exibição de tempo**

  - [ ] Toda exibição (em tela ou impressão) de data completa deve respeitar a sequência dia seguido do mês seguido do ano.

  - [ ] Toda exibição (em tela ou impressão) de horário deve respeitar a sequência hora seguida dos minutos. Opcionalmente, pode-se exibir ainda o fuso horário (UTC), segundos e milissegundos.

## 6. Tempo [NGS1.09.06]

**Time zone e local da instituição de saúde**

Condição: S-RES permite que o servidor de aplicação e/ou banco de dados esteja em uma localidade diferente daquela em que o S-RES é utilizado por seus usuários.

  - [ ] O S-RES deve permitir a parametrização da time zone e local onde se encontra a instituição de saúde.

  - [ ] A exibição de registro de tempo, tanto em tela quanto em impressão, deve respeitar a UTC indicada na parametrização, independentemente da localização do servidor. Ou seja, caso o registro de tempo tenha sido registrado no banco de dados de acordo com a UTC da localização do servidor, o S-RES deverá converter automaticamente tal registro de acordo com a time zone da instituição.

## 7. Tempo [NGS1.09.07]

**Ajuste automático de horários**

  - [ ] O S-RES deverá alertar o usuário quando da programação de qualquer atividade (ex.: aprazamento de medicação, agendamento de exames, etc) que seja afetada pela mudança de fuso horário decorrente do início ou término de horário de verão.  

  - [ ] O sistema deve permitir o ajuste automático dos horários afetados pela mudança por meio de uma parametrização que indique se tal ajuste deverá ou não ocorrer. Por exemplo, há um medicamento a ser administrado às 02h00 da manhã. Ao entrar no horário de verão, o S-RES ajustaria o horário para 01h00 da manhã.

---

# NGS1.11 - Privacidade

## 1. Privacidade [NGS1.11.01]

**Concordância com termos de uso**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

  - [ ] O S-RES deve exibir imediatamente após o primeiro acesso do usuário no sistema, um termo de concordância sobre o uso do sistema e as políticas de privacidade sobre o tratamento apropriado das informações pessoais e de saúde, alertando para o devido cuidado visando a confidencialidade dos dados e as consequências do uso inadequado dos mesmos. 

  - [ ] O usuário só deve poder prosseguir após aceitar explicitamente as condições ali dispostas.

  - [ ] A concordância com os termos deverá ser repetida obrigatoriamente a cada alteração nas políticas de uso.

## 2. Privacidade [NGS1.11.05]

**Consentimento do paciente para acesso a dados pessoais**

  - [ ] O S-RES deve permitir o registro de um ou mais consentimentos do paciente referentes ao propósito de uso de suas informações pessoais de saúde e profissionais autorizados a acessá-las.

  - [ ] O S-RES deve permitir o upload de consentimentos assinados e digitalizados.

  - [ ] O S-RES deve permitir indicar o status do consentimento (autorizado, não autorizado ou revogado).

  - [ ] O S-RES deve permitir indicar se o consentimento foi assinado pelo próprio paciente ou por seu representante legal, permitindo ainda registrar, para o segundo caso, a identificação do representante (nome, CPF e CNS) e seu grau de relacionamento com o paciente.

## 3. Privacidade [NGS1.11.06]

**Revogação de consentimentos do paciente para acesso a dados pessoais**

  - [ ] O S-RES deve permitir efetuar a revogação de um consentimento para acesso a dados pessoais previamente registrado.

  - [ ] A revogação do consentimento deve ser registrada e visualizada, tanto em tela quanto impressão, indicando, minimamente, o registro de tempo da mudança, profissional responsável e status anterior e posterior à mudança. 

  - [ ] Uma vez que um consentimento foi autorizado pelo paciente e registrado no S-RES, esse não poderá ter seu registro ou conteúdo alterado (por exemplo, alteração do texto do consentimento ou do documento anexado durante upload). Qualquer necessidade de alteração deverá implicar na revogação do consentimento e registro de um novo.

---

# NGS1.12 - Integridade

## 1. Integridade [NGS1.12.01]

**Regras para correção de dados já finalizados**

Condição: S-RES permite a alteração de registros clínicos já finalizados.

  - [ ] A correção de um dado do prontuário e/ou registro clínico só poderá ser feita pelo próprio autor.

  - [ ] Qualquer correção de um dado do prontuário e/ou registro clínico já finalizado deve implicar na geração de uma nova versão para o mesmo.

  - [ ] Toda correção de um dado do prontuário e/ou registro clínico deve exigir justificativa do usuário.

  - [ ] A versão anterior à correção deve ser mantida no prontuário do paciente com status de inativa.

  - [ ] Ao acessar a versão atual do registro, o S-RES deve indicar que o mesmo possui versões anteriores e deve permitir que tais versões sejam facilmente acessadas.

Nota: Consideram-se como finalizados os registros que foram concluídos e liberados pelo profissional.

## 2. Integridade [NGS1.12.03]

**Inativação de registros clínicos já finalizados**

  - [ ] O S-RES deve permitir a inativação de registros de dados clínicos e atendimentos previamente armazenados e finalizados (liberados) no sistema. Tais registros incluem, mas não se limitam a: prescrições, sinais vitais, diagnósticos, alergias e documentos clínicos (anamnese e sumário de alta, por exemplo). 

  - [ ] Toda inativação de registros de dados clínicos ou atendimentos deve exigir uma justificativa ao usuário. A inativação só poderá ser concluída após indicação da justificativa.

  - [ ] A inativação de um registro deve alterar seu respectivo status para inativo (ou outro termo de mesmo significado) e registrar a data/hora e usuário responsável pela inativação.

  - [ ] Todos os dados registrados no S-RES e considerados como finalizados/definitivos/liberados devem ser mantidos permanentemente. Dessa forma, registros inativos devem continuar vinculados ao prontuário do respectivo paciente e ser passíveis de visualização tanto em tela quanto exportação, incluindo data/hora, profissional responsável e justificativa da inativação.

  - [ ] Qualquer registro que tenha sido inativado deve ter seu status de inativo apresentado de forma clara e destacada tanto em tela quanto exportação, de forma a deixar evidente o conteúdo que está inativo (tachando o texto, por exemplo).
