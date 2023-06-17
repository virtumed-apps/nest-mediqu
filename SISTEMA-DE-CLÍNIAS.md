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

# ECF.07 - Documentação Clínica

## 1. Documentação Clínica [ECF.07.02]

**Registro do contexto socioeconômico do paciente:**

a) O S-RES deve permitir o registro do contexto socioeconômico do paciente.

b) O S-RES deve permitir registrar minimamente os seguintes dados:
  - [ ] Raça/cor (branca, preta, parda, amarela, indígena e "sem informação");
  - [ ] Etnia indígena, se aplicável;
  - [ ] Religião;
  - [ ] Escolaridade (Não sabe ler/escrever, Alfabetizado, 1 grau incompleto, 1 grau completo, 2 grau incompleto, 2 grau completo, Superior incompleto, Superior completo, Especialização/residência, Mestrado, Doutorado);
  - [ ] Indicação se a moradia do paciente encontra-se em área urbana ou rural;
  - [ ] Indicação se o paciente encontra-se em situação de rua;
  - [ ] Indicação se o paciente encontra-se em vulnerabilidade social (por exemplo, mora em local sem saneamento básico);
  - [ ] Ocupação de acordo com a Classificação Brasileira de Ocupações (CBO) e local de trabalho;
  - [ ] Observações em texto livre.

## 2. Documentação Clínica [ECF.07.03]

**Registro de imunização:**

a) O S-RES deve permitir o registro de imunizações do paciente.

b) O S-RES deve permitir o registro de minimamente os seguintes dados:
  - [ ] Nome do imunobiológico;
  - [ ] Data da administração;
  - [ ] Indicação se esse registro é referente à uma administração de imunobiológico anterior ao presente atendimento (situação vacinal anterior que ainda não estava registrada no sistema);
  - [ ] Dose (dose única, primeira dose, segunda dose, terceira dose, quarta dose, primeiro reforço ou segundo reforço);
  - [ ] Informações adicionais (texto livre).

## 3. Documentação Clínica [ECF.07.04]

**Registro de alergias e intolerâncias:**

a) O S-RES deve permitir o registro de alergias e intolerâncias para pacientes em campo específico.

b) O S-RES deve permitir a visualização da lista de alergias e intolerâncias registradas para um paciente.

## 3. Documentação Clínica [ECF.07.05]

**Registro estruturado de alergias para sistemas de prescrição**

a) O S-RES deve permitir o registro de alergias e intolerâncias para pacientes de forma estruturada.

b) No momento de registro de alergia ou intolerância, o S-RES deve permitir indicar minimamente as seguintes informações:
  - [ ] Princípio ativo
  - [ ] Reação adversa sofrida pelo paciente;
  - [ ] Gravidade da reação (leve, moderada ou grave);
  - [ ] Estado (ativo ou inativo);

c) O S-RES deve permitir que, minimamente para princípios ativos, o registro de substâncias possa ser realizado a partir de uma tabela de domínio previamente cadastrada.

d) O S-RES deve permitir que o estado da alergia ou intolerância seja alterado, registrando a data/hora e responsável pela mudança do estado.

## 4. Documentação Clínica [ECF.07.06]

**Indicação da ausência de alergias e intolerâncias:**

a) O S-RES deve permitir a indicação da ausência de alergias e intolerâncias de forma estruturada para um determinado paciente (por exemplo, indicar "paciente nega alergia" ou ainda "não há alergias conhecidas").

b) O S-RES deve permitir o registro de alergias e intolerâncias mesmo após um registro de ausência (por exemplo, havia sido registrado que o paciente nega alergia, mas posteriormente descobriu-se que o mesmo possui alergia à dipirona). Nesse caso, o S-RES deverá inativar automaticamente o registro de anterior que indicava ausência de alergia ou intolerância.

## 5. Documentação Clínica [ECF.07.07]

**Registro de sinais vitais:**

a) O S-RES deve permitir o registro minimamente dos seguintes sinais vitais:
  - [ ] Pressão Arterial Sistólica (PAS);
  - [ ] Pressão Arterial Diastólica (PAD);
  - [ ] Temperatura corporal;
  - [ ] Frequência cardíaca;
  - [ ] Frequência respiratória;
  - [ ] Saturação de oxigênio;
  - [ ] Glicemia capilar;
  - [ ] Dor;
  - [ ] Observação em texto livre.

