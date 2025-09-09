let todo=[];

let req=prompt("enter your request");

while(true){
    if(req=="quit"){
        console.log("closing todo app....");
        break;
    }
    else if(req=="list"){
        console.log("----------------------");
        for (let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("----------------------");
    }
    else if(req=="add"){
        let task=prompt("enter your task");
        todo.push(task);
        console.log("task added");  
        console.log("----------------------");
    }
    else if(req=="delete"){
        let index=prompt("enter the index of task you want to delete");
        todo.splice(index,1);
        console.log("task deleted");
    }
    else{
        console.log("invalid request");
    }
    req=prompt("enter your request");
}