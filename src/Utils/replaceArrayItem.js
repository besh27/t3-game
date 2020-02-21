const replaceArrayItem = (list, index, char) => {
    list.splice(index, 1, char);
    return list;
}

export default replaceArrayItem;