# Ensino 10

Novo site da Ensino 10, que substitui o WordPress em https://ensino10.com.br/. É um espelho do site atual: as mesmas fotos, a textura aquarelada com ondas no hero, a faixa azul-marinho, as faixas inclinadas creme e amarela, os anéis amarelos, as cantoneiras nos títulos e os cards coral, turquesa e mostarda com padrão geométrico. Mudou o que foi pedido: textos reescritos (menos os depoimentos), formulário de aula experimental, Curso de Inglês nos serviços, "Seja um professor" em destaque com fundo âmbar e sem Libras. É HTML, CSS e JavaScript simples, sem build e sem dependências.

## Ver a página

Nesta pasta:

```sh
python3 -m http.server 8000
```

Acesse http://localhost:8000.

## Arquivos para o repositório

Os ícones das matérias ficam em `icones/` e as fotos em `fotos/`. O resto fica na raiz.

```text
README.md
index.html
style.css
script.js
lexend-latin.woff2
lexend-OFL.txt
logo-ensino10.svg
logo-ensino10-branco.svg
og-ensino10.png
icone.png
textura-hero.jpg
textura-creme.jpg
textura-amarela.jpg
padrao.png
icones/matematica.png
icones/portugues.png
icones/redacao.png
icones/quimica.png
icones/fisica.png
icones/biologia.png
icones/ciencias.png
icones/historia.png
icones/geografia.png
fotos/hero-aluno.avif
fotos/hero-aluno.png
fotos/professora.avif
fotos/professora.png
fotos/como-funciona.jpg
fotos/apoio-escolar.jpg
fotos/aula-particular.jpg
fotos/alfabetizacao.jpg
fotos/preparatorio.jpg
fotos/academia-online.jpg
fotos/conexao-60.jpg
fotos/depo-claudia.jpg
fotos/depo-viviane.jpg
fotos/depo-isinha.jpg
fotos/depo-tessia.jpg
```

O `canonical`, as tags `og:` e os dados estruturados apontam para `https://ensino10.com.br/`. O `og:image` usa `https://ensino10.com.br/og-ensino10.png` (logo sobre fundo branco, 1200 × 630), então o site precisa ser publicado na raiz do domínio.

## Formulário de aula experimental

Todos os botões de WhatsApp levam a `https://wa.me/5511976004439`. O formulário monta uma mensagem com responsável, série, matérias, onde prefere a aula, dia, período e WhatsApp, e abre o WhatsApp para o responsável revisar e enviar. A página não envia nada sozinha e não guarda dados. O dia mínimo é calculado no fuso de São Paulo, e datas passadas são recusadas. Os campos são obrigatórios, assim como pelo menos uma matéria. O ano do rodapé também vem do JavaScript.

## Origem do conteúdo

- Textos: reescritos a partir dos fatos do site atual (serviços, Método PEP, aula experimental gratuita, unidades). Depoimentos: os trechos indicados no briefing, sem alteração. E-mail de currículos: jcensino10@gmail.com, do site atual.
- Curso de Inglês em pequenas turmas: sem idade, horário, duração ou preço. O site atual não tem foto dele, então o card usa um bloco coral com o padrão geométrico e "Hello!". Basta trocar por uma foto da turma quando houver.
- Logo: o SVG vetorizado enviado pelo cliente. `logo-ensino10-branco.svg` é o mesmo desenho com "Ensino" em branco, para o topo e o rodapé, que têm fundo escuro.
- Fotos, texturas de fundo, padrão geométrico dos cards e ícones das matérias: baixados do site atual. As composições seguem o original: no hero, a foto do menino com a máscara de pincel e o recorte dele por cima; em "Como funciona", a professora sobre o quadro em amarelo. As texturas já levam a camada de cor que o site aplica por cima delas. O menino e a professora têm versão AVIF (leve) e PNG para navegadores antigos.
- Fonte Lexend: arquivo local, licença SIL OFL em `lexend-OFL.txt`.

## Fora desta versão

- Google Tag Manager, até a confirmação do cliente.
- Seções "Colégios Atendidos", "Nosso Blog" e Libras (inclusive o vídeo).
- Mapas incorporados: cada unidade tem um botão "Ver no mapa", que abre o Google Maps. Assim a página fica mais leve.

## Verificações feitas

Chrome em 320, 390 e 1440 px: sem rolagem horizontal, fonte local carregada, alvos de toque com pelo menos 44 px, nenhum link para `#`, nenhuma imagem quebrada e nenhum erro no console. Formulário testado com campo vazio, sem matéria marcada, data passada e preenchimento completo. A abertura do WhatsApp foi interceptada no teste. Num 4G simulado (150 ms de latência, 1,6 Mbit/s, CPU 4× mais lenta), a primeira pintura saiu em 0,8 s e a carga completa em 2,3 s, com 422 KB transferidos. As fotos e os ícones mais abaixo não entram nessa conta, porque carregam depois. Medição local, não da hospedagem final.
