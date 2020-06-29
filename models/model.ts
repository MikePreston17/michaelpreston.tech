//from: https://nehalist.io/working-with-models-in-angular/
// Deserialize any object to a class
export interface Deserializable {
    deserialize(input: any): this;
}

// Inheritors can deserialize any JSON object to itself
export class Model implements Deserializable {

    // constructor(props){
    //     Object.assign(this, { ...props })
    // }

    deserialize(input: any): this {
        Object.assign(this, input)
        return this
    }
}

export default Model;

export class GenericFactory {
    static create<T>(type: (new () => T)): T {
        return new type();
    }
}

// Maps Airtable records to type T[]
export function toDto<T>(records: any[], dtoType: T): T[] {
    // console.log('records :>> ', records);
    if (!dtoType)
        throw new Error('Dto type must exist!')

    if (!records || records?.length == 0) {
        console.warn('Empty records array passed to this function.')
        return [];
    }

    return records.map((record) => Object.assign(dtoType, record.fields))
}

// WIP
// Maybe this? https://github.com/appvision-gmbh/json2typescript/issues/73
// const deserializeTo<T>(value: any): T => {
//     return {} as T;
// }