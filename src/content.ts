/*
 * Conteúdo da landing page da Mentoria O PROCESSO.
 * Links de checkout vêm das variáveis de ambiente (configurar na Vercel).
 * Campos `src: null` são espaços reservados para fotos e vídeos ainda não entregues.
 */

export const links = {
  checkout: process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "#oferta",
  workshop: process.env.NEXT_PUBLIC_WORKSHOP_CHECKOUT_URL ?? "#oferta",
  terms: "#",
  privacy: "#",
  contact: "#",
};

export const offer = {
  price: "R$ 1.197",
  payment: "Pix ou em até 12x no cartão",
  guaranteeDays: 7,
  executors: "+800",
};

export const cta = {
  primary: "Quero começar do zero",
  movement: "Entrar no movimento",
  micro: "R$ 1.197 · Pix ou em até 12x no cartão · 7 dias de garantia · +800 executores dentro",
};

export type MediaSlot = {
  src: string | null;
  alt: string;
  /** o que fotografar, mostrado no placeholder enquanto não há imagem */
  brief: string;
};

export const photos = {
  heroPortrait: {
    src: null,
    alt: "Heitor Nogueira",
    brief: "Heitor em pé, fundo escuro, luz lateral",
  },
  mentorPortrait: {
    src: "/mentor/palco.webp",
    alt: "Heitor Nogueira no palco, ensinando a metodologia MVT de low ticket",
    brief: "Heitor na mesa de operação, tela aberta ao fundo",
  },
  mentorFamily: {
    src: "/mentor/com-aluno.webp",
    alt: "Heitor Nogueira com um executor da mentoria",
    brief: "Família em Vila Velha, ES",
  },
  mentorCall: {
    src: "/mentor/encontro.webp",
    alt: "Encontro presencial de executores da mentoria, cada um com a sua placa",
    brief: "Print de uma Mesa de Guerra",
  },
  mentorChannel: {
    src: "/mentor/placas.webp",
    alt: "Executores com as placas Gold, Diamond, Black e Ruby no evento da mentoria",
    brief: "Thumb de vídeo do canal",
  },
  plaqueDelivery: {
    src: "/mentor/entrega-placas.webp",
    alt: "Heitor Nogueira no palco com dois executores segurando as placas Gold e Diamond",
    brief: "Executor recebendo a placa Gold",
  },
  productsTested: {
    src: "/formatos/produtos-testados.webp",
    alt: "Anúncios de produtos testados e painel com métricas de campanha",
    brief: "Mockup: anúncios de produtos + notebook com métricas",
  },
} satisfies Record<string, MediaSlot>;

/** Tipos de oferta low ticket mostrados na seção "o que é isso", cada um com sua imagem. */
export const lowTicketFormats: { title: string; slot: MediaSlot }[] = [
  {
    title: "Ebook",
    slot: { src: "/formatos/ebook.webp", alt: "Exemplo de ebook low ticket: 100 lições de guitarra para iniciantes", brief: "Mockup de ebook" },
  },
  {
    title: "Pacote de arquivos",
    slot: {
      src: "/formatos/pacote-salmos.webp",
      alt: "Exemplo de pacote de arquivos: 150 Salmos explicados versículo por versículo",
      brief: "Mockup de pacote de arquivos",
    },
  },
  {
    title: "Guia",
    slot: {
      src: "/formatos/guia-natal.webp",
      alt: "Exemplo de guia: guia ilustrado infantil da história do Natal",
      brief: "Mockup de guia",
    },
  },
  {
    title: "Aplicativo simples",
    slot: {
      src: "/formatos/app-moto.webp",
      alt: "Exemplo de aplicativo simples: app de manutenção de moto no celular",
      brief: "Mockup de app no celular",
    },
  },
];

export type Video = {
  id: string;
  name: string;
  meta: string;
  /** mp4 direto, YouTube, Vimeo ou embed (Panda etc.) */
  src: string | null;
  poster: string | null;
  /** mp4 curto e mudo para tocar no hover (opcional) */
  preview?: string | null;
};

