const fetchData = async () => {
    const response = await fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json');
    const data = await response.json();
    console.log(data);
    return data;
}

let button: HTMLButtonElement = document.querySelector('.btnInfo') as HTMLButtonElement;
let paragraph: HTMLParagraphElement = document.querySelector('.info') as HTMLParagraphElement;

button.addEventListener('click', async () => {
   const data = await fetchData();
   paragraph.textContent = JSON.stringify(data);
});