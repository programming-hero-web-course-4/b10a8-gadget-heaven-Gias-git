

const getLocalStoageData = () => {

    const storedListStorage = localStorage.getItem('wish-list');

    if (storedListStorage) {
        const storedList = JSON.parse(storedListStorage);
        return storedList;
    } else {
        return []
    }

}

const addWishListTolocalStorage = (productId) => {

    const storedList = getLocalStoageData();
    console.log(storedList)
    if (storedList.includes(productId)) {
        alert('Wiahlist already added')
    } 
    
    else {
        storedList.push(productId)
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListstr)
    }

    console.log(storedListstr)
}

export {addWishListTolocalStorage}