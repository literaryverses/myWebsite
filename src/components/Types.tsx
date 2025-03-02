export type Socials = {[key: string]: string}

export type Post = {
    date: Date,
    title: string,
    description: string,
    url: string,
    imageUrl: string,
    details?: string
}

export type  Item = {
    date: Date,
    title: string,
}