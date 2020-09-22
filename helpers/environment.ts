import process from "process";
console.log('process.env', process.env)
const development: boolean = process.env.NODE_ENV === 'production' ? false : !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export function isDev(): boolean {
    return development;
}

export default isDev;