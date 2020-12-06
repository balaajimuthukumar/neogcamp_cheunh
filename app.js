var buttonTranslate = document.querySelector("#btn-translate");
var translator = document.querySelector("#translator");
var languageInput = document.querySelector("#mylanguageInput");


let inputvalue = "";
let output = "";

//This function is triggered by oninput event added in the html tag
//This functino will listen to each and every element you store and 
//returns it dynamically
function getValue(){
    inputvalue = languageInput.value;
    console.log(inputvalue);
}

//This is an event listener to listen the button(Translate button) click event 
buttonTranslate.addEventListener("click",function (){
    let url = "https://api.funtranslations.com/translate/minion.json";
    url = url+"?text="+inputvalue;
    translator.innerText = "";
    //The fetch function is asynchronous and waits till
    // a promise has returned
    fetch(url,{
        header:{
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Request-Method':'*',
            'Access-Control-Allow-Methods':'OPTIONS, POST',
            'Access-Control-Allow-Headers':'*'
        }
    }).then(response => 
        response.json()
    ).then(json => {
        output = "";
        output = json.contents.translated;
        console.log(output);
        translator.innerText = output;
    }).catch((err)=>{
        console.error("Error:",err);
    })
});
