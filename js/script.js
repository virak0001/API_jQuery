$(document).ready(function () {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=pink+animals&image_type=photo&pretty=true";
    $.getJSON(
        url,
        function (data) {
            var resutl = "";
            data.hits.forEach(element => {
                const {user,largeImageURL,userImageURL} = element;
                resutl +=
                    `
                        <div class="card-body">
                        <img src="${userImageURL}" width="30" class="rounded-circle"> ${user};
                        </div>
                        <div class="card-body">
                        <img src="${largeImageURL}" class="img-fluid">
                        </div>
                    `
            });
            $('#card').append(resutl);
        }
    );
})
