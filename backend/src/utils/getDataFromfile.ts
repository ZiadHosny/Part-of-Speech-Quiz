import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Take the "fileUrl" that call this Function and "filePath" That want to read it and return the "Parsed Json"
export const getDataFromfile = (filePath: string, fileUrl: string) => {

    const __dirname = dirname(fileURLToPath(fileUrl))
    const data = fs.readFileSync(path.join(__dirname, filePath), 'utf-8')

    return JSON.parse(data)
}