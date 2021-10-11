const btn_generate = document.querySelector('input#btn_generate')
const res_area = document.querySelector('div#res-area')

// Facts about Chuck Norris
const curiosidades_chuck_norris = [
  {
    titulo: 'Cuidados com a higiene bucal',
    conteudo: 'Chuck Norris usa arame farpado como fio dental.',
  },
  {
    titulo: 'Fórmula para maratonar séries',
    conteudo:
      'Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos.',
  },
  {
    titulo: 'Suicida que não morre',
    conteudo: 'Chuck Norris foi homem-bomba 34 vezes.',
  },
  {
    titulo: 'Olhos que tudo veem',
    conteudo: 'Chuck Norris já viu o homem invisível.',
  },
  {
    titulo: 'Manipulando o tempo',
    conteudo: 'Chuck Norris não usa relógio. Ele decide que horas são.',
  },
  {
    titulo: 'Praticando esportes radicais',
    conteudo: 'Chuck Norris faz bungee jump sem corda.',
  },
  { titulo: 'Não vale chorar', conteudo: 'Chuck Norris faz cebolas chorarem.' },
  {
    titulo: 'Tempero de fogo',
    conteudo: 'Chuck Norris usa pólvora como tempero.',
  },
  {
    titulo: 'Extinção dos dinossauros',
    conteudo: 'Chuck Norris encarou os dinossauros uma vez, apenas uma.',
  },
  {
    titulo: 'Contando sem parar',
    conteudo: 'Chuck Norris contou até o infinito. Duas vezes.',
  },
]

const generate_fact = () => {
  const total_collection = curiosidades_chuck_norris.length
  const raffled_fact = Math.floor(Math.random() * total_collection)
  const chosen_fact = curiosidades_chuck_norris[raffled_fact]

  const fact_title = chosen_fact.titulo
  const fact_description = chosen_fact.conteudo

  return res_area.innerHTML = `<h1>${fact_title}</h1> <br /> 
  <p>${fact_description}</p>`

}

btn_generate.addEventListener('click', generate_fact)