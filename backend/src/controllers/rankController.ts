import { Request, Response } from "express"
import { getDataFromfile } from "../utils/getDataFromfile.js"

export const rankController = (req: Request, res: Response) => {

    const { score } = req.body

    // GET scoresList Array from TestData File 
    const data = getDataFromfile('../data/TestData.json', import.meta.url)
    const { scoresList } = data;

    // GET number of Scores that smaller than user Score 
    let userScoreInList = 0
    scoresList.forEach((scoreFromList: number) => {

        if (scoreFromList < score) {
            userScoreInList++;
        }
    })

    const userRank = ((userScoreInList / scoresList.length) * 100)

    const finalUserRank = Number.isInteger(userRank) ? userRank.toString() : userRank.toFixed(2)

    res.json({ rank: finalUserRank })
}