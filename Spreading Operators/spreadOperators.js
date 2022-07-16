const arrayOne = ['Pinto', 'Adriano', 'Joao', 'Raul'];
const arrayTwo = ['Manuel', 'Manuel', 'Fernandes', 'Paulino'];

/* Spreead Operators */
const arrayThree = [ ...arrayOne, ...arrayTwo];
/* console.log(arrayThree); */

arrayThree.forEach(name =>{
    /*console.log(name); */
    const nameArray = [...name];
  /*   console.log(nameArray); */
})

/* const Address = {
    'city': 'Sao Paulo',
    'country': 'Brazil',
    'postCode': '01310-000',
    'street': 'Rua dos Bobos'
};

const names = {
    firstName: 'Pinto',
    lastName: 'Manuel',
}

const result = { ...Address, ...names };
console.log(JSON.stringify(result)); 
console.log(document.write(JSON.stringify(result)));
document.write(JSON.stringify(`City: ${result.city}`))
document.write(JSON.stringify(`Country: ${result.country}`))
document.write(JSON.stringify(`Street: ${result.street}`))  

for(const key in Address){
   if(Address.hasOwnProperty(key)){
       console.log(`${key}: ${Address[key]}`); 
   }   
}

Object.values(Address).forEach(val => {
    return `<li class="list-group-item">{val.city}</li>`;
})
 */


/* Lexical this */
let person = {
    name: 'John',
    cars: ['Mercedez', 'Toyota'],

    
    PersonWeath: function (){
       /*  console.log(`${this.name} has ${this.cars}`); */
        this.cars.forEach(car => {
          /*   console.log(`${this.name} has ${car}`); */
        });
    }
}

person.PersonWeath();

const car = { ...person }
/* console.log(car); */


/* Object Destructuring */
const getUser = () => {
    return {
        Firstname: 'Pinto',
        surname: 'Manuel',
        age: '33',

        address: {
        country: 'Angola',
        city: 'Kwanza Sul',
        postCode: '123',
        fullAddress: {
            doorNumber: '22',
            street: 'Rua principal do binbe',
             qualification: {
                 qualTitle: 'BSc Information Technology',
                 YearGrad: '2018',
                 hightMark: '83',
                 subjects: 'Programming',
                 profession: {
                     profeName: 'Software Engineer',
                     Area: 'Software Frontend Web Developer',
                     CurrenEmployed: 'Yes', 
                     CompanyName: 'Fireworkx Technology',
              }
            },
            personalDetails: {
                phoneNumber: '083-52-70-710',
                email: 'pintotnet@gmail.com',
            }
        }
      }
    }
}

const user = getUser()
/* console.log(user); */

const dorNumber = user.address.fullAddress.doorNumber;
console.log(dorNumber);

const {Firstname, surname, age } = user
console.log(`Name ${Firstname}, Surname ${surname}, Age ${age}`, user);

const { address: myOwnAddress } = user
console.log(myOwnAddress.city);
console.log(myOwnAddress.country);
console.log(myOwnAddress.postCode);

const {address: {fullAddress: {qualification: {qualTitle: qualification, YearGrad: Year, hightMark: Mark, subjects: SubjectPass } }}} = user

console.log(`Course: ${qualification}, Year Grad: ${Year}, Highest Mark: ${Mark}, Subject: ${SubjectPass}`);





/* Array Destructuring */
const Fruits = ['Apple', 'Orange', 'Banana', 'Avocado'];
const myFruit = [fruit1, fruit2, fruit3, fruit4] = Fruits;
console.log(myFruit);

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);



/* Classes */
/* class Animal {
    constructor(name, age){
        console.log(`${name} ${age}`);
        this.name = name;
        this.age = age;
    }
    eat(){
      console.log(`${this.name} is eating`);
    }
    sleep(){ 
        console.log(`${this.name} is sleeping`);
        
    }
    run(){ 
       console.log(`${this.name} is running`);
    }
    wakeUp(){
        console.log(`${this.name} is waking up`);
    }
}

const bobby = new Animal('Bobby', `Age ${3} years old`)
bobby.eat();
bobby.sleep();
bobby.run();
bobby.wakeUp();


class Cat extends Animal {
     constructor(name, age, color){
         super(name, age);
         this.color = color;
    }
    meOw(){
        console.log(`${this.color} cat ${this.name} ${this.age}`); 
    }
}
const perry = new Cat('Perry', `is ${5} iYears old`, 'white')
console.log(perry);
perry.meOw(); */






/* Async and Await */
const getRamdomUser = async (n) =>{
    try {
        const fetchRandomUsers = await
        fetch(`https://randomuser.me/api/?results=${n}`)
        const data = await fetchRandomUsers.json();  
        data.results.forEach(user =>{
            const { gender, email } = user;
            console.log(`${gender} ${email}`);
        });
        return data;
    } catch (error) {
         console.log(error); 
    }
}

getRamdomUser(20)
