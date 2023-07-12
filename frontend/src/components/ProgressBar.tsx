import '../styles/ProgressBar.css'

export const ProgressBar = ({ questionNumber, questionsLength }: { questionNumber: number, questionsLength: number }) => {

    const valueOfProgress = (questionNumber - 1) / questionsLength * 100

    return (
        <div className="progress-Container">
            <div className="task-progress">
                <p>
                    Question: {`${questionNumber}/${questionsLength}`}
                    <span>{valueOfProgress}%</span>
                </p>
                <progress className="progress" max="100" value={valueOfProgress}></progress>
            </div>
        </div>
    )
}
