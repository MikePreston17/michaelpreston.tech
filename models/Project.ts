import Model from "./model";

export class Project extends Model {

    title: string
    image: string
    url: string
    notes: string

    constructor(props) {
        super()
        Object.assign(this, { ...props })
    }
}