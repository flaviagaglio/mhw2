/* TODO: inserite il codice JavaScript necessario a completare il MHW! */
const myanswers = document.querySelectorAll('.choice-grid div');
let answersDB ={
    'one':'',
    'two':'',
    'three':''
}
function isQuizCompleted() {
    for(const k in answersDB){ 
        if(answersDB[k]===''){
            return false;
        }
    }
    return true;
}
function sfsdf(e) {
            let blocchiDomanda=[];
            const rispostaCliccata = e.currentTarget;
            const idDomanda =rispostaCliccata.dataset.questionId
            let 
            
    
}
function handle(e){

    const rispostaCliccata = e.currentTarget;
    
    if(!isQuizCompleted()){
        answersDB[rispostaCliccata.dataset.questionId]=rispostaCliccata.dataset.choiceId;
        let selectedAnswer;
        let unselectedAnswers = [];
        for (const answer of myanswers){
            if(answer.dataset.choiceId === rispostaCliccata.dataset.choiceId && answer.dataset.questionId ===  rispostaCliccata.dataset.questionId){
                selectedAnswer=answer;

            }else if(answer.dataset.questionId ===  rispostaCliccata.dataset.questionId){ 
                unselectedAnswers.push(answer);
            }
            
        }
        console.log(selectedAnswer)
        console.log(unselectedAnswers)

        for (const answer of unselectedAnswers){
            
            let imageChild =answer.querySelector('.checkbox');
            imageChild.src='images/unchecked.png'
            answer.classList.remove('selected');
            answer.classList.add('unselected');
            
           
        }
        let imageChild =selectedAnswer.querySelector('.checkbox');
        selectedAnswer.classList.add('selected');
        selectedAnswer.classList.remove('unselected');
        imageChild.src='images/checked.png'
        if(isQuizCompleted()){
            showResult()
        }
    }else{
        
    }
   
   
}

for (const answer of myanswers){
    answer.addEventListener('click',handle);
}
function showResult() {
    const result=  document.querySelector('.result')
    result.addEventListener('click',restartQuiz)
    let max;
    if(answersDB['one'] === answersDB['two'] || answersDB['one'] === answersDB['two'] ){
        max=answersDB['one']
    }
    if(answersDB['two'] === answersDB['one'] || answersDB['two'] === answersDB['three'] ){
        max=answersDB['two']
    }
    if(answersDB['three'] === answersDB['two'] || answersDB['three'] === answersDB['one'] ){
        max=answersDB['three']
    }

    if(max ===undefined){
        max=answersDB['one']
    }

    const testo =result.querySelector('#resultText')
    const titolo =result.querySelector('#resultTitle')
   
    testo.innerHTML=RESULTS_MAP[max].contents
    titolo.innerHTML=RESULTS_MAP[max].title
    result.classList.remove('hidden')
}
function restartQuiz() {
    
    answersDB ={
        'one':'',
        'two':'',
        'three':''
    }
    for (const answer of myanswers){
        answer.classList.remove('unselected');
        answer.classList.remove('selected');
        let imageChild =answer.querySelector('.checkbox');
        imageChild.src='images/unchecked.png'
        const result=  document.querySelector('.result')
        result.classList.add('hidden')
    }
}