b) Todos os dados de sinais vitais devem estar associados à uma unidade de medida (por exemplo, mmHg para PAS e PAD).

## 6. Documentação Clínica [ECF.07.08]

**Registro de medidas antropométricas:**

a) O S-RES deve permitir o registro minimamente das seguintes medidas antropométricas:
  - [ ] Peso;
  - [ ] Altura;
  - [ ] Índice de Massa Corporal (IMC), calculado de forma automática pelo sistema;
  - [ ] Superfície corpórea, calculada de forma automática pelo sistema;
  - [ ] Circunferência abdominal;
  - [ ] Circunferência cefálica;
  - [ ] Observação em texto livre.

b) Todas as medidas antropométricas devem estar associados à uma unidade de medida (por exemplo, kg para peso).

## 7. Documentação Clínica [ECF.07.09]

**Registro de medidas antropométricas para sistemas de prescrição:**

a) O S-RES deve permitir o registro minimamente das seguintes medidas antropométricas:
  - [ ] Peso;
  - [ ] Altura;
  - [ ] Observação em texto livre.

b) Todas as medidas antropométricas devem estar associados à uma unidade de medida (por exemplo, kg para peso).

## 8. Documentação Clínica [ECF.07.12]

**Dados da anamnese:**

O S-RES deve permitir o registro de anamnese do paciente atendendo à plenitude dos dados clínicos, permitindo o registro de minimamente os seguintes dados: 
  - [ ] Queixa do paciente/motivo da consulta;
  - [ ] História da doença atual;
  - [ ] Histórico familiar e pessoal;
  - [ ] Exame físico;
  - [ ] Hipótese diagnóstica;
  - [ ] Plano terapêutico.


## 9. Documentação Clínica [ECF.07.13]

**Dados da anamnese conforme SOAP:**

O S-RES deve permitir que os dados de anamnese sejam estruturados de acordo com a metodologia SOAP (Subjetivo, Objetivo, Avaliação e Plano).

## 10. Documentação Clínica [ECF.07.14]

**Registro de queixas utilizando CIAP2:**

a) O S-RES deve permitir o registro de queixas do paciente/motivos de consulta de forma estruturada a partir de uma lista baseada em uma ou mais classificações ou terminologias padrão.

b) O S-RES deve permitir minimamente o uso da Classificação Internacional de Assistência Primária (CIAP) em sua versão mais recente.

## 10. Documentação Clínica [ECF.07.15]

**Registro estruturado de diagnósticos:**

a) O S-RES deve permitir o registro de um ou mais diagnósticos e hipóteses diagnósticas de forma estruturada a partir de uma lista previamente cadastrada ou importada (CID10, por exemplo).

b) O sistema deve permitir a indicação se o diagnóstico é suspeito ou confirmado. O S-RES deve ainda permitir atualizar o estado do diagnóstico (de suspeito para confirmado, por exemplo).

c) O sistema deve permitir indicar se o diagnóstico é principal ou secundário.

d) O sistema deve permitir indicar o estado atual do diagnóstico (ativo ou inativo). O S-RES deve ainda permitir atualizar o estado do diagnóstico (de ativo para inativo, por exemplo).

## 11. Documentação Clínica [ECF.07.16]

**Registro de diagnósticos médicos com base no CID:**

a) O S-RES deve permitir o registro de diagnósticos e hipóteses diagnósticas médicos de forma estruturada a partir de uma lista baseada em uma classificação ou terminologia padrão.

b) O S-RES deve permitir minimamente o uso da Classificação Internacional de Doenças (CID) em sua versão mais recente exigida pela legislação.

## 12. Documentação Clínica [ECF.07.17]

**Registro de diagnósticos com base em mais de uma terminologia:**

a) O S-RES deve permitir o registro de diagnósticos e hipóteses diagnósticas de forma estruturada a partir de uma lista baseada em uma ou mais classificações ou terminologias padrão.

