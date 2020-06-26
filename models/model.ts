//from: https://nehalist.io/working-with-models-in-angular/

// Deserialize any object to a class
export interface Deserializable {
    deserialize(input: any): this;
}

// Inheritors can deserialize any JSON object to itself
export default class Model implements Deserializable {

    // constructor(props){
    //     Object.assign(this, { ...props })
    // }

    deserialize(input: any): this {
        Object.assign(this, input)
        return this
    }
}

// WIP
// Maybe this? https://github.com/appvision-gmbh/json2typescript/issues/73
// const deserializeTo<T>(value: any): T => {
//     return {} as T;
// }