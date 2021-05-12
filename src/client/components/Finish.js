
//////////////////////////////////////////////////
//  FINISH PAGE
//////////////////////////////////////////////////

export default {
    props: ['wrongAnswers', 'questionsCount'],
    render({ wrongAnswers, questionsCount }) {
        return (
            <div className="container">
                <h1>QCM : Les formulaires HTML</h1>
                <h2>Vous avez obtenu :</h2>
                    <h1>{ `${questionsCount - wrongAnswers}/${questionsCount}` }</h1>
                <router-link class="button" to="/">
                    <svg viewBox="0 0 18.5 18.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="M1.25,17.25l16-16"></path><path d="M1.25,1.25h16v16"></path></svg>
                    Retourner à l'accueil
                </router-link>
                <p class="button" onClick={ () => location.reload() }>
                    <svg viewBox="0 0 18.5 18.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="M1.25,17.25l16-16"></path><path d="M1.25,1.25h16v16"></path></svg>
                    Recommencer
                </p>
            </div>
        );
    }
}