b) O S-RES deve permitir minimamente o uso da Classificação Internacional de Doenças (CID) em sua versão mais recente exigida pela legislação e Classificação Internacional de Assistência Primária (CIAP) em sua versão mais recente.

## 13. Documentação Clínica [ECF.07.22]

**Evolução médica:**

O S-RES deve permitir o registro de evolução médica.

## 14. Documentação Clínica [ECF.07.24]

**Registro de órteses e próteses:**

O S-RES deve permitir o registro de órteses e próteses para o paciente.

## 16. Documentação Clínica [ECF.07.25]

**Registro de atestado:**

O S-RES deve permitir a emissão de atestados para pacientes.

## 17. Documentação Clínica [ECF.07.27]

**Solicitação de encaminhamentos:**

a) O S-RES deve permitir a solicitação de encaminhamentos para pacientes.

b) O S-RES deve oferecer minimamente os seguintes campos no formulário de encaminhamento.
  - [ ] Nome completo do paciente;
  - [ ] Especialidade médica ou categoria profissional;
  - [ ] Campo texto livre para descrição e motivo do encaminhamento;
  - [ ] Nome completo do profissional responsável;
  - [ ] Conselho profissional e respectivo número de registro e Unidade Federativa do solicitante;
  - [ ] Endereço da instituição;
  - [ ] Espaço para assinatura do profissional responsável.

## 18. Documentação Clínica [ECF.07.30]

**Aprovação de registros por preceptoria:**

a) O S-RES deve dar suporte ao processo de preceptoria.

b) O S-RES deve garantir que todos os dados clínicos registrados por estudantes ou profissionais de saúde em treinamento (como internos, pós-graduandos, residentes, etc.) possam ser atestados/validados pelo profissional de ensino responsável. Por exemplo, preceptor validando entradas de pós-graduandos em treinamento em ambiente de ensino.

c) Apenas um profissional com perfil de acesso de preceptor poderá efetuar atestação ou validação desses dados.

d) Todos os registros ainda não validados deverão ser exibidos apenas ao profissional responsável e respectivos preceptores e não devem ser passíveis de impressão no prontuário completo.

e) O S-RES deve armazenar e permitir a visualização, tanto em tela quanto impressão, do registro de tempo e do profissional em treinamento responsável pelo registro.

## 19. Documentação Clínica [ECF.07.32]

**Registro de óbito:**

  - [ ] O S-RES deve permitir o registro do óbito do paciente com campos para indicação de data e causa de óbito, permitindo o registro do CID associado e número da declaração de óbito.

---

# ECF.10 - Prescrição Eletrônica

## 1. Prescrição Eletrônica [ECF.10.01]

**Emissão de receita não estruturada:**

  - [ ] O S-RES deve possuir uma funcionalidade para elaboração de receita de forma não estruturada (texto livre), de forma a permitir a prescrição de princípios ativos e medicamentos que não serão dispensados e/ou administrados na instituição.

## 2. Prescrição Eletrônica [ECF.10.02]

**Texto padrão para receita:**

a) O S-RES deve permitir a criação de um ou mais textos padrões para receitas, permitindo indicar ainda um título para cada texto padrão.

b) O S-RES deve permitir que o profissional selecione um texto padrão específico como base para uma receita, permitindo ainda a edição do texto.

## 3. Prescrição Eletrônica [ECF.10.03]

**Emissão de receita estruturada:**

a) O S-RES deve possuir uma funcionalidade para elaboração de receita de forma estruturada, de forma a permitir a prescrição de princípios ativos e medicamentos que não serão dispensados e/ou administrados na instituição.

b) O S-RES deve permitir que o usuário busque por nome, a partir de uma lista de seleção, os princípios ativos e/ou medicamentos que serão prescritos. Tal lista de seleção deve carregar a lista de princípios ativos e/ou medicamentos cadastrada previamente.

c) O S-RES deve permitir a prescrição de princípios ativos e/ou medicamentos que não estejam cadastrados ou padronizados pela instituição (por exemplo, medicamentos manipulados não disponíveis na instituição).

