export const clinic = {
  name: 'DM Harmonize', fullName: 'Clínica Estética DM Harmonize',
  phone: '(11) 95024-0465', phoneDigits: '5511950240465',
  address: 'Av. Henriqueta Mendes Guerra, 1330', addressExtra: 'Inspire Business · 3º andar, sala 304',
  neighborhood: 'Vila São João, Barueri — SP', postalCode: '06401-160',
  hours: 'Aberto 24 horas', hoursNote: 'Confirme a disponibilidade de atendimento pelo WhatsApp.',
  instagramUrl: 'https://www.instagram.com/clinicadradaniellemendonca/',
  googleRating: '5,0', googleReviewCount: 53, googleReviewsUrl: '',
  siteUrl: 'https://dm-harmonize-barueri.luanalvesdeaquino.chatgpt.site',
  specialist: { name: '', qualification: '', registration: '', experience: '' },
  resultImages: [] as { before: string; after: string; alt: string; treatment: string }[],
};
export const whatsappUrl = (message = 'Olá! Conheci a DM Harmonize pelo site e gostaria de agendar uma avaliação.') => `https://wa.me/${clinic.phoneDigits}?text=${encodeURIComponent(message)}`;
export const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${clinic.fullName}, ${clinic.address}, ${clinic.neighborhood}, ${clinic.postalCode}`)}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(`${clinic.address}, Barueri, SP`)}&output=embed`;
export const navigation = [['Início','inicio'],['A clínica','clinica'],['Tratamentos','tratamentos'],['Resultados','resultados'],['Avaliações','avaliacoes'],['Dúvidas','duvidas'],['Contato','contato']] as const;
export const treatments = [
  { id:'facial', title:'Harmonização facial', tag:'Equilíbrio que preserva você', description:'Planejamento personalizado para equilibrar proporções e valorizar os seus traços naturais.', detail:'O primeiro passo é entender suas expectativas e avaliar as proporções do rosto. Os procedimentos são indicados individualmente, com explicação dos benefícios, limites, cuidados e possíveis riscos. Nem todas as pessoas precisam dos mesmos procedimentos.', note:'Seu rosto, sua identidade. O plano parte de você.' },
  { id:'botox', title:'Botox', tag:'Expressão com leveza', description:'Suavização das linhas de expressão, preservando uma aparência leve e natural.', detail:'A toxina botulínica atua temporariamente sobre a atividade de músculos específicos. A indicação, as áreas e a quantidade são definidas após avaliação profissional. O efeito costuma durar de três a quatro meses, com variação individual; não há garantia de duração ou resultado.', note:'A indicação considera sua expressão e seus objetivos.' },
  { id:'labial', title:'Preenchimento labial', tag:'Definição na medida certa', description:'Contorno, definição e volume em proporção com o seu rosto.', detail:'O planejamento considera a anatomia dos lábios, as proporções do rosto e o que você deseja valorizar. Durante a avaliação, a profissional explica o produto indicado, o procedimento, as contraindicações e os cuidados. Inchaço e sensibilidade podem ocorrer; o resultado deve ser avaliado após a recuperação.', note:'O equilíbrio vem antes do volume.' },
  { id:'corporal', title:'Harmonização corporal', tag:'Cuidado em cada contorno', description:'Protocolos personalizados para cuidar dos contornos e favorecer a autoestima.', detail:'A avaliação orienta a escolha dos protocolos corporais, considerando histórico de saúde, características da região e expectativas. A profissional informa o que é adequado, os limites de cada abordagem e a necessidade de acompanhamento. Os resultados e o número de sessões variam.', note:'Um planejamento que respeita seu corpo e seu tempo.' },
] as const;
export const faqs = [
  ['Como funciona a primeira avaliação?','Começamos com uma conversa sobre seus objetivos, histórico de saúde e características individuais. A profissional avalia as possibilidades, esclarece dúvidas e explica as indicações, os cuidados e os limites de cada procedimento.'],
  ['Os tratamentos são personalizados?','Sim. Cada plano considera sua anatomia, suas expectativas e a avaliação profissional. A indicação de um procedimento nunca é automática; o cuidado começa por entender o que faz sentido para você.'],
  ['Quanto tempo dura o efeito do botox?','Em geral, o efeito da toxina botulínica dura cerca de três a quatro meses. Esse período pode variar conforme a pessoa, a área tratada e o plano indicado. A manutenção deve ser discutida com a profissional.'],
  ['Como funciona o preenchimento labial?','O preenchimento pode ser indicado para trabalhar definição, contorno e volume. Produto, técnica e quantidade são escolhidos na avaliação. É um procedimento que exige profissional habilitado, discussão dos riscos e orientações de recuperação.'],
  ['Quais cuidados são necessários após o procedimento?','Os cuidados dependem do tratamento e serão orientados individualmente. Siga as instruções recebidas e entre em contato com a clínica se tiver dúvidas ou sintomas inesperados. Não adote recomendações de outros procedimentos sem orientação.'],
  ['Quando posso perceber os resultados?','O tempo varia conforme o tratamento e a resposta individual. Alguns efeitos são progressivos, e inchaço ou sensibilidade podem influenciar a aparência inicial. A profissional explica o prazo esperado e o momento adequado para reavaliar.'],
  ['A clínica atende todos os públicos?','Atendemos pessoas adultas de todos os gêneros. A DM Harmonize é uma clínica liderada por mulheres, acolhedora e amigável à comunidade LGBTQ+. Respeito, privacidade e escuta fazem parte do atendimento.'],
  ['Como posso agendar?','Basta tocar em “Agendar avaliação” ou conversar pelo WhatsApp (11) 95024-0465. Nossa equipe confirma a disponibilidade e orienta sobre os próximos passos.'],
] as const;
export const reviews = [
  {name:'Maria de Lurdes',text:'Fui muito bem recepcionada e tive um tratamento eficaz. Recomendo.'},
  {name:'Regiane Rodrigues',text:'Atendimento excelente, resultados satisfatórios e muito cuidado em todos os detalhes.'},
  {name:'Néia Fernandes',text:'Clínica maravilhosa em todos os detalhes. Amei meu tratamento.'},
];
