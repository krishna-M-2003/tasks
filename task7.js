var i = "";
var type = "";

document.getElementById("update").style.display="none";
document.getElementById("addPerson").style.display="block";

function popUpClose(){
    document.getElementById("update").style.display="none";
    document.getElementById("Save").style.display="block";
    document.getElementById("updatePerson").style.display="block";
}
function Save() {

    debugger;
    var Id = document.getElementById("rNo").value;
    var FStName = document.getElementById("FStName").value;
    var LStName = document.getElementById("LStName").value;
    var Gender = document.getElementById("Gender").value;
    var Address = document.getElementById("Address").value;
    var birthday = document.getElementById("birthday").value;

    if (Id == "") {
        alert("id is required");
        
        return false;
        
    }

    if (FStName == "") {
        alert("FirstName is required");
        return false;
    }

    if (LStName == "") {
        alert("LastName is required");
        return false;
    }

    if (Address == "") {
        alert("Address is required");
        return false;
    }

    if (birthday == "") {
        alert("birthday is required");
        return false;
    }

    let obj = {
        "FirstName": FStName,
        "LastName": LStName,
        "Gender": Gender,
        "Address": Address,
        "birthday": birthday,
        "Id": Id,
    }



    let data = getLocalStorageData();


    if (data?.length > 0 || data != null) {
        data.push(obj);
        var convString = JSON.stringify(data);

        localStorage.setItem("personDetails", convString);
    }
    else {
        let convertArray = [obj];

        var convString = JSON.stringify(convertArray);

        localStorage.setItem("personDetails", convString);
    }

    $("#closepopup").click

    getAllPersonDetails(); 


    //    getAllPersonDetails();
    // return true;
}

function getLocalStorageData() {
    var returnData = localStorage.getItem("personDetails");

    var parsedData = JSON.parse(returnData);


    return parsedData;
}

function getAllPersonDetails() {


    var allPersonDetailsData = localStorage.getItem("personDetails");


    var hst = document.getElementById("highscores");

    hst.innerHTML ='';

    allPersonDetailsData = JSON.parse(allPersonDetailsData);

    for (var i = 0; i < allPersonDetailsData.length; i++) {
        hst.innerHTML += "<tr><td>" + allPersonDetailsData[i].Id + "</td><td>" + allPersonDetailsData[i].FirstName + "</td><td>" + allPersonDetailsData[i].LastName + "</td><td>" + allPersonDetailsData[i].Gender + "</td><td>" + allPersonDetailsData[i].Address + "</td><td>" + allPersonDetailsData[i].birthday + `</td><td><button class='btn btn-warning' data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='Edit(${i})'>Edit</button><button class='btn btn-danger' onclick='Delete(${i})'>Delete</button>` + "</td></tr>";
    }

}
getAllPersonDetails();

function Delete(i) {
    debugger;
    var localStorageData = getLocalStorageData();
    localStorageData.splice(i, 1);

    var convString = JSON.stringify(localStorageData);

    localStorage.setItem("personDetails", convString);
    getAllPersonDetails();

}

function Edit(index) {
    debugger;
    type = "update";
    i = index;
    var localStorageEditedData = getLocalStorageData();

    var editableObject = localStorageEditedData[index];



    document.getElementById("rNo").value = editableObject.Id;
    document.getElementById("FStName").value = editableObject.FirstName;
    document.getElementById("LStName").value = editableObject.LastName;
    document.getElementById("Gender").value = editableObject.Gender;
    document.getElementById("Address").value = editableObject.Address;
    document.getElementById("birthday").value = editableObject.birthday;
    
    // add none ,block
    document.getElementById("Save").style.display="none";
    document.getElementById("update").style.display="block";

    document.getElementById("addPerson").style.display="none";
    document.getElementById("updatePerson").style.display="block";

    document.getElementById("update").style.display="block";
    document.getElementById("Save").style.display="none";
    document.getElementById("addPerson").style.display="none";
    document.getElementById("updatePerson").style.display="block";

    

}

function update(){
    
    


    var localStorageData = getLocalStorageData();


    var Id = document.getElementById("rNo").value;
    var FStName = document.getElementById("FStName").value;
    var LStName = document.getElementById("LStName").value;
    var Gender = document.getElementById("Gender").value;
    var Address = document.getElementById("Address").value;
    var birthday = document.getElementById("birthday").value;

    let obj = {
        "FirstName": FStName,
        "LastName": LStName,
        "Gender": Gender,
        "Address": Address,
        "birthday": birthday,
        "Id": Id,
    }

    localStorageData[i] = obj;

    localStorageData = JSON.stringify(localStorageData);
    localStorage.setItem("personDetails",localStorageData);

    getAllPersonDetails();

    
}


function openCreatePopUp(){

    document.getElementById("update").style.display="none";
    document.getElementById("Save").style.display="block";
    document.getElementById("addPerson").style.display="block";
    document.getElementById("updatePerson").style.display="none";

    
    document.getElementById("rNo").value = null;
    document.getElementById("FStName").value = null;
    document.getElementById("LStName").value = null;
    document.getElementById("Gender").value =  null;
    document.getElementById("Address").value =  null;
    document.getElementById("birthday").value =  null;
    
}