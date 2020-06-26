import Model from "./model";

export default class Project extends Model {

    title: string
    image: string
    url: string
    notes: string

    constructor(props) {
        super()
        Object.assign(this, { ...props })
    }

    // TODO: Deserialize using a property map.
    // Not useful, but fun.
    static deserialize(props: any, propertyMap: Map<string, string>): Project {
        return new Project(props);
        // Object.assign(this, input)
        // return this
    }
}