d) Para cada princípio ativo e/ou medicamento prescrito, o S-RES deve permitir a indicação estruturada de minimamente as seguintes informações: 
  - [ ] Nome do princípio ativo/medicamento;
  - [ ] Forma farmacêutica (por exemplo, comprimido, ampola, etc.);
  - [ ] Dose e respectiva unidade de medida;
  - [ ] Frequência (8 em 8 horas, por exemplo);
  - [ ] Início do tratamento;
  - [ ] Duração do tratamento (dias de utilização);
  - [ ] Indicação se o medicamento será de uso contínuo;
  - [ ] Via de administração;
  - [ ] Prazo de utilização;
  - [ ] Observação em texto livre.

## 4. Prescrição Eletrônica [ECF.10.04]

**Impressão de receita:**

a) A impressão de receitas deve incluir automaticamente as seguintes informações:
  - [ ] Nome completo do paciente;
  - [ ] Nome completo do profissional responsável;
  - [ ] Conselho profissional e respectivo número de registro e Unidade Federativa do prescritor;
  - [ ] Local de atendimento e respectivo CNES;
  - [ ] Endereço completo da instituição;
  - [ ] Número de telefone para contato com a instituição;
  - [ ] Data/hora da emissão prescrição;
  - [ ] Espaço para assinatura e carimbo do profissional responsável.

b) Para impressão de receitas de controle especial, o S-RES deve ainda incluir as seguintes informações:
  - [ ] Endereço completo do paciente.

c) Para impressão de receitas de antimicrobianos, o S-RES deve ainda incluir as seguintes informações:
  - [ ] Idade do paciente;
  - [ ] Sexo do paciente.

## 5. Prescrição Eletrônica [ECF.10.19]

**Solicitação de exames e procedimentos:**

a) O S-RES deve possuir uma funcionalidade para elaboração de pedidos de exames e procedimento para o paciente.

b) O S-RES deve oferecer minimamente um campo de texto livre.

## 6. Prescrição Eletrônica [ECF.10.20]

**Solicitação estruturada de exames e procedimentos:**

a) O S-RES deve possuir uma funcionalidade para prescrição estruturada de exames e procedimentos.

b) O S-RES deve permitir que o usuário busque por nome, a partir de uma lista de seleção, os exames ou procedimentos que serão prescritos. Tal lista de seleção deve carregar uma lista de exames e procedimentos cadastrada previamente.

c) Para cada item solicitado, o S-RES deve permitir a indicação estruturada de minimamente as seguintes informações: 
  - [ ] Nome do exame ou procedimento;
  - [ ] Código da tabela de referência (SIGTAP ou TUSS, por exemplo);
  - [ ] Caráter do atendimento (urgência ou eletivo);
  - [ ] Observação em texto livre.

---

# ECF.13 - Gerenciamento de Solicitações e Resultados de Exames e Procedimentos

## 1. Gerenciamento de Solicitações e Resultados de Exames e Procedimentos [ECF.12.02]

**Entrada de resultados de exames não vinculados à uma solicitação no sistema:**

a) O S-RES deve permitir o registro de resultados de exames não solicitados previamente no S-RES, de forma que não seja necessário haver uma solicitação registrada previamente no sistema para que o resultado do exame possa ser documentado.

b) O S-RES deve permitir indicar minimamente os seguintes dados:
  - [ ] Nome do exame realizado (não necessário quando o resultado estiver vinculado à uma solicitação previamente registrada no S-RES);
  - [ ] Data da realização do exame;
  - [ ] Campo para indicação do resultado, conclusão ou parecer diagnóstico.
  - [ ] Anexo de um ou mais arquivos (por exemplo, laudo em PDF).

---

# ECF.14 - Ciclo de Vida de Registros Clínicos

## 1. Apoio à Decisão Clínica [ECF.14.04]

**Parametrização de ação a ser tomada para alertas de alergia:**

a) O S-RES deve possuir uma funcionalidade administrativa que permita parametrizar a ação a ser tomada no momento em que uma regra de alergia/intolerância é disparada na prescrição de medicamentos.

b) O S-RES deve permitir parametrizar minimamente as seguintes ações:
  - [ ] Apenas notificação;
  - [ ] Notificação seguida de justificativa para continuidade do registro;
  - [ ] Notificação e bloqueio da continuidade do registro.

