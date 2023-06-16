# ECF.01 - Identificação de Estabelecimentos de Saúde

## 1. Identificação de Estabelecimentos de Saúde [ECF.01.01]

**Identificação do estabelecimento de saúde**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

a) O S-RES deve identificar univocamente e registrar o estabelecimento onde está sendo realizada a atenção à saúde específica.

b) O cadastro do estabelecimento deve permitir o registro de minimamente os seguintes dados:
   - [ ] Cadastro Nacional de Estabelecimentos de Saúde (CNES)
   - [ ] Cadastro Nacional de Pessoa Jurídica (CNPJ)
   - [ ] Tipo de estabelecimento de saúde (por exemplo, consultório médico, Unidade Básica de Saúde, Unidade de Pronto Atendimento)
   - [ ] Endereço completo do estabelecimento
   - [ ] Telefone
   - [ ] E-mail
   - [ ] Identificação do responsável técnico pelo estabelecimento (vinculado com seu cadastro de profissional)

## 2. Identificação de Estabelecimentos de Saúde [ECF.01.02]

**Duplicidade de cadastros de estabelecimentos de saúde**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

O S-RES deve possuir um mecanismo de validação que emita uma mensagem ao usuário e impeça a continuidade do registro em casos de duplicação de cadastro de estabelecimento de saúde. A validação deve ser realizada pelo menos para o número do CNES e número do CNPJ.

   - [ ] Mecanismo de validação implementado para evitar duplicidade de cadastros de estabelecimentos de saúde
   - [ ] Validação realizada para o número do CNES
   - [ ] Validação realizada para o número do CNPJ

---

# ECF.02 - Identificação de Profissionais da Organização

## 1. Identificação de Profissionais da Organização [ECF.02.01]

**Identificação dos profissionais da organização**

a) O S-RES deve permitir o cadastro de profissionais da organização permitindo registrar minimamente os seguintes campos:
   - [ ] Nome
   - [ ] Nome social/apelido
   - [ ] Nome da mãe (permitindo indicação de mãe desconhecida de forma estruturada)
   - [ ] Sexo
   - [ ] Gênero
   - [ ] Data de nascimento
   - [ ] Raça/cor (branca, preta, parda, amarela, indígena e "sem informação")
   - [ ] Nacionalidade
   - [ ] Município de nascimento e UF
   - [ ] Data de naturalização (para estrangeiros)
   - [ ] País de nascimento (para estrangeiros)
   - [ ] Número do passaporte, país emissor, data de emissão e data de validade (para estrangeiros)
   - [ ] E-mail principal
   - [ ] Tipo de telefone, DDD e número de telefone
   - [ ] Endereço completo: tipo de logradouro, nome do logradouro, número, complemento, bairro/distrito, município, Unidade Federativa, país e CEP
   - [ ] Número do CPF
   - [ ] Número de identidade - complemento, UF, órgão e data de emissão
   - [ ] Número do Cartão Nacional de Saúde (CNS)
   - [ ] Conselho profissional e respectivo número de registro e Unidade Federativa
   - [ ] Código e descrição CBO

Nota: Os campos apresentados acima devem estar presentes no formulário, mas não necessariamente de preenchimento obrigatório.

## 2. Identificação de Profissionais da Organização [ECF.02.02]

**Duplicidade de cadastros de profissionais**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

O S-RES deve possuir um mecanismo de validação que emita uma mensagem de aviso ao usuário e impeça a continuidade do registro em caso de duplicidade de cadastro de profissional. A validação deve ser realizada pelo menos para o número do CPF e conselho profissional.

   - [ ] Mecanismo de validação implementado para evitar duplicidade de cadastros de profissionais
   - [ ] Validação realizada para o número do CPF
   - [ ] Validação realizada para ao conselho profissional

---

# ECF.03 - Identificação de Pacientes

## 1. Identificação de Pacientes [ECF.03.01]

**Dados demográficos do paciente:**

a) O S-RES deve identificar o sujeito da atenção de forma unívoca e aderente às regras vigentes para o Cartão Nacional de Saúde (CNS).

b) Campos mínimos no cadastro do paciente: 
    - [ ] Nome 
    - [ ] Nome social/apelido 
    - [ ] Nome da mãe
    - [ ] Sexo 
    - [ ] Gênero 
    - [ ] Data de nascimento 
    - [ ] Raça/cor 
    - [ ] Nacionalidade
    - [ ] Município de nascimento
    - [ ] UF 
    - [ ] Data de naturalização 
    - [ ] País de nascimento 
    - [ ] Número do passaporte 
    - [ ] País emissor 
    - [ ] Data de emissão
    - [ ] Data de validade (para estrangeiros) 
    - [ ] E-mail principal
    - [ ] tipo de telefone 
    - [ ] DDD 
    - [ ] Número de telefone 
    - [ ] Endereço completo 
    - [ ] CPF 
    - [ ] Número de identidade, 
    - [ ] Número do Cartão Nacional de Saúde (CNS) 
    - [ ] Guardião ou representante legal
  
