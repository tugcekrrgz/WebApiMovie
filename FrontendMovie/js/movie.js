window.onload=function(){

    var sampleApiUrl="https://jsonplaceholder.typicode.com/posts";

    var sampleDataArray=[];


    var movieBody=document.getElementById("movieBody");
    var rank=10;
    // movieBody.innerHTML=`
    // <tr>
    //     <td>Test Movie Name</td>
    //     <td>Test Movie Description</td>
    //     <td>${rank}</td>
    //     <td>
    //         <button class="btn btn-warning btn-sm">Update</button>
    //         <button class="btn btn-danger btn-sm">Delete</button>
    //     </td>
    // </tr>
    // `;

function GetMovies(){
    //api call
    
    fetch(sampleApiUrl)
        .then((res) => res.json())
        .then(function(data){
            data.forEach(function(val,index){
                var tr=document.createElement('tr');
                var td1=document.createElement('td');
                var td2=document.createElement('td');
                var td3=document.createElement('td');
                var tdBuuttons=document.createElement('td');
        
        
                td1.innerHTML=val.userId;
                td2.innerHTML=val.title;
                td3.innerHTML=val.body;
                tdBuuttons.innerHTML=`<button class="btn btn-sm btn-warning">Update</button>
                <button class="btn btn-sm btn-danger">Delete</button>`
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                tr.append(tdBuuttons);
        
                movieBody.append(tr);
            })});
}
GetMovies();

}
