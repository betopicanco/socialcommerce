export default class Comment {
    #author: string
    #content: string

    constructor(author:string, content:string) {
        this.#author = author
        this.#content = content
    }

    static empty() {
        return new Comment('', '')
    }

    get author() {
        return this.#author
    }

    get content() {
        return this.#content
    }
}