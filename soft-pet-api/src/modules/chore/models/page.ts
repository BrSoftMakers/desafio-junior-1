import { Filter } from "./filter";

export class Page<T> {
    page: number;
    size: number;
    totalItems: number;
    totalPages: number;
    content: T[];

    static create<T>(count: number, content: T[], filter: Filter) : Page<T> {
        const page = new Page<T>()
        page.page = filter.page
        page.size= filter.size
        page.totalItems = count
        page.totalPages = Math.ceil(count / filter.size)
        page.content = content

        return page
    }
}