Nota: Os campos acima devem estar presentes no formulário, mas não necessariamente de preenchimento obrigatório.

## 2.Identificação de Pacientes [ECF.03.02]

**Número de identificação do paciente no sistema:**

Condição: Para a modalidade de Receita Digital, esse requisito se aplica apenas aos sistemas que podem operar de forma autônoma e independente (stand-alone).

a) O S-RES deve gerar automaticamente um número de identificação no sistema (número de prontuário) para todo paciente cadastrado.

   - [ ] O sistema gera automaticamente um número de identificação no sistema (número de prontuário) para cada paciente cadastrado

## 3. Identificação de Pacientes [ECF.03.03]

**Fotografia do paciente:**

a) O S-RES deve permitir o vínculo de uma fotografia ao cadastro do paciente.
  - [ ] A fotografia deve ser visualizável no cadastro do paciente e no cabeçalho do prontuário.
  - [ ] A substituição da fotografia deve ser registrada com histórico de alterações.

## 4. Identificação de Pacientes [ECF.03.05]

**Histórico de alterações de dados demográficos:**

a) O S-RES deve permitir a atualização de dados demográficos do paciente.
  - [ ] Toda alteração deve ser registrada em um histórico com indicação dos campos alterados, dados anteriores e posteriores à alteração, usuário responsável e data e hora da alteração.

## 5. Identificação de Pacientes [ECF.03.07]

**Verificação de duplicidade de cadastros de pacientes:**
 
a) O S-RES deve ter um mecanismo de validação que evite a duplicidade de cadastros de pacientes.
  - [ ] A validação deve ser realizada pelo menos para o número do CPF.

## 6. Identificação de Pacientes [ECF.03.11]

**Busca simples de pacientes:**

a) S-RES deve permitir a busca de pacientes usando informações como 
  - [ ] Nome
  - [ ] Número de identificação no sistema (número de prontuário)
  - [ ] CPF
  - [ ] Nome da mãe.

## 7. Identificação de Pacientes [ECF.03.14]

**Dados da lista de pacientes para seleção de prontuários:**

a) A lista de pacientes retornada em uma busca deve conter dados como 
  - [ ] Nome completo 
  - [ ] Número de identificação no sistema (número de prontuário)
  - [ ] Sexo
  - [ ] Data de nascimento
  - [ ] Data de nascimento
  - [ ] CPF

## 8. Identificação de Pacientes [ECF.03.17]

**Cabeçalho de identificação do paciente:**

a) Após a seleção de um paciente para visualização e/ou realização de registros em seu prontuário, todas as telas do S-RES relacionadas ao prontuário do paciente deverão conter um cabeçalho fixo com minimamente as seguintes informações de identificação do paciente:

  - [ ] Nome completo;
  - [ ] Número de identificação do paciente no sistema;
  - [ ] Sexo;
  - [ ] Data de nascimento;
  - [ ] Idade (anos, meses e dias);
  - [ ] CPF;
  - [ ] Alergias e intolerâncias ativas;
  - [ ] Diagnósticos ativos;
  - [ ] Fotografia do paciente, quando houver.

Nota: Para alergias e intolerâncias e diagnósticos, pode-se utilizar mecanismos que permitam a visualização dos itens a partir de um link, como um tooltip ou pop up.

## 9. Identificação de Pacientes [ECF.03.18]

**Abertura de mais de um prontuário na mesma sessão de usuário:**

Condição: S-RES permite abrir mais de um prontuário simultaneamente.

  - [ ] O S-RES deve manter apenas o primeiro prontuário aberto com permissão de edição pelo usuário, sendo que os demais deverão ser abertos exclusivamente em modo somente leitura. 

  - [ ] O S-RES deverá ainda exibir de forma clara e explícita que o status desses prontuários adicionais é de somente leitura.

---

# ECF.04 - Cadastros de Substâncias, Exames e Procedimentos

---

# ECF.05 - Agendamento

## 1. Agendamento [ECF.05.03]

**Agendamento de consultas por profissionais:**

Condição: S-RES permite abrir mais de um prontuário simultaneamente.

  - [ ] O sistema deve oferecer uma funcionalidade para agendamento de consultas por profissionais de saúde e administrativos, permitindo indicar minimamente data/hora, especialidade, profissional, duração estimada e paciente.

---

