const accountId = 144553
let accountEmail = "kvenketesh@gmail.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState = "Karnataka"
//prefer not to use var
//because of issue in block scope and fuctional scope

accountEmail = "kvd@gmail.com"
accountPassword = "000000"
accountCity = "Bhubaneswar"

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

