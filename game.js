const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'มนุษย์อาศัยอยู่ที่ส่วนใด ?',
        choice1: 'ข้างในของโลก   ',
        choice2: 'บนพื้นผิวโลก',
        choice3: 'ไม่ได้อยู่ที่โลก',
        choice4: 'ได้ทั้งหมด',
        answer: 2,
    },
    {
        question: '"โลกมีรูปร่างอย่างไร ?"',
        choice1: 'เกือบจะกลม',
        choice2: 'เกือบจะแบน',
        choice3: 'หัวใจ',
        choice4: 'แล้วแต่จะเปลี่ยน',
        answer: 1,
    },
    {
        question: 'พฤติกรรมใดที่ส่งผลดีต่อร่างกายมนุษย์ ?',
        choice1: 'ดื่มนมวันละ 50 ลิตร',
        choice2: 'ดื่มน้ำวันละ 8 แก้ว',
        choice3: 'ดื่มกาแฟวันละ 2 แก้ว',
        choice4: 'ดูทีวีอย่างน้อยวันละ 6 ชั่วโมง',
        answer: 2,
    },
    {
        question: 'อวัยวะส่วนใดที่ใช้ในการรับรสอาหาร ?',
        choice1: 'ปาก',
        choice2: 'จมูก',
        choice3: 'ฟัน',
        choice4: 'ไม่มีข้อถูก',
        answer: 4,
    },
    {
        question: 'จุดที่สารเปลี่ยนสถานะจากของเหลวเป็นของแข็งเรียกว่าจุดอะไร ?',
        choice1: 'จุดหลอมเหลว',
        choice2: 'จุดแข็งตัว',
        choice3: 'จุดเยือกแข็ง',
        choice4: 'จุดเกาะตัวของสาร',
        answer: 2,
    },
    {
        question: '"ข้อใดเป็นการผุพังทางเคมีของหิน ?"',
        choice1: 'หินแตกหักจากแรงดันของรากต้นไม้',
        choice2: 'น้ำตามรอยแยกของหินเกิดการแข็งตัว',
        choice3: 'การละลายของหินปูนโดยน้ำฝน',
        choice4: 'กระแสน้ำพัดพาหินไปจนแตกหัก',
        answer: 3,
    },
    {
        question: 'ข้อใดต่อไปนี้ ไม่ใช่ปัจจัย ที่ทำให้เกิดฤดูกาลต่างๆ ขึ้นบนโลก ?',
        choice1: 'แกนโลกเอียง 23.5 องศา',
        choice2: 'โลกโคจรรอบดวงอาทิตย์',
        choice3: 'ดวงจันทร์โคจรรอบโลก',
        choice4: 'โลกหมุนรอบตัวเอง',
        answer: 3,
    },
    {
        question: 'ข้อใด ไม่ใช่ ปัจจัยในการเกิดหินงอกหินย้อยในธรรมชาติ ?',
        choice1: 'ความชื้น',
        choice2: 'ชนิดของหิน',
        choice3: 'ความเป็นกรดของน้ำ',
        choice4: 'ความกดดันของอากาศ',
        answer: 4,
    },
    {
        question: 'ข้อใดต่อไปนี้จัดเป็นทรัพยากรหมุนเวียน ?',
        choice1: 'น้ำ',
        choice2: 'ป่าไม้',
        choice3: 'ดิน',
        choice4: 'แร่',
        answer: 1,
    },
    {
        question: '"กีฬากอล์ฟมีกี่หลุม ?"',
        choice1: '16',
        choice2: '17',
        choice3: '18',
        choice4: '19',
        answer: 3,
    },
    {
        question: 'ปลาตัวใดอยู่ในทะเลแต่วางไข่ในน้ำจืด ?',
        choice1: 'ปลาแซลมอน',
        choice2: 'ปลาฉลาม',
        choice3: 'ปลากระพง',
        choice4: 'ปลาหมึก',
        answer: 1,
    },
    {
        question: 'ทะเลแห่งใดในโลก เค็มน้อยที่สุด ?',
        choice1: 'ทะเลแคริบเบียน',
        choice2: 'ทะเลเดทซี',
        choice3: 'ทะเลจีนใต้',
        choice4: 'ทะเลบอลติก',
        answer: 4,
    },
    {
        question: 'ภูเขาไฟใดต่อไปนี้ ที่ยังประทุอยุ่ ?',
        choice1: 'ภูเขาไฟฟูจิ',
        choice2: 'เกาะอิซาเบลา',
        choice3: 'ภูเขาพนมรุ้ง',
        choice4: 'ภูเขาไฟโบรโม่',
        answer: 2,
    },
    {
        question: 'กิ้งก่าตัวใดใหญ่ที่สุดในโลก ?',
        choice1: 'มังกรโคโมโด',
        choice2: 'กิ้งก่ามังกร',
        choice3: 'กิ้งก่าคาเมเลี่ยน',
        choice4: 'อีกัวน่าเขียว',
        answer: 1,
    },
    {
        question: 'เต่าสายพันธ์ุใดใหญ่ที่สุดในโลก ?',
        choice1: 'เต่ากาลาปาโกส',
        choice2: 'เต่ามะเฟือง',
        choice3: 'เต่าอัลดาบรา',
        choice4: 'เต่าหัวค้อน',
        answer: 1,
    },
    {
        question: 'สัตว์เลี้ยงลูกด้วยน้ำนมที่อยู่ในน้ำ คือข้อใด ?',
        choice1: 'ปลาหมึก',
        choice2: 'ปลาโลมา',
        choice3: 'ปลากระเบน',
        choice4: 'ปลาไหล',
        answer: 2,
    },
    {
        question: 'เครื่องบินบินอยู่ในชั้นบรรยากาศใด ?',
        choice1: 'ไอโอโนสเฟียร์',
        choice2: 'โทรโพสเฟียร์',
        choice3: 'โทรโพสเฟียร์',
        choice4: 'สตราโทสเฟียร',
        answer: 4,
    },
    {
        question: 'ไทแรนโนซอรัส เกิดในยุคไหน ?',
        choice1: 'ยุคไตรแอสสิก',
        choice2: 'ยุคจูราสสิก',
        choice3: 'ยุคครีเตเซียส',
        choice4: 'ยุคไทรแอสสิก',
        answer: 3,
    },
    {
        question: 'จักรวรรดิ ใดในโลกมีพื้นที่ใหญ่ที่สุด(นับทั้งหมด) ?',
        choice1: 'จักรวรรดิ มองโกล',
        choice2: 'จักรวรรดิ เปอเซีย',
        choice3: 'จักรวรรดิ  อังกฤษ',
        choice4: 'จักรวรรดิ  ออตโตมัน',
        answer: 3,
    },
    {
        question: 'สัญญาลักษณ์ลิเวอร์พลูคือสัตว์ชนิดใด ?',
        choice1: 'นก',
        choice2: 'เป็ด',
        choice3: 'ห่าน',
        choice4: 'ไก่',
        answer: 1,
    },
    {
        question: 'เรือ the black pearl มีชื่อเดิมว่าอะไร ?',
        choice1: 'Flying Dutchman',
        choice2: 'Wicked Wench',
        choice3: 'Queen Anne\'s Revenge',
        choice4: 'Silent Mary',
        answer: 2,
    }
    
]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS-1) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()