c) O S-RES deve permitir parametrizar diferentes ações para diferentes severidades (por exemplo, parametrizar que alergias e intolerâncias de baixa severidade devem disparar a ação de apenas notificação).

## 2. Apoio à Decisão Clínica [ECF.14.05]

**Alerta de alergia na prescrição eletrônica:**

a) Durante o registro de uma prescrição de medicamentos, o S-RES deve verificar a existência de alergia ou intolerância a um dos princípios ativos existentes nos medicamentos prescritos.

b) A verificação de alergia/intolerância deve considerar os princípios ativos e não o nome do medicamento, uma vez que um medicamento pode ter mais de um princípio ativo (por exemplo, paciente é alérgico a dipirona e um buscopan composto está sendo prescrito).

c) Caso seja verificada a existência de alergia/intolerância, o S-RES deverá emitir uma mensagem conforme parametrização da ação a ser tomada, quando aplicável, informando sobre a existência da alergia/intolerância.

d) A mensagem emitida deve indicar minimamente a classificação (alergia ou intolerância), substância prescrita a qual o paciente é alérgico/intolerante, severidade e reação sofrida pelo paciente.

---

# ECF.16 - Ciclo de Vida de Registros Clínicos

## 1. Ciclo de Vida de Registros Clínicos [ECF.16.01]

**Controle do status de registros em aberto:**

Condição: S-RES permite a existência de registros de dados clínicos ou atendimentos não finalizados/definitivos (registros em aberto).

  - [ ] Todo registro clínico em aberto deve permitir que o profissional o retome e continue com a entrada de dados, permitindo a finalização/liberação do documento.

  - [ ] O S-RES deve exibir claramente (por exemplo, utilizando texto, cores e símbolos) o status de um determinado registro, indicando se o mesmo encontra-se em aberto (não finalizado) ou completado (já finalizado e liberado).

  - [ ] O S-RES não deve permitir que outros profissionais que não o próprio autor possam visualizar um registro em aberto.

  - [ ] Caso um determinado profissional deixe um registro em aberto, o S-RES deve notificá-lo no momento em que o mesmo sair da tela em que o registro está sendo apresentado, mesmo em caso de logoff ou fechamento da aplicação.

  - [ ] Após o login por um profissional de saúde, o S-RES deve apresentar uma lista com todos os registros em aberto existentes no sistema e que são de responsabilidade desse profissional, possibilitando a abertura do documento a partir da lista apresentada. O sistema deve ainda permitir o acesso à essa lista por vontade do profissional a qualquer momento.

  - [ ] O S-RES deve registrar e exibir tanto a data/hora de abertura do registro quanto a data/hora de finalização/liberação do mesmo.

Nota: Consideram-se como não finalizados ou em aberto os registros que foram salvos pelo profissional em um prontuário mas ainda não foram concluídos ou liberados pelo mesmo, permitindo a continuidade da entrada de dados no registro em outro momento.

---

# ECF.17 - Estrutura, Metadados e Qualidade de Registros Clínicos

## 1. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.01]

**Identificação do profissional responsável pelo episódio/evento:**

Todo registro realizado no S-RES deve identificar univocamente:
  - [ ] O paciente ao qual o episódio/evento se refere.
  - [ ] O profissional de saúde responsável pelo registro, quando aplicável.
  - [ ] Identificação da instituição de saúde, quando aplicável.

## 2. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.02]

**Registro de tempo do armazenamento do evento no S-RES:**

  - [ ] O S-RES deve registrar automaticamente a data/hora da entrada de qualquer registro no sistema.

## 3. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.03]

