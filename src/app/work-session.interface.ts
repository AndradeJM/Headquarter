export interface WorkSession {
    id: Number;
    startTime: Array<Date>;
    endTime?: Array<Date>;
    location: string;
    workedHours: Date;
}
