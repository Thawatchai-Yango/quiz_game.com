const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORES = 5
const hh =highScores
finalScore.innerText = mostRecentScore
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()
    const score = {
        score: mostRecentScore,
        name: username.value
    }
    highScores.push(score)
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    highScores.splice(5)
    if(localStorage.getItem('highScores') == null ){
        localStorage.setItem('highScores', JSON.stringify(highScores))
    }else{
        for(var i =0; i< hh.length;i++){
        for(var j =0; j< highScores.length;j++){
            if(hh[i].name == highScores[j].name && hh[i].score == highScores[j].score){
            }else{
                localStorage.setItem('highScores', JSON.stringify(highScores))
            }
        }
    }
    }
    window.location.assign('highscores.html')
}