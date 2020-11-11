
function select_number(){
    let table = document.getElementById("table1");

    table.onclick = function(event){
        let target = event.target;
        if(target.tagName != 'TD') return;
        target.style.backgroundColor = 'red';
    }
}
function clear_table(){
    let table = document.getElementById('table1');
    let rowsNumber = table.rows.length;
    let columnsNumber = table.rows[0].cells.length;
    for(let i = 0; i < rowsNumber;i++){
        for(let j = 0; j<columnsNumber; j++){
            if( table.rows[i].cells[j].style.backgroundColor == 'red')
                table.rows[i].cells[j].style.backgroundColor = '#252F48';
        }
    }
    let result = document.getElementById('sum-selected-numbers');
    result.innerHTML = "";
    
}
function sum_selected_items(){
    let result = document.getElementById('sum-selected-numbers');
    result.innerHTML = "Результат: ";
    let sum = 0;
    let table = document.getElementById('table1');
    let rowsNumber = table.rows.length;
    let columnsNumber = table.rows[0].cells.length;
    for(let i = 0; i < rowsNumber;i++){
        for(let j = 0; j<columnsNumber; j++){
            if( table.rows[i].cells[j].style.backgroundColor == 'red')
            {   
                sum = sum +  parseInt(table.rows[i].cells[j].innerHTML);
            }
                
        }
    }
    
    result.innerHTML +=  sum;
}

function hideSecondBlock(){

    let block = document.getElementById("block-2");
    block.style.display = "none";
}

function hideFirstBlock(){

    let block = document.getElementById("block-1");
    block.style.display = "none";
    
}
