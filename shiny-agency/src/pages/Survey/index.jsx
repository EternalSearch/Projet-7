import { useParams } from 'react-router-dom'
 
function Survey() {
    const { questionNumber } = useParams()
 
    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {questionNumber}</h2>
        </div>
    )
}
<nav>
<Link to="/">PagePrécédente</Link>
<Link to="/">PageSuivante</Link>
</nav>

export default Survey