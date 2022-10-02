
// Get the button that opens the modal
var btn = document.getElementById("client__newBtn");

// Get the modal
var modal = document.getElementById("client__myModal");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("client__close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function myFunction() {
    
    var invalue = document.getElementById("client__Newinput");
    var value = invalue.value;
    var inAlert = document.getElementById("client__alert")
    var imgBox = document.querySelector(".client__content__container")

    var lsGet = localStorage.getItem("client");
    var data =[];

    if(value.length === 0){
        // alert("null")
       //  console.log(value)
       inAlert.innerHTML = "Client Name is required."
       inAlert.style.color = "red";
       inAlert.style.fontSize= "10px"
       inAlert.style.margin= "0";
       invalue.style.border = "1px solid red"
      
    }else{
        // console.log(value)
       if(lsGet === null){
           data = [];
       }else{
           data = JSON.parse(lsGet);
       }
       data.push({client_name : value})

       localStorage.setItem("client",JSON.stringify(data))

       inAlert.innerHTML = "";
       invalue.style.border = "1px solid black"
       modal.style.display = "none";
       imgBox.innerHTML= "";
    
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){
             x.className = x.className.replace("show", ""); 
          }, 3000);
         display();   

    }
  }

  function display(){

    var lsGet = localStorage.getItem("client");
    var imgBox = document.querySelector(".client__content__container")
    imgBox.innerHTML= "";
    modal.style.display = "none";



    if(lsGet === null){
        data = [];
    }else{
        data= JSON.parse(lsGet);
    }


    let html = "";
    var list = document.getElementById("client__list")
    var src= "https://e7.pngegg.com/pngimages/179/938/png-clipart-computer-icons-hamburger-button-dots-kebab-menu-text-rectangle-thumbnail.png"

    data.forEach(function(item, index){
        
        html += `
        <tr>
         <td>
             <div class="dropdown">

                <button class="dropbtn" id="client__moreBtn" >${item.client_name}
                <img src= "${src}"></img> 
                </button>

                <div class="dropdown-content">
                    <button id="dropdown_delete" onclick="deleteItem(${index})"> Delete </button>
                 </div>
            </div>
        </td>
        <tr/>
        `;
        
    });
       
    list.innerHTML = html;
    document.getElementById("snackbar").innerHTML="<span> Successful! </span> </br/> Client created Successfully";

  }

  function deleteItem(index){
        
        var task = localStorage.getItem("client");
        var taskObj = JSON.parse(task);
        taskObj.splice(index,1);               
        localStorage.setItem("client", JSON.stringify(taskObj));
        display();

        var x = document.getElementById("snackbar");

        x.innerHTML = "<span> Deleted! </span> </br/> Client Deleted Successfully";

        x.className = "show";
        setTimeout(function(){
             x.className = x.className.replace("show", ""); 
        }, 3000);
   }

  //  function editItem(index){

  //   var edit_text = document.getElementById("client__moreBtn")
  //   edit_text.textContent = "abc";
    
  //   var task = localStorage.getItem("client");

  //   var taskObj = JSON.parse(task);
  //   taskObj[index] = {client_name : "User"}
  //   console.log(taskObj)
  //   localStorage.setItem("client", JSON.stringify(taskObj))
        
  //   }
            

    // <button id="edit__btn" onClick="editItem(${index})"> Edit </button>
