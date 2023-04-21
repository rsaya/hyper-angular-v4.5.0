export interface User {
    id?: number;
    name?: string;
    avatar?: string;
    status?: string;
}

export interface Comment {
    id?: number;
    author?: User;
    content?: string;
    isLiked?: boolean;
    postedOn?: string;
    replies?: Comment[];
}

export interface Post {
    id?: number;
    title?: string;
    author?: User;
    postedOn?: string;
    scope?: string;
    content?: string;
    totalLikes?: string;
    totalComments?: string;
    isLiked?: boolean;
    comments?: Comment[];
}


export interface Topic {
    id?: number;
    title?: string;
    description?: string;
}

export interface SocialEvent {
    id: number;
    name: string;
    icon: string;
}
