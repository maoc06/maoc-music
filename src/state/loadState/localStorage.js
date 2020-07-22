export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("favorites");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("favorites", serializedState);
    } catch {
        console.log("Error trying set localstorage...");
    }
};