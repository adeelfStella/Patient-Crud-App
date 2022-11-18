export const sharedSetLocalStorage = (key = '', value = '') => {
    localStorage.setItem(key, JSON.stringify(value));

}
export const sharedGetLocalStorage = (key = '',) => {
    const item = JSON.parse(localStorage.getItem(key));
    return item
}

export const sharedGenerateCustomId = ()=>{
    const id=Math.floor(Math.random() * 100)
    return id

}
export const datematcher = ()=>{
    var now = new Date();
    var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var today = now.getFullYear() + "-" + (month) + "-" + (day);
    
    console.log(today);

}



