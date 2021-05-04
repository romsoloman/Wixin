import { utilService } from './util.service.js';
import { storageService } from './async-storage.service';

// import { httpService } from './http.service.js';
const templateData = require('../data/template/template.json');
// import axios from 'axios';

// let gFilterBy = { name: '', inStock: 'all', types: [], sortBy: 'name', pageDiff: 0 };
// const KEY = 'toysDB';
// const TOY_URL = process.env.NODE_ENV !== 'development'
//             ? '/api/toy/'
//             : '//localhost:3030/api/toy/';

export const templateService = {
    query,
    getById,
    remove,
    save,
    getEmptyTemplate,
    setFilter,
};

const TEMPLATE_KEY = 'templates';

function setFilter(filterBy) {
    // gFilterBy = filterBy;
}

function query() {
    // const filterStr = utilService.formatFilter(gFilterBy)
    // return httpService.get(`toy/?${filterStr}`)
    // return axios
    //     .get(TOY_URL, { params: gFilterBy })
    //     .then(({ data }) => data)
    //     .catch((err) => err);

    if (localStorage.getItem(TEMPLATE_KEY)) {
        return storageService.query(TEMPLATE_KEY)
    } else {
        const templates = localStorage.setItem(TEMPLATE_KEY, JSON.stringify(templateData));
        return Promise.resolve(templates);
    }
}

function getById(id) {
    return storageService.get(TEMPLATE_KEY, id)
    // return httpService.get(`toy/${id}`)
    // return axios
    //     .get(TOY_URL + id)
    //     .then(({ data }) => data)
    //     .then((toy) => toy)
    //     .catch((err) => err);
}

function remove(id) {
    // return httpService.delete(`toy/${id}`)

    // return axios
    //     .delete(TOY_URL + id)
    //     .then(() => Promise.resolve('deleted'))
    //     .catch((err) => err);
}

function save(template) {
    const updateTemplate = template._id ? storageService.put(TEMPLATE_KEY, template) : storageService.post(TEMPLATE_KEY, template)
    return updateTemplate;
    // if (toy._id)
    //     return axios
    //         .put(TOY_URL + toy._id, toy)
    //         .then(({data}) => {
    //             return data})
    //         .catch((err) => err);
    // return axios
    //     .post(TOY_URL, toy)
    //     .then(({data}) => data)
    //     .catch((err) => err);
    // if (toy._id) return httpService.put(`toy/${toy._id}`, toy)
    // return httpService.post('toy/', toy)
}

function getEmptyTemplate(name = '',) {
    return {
        _id: '',
        name,
        addOns: {
            header: {
                navbar: [],
                hero: []
            },
            main: {
                sections: [],
                forms: [],
                cards: [],
                texts: [],
                maps: [],
                images: [],
                videos: [],
            },
            footer: []
        },
        backgroundImg: null,
        previewImg: null,
    };
}



// // Create Test Data:
// function _createToys() {
//     var toys = JSON.parse(localStorage.getItem(KEY));
//     if (!toys || !toys.length) {
//         toys = [
//             _createToy('Teddy bear', 'stuffed'),
//             _createToy('Lego', 'creative'),
//             _createToy('Talking Doll', 'funny'),
//             _createToy('Clown', 'funny'),
//         ];
//         localStorage.setItem(KEY, JSON.stringify(toys));
//     }
//     return toys;
// }

// function _createToy(name, type) {
//     const toy = getEmptyToy(name, utilService.getRandomInt(80, 300), type, utilService.getRandomInt(1583212296004, 1615214496004));
//     toy._id = utilService.makeId();
//     toy.inStock = Math.random() > 0.5;
//     return toy;
// }
