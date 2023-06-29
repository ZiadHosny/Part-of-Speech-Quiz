import { useAsync } from "react-use"
import { Word, WordQuestion } from "../types"
import { useConfig } from "./useConfig"

export const useQuestionsList = () => {
    const { backendBaseURL } = useConfig()

    const result = useAsync(async (): Promise<WordQuestion[]> => {
        const response = await fetch(`${backendBaseURL}/words`)
        const words = await response.json() as Word[];

        const wordQuestions = words.map((wordRes, i: number): WordQuestion => {
            return {
                questionNumber: i + 1,
                id: wordRes.id,
                question: `Choose correct part of speech to the word "${wordRes.word}"`,
                rightAnswer: wordRes.pos,
                answers: ['adverb', 'verb', 'noun', 'adjective']
            }
        })
        return wordQuestions
    })

    return result
}