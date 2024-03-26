import toast from "react-hot-toast";

const getItemFromRead = () =>{
    const storedItem = localStorage.getItem('read');
    if(storedItem) {
        return JSON.parse(storedItem)
    }
    return [];
}
const saveItemToRead = id => {
    const storedItem = getItemFromRead();
    const isExist = storedItem.find(bookId => bookId === id);
    if(!isExist) {
        storedItem.push(id);
        localStorage.setItem('read', JSON.stringify(storedItem));
        toast.success('Book Successfully added to read list')
    } else {
        return toast.error('Book already added to read')
    }
}

const getItemFromWish = () =>{
    const storedItem = localStorage.getItem('wish');
    if(storedItem) {
        return JSON.parse(storedItem)
    }
    return [];
}
const saveItemToWish = id => {
    const storedItem = getItemFromWish();
    const isExist = storedItem.find(bookId => bookId === id);
    if(!isExist) {
        storedItem.push(id);
        localStorage.setItem('wish', JSON.stringify(storedItem));
        toast.success('Book Successfully added to wishlist')
    } else {
        return toast.error('Book already added to wishlist')
    }
}

export {getItemFromRead, saveItemToRead, saveItemToWish, getItemFromWish}