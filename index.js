let user = {
    year: 2008,
    growth: 157,
    weight: 38,
    skin_color: 'sunburnt',
    school: 17,
    future_profession: ['programmer', 'president'],
    favorite_activities:['read books' , 'to spoil everyone`s mood' , 'to cook' , 'and so on']
 
} 
  passport = {
    name: 'Aziza',
    surname: 'Fazliddinova',
    patronymic: 'Shokhrukhovna',
    date_of_birth: 2008_05_14,
    gender: 'female',
    id_number: 245263453570989,
    parents: {
        mother: 'Gulnoza Rakhimova',
        father: 'Firuz Sayfiyev'
    }
}

let a= Object.assign({}, user, {passport})
let value = Object.values(a)
let keys = Object.keys(a)
let i = Object.assign({}, value , {keys})
let types = {
    string:[],
    number:[],
    object:[],
    boolean:[]
}
console.log(a , value , keys , i );
