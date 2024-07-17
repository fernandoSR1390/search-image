export interface ResponseAPI {
    results: Result[];
    total: number;
    total_pages: number;
}

export interface Result {
    id: string;
    description: null | string;
    alt_description: null | string;
    urls: Urls;
}

export interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
}

