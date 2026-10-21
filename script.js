'use strict';

const WHATSAPP = 'https://wa.me/5511976004439';
const hoje = () => new Date().toLocaleDateString('sv-SE', {timeZone: 'America/Sao_Paulo'});

document.querySelector('[data-ano]').textContent = hoje().slice(0, 4);

const form = document.querySelector('#form-aula');
const campos = [...form.querySelectorAll('[data-label]')];
const dia = form.elements.dia;
const atualizarMinimo = () => { dia.min = hoje(); };

// Fieldset junta as opções marcadas; os outros campos usam o próprio valor.
const valor = campo => campo.tagName === 'FIELDSET'
  ? [...campo.querySelectorAll('input:checked')].map(opcao => opcao.value).join(', ')
  : campo.value.trim();

function erro(campo) {
  const texto = valor(campo);
  if (!texto) return campo.tagName === 'FIELDSET' ? 'Escolha uma opção.' : 'Preencha este campo.';
  if (campo.type === 'tel' && !/^\(?[1-9]\d\)?[\s.-]?9?\d{4}[\s.-]?\d{4}$/.test(texto)) return 'Informe um número válido com DDD.';
  if (campo.type === 'date' && texto < hoje()) return 'Escolha hoje ou uma data futura.';
  return '';
}

const validar = campo => (campo.tagName === 'FIELDSET' ? campo.querySelector('input') : campo).setCustomValidity(erro(campo));

atualizarMinimo();
window.addEventListener('pageshow', atualizarMinimo);
campos.forEach(campo => ['input', 'change'].forEach(evento => campo.addEventListener(evento, () => validar(campo))));

form.addEventListener('submit', evento => {
  evento.preventDefault();
  atualizarMinimo();
  campos.forEach(validar);
  if (!form.reportValidity()) return;
  const linhas = campos.map(campo => `${campo.dataset.label}: ${campo.type === 'date' ? valor(campo).split('-').reverse().join('/') : valor(campo)}`);
  const url = `${WHATSAPP}?text=${encodeURIComponent(['Olá! Gostaria de agendar uma aula experimental gratuita.', '', ...linhas].join('\n'))}`;
  const status = document.querySelector('#form-status');
  status.querySelector('a').href = url;
  status.hidden = false;
  window.open(url, '_blank', 'noopener');
});

// Separadores Tetris: linha de base cheia e pilhas de alturas diferentes, sempre iguais a cada carga (sem Math.random).
const CORES = ['#F9F00C', '#2BB8E3', '#E94A44', '#00A862', '#7A42A0'];
document.querySelectorAll('.tetris').forEach((separador, n) => {
  let semente = n * 7919 + 1;
  const sorteio = () => (semente = (semente * 9301 + 49297) % 233280) / 233280;
  let blocos = '';
  for (let coluna = 0; coluna < 80; coluna++) {
    const altura = 1 + (sorteio() < 0.55 ? 0 : Math.ceil(sorteio() * 3));
    for (let nivel = 0; nivel < altura; nivel++) {
      blocos += `<rect x="${coluna * 24}" y="${72 - nivel * 24}" width="24" height="24" fill="${CORES[Math.floor(sorteio() * CORES.length)]}" style="--i:${coluna % 16 + nivel}"/>`;
    }
  }
  separador.innerHTML = `<svg viewBox="0 0 1920 96" preserveAspectRatio="xMidYMax slice">${blocos}</svg>`;
});

// Os blocos caem quando o separador aparece, só se a pessoa não pediu menos movimento.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observador = new IntersectionObserver(entradas => entradas.forEach(entrada => {
    if (!entrada.isIntersecting) return;
    entrada.target.classList.add('visivel');
    observador.unobserve(entrada.target);
  }), {threshold: 0.5});
  document.querySelectorAll('.tetris').forEach(separador => {
    separador.classList.add('anima');
    observador.observe(separador);
  });
}
