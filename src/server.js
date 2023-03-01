
// Dados
const proffys = [
  {
    name: "Erlan Marinho",
    avatar: "https://avatars.githubusercontent.com/u/56049062?v=4",
    whatsapp: 99985075753,
    bio: `Entusiasta das melhores tecnologias de química avançada.<b></b>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já pessaram por uma das minhas explosões.`,
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220]
  },

  {
    name: "Sharlene Marinho",
    avatar: "https://avatars.githubusercontent.com/u/56049062?v=4",
    whatsapp: 99985075753,
    bio: `Entusiasta das melhores tecnologias de química avançada.<b></b>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já pessaram por uma das minhas explosões.`,
    subject: "Biologia",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
  },

  {
    name: "Dean Lucas",
    avatar: "https://avatars.githubusercontent.com/u/56049062?v=4",
    whatsapp: 99985075753,
    bio: `Entusiasta das melhores tecnologias de química avançada.<b></b>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já pessaram por uma das minhas explosões.`,
    subject: "Matematica",
    cost: "20",
    weekday: [1],
    time_from: [720],
    time_to: [1220]
  }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
  
]

const weekdays = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
 
]

// Funcionalidades
function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query
  
  const isEmpty = Object.keys(data).length > 0
  if (isEmpty) {
    //adicionar dados a lista de proffys
    proffys.push(data)

    return res.redirect("/study")

  }
  

  return res.render("give-classes.html", { subjects, weekdays })
}


// Servidor
const express = require('express')
const server = express()

// Configuração nunjucks (template engine )
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

//inicio e configuração do servidor
server
  .use(express.static("public"))

  // Rotas
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)

  .listen(5550)