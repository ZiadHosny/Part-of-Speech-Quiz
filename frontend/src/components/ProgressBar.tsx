import '../styles/ProgressBar.css'

export const ProgressBar = ({ value, questionOfLength }: { value: string, questionOfLength: string }) => {
    return (
        <div className="task-progress">
            <p>
                Question: {questionOfLength}
                <span>{value}%</span>
            </p>
            <progress className="progress" max="100" value={value}></progress>
        </div>
    )
}
