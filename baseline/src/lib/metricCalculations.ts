import { DailyMetrics, Averages, Changes } from "@/types/metrics";


export function calculateAverage(values: DailyMetrics[]) {

    let stepsAvg = 1;
    let moveAvg = 1;
    let restAvg = 1;
    let breatheAvg = 1;

    for (let i = 0; i < values.length; i++)
    {
        stepsAvg = (stepsAvg + values[i].steps)/(i+1);
        moveAvg = (moveAvg + values[i].moveCalories)/(i+1);
        restAvg = (restAvg + values[i].restMinutes)/(i+1);
        breatheAvg = (breatheAvg + values[i].breatheMinutes)/(i+1);

    }

    const result: Averages = {
        steps : Math.floor(stepsAvg), 
        moveCalories :  Math.floor(moveAvg), 
        restMinutes : Math.floor(restAvg), 
        breatheMinutes : Math.floor(breatheAvg)
    };

    return result;
};

export function calculateChange(trend: Averages, today: DailyMetrics) {
    const result: Changes = {
        steps : Math.floor(today.steps - trend.steps), 
        moveCalories :  Math.floor(today.moveCalories - trend.moveCalories), 
        restMinutes : Math.floor(today.restMinutes - trend.restMinutes), 
        breatheMinutes : Math.floor(today.breatheMinutes - trend.breatheMinutes)
    };

    return result;
};