
const getLocalStorageData = () => {
    try {
        const storedListStorage = localStorage.getItem('cart-item');
        return storedListStorage ? JSON.parse(storedListStorage) : [];
    } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        return [];
    }
};


const addTolocalStorage = (detailData) => {

    const cardList = getLocalStorageData();
    const isExist = cardList.find(item => item.product_id == detailData.product_id);

    if (isExist) {
        return alert('already')
    }

    cardList.push(detailData);

    localStorage.setItem('cart-item', JSON.stringify(cardList))
}

export { addTolocalStorage, getLocalStorageData }