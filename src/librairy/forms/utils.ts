export default function checkErrors(data: any): string[] | null {
    const errors = Object.keys(data).filter((key) => {
        if (typeof data[key] === 'object') {
            return checkErrors(data[key]);
        }
        return data[key] === undefined || data[key] === null || data[key] === '';
    })
    return errors.length > 0 ? errors : null;
}
