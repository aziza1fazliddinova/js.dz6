// let user = {
//     year: 2008,
//     growth: 157,
//     weight: 38,
//     skin_color: 'sunburnt',
//     school: 17,
//     future_profession: ['programmer', 'president'],
//     favorite_activities: ['read books', 'to spoil everyone`s mood', 'to cook', 'and so on']

// }
// let passport = {
//     name: 'Aziza',
//     surname: 'Fazliddinova',
//     patronymic: 'Shokhrukhovna',
//     date_of_birth: 2008_05_14,
//     gender: 'female',
//     id_number: 245263453570989,
//     parents: {
//         mother: 'Gulnoza Rakhimova',
//         father: 'Firuz Sayfiyev'
//     }
// }

// let a= Object.assign({}, user, {passport})
// let value = Object.values(a)
// let keys = Object.keys(a)
// let arr = [...keys, ...value]
// let types = {
//     string:[],
//     number:[],
//     object:[],
//     boolean:[]
// }
// arr.map(item => {
//     if(typeof(item)==='string'){
//        types.string.push(item)
//     }else if(typeof(item)==='number'){
//     types.number.push(item)
// }
//     else if(typeof(item)==='boolean'){
//         types.boolean.push(item)
//     }
//     else if(typeof(item)==='object'){
//         types.object.push(item)
//     }
// })

// console.table(a , value , keys , arr );


// arr.map(item => {
//     let keys = typeof(item)
//     types[keys].push(item)
// })
// console.table(types);
// // let aaa = prompt("detali")
// let detailes = "year"
// console.log(
//     a[aaa]
// );


// let user = {
//     name: "Ismail",
//     surname: "Adams",
//     age: 12,
//     school: 9,
//     address: "new york",
//     passport: {
//         serries: "AC",
//         numbers: 12324124,
//         date: 2027,
//         date_exp: 2037,
//         visas: ['italy', 'usa', 'russia', 'UAE']
//     },
//     wifes: ['tangir', 'mohinur', 'olesya', 'allayor'],
// }

// const car = {
//     marka: "gm",
//     model: "malibu",
//     price: 33000,
//     engine: 2.4,
//     wheels: 5,
//     color: "white",
// }

// let types = {
//     string: [],
//     number: [],
//     boolean: []
// }

// let new_object = Object.assign({}, user, {car})
// let keys = Object.keys(new_object)
// let values = Object.values(new_object)
// let arr = keys.concat(values)

// arr.forEach((item )=> {
//  let a = typeof(item)
//  if(types[a]){
//     types[a].push(item)
//  }
// })

// console.log(types);

let arr =[
   {
    name:'aziza',
    age: 15,
    isMarried: false
   },
   {
    name:'amira',
    age: 16,
    isMarried: false
   },
   {
    name:'dilrukh',
    age: 16,
    isMarried: false
   },
   {
    name:'bobur',
    age: 18,
    isMarried: true
   },
   {
    name:'artem',
    age: 13,
    isMarried: true
   },
   {
    name:'aziza b',
    age: 15,
    isMarried: true 
   }
]


let married =[]
let single = []


let average_age = arr.reduce((a,b) =>{
   return a+b.age
},0)
console.log('средний возвраст'+' '+average_age/arr.length);

arr.forEach((item )=>{
   if(item.isMarried===true){
      married.push(item.name)
   }
   else{
      single.push(item.name)
   }
})
console.log('женатые:' +' '+married);
console.log('не женатые:'+' '+single);