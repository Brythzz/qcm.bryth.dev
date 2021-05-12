
//////////////////////////////////////////////////
//  RESPONSE FIELD
//////////////////////////////////////////////////

export default {
    props: ['id', 'content', 'submit'],
    render({ id, content, submit }) {
        return (
            <p className="answer" onClick={ () => submit(id) }>
                { content }
            </p>
        );
    }
}
