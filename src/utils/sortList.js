export function sortList(list, property, order) {
    const sortedList = [...list];
    const sortByAsc = (a, b) => {
        return a[property] - b[property];
    }
    const sortByDesc = (a, b) => {
        return b[property] - a[property];
    }
    const sortingFunction = {
        0: sortByAsc,
        1: sortByDesc
    }

    sortedList.sort(sortingFunction[order]);

    return sortedList;
}