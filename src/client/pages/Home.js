
//////////////////////////////////////////////////
//  LANDING PAGE
//////////////////////////////////////////////////

export default {
    render() {
        return (
            <div>
                <h1>QCM : Les formulaires HTML</h1>
                <router-link class="button" to="/quiz">
                    <svg viewBox="0 0 18.5 18.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="M1.25,17.25l16-16"></path><path d="M1.25,1.25h16v16"></path></svg>
                    Commencer
                </router-link>
                <a class="button" href="/cours">
                    <svg viewBox="0 0 18.5 18.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"><path d="M1.25,17.25l16-16"></path><path d="M1.25,1.25h16v16"></path></svg>
                    Le cours
                </a>
            </div>
        );
    }
}
