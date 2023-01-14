import { Dayjs } from "dayjs";

export interface TimeEntriesI{
    dateTime:Dayjs
    desc:string
    project:string
    task:string
}