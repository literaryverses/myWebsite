export type Socials = {[key: string]: string}

export type PostDetails = {
    date: Date,
    name: string,
    description: string,
    url: string,
    imageUrl: string,
    details?: string
}

export type PostBasic = {
    date?: Date,
    name: string,
    url: string
}