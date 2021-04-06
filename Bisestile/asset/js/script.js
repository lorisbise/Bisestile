const printDisplay = document.getElementById("print")


function bisesti(year) {
  if(year % 400 ===0){
    printDisplay.innerHTML = '<div class="alert alert-success" role="alert" id="succes">'+ 'L\'anno inserito è il '+year+' ed è al 100% un anno Bisestile' +'</div>'
  }else if (year % 4 ===0 && !year % 100 ===0){
    printDisplay.innerHTML = '<div class="alert alert-success" role="alert" id="succes">'+ 'L\'anno inserito è il '+year+' ed è  un anno Bisestile' +'</div>'
  }else{
    printDisplay.innerHTML = '<div class="alert alert-warning" role="alert" id="warning2">'+ 'L\'anno inserito è il '+year+' e NON è un anno Bisestile' +'</div>'
  }
}

//PRENDO ANNO IN INPUT
function inputNumbere() {
  let year = document.getElementById("inputNumber").value;
    if(year && year>0 ){
        bisesti(year);
    }else {
    printDisplay.innerHTML = '<div class="alert alert-danger" role="alert" id="warning"> Inserisci un anno valido </div>'
    }
}
