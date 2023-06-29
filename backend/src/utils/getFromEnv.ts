import dotenv from 'dotenv'

export const getFromEnv = () => {

    dotenv.config()

    const port = process.env.PORT || 3000

    return {
        port
    }

}