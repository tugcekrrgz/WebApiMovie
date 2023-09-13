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
                <td>${val.title}</td>
                <td>${val.description}</td>
                <td>${val.rank}</td>
                <td>
                    <button class="btn btn-sm btn-warning">Update</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
            `)
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

        console.log(movie);
    }

    $("#btnCreate").click(function(e){
        CreateMovie();

        e.preventDefault();
    })


})
