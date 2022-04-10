export const errorHandler = (executable) => async (...args) => {
    try {
        const result = await executable(...args);
        return result;
    } catch (error) {
        alert(error);
    }
}