// GetElementById

const itemsName = [
    { name: 'Logo', id:'0'},
    { name: 'Home', id: '1'},
    { name: 'Contact', id: '2'},
    { name: 'Porfolio', id: '3'},
    { name: 'About', id: '4'},
]

/* for (let i = 0; i < itemsName.length; i++) {
    const element = itemsName[i];
    let mainHeaderBe = document.getElementById('main-header');
    console.log(mainHeaderBe);
    
} */

let mainHeaderBe = document.getElementById('main-header');
mainHeaderBe.style.background = '#000';
mainHeaderBe.innerHTML = '<h5>Logo</h5>';
mainHeaderBe.style.borderBottom = 'solid 3px #ccc';
mainHeaderBe.style.color = '#000';
mainHeaderBe.style.fontWeight = 'bold';
mainHeaderBe.style.textAlign = 'center';
mainHeaderBe.style.textTransform = 'uppercase';

/* Items header */
/* console.log(document.getElementById('header-title'))
 */

//GetElementByClassName
let container = document.getElementById('main-container');
container.style.borderBottom = 'solid 3px #ccc';
container.style.borderRadius = '3px';

let mainForms = document.getElementById('containers');
mainForms.style.backgroundColor = '#ccc';
mainForms.style.borderRadius = '3px';
mainForms.style.border = 'none';
    

let LabelName = document.getElementsByTagName('label');
LabelName[0].style.textAlign = 'center';
LabelName[0].innerHTML = 'Email';

let input = document.getElementsByTagName('input');
input[0].value = 'email';
input[1].value = 'Send';
input[1].style.backgroundColor = 'red';
input[1].style.border = 'none';

let Label2 = document.getElementsByTagName('label');
Label2[1].innerHTML = 'Select Your Product';
let items = document.getElementById('items');

let listItems = document.getElementsByClassName('list-group-item')

for (let i = 0; i < listItems.length; i++) {
    const element = listItems[i];
    /* element.style.backgroundColor = 'yellow' */
    /* console.log(element); */
    
}

for (let i = 0; i < input.length; i++) {
    const element = input[i];
    /* console.log(element); */
}

// QuerySelector
const titles = document.querySelectorAll('.list-group-item');
/* console.log(titles); */
titles.forEach(title =>
{
    /* console.log(title); */
    /*titles[0].style.backgroundColor = 'yellow';
    titles[0].textContent = 'Item 1'
    titles[1].style.backgroundColor = 'red';
    titles[1].textContent = 'Item 2'
    titles[2].style.backgroundColor = 'green';
    titles[2].textContent = 'Item 3'
    titles[3].style.backgroundColor = 'blue';
    titles[3].textContent = 'Item 4' */
    
    const arrayTitles = [...titles];
    /* console.log('Distructuring', arrayTitles); */
    arrayTitles.forEach(title =>
    {
        title.innerHTML = 'yellow';
    });
})