**Registro de tempo da ocorrência do evento:**

  - [ ] O S-RES deve permitir o registro de eventos de forma retroativa de forma que o profissional possa indicar a data/hora em que o evento de fato ocorreu (por exemplo, registro de uma consulta ocorrida em momento de falha no fornecimento de energia elétrica à unidade prestadora de serviços).

  - [ ] Todo registro de dados clínicos no prontuário do paciente deve oferecer uma opção para registro retroativo. Ao acionar tal opção, um campo editável para entrada de data/hora do evento deve ser oferecido.

  - [ ] Para todo registro retroativo, o S-RES deve exigir a entrada de uma justificativa pelo usuário.

  - [ ] O registro de tempo do evento deve ser validado para impedir que seja registrada uma data/hora superior à atual.

  - [ ] Caso o evento não seja registrado de forma retroativa, o S-RES deverá considerar que a data/hora de ocorrência do evento é a mesma do registro do evento no sistema.

  - [ ] Para eventos registrados retroativamente, o S-RES deve sinalizar de forma destacada que o mesmo foi registrado a posteriori (com o texto 'registro retroativo", por exemplo), indicando a data/hora de ocorrência do evento e data/hora de seu registro no S-RES, tanto na exibição em tela quanto na impressão do prontuário.

Nota: Opcionalmente, o S-RES pode oferecer uma funcionalidade que permita habilitar e desabilitar a permissão e realizar registros retroativos.

## 4. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.04]

**Cronologia de eventos:**

  - [ ] O S-RES deve assegurar a cronologia dos eventos e informações, de forma que os registros sejam apresentados, tanto em tela quanto em impressão, ordenados cronologicamente de acordo com a data de ocorrência evento.

## 5. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.05]

**Validação de consistência cronológica**

a) O S-RES deve realizar a validação de cronologia de dados ou informações que possuam registro de tempo dependentes entre si. Devem ser validados minimamente os seguintes cenários, quando aplicável:

  - [ ] A data/hora de lançamento de um resultado de exame não deve ser anterior à data/hora de solicitação do mesmo; 
  - [ ] A data/hora de administração de um medicamento não deve ser anterior à data/hora da prescrição; 
  - [ ] A data/hora de óbito de um paciente não deve ser anterior à data/hora de seu nascimento;
  - [ ] A data/hora de um evento clínico não deve ser anterior à data/hora da abertura do atendimento.

b) Quando aplicável, essa validação deve ser realizada com base na data de ocorrência do evento e não na data do registro da informação no sistema, de forma a considerar a possibilidade de registro de eventos retroativos.

## 6. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.06]

**Padronização de unidades de medidas:**

  - [ ] O S-RES deve adotar unidades de medida padrão para registro e exibição de dados numéricos e quantificáveis. Por exemplo, mmHg para pressão sanguínea e quilogramas para peso corporal.

## 7. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.07]

**Regras para unidades de medidas:**

  a) Todo dado numérico ou quantificável associado à uma unidade de medida deve ser apresentado, tanto em tela quanto impressão, juntamente à sua respectiva unidade.

  b) A unidade de medida associada a um dado numérico ou quantificável registrado no S-RES deve ser gravada no banco de dados e vinculada a este dado.

## 8. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.10]

**Captura de códigos padronizados:**

  - [ ] Para todo código padronizado registrado no S-RES a partir de classificações e terminologias (CID, por exemplo), o S-RES deve registrar em banco de dados de forma estruturada em atributos específicos minimamente os seguintes dados: o nome (ou sigla), versão/edição e idioma do sistema de classificação/codificação utilizado, seguidos do código e termo por extenso originais. Exemplo: CID (nome) Edição 10 (versão) Português (idioma) A95.0 (código) Febre Amarela Silvestre (termo).

## 9. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.11]

**Resolução de imagens para interpretação clínica:**

  - [ ] Ao ser solicitada a exibição de uma imagem médica ou odontológica registrada no RES, o S-RES deve ter a opção de informar o usuário sobre a resolução da imagem, ou seja, a matriz de pixels/voxeis, o número de bits de cores e número de quadros (no caso de modo cine).

## 10. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.12]

**Independência dos dados e do código do S-RES:**

  - [ ] O S-RES deve armazenar parâmetros, configurações, classificações, codificações ou terminologias em banco de dados e não internamente às linhas de código da aplicação (hardcode). Por exemplo, período máximo de validade de senha; período máximo de inatividade para bloqueio de sessão; tabelas de domínio de campos demográficos (sexo, religião, naturalidade); codificações de terminologias externas; valores limites de variáveis quantitativas para validação ou ainda regras de apoio à decisão clínica.

## 11. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.15]

**Corretude funcional:**

  - [ ] Durante a auditoria do S-RES, deve ser possível executar todos os testes referentes às funcionalidades delimitadas pelo escopo da certificação sem a ocorrência de defeitos, erros ou falhas.

