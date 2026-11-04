// BANCO 2 — CEC. ADICIONE AS NOVAS QUESTÕES AQUI.
// Cada pergunta segue o formato do exemplo abaixo. Copie o bloco { ... },
// cole ANTES do ]; e separe os blocos com vírgula.
// answer: 0=A, 1=B, 2=C, 3=D.
// majorWorkActivity: A, B, C, D, E ou F (opcional).
// classification: "CEC" ou "COMBINED" (combina teoria e código).
// Esta lista é INDEPENDENTE do banco Trade Knowledge.
const cecQuestions = [
  {
    id: 'calc001',
    question: 'What size 2 pole breaker must you use on a 3HP, 115V single phase motor?',
    options: ['45 A', '80 A', '90 A', '100 A'],
    answer: 1, // B — gabarito fornecido pelo usuário; AINDA NÃO VALIDADO
    classification: 'COMBINED',
    majorWorkActivity: 'D',
    topic: 'Motors',
    calculatorRequired: true,
    cecReferenceRequired: true,
    cecReference: '', // inserir referência após verificar no CEC autorizado
    verificationStatus: 'pending',
    explanation: 'Answer key provided by user; technical verification pending.',
  },

  // COLE A PRÓXIMA QUESTÃO AQUI:
  // {
  //   id: 'cec002',
  //   question: 'Your question in English?',
  //   options: ['Option A', 'Option B', 'Option C', 'Option D'],
  //   answer: 0,
  //   classification: 'CEC',
  //   majorWorkActivity: 'B',
  //   topic: 'CEC Section 10',
  //   calculatorRequired: false,
  //   cecReferenceRequired: true,
  //   cecReference: 'Rule to verify',
  //   verificationStatus: 'pending',
  // },
];
