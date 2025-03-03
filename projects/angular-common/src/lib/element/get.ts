export function getTextById(id: string){
    const val: string = (document.querySelector(`#${id}`) as HTMLElement).innerText;
    return val;
}

export function getHTMLById(id: string){
    const val: string = (document.querySelector(`#${id}`) as HTMLElement).innerHTML;
    return val;
}

// export function getTextByTag(tag){
//     const val = document.querySelector(`${tag}`).innerText;
//     console.log(val);
//     return val;
// }

// export function getHTMLByTag(tag){
//     const val = document.querySelector(`${tag}`).innerHTML;
//     console.log(val);
//     return val;
// }

// export function getTextByClass(classname){
//     const val = document.querySelector(`.${classname}`).innerText;
//     console.log(val);
//     return val;
// }

// export function getHTMLByClass(classname){
//     const val = document.querySelector(`.${classname}`).innerHTML;
//     console.log(val);
//     return val;
// }