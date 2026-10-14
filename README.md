# DM Harmonize

Site institucional da Clínica Estética DM Harmonize, em Barueri. A interface usa React, TypeScript, Vite, CSS e GSAP para a abertura animada.

## Executar localmente

Requer Node.js 22.13 ou superior.

```bash
npm ci
npm run dev
```

Abra o endereço local exibido pelo Vite. Para gerar a versão estática de produção:

```bash
npm run build
```

Os arquivos gerados ficam em `dist/`.

## Conteúdo e manutenção

- `app/page.tsx`: seções e interações da página.
- `app/globals.css`: estilos e layout responsivo.
- `components/ui/motion-intro.tsx` e `.css`: abertura da marca ligada à rolagem.
- `lib/clinic.ts`: telefone, WhatsApp, endereço, Instagram, avaliações e textos dos tratamentos.
- `public/images/`: fotografias usadas no site.

Os links de agendamento abrem o WhatsApp com uma mensagem inicial. A página de resultados está preparada para receber fotografias reais e autorizadas; a galeria permanece vazia até que esse material seja adicionado em `lib/clinic.ts`.

Não inclua credenciais no código. Arquivos `.env*`, chaves e dados de execução local são ignorados pelo Git.