# ECF.06 - Gestão de Atendimentos

## 1. Gestão de Atendimentos [ECF.06.01]

**Registro de atendimento ao paciente:**

  - [ ] O S-RES deve permitir a geração de um atendimento para um paciente de forma a indicar um contato assistencial.

  - [ ] O S-RES deve permitir indicar o tipo de atendimento sendo registrado (consulta, teleconsulta, pronto atendimento e internação, por exemplo).

  - [ ] O S-RES deve permitir que vários registros clínicos possam ser efetuados como parte de um atendimento.

  - [ ] O S-RES deve permitir que um atendimento possa ser fechado de forma a indicar o encerramento do contato assistencial.

  - [ ] O S-RES deve registrar a data/hora e usuário responsável pela abertura e fechamento de um atendimento.

## 2. Gestão de Atendimentos [ECF.06.02]

**Histórico de atendimentos:**

  - [ ] O S-RES deve permitir a visualização de um histórico de atendimentos (contatos assistenciais) do paciente.

  - [ ] A apresentação da lista de atendimentos deve respeitar a ordem cronológica (linha do tempo) e exibir a data/hora de abertura e fechamento do atendimento, quando aplicável.

---

---

# ECF.21 - Teleatendimento

## 1. Teleatendimento [ECF.21.01]

**Registro da time zone do paciente:**

  - [ ] No momento de abertura de um teleatendimento, o S-RES deve permitir a indicação da time zone referente à localização do paciente.

  - [ ] A time zone do paciente deve ser armazenada e vinculada ao teleatendimento.

Nota 1: O S-RES pode manter como default a time zone do paciente igual à time zone da instituição, permitindo apenas a edição da mesma durante a abertura do teleatendimento.

Nota 2: Opcionalmente, o S-RES pode permitir que o profissional indique a cidade/UF ou ainda o horário local do paciente em detrimento à time zone. Nesse caso, a time zone deverá ser calculada automaticamente pelo sistema.

---

# ECF.22 - Videoconferência

## 1. Videoconferência [ECF.22.01]

**Ferramenta de videoconferência:**

  - [ ] O sistema deve fornecer a possibilidade de realização de videoconferência entre os participantes do teleatendimento.

## 2. Videoconferência [ECF.22.02]

**Data e hora do início e fim da sessão:**

  - [ ] Para todo teleatendimento, o sistema deve registrar automaticamente a data e hora de início e fim da sessão.

  - [ ] O registro deve estar no prontuário do paciente vinculado à respectiva sessão.

## 3. Videoconferência [ECF.22.03]

**Sessões simultâneas de videoconferências:**

  - [ ] O sistema deve permitir que diferentes sessões de videoconferência possam ocorrer simultaneamente (por exemplo, diferentes salas de videoconferência permitindo que diferentes teleatendimentos ocorram na mesma data/hora), envolvendo diferentes pacientes e profissionais.

## 4. Videoconferência [ECF.22.04]

**Acesso à videoconferência apenas por usuários autorizados:**

  - [ ] O sistema deve garantir que apenas os usuários (profissionais e pacientes) autorizados possam ter acesso à uma determinada sessão de videoconferência (por exemplo, utilização de uma chave única por sessão, autenticação por senha, autenticação por certificado digital, autorização individual pelo profissional ou outros controles).

## 5. Videoconferência [ECF.22.05]

**Expiração de link para acesso à videoconferência:**

  - [ ] O sistema deve permitir que diferentes sessões de videoconferência possam ocorrer simultaneamente (por exemplo, diferentes salas de videoconferência permitindo que diferentes teleatendimentos ocorram na mesma data/hora), envolvendo diferentes pacientes e profissionais.


## 6. Videoconferência [ECF.22.06]

**Inicialização da videoconferência pelo prontuário:**

  - [ ] O S-RES deve permitir que o profissional de saúde possa iniciar uma sessão de videoconferência com um determinado paciente a partir de seu respectivo prontuário.


## 7. Videoconferência [ECF.22.07]

**Sessões simultâneas de videoconferências:**

  - [ ] O sistema deve permitir que diferentes sessões de videoconferência possam ocorrer simultaneamente (por exemplo, diferentes salas de videoconferência permitindo que diferentes teleatendimentos ocorram na mesma data/hora), envolvendo diferentes pacientes e profissionais.

## 12. Videoconferência [ECF.22.012]

**Sessões simultâneas de videoconferências:**

  - [ ] O sistema deve permitir que diferentes sessões de videoconferência possam ocorrer simultaneamente (por exemplo, diferentes salas de videoconferência permitindo que diferentes teleatendimentos ocorram na mesma data/hora), envolvendo diferentes pacientes e profissionais.