## 12. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.16]

**Validação de dados estruturados:**

a) O S-RES deve implementar regras de validação de formato e conteúdo de dados estruturados. Deverão ser realizadas minimamente as seguintes validações:

  - [ ] CPF validado de acordo com seu dígito verificador;
  - [ ] CNS validado de acordo com seu dígito verificador;
  - [ ] CNES validado de acordo com o número de caracteres;
  - [ ] Registro de tempo (data e hora) validado de acordo com o calendário gregoriano (por exemplo, 31/02/2010 seria uma data inválida).

b) O S-RES deve impedir o registro de dados constatados como inválidos.

Nota: Caso o S-RES receba esses dados a partir de sistemas externos, os mesmos deverão ser igualmente validados.

## 13. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.17]

**Compatibilidade retroativa:**

Condição: Existir uma versão anterior do mesmo S-RES já certificada pelo processo SBIS.

  - [ ] O Manual do S-RES deve conter informações sobre a compatibilidade de sua arquitetura em relação à última versão (imediatamente anterior) do S-RES certificado pelo processo SBIS, de forma que este possa processar os dados registrados em tal versão. 

## 14. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.18]

**Idioma do S-RES:**

  - [ ] Todos os dados e informações exibidas e controladas pelo S-RES (por exemplo, rótulos, mensagens controladas pelo S-RES, títulos de tela, descritivos, menus, etc), tanto em tela quanto em impressões, deverão obrigatoriamente estar no idioma português do Brasil. 

## 15. Estrutura, Metadados e Qualidade de Registros Clínicos [ECF.17.19]

**Mensagens do sistema:**

  - [ ] Todas as mensagens sob controle do S-RES devem ser apresentadas em linguagem não técnica ao usuário, em português do Brasil. Mensagens técnicas (sistemas operacionais, banco de dados, componentes de segurança, etc) ou em outros idiomas e que possam ser tratadas pelo S-RES não devem ser apresentadas em seu conteúdo original.

---

# ECF.18 - Direitos do Paciente

## 1. Direitos do Paciente [ECF.18.03]

**Registro do consentimento do paciente para teleatendimentos:**

  - [ ] O sistema deve permitir a apresentação de um Termo de Consentimento Livre e Esclarecido (TCLE) específico ao paciente anteriormente ao teleatendimento.

  - [ ] O sistema deve permitir que o paciente possa indicar se está ou não de acordo com um determinado TCLE. 

  - [ ] Tal informação deve ficar registrada no prontuário do paciente vinculada ao respectivo teleatendimento.

## 2. Direitos do Paciente [ECF.18.04]

**Impressão do prontuário do paciente:**

  - [ ] O S-RES deve permitir a impressão do prontuário do paciente por meio de um único comando, sem a necessidade de navegar entre diferentes telas ou partes do prontuário para impressão fracionada.

  - [ ] O arquivo gerado deve indicar claramente em todas as páginas (por exemplo, por meio de um cabeçalho ou rodapé) a identificação do paciente (minimamente nome completo, sexo, data de nascimento e CPF) e da instituição de saúde que possui a guarda do prontuário (minimamente nome e CNPJ ou CNES).

  - [ ] A funcionalidade de impressão do prontuário deve possuir um filtro para período de tempo (data inicial e data final) de forma a possibilitar a impressão parcial do prontuário do paciente.

  - [ ] O arquivo gerado deverá atender à cronologia dos eventos, de forma que todos os registros estejam ordenados em ordem cronológica de acordo com a data do evento e não com a data de registro. 

  - [ ] No arquivo gerado, todo campo não preenchido ou nulo deve ser omitido ou sinalizado por meio do preenchimento com um valor padrão, indicando que não houve preenchimento (por exemplo, "não preenchido").

  - [ ] Todas as páginas do prontuário deverão ser numeradas no formato <número da página>/<total de páginas do prontuário>.

  - [ ] Todos os documentos anexos ao prontuário do paciente, tais como laudos de exames, arquivos multimídia e termos de consentimento, deverão ser exportados juntamente com o prontuário (por exemplo, no corpo do prontuário ou em uma pasta separada de anexos). Caso os anexos sejam exportados em uma pasta ou arquivo separado, os mesmos deverão ser referenciados no documento exportado cronologicamente de acordo com o momento em que foram anexados ao prontuário do paciente.

