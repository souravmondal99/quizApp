import { LightningElement, track } from 'lwc';

export default class QuizzApp extends LightningElement {
    showResult = false //variable to hide/Unhide the Score div
    correctAns = 0  //collects the no. of correct answer
    selectedAnswers = {} // object to collect the selected radio button answers

    //array of object to store the Questions along with correct Answer
    questions = [
        {
            id: 'Question 1',
            question: 'What are the maximum no of components that we can include in an LWC?',
            answers: {
                a: ' 9',
                b: ' 25',
                c: ' 100',
                d: 'No limit'
            },
            correctAns: 'd'
        },
        {
            id: 'Question 2',
            question: 'What is the annotation used to invoke an Apex method imperatively from LWC?',
            answers: {
                a: '@future',
                b: '@isTest',
                c: '@AuraEnabled',
                d: '@cacheable'
            },
            correctAns: 'c'
        },
        {
            id: 'Question 3',
            question: 'Which Salesforce interface do we function in?',
            answers: {
                a: ' Lightning',
                b: ' Einstein',
                c: ' Classic',
                d: 'Salesforce '
            },
            correctAns: 'a'
        },
        {
            id: 'Question 4',
            question: 'What type of objects are included with Salesforce?',
            answers: {
                a: ' Basic Objects',
                b: ' Custom Objects',
                c: ' Standard Objects',
                d: 'Functional Objects'
            },
            correctAns: 'c'
        }
    ]

    //function to handle the radio button value and sends the values to selectedAnswers object
    radioHandler(event) {
        const { name, value } = event.target
        this.selectedAnswers = { ...this.selectedAnswers, [name]: value }
    }

    //function to unable/disable submit button
    get disableButton() {
        return !(Object.keys(this.selectedAnswers).length == this.questions.length)
    }

    //function to check wheather all answers are correct or not and return design class accordingly
    get isScoredFull() {
        return `slds-m-around_medium  ${this.correctAns === this.questions.length ? 'slds-text-color_success' : 'slds-text-color_error'}`
    }

    //handles the submit button
    handleSubmit(event) {
        event.preventDefault()
        let correct = this.questions.filter(item => this.selectedAnswers[item.id] === item.correctAns)
        this.correctAns = correct.length
        this.showResult = true
        // for (var n of this.questions) {
        //     if (this.selectedAnswers.keys == n.id && this.selectedAnswers.value == n.correctAns) {
        //         console.log(n.correctAns + ' Correct')
        //     }
        // }
    }
    //resets the radio button, correctAns and hides the score div
    handleReset() {
        this.selectedAnswers = {}
        this.correctAns = 0
        this.showResult = false
    }

}