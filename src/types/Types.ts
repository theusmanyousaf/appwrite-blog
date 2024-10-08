import { Models } from "appwrite";

{/* Auth Data Types */ }

export interface UserData {
    $id?: string
    email: string;
    password: string;
    name?: string;
}

{/* Post Data Types */ }
export type Post = {
    image: FileList
    $id: string
    title: string
    slug: string
    content: string
    featuredImage: string
    status: string
    userId: string
}

// Define the PostDocument type with the additional properties
export type PostDocument = Models.Document & {
    title: string;
    content: string;
    featuredImage: string;  // Include all necessary fields your post will have
};

export interface PostFormData {
    title: string;          // Title of the post
    slug: string;           // Slug generated from the title
    content: string;        // Content of the post
    status: 'active' | 'inactive'; // Post status
    image?: FileList;       // Optional file input for the featured image
}


// export type uploadPost = {
//     image?: any;
//     featuredImage: any;
//     $id?: string | undefined;
//     title?: string;
//     slug?: string;
//     content?: string;
//     status?: string;
//     userId?: string;
// }

{/* Component Prop Types */ }

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    type?: string
    className?: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string
    bgColor?: string
    textColor?: string
    className?: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: string[];
    label?: string;
    className?: string;
}
