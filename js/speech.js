const textarea = document.querySelector("#textarea")
const btnGravar = document.querySelector("#btnGravar")
const btnParar = document.querySelector("#btnParar")
const btnBaixar = document.querySelector("#btnBaixar")
const btnLimpar = document.querySelector("#btnLimpar")

class speechApi {
  constructor() {
    const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition

    this.speechApi = new SpeechToText()
    this.output = textarea.output
    this.speechApi.continuous = true
    this.speechApi.lang = 'pt-BR'

    this.speechApi.onresult = e => {
      var resultIndex = e.resultIndex
      var transcript = e.results[resultIndex][0].transcript
    }
  }
}