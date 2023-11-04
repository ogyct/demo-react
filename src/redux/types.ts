export interface PostDTO {
    publicId: string;
    title: string;
    body: string
}

export type PageDTO<Type> = {
    totalPages: number
    totalElements: number;
    size: number;
    number: number;
    content: Type[];
}

export interface Pagination {
    pageSize: number;
    pageNumber: number;
}
