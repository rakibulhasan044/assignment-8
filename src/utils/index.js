

const getItemFromLS = () =>{
    const storedItem = localStorage.getItem('books');
    if(storedItem) {
        return JSON.parse(storedItem)
    }
    return [];
}
const saveItemToLS = id => {
    const storedItem = getItemFromLS();
    const isExist = storedItem.find(bookId => bookId === id);
    if(!isExist) {
        storedItem.push(id);
        localStorage.setItem('books', JSON.stringify(storedItem));
    }
}

export {getItemFromLS, saveItemToLS}