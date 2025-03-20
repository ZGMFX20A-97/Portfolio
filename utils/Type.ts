import { Timestamp } from "firebase/firestore";

//APIからもらった一部のプロパティだけ欲しいため、レスポンスデータのプロパティに合わせてオブジェクトの方を定義する

//ユーザーの型定義
export type User = {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
} | null

//メッセージの型定義
export interface Message {
    id: string;
    uid: string;
    content: string;
    userPhoto: string;
    timestamp: Timestamp;
    displayName: string;
}

//ブログの型定義
export interface Blog {
    url: string;
    rendered_body: string;
    id: string;
    tags: tag[]
    title: string;
    created_at: string;
    likes_count: number;
    user: { profile_image_url: string; }
}

//ブログタグの型定義
export interface tag {
    name: string;
}

//レポジトリの型定義
export interface Repository {
    html_url: string | undefined;
    name: string | null;
    id: number | null;
    description: string | null;
    created_at: string | null;
    homepage: string | null;
}

//ホームページで展示する常用ウェブサイトの型定義
export interface Website {
    name: string;
    url: string;
    imgUrl: string;
    introduction: string;
}