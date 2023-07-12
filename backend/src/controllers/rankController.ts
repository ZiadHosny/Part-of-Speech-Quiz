import { Request, Response } from "express"
import { getDataFromJsonfile } from "../utils/getDataFromJsonfile.js"

export const rankController = (req: Request, res: Response) => {

    const { score: userScore } = req.body
    

    // GET scoresList Array from TestData File 
    const data = getDataFromJsonfile({ jsonFile: '../data/TestData.json', fileUrl: import.meta.url })
    const { scoresList } = data;

    // GET number of Scores that smaller than user Score 
    let scoresSmallerThanUser = 0
    scoresList.forEach((scoreFromList: number) => {

        if (scoreFromList < userScore) {
            scoresSmallerThanUser++;
        }
    })

    const userRank = ((scoresSmallerThanUser / scoresList.length) * 100)

    const finalUserRank = Number.isInteger(userRank) ? userRank.toString() : userRank.toFixed(2)

    res.json({ rank: finalUserRank })
}