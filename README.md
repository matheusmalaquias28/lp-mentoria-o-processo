# Mentoria O PROCESSO · Landing page

Next.js 16 (App Router, página estática) + Tailwind v4 + GSAP (ScrollTrigger, SplitText) + Lenis. Fontes Manrope e JetBrains Mono via `next/font`.

```bash
npm install
npm run dev
```

## Variáveis de ambiente (Vercel)

| Variável | Uso |
| --- | --- |
| `NEXT_PUBLIC_CHECKOUT_URL` | Link do checkout de todos os CTAs. Sem ela, os CTAs rolam até a oferta. |
| `NEXT_PUBLIC_WORKSHOP_CHECKOUT_URL` | Link "Entrar com o abatimento" (quem fez o Workshop). |
| `NEXT_PUBLIC_SITE_URL` | URL pública, usada nas imagens de compartilhamento (OG). |

Os CTAs repassam os parâmetros da URL (UTMs, `fbclid` etc.) para o checkout.

## Onde trocar conteúdo

Tudo fica em `src/content.ts`:

- **Fotos**: `photos.*`. Coloque o arquivo em `public/images/` e troque `src: null` por `"/images/arquivo.jpg"`. Enquanto `src` for `null`, aparece um placeholder com a pauta da foto.
- **Vídeos**: `featuredStory.video` (podcast do Henrique) e `videoTestimonials` (fileira de depoimentos). `src` aceita link do YouTube, Vimeo, embed (Panda etc.) ou `.mp4`; `poster` é a capa; `preview` é um `.mp4` curto e mudo que toca no hover.
- **Textos**: copy, FAQ, módulos, placas, números e depoimentos em texto.

## Animações

- Entrada do hero em CSS puro (não espera o JavaScript, não atrasa o LCP).
- Revelações por atributo (`data-reveal`, `data-split`, `data-count`, `data-parallax`, `data-strike`, `data-progress`) em `src/components/motion/Motion.tsx`.
- Trilha de faturamento (seção fixa com scroll horizontal) em `src/components/sections/Trail.tsx`.
- Com "reduzir movimento" ativo no sistema, nada fica escondido e a trilha vira rolagem horizontal comum.
"# lp-mentoria-o-processo" 
