# Ensino 10

Novo site da Ensino 10, que substitui o WordPress em https://ensino10.com.br/. Segue a estrutura do site atual (fotos, textura aquarelada com ondas no hero, anéis, cantoneiras nos títulos, cards com padrão geométrico) com as cores do espaço físico da escola: azul-marinho #3E4A9E, laranja #F39A1D e branco. Entre as seções, um separador de blocos coloridos como a faixa e o balcão da escola, nas cores de apoio (amarelo, azul-claro, vermelho, verde e roxo), usadas só nele. É HTML, CSS e JavaScript simples, sem build e sem dependências.

## Ver a página

Nesta pasta:

```sh
python3 -m http.server 8000
```

Acesse http://localhost:8000.

## Mudanças desta versão (para o GitHub)

Novos:

```text
colegios.jpg
colegios-celular.jpg
textura-laranja.jpg
```

Alterados:

```text
README.md
index.html
style.css
script.js
textura-hero.jpg
textura-creme.jpg
fotos/apoio-escolar.jpg
fotos/como-funciona.jpg
```

Apagados (tirar também do repositório):

```text
textura-amarela.jpg
fotos/depo-claudia.jpg
fotos/depo-isinha.jpg
fotos/depo-tessia.jpg
fotos/depo-viviane.jpg
```

Na pasta, `git add -A` pega os três grupos de uma vez, inclusive os apagados.

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
textura-laranja.jpg
padrao.png
colegios.jpg
colegios-celular.jpg
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
```

O `canonical`, as tags `og:` e os dados estruturados apontam para `https://ensino10.com.br/`. O `og:image` usa `https://ensino10.com.br/og-ensino10.png` (logo sobre fundo branco, 1200 × 630), então o site precisa ser publicado na raiz do domínio.

## Formulário de aula experimental

Todos os botões de WhatsApp levam a `https://wa.me/5511976004439`. O formulário monta uma mensagem com responsável, série, matérias, onde prefere a aula, dia, período e WhatsApp, e abre o WhatsApp para o responsável revisar e enviar. A página não envia nada sozinha e não guarda dados. O dia mínimo é calculado no fuso de São Paulo, e datas passadas são recusadas. Os campos são obrigatórios, assim como pelo menos uma matéria. O ano do rodapé também vem do JavaScript.

## Origem do conteúdo

- Textos: reescritos a partir dos fatos do site atual (serviços, Método PEP, aula experimental gratuita, unidades). Depoimentos: os trechos indicados no briefing, sem alteração. E-mail de currículos: jcensino10@gmail.com, do site atual.
- Curso de Inglês em pequenas turmas: sem idade, horário, duração ou preço. Fica num destaque largo com a etiqueta "Novidade". O site atual não tem foto dele, então o card usa um bloco laranja com o padrão geométrico e "Hello!". Basta trocar por uma foto da turma quando houver.
- Seja nosso professor licenciado: os quatro caminhos e o convite para conversar, sem valores, porcentagens, prazos, região ou condição de franquia. O botão abre o WhatsApp com "Olá! Tenho interesse em ser professor licenciado da Ensino 10.", e o e-mail de currículos fica abaixo.
- Colégios atendidos: os 10 logos da imagem do site antigo (`Design-sem-nome.png`), recortados e remontados em 5 colunas (`colegios.jpg`) e, no celular, em 2 colunas (`colegios-celular.jpg`), para continuarem legíveis.
- Depoimentos: nomes e textos sem mudança; no lugar das fotos, a inicial do nome num círculo laranja.
- Logo: o SVG vetorizado enviado pelo cliente. `logo-ensino10-branco.svg` é o mesmo desenho com "Ensino" em branco, para o topo e o rodapé, que têm fundo escuro.
- Fotos, texturas de fundo, padrão geométrico dos cards e ícones das matérias: baixados do site atual. A foto do Apoio Escolar foi trocada por outra do site antigo (menino na sala de aula), sem texto em inglês. As composições seguem o original: no hero, a foto do menino com a máscara de pincel e o recorte dele por cima; em "Como funciona", a professora sobre o quadro, agora em laranja. As texturas já levam a camada de cor: azul-marinho no hero (o texto branco fica com contraste de 5,3:1), creme e laranja-claro nas seções. O menino e a professora têm versão AVIF (leve) e PNG para navegadores antigos.
- Fonte Lexend: arquivo local, licença SIL OFL em `lexend-OFL.txt`.

## Fora desta versão

- Google Tag Manager, até a confirmação do cliente.
- Seções "Nosso Blog" e Libras (inclusive o vídeo).
- Mapas incorporados: cada unidade tem um botão "Ver no mapa", que abre o Google Maps. Assim a página fica mais leve.

## Separador de blocos

O desenho é montado pelo `script.js` em SVG, sem imagem: uma linha de base cheia e pilhas de alturas diferentes, sempre iguais a cada carga. No celular ele é mais baixo (64 px contra 96 px) e mostra menos blocos. Os blocos caem e se encaixam quando o separador aparece na tela; com `prefers-reduced-motion` eles já aparecem parados.

## Verificações feitas

Chrome em 320, 390 e 1440 px: sem rolagem horizontal, fonte local carregada, alvos de toque com pelo menos 44 px, nenhum link para `#`, nenhuma imagem quebrada e nenhum erro no console. Animação do separador conferida com e sem `prefers-reduced-motion`. Os quatro depoimentos foram comparados com a versão anterior e estão iguais. Formulário testado com campo vazio, sem matéria marcada, data passada e preenchimento completo. A abertura do WhatsApp foi interceptada no teste. Num 4G simulado (150 ms de latência, 1,6 Mbit/s, CPU 4× mais lenta), a primeira pintura saiu em 0,9 s e a carga completa em 2,2 s, com 402 KB transferidos. As fotos e os ícones mais abaixo não entram nessa conta, porque carregam depois. Medição local, não da hospedagem final.
