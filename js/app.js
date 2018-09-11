$(document).ready(function(){
    $('#btn').on('click',function(){
        $('#spinner').show();
       var job =  $('#searchJob').val();
       var location = $('#location').val();

        $.ajax({
            type:'GET',
            url:'https://jobs.github.com/positions.json?description='+job+'&location='+location,
            dataType:'json'
        })
        .done(function(response){
           
           $('#profile').html(`
           <br><br>
           <div class="row">
             <div class="col-md-3">
             <img src="${response[0].company_logo}">
             <br><br>
             <span class="badge badge-warning">${response[0].company}</span><br>
             <span class="badge badge-danger">${response[0].title}</span><br>
             <span class="badge badge-success">${response[0].type}</span>
             
             </div>

             <div class="col-md-9">
             <p><strong>${response[0].description}</strong></p>
             <a href="${response[0].url}" class="btn btn-success btn-block" target="blank_">Apply</a><br><br>
             </div>
            </div>
           `);
           $('#spinner').hide();
      
    }); 
    });
});