import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const getDataFromfile = (filePath: string, fileUrl: string) => {

    const __dirname = dirname(fileURLToPath(fileUrl))
    const data = fs.readFileSync(path.join(__dirname, filePath), 'utf-8')

    return JSON.parse(data)
}