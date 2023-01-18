import { HTTP, HTTPS } from "@constants/api";

/**
 * Изменяет URL с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns - url с HTTPS
*/
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    
    return result;
}

/**
 * Отправляет запрос fetch
 * @param {String} url - url для запроса
 * @returns {Promise} - Promise с результатом запроса
 */
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);

        if (!res.ok) {
            console.error('Could not fetch.', res.status)
            return false;
        }

        return await res.json();     
    } catch (error) {
        console.error('Could not fetch.', error.message)
        return false;
    }
};

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();

/**
 * Отправляет несколько запросов fetch
 * @param {Array} url - масив с ссылками
 * @returns {Promise} - Promise с результатом запроса
 */
export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }));
    
    return res
}