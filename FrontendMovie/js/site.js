//JQUERY
//selector $

$(document).ready(function(){

    var apiUrl="https://localhost:7273/api/movie";
    var movieBody=$("#movieBody");

    //AJAX

    $.ajax({
        url:apiUrl+"/getmovies",
        type:'Get',
        success:function(response){
            GetMovieTable(response);
            console.log(response);
        },
        error:function(err){
            //console.log(err);
            if(err.status===404){
                alert("Veriler bulunamadı");
            }
        },
    })

    //Verileri tabloya dahil etme.
    function GetMovieTable(data){
        var movieBody=$("#movieBody");
        data.forEach(function(val,index){
            movieBody.append(`
            <tr>
                <td>
                <a id="${val.id}" name="movieDetailLink" 
                class="movieDetailClass" href="#">${val.title}</a>
                </td>
                <td>${val.description}</td>
                <td>${val.rank}</td>
                <td>
                    <button class="btn btn-sm btn-warning">Update</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
            `)
        })

        $(".movieDetailClass").on("click",function(e){
            const h1=document.createElement("h1");
            h1.innerText=e.target.innerText;
            const p=document.createElement("p");
            const span=document.createElement("span");

            $("#movieDetail").html(h1);
            console.log(e)
        })

    }

    //Verileri post etme.
    function CreateMovie(){
        const movieName=$("#movieName").val();
        const movieGenre=$("#movieGenre").val();
        const movieDescription=$("#movieDescription").val();
        const movieRank=$("#movieRank").val();

        const movie={
            "title":movieName,
            "description":movieDescription,
            "genre":movieGenre,
            "rank":movieRank
        };

        
        $.ajax({
            url:apiUrl+"/createmovie",
            type:"Post",
            data:movie,
            success:function(response){
                var movieBody=$("#movieBody");
            movieBody.append(`
                <tr>
                    <td>
                    <a id="${response.id}" name="movieDetailLink" class="movieDetailClass" href="#">${response.title}</a>
                    </td>
                    <td>${response.description}</td>
                    <td>${response.rank}</td>
                    <td>
                        <button class="btn btn-sm btn-warning">Update</button>
                        <button class="btn btn-sm btn-danger">Delete</button>
                    </td>
                </tr>
            `)

            },
            error:function(err){
                console.log(err);
            }
        })
    }

    $("#btnCreate").click(function(e){
        CreateMovie();

        e.preventDefault();
    })


})
