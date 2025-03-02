export type Socials = {[key: string]: string}

export type Post = {
    date: Date,
    title: string,
    description: string,
    url: string,
    imageUrl: string,
    details?: string
}

export type  ItemList = {
    date: Date,
    title: string,
}