// Using name as 'work-session.interface.ts'
export interface WorkSession {
    // id: Number;
    workedHours: number;
    playing: boolean;
    startTime: Array<Date>;
    endTime?: Array<Date>;
    // location: string;
}

// class workSession implements WorkSession {
//     startTime: Array<Date>;
//     endTime?: Array<Date>;
//     location: string;
//     workedHours: Date;
// }