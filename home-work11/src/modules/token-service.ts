export function getFormattedDate(): string {
    const now = new Date();
    const pad = (num: number): string => num.toString().padStart(2, '0');
    return `${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())} ` +
            `${pad(now.getHours())}.${pad(now.getMinutes())}.${pad(now.getSeconds())}`;
}

export function generateRandomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