export const featuredStory = {
  eyebrow: "Podcast Executor · episódio 1",
  title: "Um barbeiro de São Paulo",
  text: "Nunca tinha vendido produto digital. Pegou uma cartilha de barbeiro e fez a versão pra quem tosa cachorro. Primeira oferta no ar em duas semanas. Hoje tem a placa de R$ 100 mil e contou a história no Podcast Executor.",
  facts: [
    { k: "Primeira oferta no ar", v: "2 semanas" },
    { k: "Placa conquistada", v: "R$ 100 mil" },
  ],
  video: {
    id: "henrique",
    name: "Henrique",
    meta: "Podcast Executor · episódio 1",
    src: null,
    poster: null,
  } satisfies Video,
};

// TODO: trocar pelos depoimentos em vídeo reais (nome, resultado, vídeo e capa)
/** depoimentos em vídeo (9:16), comprimidos em public/depoimentos; o primeiro toca sozinho, mudo */
export const videoTestimonials = [1, 2, 3].map((n) => ({
  id: `depoimento-${n}`,
  label: `depoimento ${n} de executor`,
  src: `/depoimentos/depoimento-${n}.mp4`,
  poster: `/depoimentos/depoimento-${n}.jpg`,
}));

export type Proof =
  | {
      kind: "form";
      result: string;
      context: string;
      quote: string;
      who: string;
    }
  | {
      kind: "quote";
      quote: string;
      who: string;
      source: "form" | "group";
    };

export const proofs: Proof[] = [
  {
    kind: "form",
    result: "R$ 1.093 de lucro nos primeiros 8 dias",
    context: "Executor com menos de 40 dias de mentoria, produto simples, sem o rosto dele.",
    quote: "Nunca havia rodado uma operação de low ticket.",
    who: "executor, formulário de premiação",
  },
  {
    kind: "quote",
    quote: "O que não lucrei em 1 ano e meio, fiz em 34 dias.",
    who: "Resposta no formulário de premiação",
    source: "form",
  },
  {
    kind: "quote",
    quote: "Essa mentoria foi a melhor compra que fiz em décadas.",
    who: "executor, grupo do Workshop, junho de 2026",
    source: "group",
  },
  {
    kind: "form",
    result: "R$ 12.370 de lucro em 27 dias",
    context: "Produto 100% white, executora que entrou no fim de 2025.",
    quote: "Antes sempre fiquei no negativo ou no zero a zero.",
    who: "executora, formulário de premiação",
  },
  {
    kind: "quote",
    quote: "Sou casado, tenho filho, e foi um desafio chegar até aqui.",
    who: "executor, formulário de premiação",
    source: "form",
  },
];

export const offerQuotes = {
  top: {
    quote: "O Heitor responde no privado, analisa suas concepções. Ninguém no mercado faz isso pelo preço da mentoria.",
    who: "executor, grupo do Workshop",
  },
  henrique: {
    quote: "Sendo um passo que eu posso suportar, que foi você que me ensinou isso, eu largo a minha barbearia tranquilo.",
    who: "Henrique, Podcast Executor, episódio 1",
  },
};

export const method = [
  {
    n: "01",
    title: "Achar a ideia",
    text: "Você aprende a garimpar o que as pessoas já estão comprando, pra entender por que compram. Isso se chama mineração. Não é pra copiar: é pra entender.",
    tag: "Mineração",
  },
  {
    n: "02",
    title: "Criar a sua versão",
    text: "Você troca uma ou duas peças da ideia (pra quem é, o formato, o jeito de resolver) e chega numa direção que tem demanda e ninguém vende. Isso é a modelagem 90/10. Evangelhos virou Salmos. Salmos virou Salmos com música.",
    tag: "Modelagem 90/10",
  },
  {
    n: "03",
    title: "Montar a oferta melhor que as outras",
    text: "Dez pontos de comparação com o que já existe, pra sua oferta ser única. Depois, um semáforo: verde você roda a oferta, amarelo ajusta, vermelho descarta. Você só põe dinheiro na oferta que passou em todos os pontos.",
    tag: "Vantagem",
  },
  {
    n: "04",
    title: "Produto, página e anúncio",
    text: "O produto é simples (coisa pronta, ou algo complexo que você deixou simples). A página vem de um modelo meu. O anúncio mostra o produto em vez de prometer. Tudo com passo a passo.",
    tag: "Montagem",
  },
  {
    n: "05",
    title: "Testar com pouco, escalar com critérios",
    text: "Teste com pouco dinheiro, rode os anúncios por alguns dias, e uma regra clara pra decidir se: mantém, ajusta ou aumenta o investimento. Lucro é o critério principal. Depois, a segunda oferta, a terceira... Eu não dependo de uma única oferta. Você também não.",
    tag: "Tráfego",
  },
] as const;

