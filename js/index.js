//getting the values from html using jquery


const seat_elements = document.querySelectorAll(".seat_row > .seat");
let seatSelection=[];
let movie_name="";
let money=0;
//adding all the event listeners to the elements

seat_elements.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        let seat_style = window.getComputedStyle(e.target);
        if (seat_style.backgroundColor == 'rgb(128, 128, 128)') {
            element.style.boxShadow = 'none';
            element.style.pointerEvents = 'none';
        }
    });

    element.addEventListener("click", (e) => {
        
        money=money+10;
        $(element).off('click');
        if (element.style.pointerEvents != 'none') {
            element.style.backgroundColor = 'aqua';
        }
        const classOfElement=e.target.className;
        if(seatSelection.includes(classOfElement))
        {
            console.log("you have already selected this seat");
        }
        else
        {
        document.getElementById("money").innerText=money;
         seatSelection.push(e.target.className);
         console.log(seatSelection);
        }

    });

    element.addEventListener('dblclick',(e)=>{

        money=money-30;
        document.getElementById("money").innerText=money;

        let element_bgcolor=window.getComputedStyle(e.target).backgroundColor;
        if(element_bgcolor == 'rgb(0, 255, 255)'){
            element.style.backgroundColor='#ffffff';
        }
        const classOfElement=e.target.className;
        
        if(seatSelection.includes(classOfElement))
        {
        const indexOfElement=seatSelection.indexOf(classOfElement);
        seatSelection.splice(indexOfElement,1);
        console.log(seatSelection);
        }

    })
});

//adding event listeners to select the movie and store it using local storage 

document.getElementById("selectMovie").addEventListener("change",()=>{
    movie_name=$(".input_box").val();
});

$("#saveButton").click((e)=>{
    localStorage.setItem('movie', JSON.stringify(movie_name));
    seatSelection.forEach(Class=>{
        let get_element=document.getElementsByClassName(Class);
        get_element[0].style.backgroundColor='#808080';
        localStorage.setItem('money',JSON.stringify(money));``

        // let get_style=window.getComputedStyle(get_element[0]).backgroundColor;
    });
})


