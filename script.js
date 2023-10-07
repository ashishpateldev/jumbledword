
const guess = document.querySelector('.hidden');
const btn = document.querySelector('.btn');
const msg = document.querySelector('.msg');
const main = document.querySelector('.main');
const head = document.querySelector('.head');
const gif = document.querySelector('.hiddengif');

let play = false;
let newCityName = " ";
let randWords = " ";

let citysNames = ['mumbai','pune','delhi','kolkata','patna','newyork','maharastra','',
'jaipur','mizoram','hyderabad','kolkata','lucknow','nagpur','kanpur','vadodara'];

//calling random cities names
const citys = () =>{
      let ranCity = Math.floor((Math.random() * citysNames.length));
     // console.log(ranCity);

     //to print city names 
     let newCity = citysNames[ranCity];
//      console.log(newCity.split(""));
     return newCity;

}

//to scramble the city names words
const scrambleWords = (arr) =>{
      for (let i = arr.length-1; i>0; i--){//arr.length -1 bcause  index is -1 than length
      let temp = arr[i];
      // console.log(temp);

      let j = Math.floor(Math.random()*(i+1)); //variable to generate random index number & i is +1 bacause above we have used -1 
      // console.log(i);
      // console.log(j);

      arr[i] = arr[j] //swap program to put j index into value into i
      arr[j] = temp;
}
      return arr;
}


btn.addEventListener('click', function(){
     if(!play){
      play = true;
      btn.innerHTML = "Guess";
      guess.classList.toggle('hidden');
      newCityName = citys();
      randWords = scrambleWords(newCityName.split("")).join("");
      msg.innerHTML = randWords;
     } 
     else{
      let tempWord = guess.value;
      if(tempWord === newCityName){
            main.style.background = "#0be881";
            head.innerHTML = "You are correct";
            gif.classList.toggle('hiddengif');
            btn.style.display = "none"; //button hide after answer is correct
            guess.style.display= "none"; // input hide after answer is correct
            msg.style.display = "none"; // the jumbled word will hide after answwer is correct
      }else{
            main.style.background = "red";
            head.innerHTML = "You are wrong";
      }
     }
})