export const mentorStats = [
  {
    value: 531020,
    prefix: "R$ ",
    after: "faturados com um único ebook",
    note: "R$ 171.782 de lucro depois do anúncio.",
  },
  {
    value: 108300,
    prefix: "R$ ",
    after: "de lucro em abril de 2026",
    note: "12 de 16 ofertas lucrativas, rodando ao mesmo tempo.",
  },
  {
    value: 161739,
    prefix: "R$ ",
    after: "faturados em 8 dias",
    note: "40 ideias novas subidas em uma semana, cerca de R$ 47 mil de lucro.",
  },
];

export const mentorTimeline = [
  { when: "16 anos", what: "Carteira assinada" },
  { when: "Antes do digital", what: "Comércio de etiquetas e agência de milhas" },
  { when: "2022", what: "Do dropshipping pro produto digital" },
  { when: "Ago 2025", what: "Resolveu aparecer" },
  { when: "Out 2025", what: "Abriu a mentoria O PROCESSO" },
  { when: "Hoje", what: "+800 executores dentro" },
];

export const audience = [
  {
    title: "Nunca vendeu nada na internet",
    text: "Melhor. Você não tem vício pra desaprender. A mentoria começa pelo Comece aqui e segue na ordem: primeiro a ideia, depois o produto, depois o anúncio.",
    icon: "start",
  },
  {
    title: "Está inconformado com o CLT",
    text: "Rotina engessada, salário que mal cobre as contas. Eu trabalhei de carteira assinada desde os 16 anos. Sei o que é olhar pro mês e ver que a conta não fecha.",
    icon: "badge",
  },
  {
    title: "Quer mais tempo com a família",
    text: "Uma operação enxuta, com várias ofertas simples rodando, é o que me dá presença em casa. Não é automático. É método, e método se repete.",
    icon: "home",
  },
  {
    title: "Não quer aparecer nem virar influenciador",
    text: "O produto não precisa do seu rosto nem do seu nome. Precisa de uma boa ideia e de um anúncio que mostre o produto.",
    icon: "eye",
  },
  {
    title: "Já tentou e não conseguiu",
    text: "Comprou curso, copiou produto, gastou com anúncio e não voltou nada. Faltou a peça que vem antes de tudo: a ideia certa, e alguém olhando a sua.",
    icon: "retry",
  },
  {
    title: "Valoriza acompanhamento de verdade",
    text: "O mentor junto, analisando, respondendo, mostrando o que faz. Sem esconder jogo. Você vai ter acesso ao ouro do low ticket, eu não vou esconder nada.",
    icon: "people",
  },
] as const;

export const modules = [
  "Comece aqui",
  "Informações iniciais",
  "Mandamentos",
  "Concepção de oferta",
  "Criação de oferta",
  "Páginas de vendas 1",
  "Páginas de vendas 2",
  "Entregável",
  "Criativo",
  "Tráfego",
  "Parte avançada",
];

export const plates = [
  { name: "Gold", amount: 100_000, label: "R$ 100 mil", metal: "gold", src: "/placas/gold.webp" },
  { name: "Diamond", amount: 250_000, label: "R$ 250 mil", metal: "diamond", src: "/placas/diamond.webp" },
  { name: "Black", amount: 500_000, label: "R$ 500 mil", metal: "black", src: "/placas/black.webp" },
  { name: "Ruby", amount: 1_000_000, label: "R$ 1 milhão", metal: "ruby", src: "/placas/ruby.webp" },
] as const;

export const offerIncludes = [
  { title: "Acesso vitalício", text: "à metodologia gravada, com todas as atualizações" },
  { title: "2 calls ao vivo por semana", text: "comigo olhando a sua ideia, página e anúncio" },
  { title: "Chat do HUB de segunda a sexta", text: "respondido por mim" },
  { title: "Frameworks, modelos de página, agentes de IA, planilhas", text: "e o construtor de página do HUB" },
  { title: "Comunidade dos executores", text: "e placas por marco de faturamento" },
];

