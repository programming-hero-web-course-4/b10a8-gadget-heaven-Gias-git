

const getwishLocalStoageData = () => {

    const storedListStorage = localStorage.getItem('wish-list');

    if (storedListStorage) {
        const storedList = JSON.parse(storedListStorage);
        return storedList;
    } else {
        return []
    }

}

const addWishListTolocalStorage = (detailData) => {


    const wishList = getwishLocalStoageData();
    const isExist = wishList.find(item => item.product_id == detailData.product_id);

    if (isExist) {
        return alert('already')
    }

    wishList.push(detailData);

    localStorage.setItem('wish-list', JSON.stringify(wishList))
}

export {addWishListTolocalStorage, getwishLocalStoageData}