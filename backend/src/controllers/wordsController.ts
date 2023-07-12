import { Request, Response } from "express"
import { Word } from "../types.js"
import { getDataFromJsonfile } from "../utils/getDataFromJsonfile.js"
import { shuffleList } from "../utils/shuffleList.js"

export const wordsController = (req: Request, res: Response) => {

    // GET wordList Array from TestData File
    const data = getDataFromJsonfile({ jsonFile: '../data/TestData.json', fileUrl: import.meta.url })
    const { wordList } = data;

    // Shuffle The wordList
    const shuffledwordList = shuffleList([...wordList])

    let adverb = {}, noun = {}, adjective = {}, verb = {}
    const lengthOfResponseWords = 10
    const otherWords: Word[] = [];


    // GET at least 1 adjective, 1 adverb, 1 noun, and 1 verb and 6 mixes in others variable.
    shuffledwordList.forEach((e) => {

        if (Object.keys(adverb).length === 0 && e.pos === 'adverb') {
            adverb = e
        } else if (Object.keys(adjective).length === 0 && e.pos === 'adjective') {
            adjective = e
        } else if (Object.keys(noun).length === 0 && e.pos === 'noun') {
            noun = e
        } else if (Object.keys(verb).length === 0 && e.pos === 'verb') {
            verb = e
        } else if (otherWords.length < lengthOfResponseWords - 4) {
            otherWords.push(e)
        }

    })

    // Shuffle The Result of the words
    const responseWords = shuffleList([...otherWords, adjective, adverb, verb, noun])

    res.json(responseWords)
}