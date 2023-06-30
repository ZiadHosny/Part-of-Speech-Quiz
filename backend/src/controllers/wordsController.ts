import { Request, Response } from "express"
import { Word } from "../types.js"
import { getDataFromfile } from "../utils/getDataFromfile.js"
import { shuffleList } from "../utils/shuffleList.js"

export const wordsController = (req: Request, res: Response) => {

    const data = getDataFromfile('../data/TestData.json', import.meta.url)

    const { wordList, scoresList } = data;

    console.log(scoresList.length)

    const shuffledwordList = shuffleList([...wordList])

    let adverb = {}, noun = {}, adjective = {}, verb = {}

    const others: Word[] = [];

    shuffledwordList.forEach((e) => {

        if (Object.keys(adverb).length === 0 && e.pos === 'adverb') {
            adverb = e
        } else if (Object.keys(adjective).length === 0 && e.pos === 'adjective') {
            adjective = e
        } else if (Object.keys(noun).length === 0 && e.pos === 'noun') {
            noun = e
        } else if (Object.keys(verb).length === 0 && e.pos === 'verb') {
            verb = e
        } else if (others.length < 6) {
            others.push(e)
        }

    })

    const word10 = shuffleList([...others, adjective, adverb, verb, noun])

    res.json(word10)
}