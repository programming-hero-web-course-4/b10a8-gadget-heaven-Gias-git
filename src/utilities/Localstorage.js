

const getLocalStoageData = () => {

    const storedListStorage = localStorage.getItem('product-id');

    if (storedListStorage) {
        const storedList = JSON.parse(storedListStorage);
        return storedList;
    } else {
        return []
    }

}

const addTolocalStorage = (productId) => {

    const storedList = getLocalStoageData();
    console.log(storedList)
    if (storedList.includes(productId)) {
        alert('already added')
    } 
    
    else {
        storedList.push(productId)
        const storedListstr = JSON.stringify(storedList);
        localStorage.setItem('product-id', storedListstr)
    }

    console.log(storedListstr)
}

export {addTolocalStorage}