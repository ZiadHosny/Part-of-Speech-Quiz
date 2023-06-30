import { Request, Response } from "express"
import { getDataFromfile } from "../utils/getDataFromfile.js"

export const rankController = (req: Request, res: Response) => {

    const { score } = req.body

    const data = getDataFromfile('../data/TestData.json', import.meta.url)

    const { scoresList } = data;

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