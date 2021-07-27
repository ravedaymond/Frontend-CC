export interface Task {
    id?: number; // var?: type -- Indicates value can be optional
    text: string;
    day: string;
    reminder: boolean;
}