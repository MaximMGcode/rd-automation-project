
//  User data
const age = 23;
const cash = 2;
const creditCard = 30000;
const whiskeyPrice = 15;
const hasPassport = true;
const vacationFreeDays = 7;
const favoriteWhiskeyTittle = 'Jameson Irish';
const city = 'Valencia';
const jobTitle = 'Developer';
const salaryEnoughForLive = true;

//  logical operation
const canBuyAlcohol = age >= 18 &&
                   hasPassport &&
                   (cash >= whiskeyPrice ||
                   creditCard >= whiskeyPrice);
console.log(canBuyAlcohol);

const isNotFavoriteDrink = 'Captain Morgan' != favoriteWhiskeyTittle;
console.log(isNotFavoriteDrink);

const canGoToItaly = vacationFreeDays > 0 && creditCard > 1000;
console.log(canGoToItaly);

const isVisitCity = city === 'Valencia';
console.log(isVisitCity);

const canWorkRemoteInItaly = jobTitle == 'Developer' && salaryEnoughForLive;
console.log(canWorkRemoteInItaly);
