import axios from 'axios';




const getToDoByIndex = async (url='', index=0) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());
    //.then(json => console.log(json))

    //console.log(response);

    return response;
}

const getToDoByIndexInStr = async (url='', index=0) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => JSON.stringify(json))

    //console.log(response);

    return response;
}

const getToDoByIndexInObj = async (url='', index=0) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    //.then(json => typeof(json))

    //console.log(response);

    return response;
}

export { getToDoByIndex, getToDoByIndexInStr, getToDoByIndexInObj };