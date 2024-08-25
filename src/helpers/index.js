export const getImageSrc = (img) => { 
    const url = new URL(`../assets/img/${img}`, import.meta.url).href 
    
    return url
};

export const rules = (name, ruleValue) => {
    return {
        'required': value => !!value || 'Поле обязательно',
        'email': value => value.includes('@') || 'Неправильный email',
        'min': value => value?.length >= ruleValue || `Минимальное кол-во символов: ${ruleValue}`,
        'same': value => value === ruleValue || 'Пароли не совпадают'
    }[name];
}