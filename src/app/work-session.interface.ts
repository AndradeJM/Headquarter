// Using name as 'work-session.interface.ts'
export interface WorkSession {
    // id: Number;
    startTime: Array<Date>;
    endTime?: Array<Date>;
    location: string;
    workedHours: Date;
}

// class workSession implements WorkSession {
//     startTime: Array<Date>;
//     endTime?: Array<Date>;
//     location: string;
//     workedHours: Date;
// }