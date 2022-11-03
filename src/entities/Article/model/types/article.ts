export enum ArticleBLockType {
    IMG= 'IMAGE',
    CODE = 'CODE',
    TEXT = 'TEXT',
}

export interface ArticleBLockBase {
    id: string;
    type: ArticleBLockType;
}

export interface ArticleCodeBLock extends ArticleBLockBase {
    type: ArticleBLockType.CODE;
    code: string;
}

export interface ArticleImageBLock extends ArticleBLockBase {
    type: ArticleBLockType.IMG;
    src: string;
    title: string;
}

export interface ArticleTextBLock extends ArticleBLockBase {
    type: ArticleBLockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export type ArticleBLock = ArticleCodeBLock | ArticleImageBLock | ArticleTextBLock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[],
    blocks: ArticleBLock[];
}
