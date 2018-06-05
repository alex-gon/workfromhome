export class Entry {
    userId: string
    full_name: string
    time_started: Date
    time_finished: Date
    did_yesterday: string
    doing_today: string
    start_notes: string
    end_notes: string
    hours_worked: number
    
    date:string;
    morning_startTime:string;
    morning_didYesterday:string;
    morning_doingToday:string;
    morning_notes:string;

    evening_endTime:string;
    evening_didToday:string;
    evening_notes:string;
}