Nota 1: Em relação à cronologia, o S-RES pode agrupar registros que estão vinculados mantendo uma apresentação de forma consolidada (por exemplo, apresentar o resultado de um exame juntamente à solicitação do mesmo; balanço hídrico apresentado como uma tabela em série temporal, checagem de medicamentos apresentada juntamente com a prescrição; etc.). Entretanto, a data/hora de cada registro deve ser igualmente exibida.

Nota 2: Este requisito se aplica mesmo a sistemas que não constituam um prontuário completo do paciente. Por exemplo, sistemas de prescrição eletrônica devem oferecer o recurso de impressão do conjunto completo de prescrições realizadas para um paciente.

---

# ECF.19 - Uso Secundário de Dados

## 1. Interoperabilidade e Continuidade do Cuidado [ECF.19.01]

**Parametrização de agravos de notificação compulsória:**

  - [ ] O S-RES deve permitir a parametrização de agravos (diagnósticos) de notificação compulsória (comunicação obrigatória à uma autoridade de saúde) de acordo com a Portaria nº 264, de 17 de fevereiro de 2020 que altera a Portaria de Consolidação nº 4/GM/MS, de 28 de setembro de 2017 do Ministério de Saúde, ou outro documento oficial mais recente.

  - [ ] Para cada diagnóstico, o S-RES deve permitir a indicação da periodicidade da notificação (imediata ou semanal) e autoridade de saúde para a qual a notificação deverá ser enviada (Ministério da Saúde, Secretaria Estadual de Saúde ou Secretaria Municipal de Saúde).

## 2. Interoperabilidade e Continuidade do Cuidado [ECF.19.02]

**Relatório para notificação compulsória de agravos:**

  - [ ] O S-RES deve permitir a emissão de relatórios de agravos de notificação compulsória registrados no S-RES em um determinado período de tempo (por exemplo, últimas 24 horas ou últimos 7 dias). 

  - [ ] Para cada agravo identificado, esses relatórios devem conter minimamente os seguintes dados: CPF, CNS, descrição do agravo (código CID), indicação se o agravo é suspeito ou confirmado, endereço (incluindo o CEP) do paciente, médico responsável pela suspeita ou diagnóstico (nome e CRM/UF), data/hora da registro do agravo no S-RES, data/hora da emissão do relatório e estabelecimento de saúde (CNES).

  - [ ] O S-RES deve permitir a impressão do relatório em um formato aberto (por exemplo, PDF ou XML).

---

# ECF.20 - Interoperabilidade e Continuidade do Cuidado

## 1. Interoperabilidade e Continuidade do Cuidado [ECF.20.04]

**Recebimento adequado de dados:**

Condição: Sistemas que podem operar de forma integrada a um Prontuário Eletrônico do Paciente (PEP).

  - [ ] O S-RES deve garantir o recebimento adequado do PEP de quaisquer dados necessários para a realização de uma prescrição. Por exemplo, receber do PEP os dados de identificação do paciente, alergias, diagnósticos, dados de identificação do usuário logado, etc.

## 2. Interoperabilidade e Continuidade do Cuidado [ECF.20.05]

**Envio adequado de dados:**

Condição: Sistemas que podem operar de forma integrada a um Prontuário Eletrônico do Paciente (PEP).

  - [ ] O S-RES deve garantir o envio adequado para o PEP de quaisquer dados necessários para o registro de uma prescrição. Por exemplo, envio do documento correspondente à prescrição, permitindo que o mesmo possa ser armazenado diretamente no PEP.

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

**Vínculo da sessão de videoconferência ao prontuário:**

  - [ ] Todo registro de sessão de videoconferência referente a um paciente deve ficar vinculado ao prontuário do mesmo.

## 8. Videoconferência [ECF.22.12]

**Inicialização da videoconferência a partir da agenda:**

  - [ ] O sistema deve permitir a inicialização de uma videoconferência com o referido paciente a partir do agendamento do teleatendimento, caso aplicável.