$(document).ready(function () {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=pink+animals&image_type=photo&pretty=true";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (data) {
            var result = "";
            data.hits.forEach(element => {
                const { user, largeImageURL, userImageURL } = element;
                result +=
                `
                    <div class="col-4">
                        <div class="card mt-5">
                            <div class="card-header">
                                <img src="${userImageURL}" class="rounded-circle" width="30">${user}
                            </div>
                            <div class="card-body">
                                <img src="${largeImageURL}" class="img-fluid" height: 200px; >
                            </div>
                        </div>
                    </div>
                 
                `
            });
            $("#card").append(result);
        }
    })
})