let a=Symbol();
let b=Symbol();
console.log(a==b)  //-->false
let obj={"name":"Alex"}
obj.lastName="G"
console.log(obj)  //-->{name: "Alex", lastName: "G"}
obj.name="Ben"
console.log(obj) //-->{name: "Ben", lastName: "G"}
let c=Symbol("city")
obj[c]="Tel Aviv"
console.log(obj) //-->{name: "Ben", lastName: "G", Symbol(city): "Tel Aviv"}
let d=Symbol("city")
obj[d]="Jerusalem"
console.log(obj) //--> {name: "Ben", lastName: "G", Symbol(city): "Tel Aviv", Symbol(city): "Jerusalem"}
console.log(obj[c])  // -->"Tel Aviv"
