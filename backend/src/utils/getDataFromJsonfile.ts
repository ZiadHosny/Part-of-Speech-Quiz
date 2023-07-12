import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// Take the "fileUrl" that call this Function and "jsonFile" That want to read it and return the "Parsed Json"
export const getDataFromJsonfile = ({ jsonFile, fileUrl }: { jsonFile: string, fileUrl: string }) => {

    const __dirname = dirname(fileURLToPath(fileUrl))
    const data = fs.readFileSync(path.join(__dirname, jsonFile), 'utf-8')

    return JSON.parse(data)
}