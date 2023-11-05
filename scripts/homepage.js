let container = document.getElementById("h_p_container");
let xhr=new XMLHttpRequest();

xhr.open("Get","https://jsonplaceholder.typicode.com/users",true);


xhr.onload=function()
{
    let response=JSON.parse(this.responseText);
    console.log(response);
    for(let x in response){
        let obj =response[x];
        let html =
        `<ul class ="card">
            <li>user id: ${obj.id}</li>
            <li>user name: ${obj.name}</li>
            <li>user username: ${obj.username}</li>
            <li>user email: ${obj.email}</li>
            <li>user address: ${obj.address.street + ""+obj.address.suite + ""+ obj.address.city+""+ obj.address.zipcode + " "  + "" + obj.address.geo.lat+" "+ obj.address.geo.lng}</li>
            <li>user phone: ${obj.phone}</li>
            <li>user website: ${obj.website}</li>
        </ul>`
        //$("#container").innerHtml(html);
        container.innerHTML+=html;
       
    }; 
};


xhr.send();