export const fit = {
  yes: [
    "Você quer construir renda com produtos digitais simples, sem aparecer e sem ser especialista.",
    "Você está começando do zero e quer fazer certo da primeira vez.",
    "Você já tentou copiar produto e perdeu dinheiro.",
    "Você quer alguém olhando a SUA ideia antes de você gastar.",
  ],
  no: [
    {
      t: "Você quer dinheiro fácil ou promessa de valor por dia.",
      d: "Eu prometo metodologia e acompanhamento. Resultado é consequência de execução.",
    },
    {
      t: "Você quer copiar a oferta de alguém e rodar amanhã.",
      d: "Aqui eu não te ensino a clonar nada.",
    },
    {
      t: "Você quer truque de copy.",
      d: "Gatilho você deixa pra arma de fogo. Aqui se usa clareza.",
    },
    {
      t: "Você não vai executar.",
      d: "Sem execução, não tem processo.",
    },
  ],
};

export const faq = [
  {
    q: "Nunca vendi nada na internet. Serve pra mim?",
    a: "Serve. A mentoria começa do Comece aqui e segue na ordem certa: ideia, produto, página, anúncio. E você não está sozinho: duas calls por semana e o chat do HUB pra cada dúvida que travar. Independente se você é iniciante ou mais avançado, a mentoria O PROCESSO é pra você.",
  },
  {
    q: "Preciso aparecer em vídeo ou ter seguidores?",
    a: "Não. O que se vende em low ticket é solução, não autoridade. O produto não leva o seu rosto, e o anúncio mostra o produto em vez de prometer. Você precisa de uma boa ideia, não de audiência.",
  },
  {
    q: "Não sou especialista em nada. Vendo o quê?",
    a: "A metodologia é feita justamente pra quem não é especialista. Você aprende a achar o que as pessoas já querem comprar e a criar a sua versão disso, melhor que as outras. Produto sem expert. O meu ebook dos Salmos não precisava que eu fosse teólogo.",
  },
  {
    q: "Quanto eu preciso ter pra começar?",
    a: "A mentoria e uma verba de teste pra anúncio. Não existe número mágico: depende da oferta, e definir isso é uma das primeiras coisas que a gente faz junto na call. O que eu te garanto é que você não gasta antes de a ideia passar no semáforo.",
  },
  {
    q: "Em quanto tempo eu tenho um anúncio rodando?",
    a: "Quem começa do zero costuma chegar ao primeiro teste entre 7 e 12 dias: cinco de estratégia (achar a ideia, criar a sua versão, montar a oferta, passar no semáforo) e o resto montando produto, página e anúncio. Isso é tempo até o teste. Resultado depende da sua execução.",
  },
  {
    q: "Não tenho tempo. Trabalho o dia todo.",
    a: "O acesso é vitalício e as calls ficam gravadas. Você não está comprando um prazo, está comprando o caminho. Mas uma coisa eu te digo: você nunca vai estar no momento certo. Executa assim mesmo.",
  },
  {
    q: "Tenho medo de ser mais do mesmo.",
    a: "Justo. Então me responde: o que você viu por aí tinha alguém olhando a sua ideia antes de você gastar, ou era só aula gravada? É isso que as duas calls por semana e o chat do HUB fazem. E se em 7 dias você achar que é mais do mesmo, a garantia existe pra isso.",
  },
  {
    q: "O Heitor responde mesmo ou é equipe?",
    a: "Respondo. Duas vezes por semana ao vivo olhando ideia, página e anúncio, e no chat do HUB de segunda a sexta. Dúvida de acesso e material tem uma pessoa do time no WhatsApp. Análise da sua operação é comigo.",
  },
  {
    q: "Onde ficam as aulas e como eu começo?",
    a: "Você recebe o acesso da área de membros por e-mail na hora, o convite dos frameworks e o link do chat do HUB. Começa pelo módulo Comece aqui, que explica como a mentoria funciona, o suporte e as premiações. A primeira call ao vivo é na segunda, às 19h.",
  },
  {
    q: "Como funciona a garantia e o pagamento?",
    a: "7 dias de garantia. Pix à vista ou em até 12x no cartão. É um pagamento único com acesso vitalício, não é assinatura.",
  },
  {
    q: "É golpe?",
    a: "Eu desconfiaria também. Por isso cada número desta página está num vídeo público do meu canal, com a tela aberta, e a garantia existe. Não tô te prometendo dinheiro fácil. Tô te mostrando a realidade de uma operação.",
  },
];
