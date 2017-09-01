export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    type: string; // Idk if its better to use a string like "Employee", "Manager" etc or a number and make an enum
    expectedWorkHoursForTheDay: number;
    remainingTimeToWork: number;
    leavingTime?: number;
    config?: object;
    isWorking: boolean;
}
