export const getImageSrc = (img) => { 
    const url = new URL(`../assets/img/${img}`, import.meta.url).href 
    
    return url
};