//"c4q"[1] ==> "4"
//[1,2,3][2]==> 3

//var o; 
//o["quantity "] ==> 56
/*var rooms = [
    {
        price: 200,
        location: "11 broadway, NY",
        maxOccupants: 3, 
        ammenities: ["washer/dryer", "wifi",]
    },
    {
        price: 100,
        location: "11 delancey, NY",
        maxOccupants: 1,
        ammenities: []

    }
];

function padTo(str, len) {
    if(str.length > len) {
        return str.slice(0, len - 3) + "..."
    }
    else if (str.length === len) {
        return str    
    }
    else {
        var spacesNeeded = len -str.length;
        for (var i = 0; i < spacesNeeded; i++) {
            str += " ";
            
        }

        return str;
    }
}

function whatIsAvailable(rooms){
    for(var i = 0; i < rooms.length; i++ ){
        console.log(
            padTo(
            rooms[i].location, 20), 
             " ",
             rooms[i].price);
    }
}

whatIsAvailable(rooms)
************************************


var favoriteRecipe = {
    title: "Banana Nice Cream",
    numberOfServings: 1,
    ingridients:["1 ripe banana", "1/2 teaspoon vanilla extract", "2 tbs peanut butter"]
} 

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function readRecipe(recipe){
    console.log("Title: " + favoriteRecipe.title);
    console.log("Servings: " + favoriteRecipe.numberOfServings);
    console.log("Ingredients" + bulletPoints(favoriteRecipe.ingridients));

}
readRecipe(favoriteRecipe)
****************************************

var cat = {
    family: 'Felidae',
    genus: 'Felis',
    species: 'Catus' 
  }
  
  function getProps(prop){
   return Object.getOwnPropertyNames(prop)
  }

  //console.log(getProps(cat))

  function getObjects(obj) {
   
      var objToArray = Object.getOwnPropertyNames(obj).length
      
          
      }

  console.log(getObjects(cat))
**************************************

  var films = [
    { 
       title: 'Wonder Woman',
       director: 'Patty Jenkins',
       alreadyWatched: true
     }, { 
       title: 'Inception',
       director: 'Christopher Nolan',
       alreadyWatched: false
     }
  ]
  
  function logFilms(films) { 
    for (var i = 0; i < films.length; i += 1) {
       if (films[i].watched) {
         console.log('You already watched ' + films[i].title + ' by ' + films[i].director)
       } else { 
         console.log('You still need to watch ' + films[i].title + ' by ' + films[i].director)
       }
     }
  }
  ********************************


  function and(x,y) {
    
         if (x === true && y === true){
    
               return true
    
             } else { return false }
    
        } 
        console.log(and("happy string",[ ]))
*******************************************

function isAnumber(num) {return typeof num}
function addOnlyNumber(foo, bar) {
            
    if (isAnumber(foo) === Number  && isAnumber(bar) === Number){
           
        return foo + bar
            
        } else {
            return "NaN"
            
        }
 }
 console.log(addOnlyNumber("fidget spinner", 22))
 //****************************
  */   
  function isAnumber(num) {return typeof num}   
  function isAllNum(arr) { 
 for (var i = 0; i < arr.length - 1; i++) {
     var element = [i];
     if(isAnumber(element) === Number) {
         console.log(element)
     //} else {
         //return false
    // }
    }
  }
}
     console.log(isAllNum([1, 2, 3, 4]))
     
 
          
