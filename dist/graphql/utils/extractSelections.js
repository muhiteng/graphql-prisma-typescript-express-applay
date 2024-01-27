const getSelections = (info) => {
    return info.fieldNodes[0].selectionSet?.selections || null;
};
export const extractSelection = (info) => {
    const selections = getSelections(info);
    if (!selections)
        return [];
    return selections.reduce((initialValue, selection) => {
        if (selection.kind === "Field") {
            return [...initialValue, selection.name.value];
        }
        return initialValue;
    }, []);
};
//# sourceMappingURL=extractSelections.js.map