export function getLocalCityTime(timezone: number): string {
    const now = Date.now();
    const localTime = new Date(now + timezone * 1000);

    const hours = localTime.getUTCHours().toString().padStart(2, "0");
    const minutes = localTime.getUTCMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
}

