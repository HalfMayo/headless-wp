export type PostSum = {
    title: string,
    date: string,
    excerpt: string,
    uri: string,
    content: string,
    featuredImage: {
        node: {
            sourceUrl: string
        }
    },
    categories: {
        nodes: {
            name: string
        }[]
    }
}