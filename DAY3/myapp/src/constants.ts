

export enum TodoType{

    Learning="Learning",
    Pending="Pending",
    Learned="Learned",
    Revision="Revision"
}

export type Todo={
    id:number,
    type:string,
    message:TodoType
    likes:number
}