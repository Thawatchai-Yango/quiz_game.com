const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []
const clear = document.querySelector('#clear-btn')

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")

clearScore = e => {
    e.preventDefault()
    localStorage.clear()
    location.reload();
}
