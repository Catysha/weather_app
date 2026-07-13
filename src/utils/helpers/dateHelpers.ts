export function getLocalCityTime(timezone: string): string {
    if (!timezone) {
        return "";
    }

    try {
        return new Intl.DateTimeFormat("ru-RU", {
            timeZone: timezone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }).format(new Date());
    } catch {
        return "";
    }
}

