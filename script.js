input.forEach((e)=>{
    e.addEventListener("click", (Event)=>{
        if(Event.target.value== "="){
            if(value.length !=0){
                let newval=eval(value);
                value=newval;
                display.value=value;
            }
        }
        else if(Event.target.value == 'C'){
            value="";
            display.value = value;
        }
        else if(Event.target.value=="switch"){

        }
        else{
            value += Event.target.value;
            display.value = value;
        }

        if(!Event.target.classList.contains("switch")){
            Event.target.classList.add("active");
            setTimeout(()=>{
                Event.target.classList.remove("active");

            },400)
        }
    });
});