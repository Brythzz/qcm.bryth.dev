import ResponseField from '../components/ResponseField';
import FinishScreen from '../components/Finish';

//////////////////////////////////////////////////
//  QUESTIONS PAGE
//////////////////////////////////////////////////

export default {
    data() {
        return {
            title        : null,
            answers      : [],
            questionId   : 1,
            wrongAnswers : 0,
            finished     : false
        };
    },

    methods: {
        submit(id) {
            fetch('/api/v1/answers', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    response: id, id: this.questionId
                })
            })
            .then(res => res.json())
            .then(({ isValid, next }) => {
                if (!isValid) this.wrongAnswers++;

                if (!next) return this.finished = true;

                this.questionId++;
                this.title = next.question;
                this.answers = next.possibleResponses;
            })
            .catch(console.error);
        },
        renderQuestions() {
            if (this.finished) {
                return <FinishScreen questionsCount={ this.questionId } wrongAnswers={ this.wrongAnswers } />
            } else {
                return (
                    <div className="container">
                        <h1>QCM: Les formulaires HTML</h1>
                        <h2>{ this.title || 'Chargement...' }</h2>

                        { this.answers && <div className="answers">
                            { this.answers.map((element, index) => {
                            return <ResponseField key={ index } id={ index } content={ element } submit={ this.submit }/>})
                            }
                        </div> }
                    </div>
                );
            }
        }
    },

    render() {
        return this.renderQuestions();
    },

    created() {
        fetch('/api/v1/start')
            .then(res => res.json())
            .then(({ question, possibleResponses }) => {
                this.title = question;
                this.answers = possibleResponses;
            })
            .catch(console.error);
    }
}
