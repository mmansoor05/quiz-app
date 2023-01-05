const app = Vue.createApp({
    
    data(){
        return {
            isOn: true,
            index: 0,
            selectedAnswer: '',
            correctAnswer:0,
            wrongAnswer: 0,
            count: 9,
            questions: [
                {
                    question: "What is the name of the prep school that Rory attended from season 1 through season 3?",
                    answers: {a: "Franklin", b: "Chilton", c: "Exeter", d:"Choate"},
                    correctAnswer: 'b'
                },

                {
                    question: "Where does Lane often hide clothes, music, and make-up that's forbidden by her mother?",
                    answers: {a: "In the back of her closet", b: "In her locket at Stars Hollow High", c: "At Rory's house", d:"Under her floorboards"},
                    correctAnswer: 'd'
                },

                {
                    question: "What was Lorelai's first job when she arrived at the Independence Inn?",
                    answers: {a: "Cook", b: "Doorman", c: "Maid", d:"Receptionist"},
                    correctAnswer: 'c'
                },

                {
                    question: "Where did Dean and Rory first kiss?",
                    answers: {a: "Doose's Market", b: "Stars Hollow High School", c: "Luke's Diner", d:"Chilton"},
                    correctAnswer: 'a'
                },

                {
                    question: "What movie did Dean and Rory watch on their first date?",
                    answers: {a: "Casablanca", b: "Willy Wonka", c: "Funny Girl", d:"Guys and Dolls"},
                    correctAnswer: 'b'
                },

                {
                    question: "What's the name of Stars Hollow's auto mechanic?",
                    answers: {a: "Babette", b: "Brian", c: "Morey", d:"Gypsy"},
                    correctAnswer: 'd'
                },

                {
                    question: "When Taylor suggests reviving Stars Hollow's original street names, the new Dragonfly Inn address will be:",
                    answers: {a: "Sores and Boils Alley", b: "Manson Street", c: "Cannibal Road", d:"Buckets of Blood Street"},
                    correctAnswer: 'a'
                },

                {
                    question: "What song did Lorelai sing during karaoke night?",
                    answers: {a: "Unchained Melody", b: "The Love I Used To Call Mine", c: "I Will Always Love You", d:"You Are So Beautiful"},
                    correctAnswer: 'c'
                },

                {
                    question: "What does Jess say to Rory when he returns in Season 4?",
                    answers: {a:"You are my heart", b:"I am sorry", c:"I need you", d:"I love you"},
                    correctAnswer:'d'
                }
                
            ]
        }
    },
    
    methods: {
        answered(e) {
            this.selectedAnswer = e.target.value
            console.log(e.target.value)
            if(this.selectedAnswer == this.questions[this.index]['correctAnswer'])
                this.correctAnswer++
            else
                this.wrongAnswer++

        },
        nextQuestion() {
            if(this.selectedAnswer != '')
                this.index++
                this.selectedAnswer = ''
            console.log(this.index, this.count)
        },

        previousQuestion() {
            this.index--
            this.selectedAnswer = ''
            console.log(this.index, this.count)
        },
        
        
        showResults() {
            this.index++
        },
        resetQuiz() {
            this.index = 0
            this.selectedAnswer = ''
            this.correctAnswer = 0
            this.wrongAnswer = 0
        }
    }
})

app.mount('#app')