export type Word = {
    id: number,
    word: string,
    pos: 'adverb' | 'verb' | 'noun' | 'adjective'
}


export type WordQuestion = {
    id: number,
    questionNumber: number,
    question: string,
    answers: ['adverb', 'verb', 'noun', 'adjective']
    rightAnswer: 'adverb' | 'verb' | 'noun' | 'adjective'
}