/** My Portfolio base */
export class About {
    Name: string
    Notes: string
    Badge: string | Blob
}

export class Project {
    Name: string
    Media: string
    Website: string
    Description: string
    Repository: string
    Tech: string[]
    Contributors: Teammate[]
}

export class Technology {
    Name: string
    Notes: string
    "Last Used": string
    "First Used": string
}

export class Teammate {
    Email: string
    GitHub: string
    LinkedIn: string
    Name: string
    Portfolio: string
    Projects?: Project[]
}

/** Job Hunt base */
export class Contact {
    Email: string
    "Full Name": string
    Role: string
    Handles: string
    Face: string | Blob //Img
    Notes: string
    Company: string
    Phone: string
}