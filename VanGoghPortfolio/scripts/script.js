function render(data) {
    var html = ' <div class="commentBox"><div class="leftPanelImg"><img src="images/image-comment/place.png" alt=""></div><div class="rightPanel"><span>' + data.name + '</span><div class="date">' + data.date + '</div><p>' + data.body + '</p></div><div class="clear"></div></div>';
    $('#contain1').append(html)
}
$(document).ready(function() {

    var comment = [];
    if (!localStorage.commentData) {
        localStorage.commentData = [];

    } else {
        comment = JSON.parse(localStorage.commentData);
    }
    for (var i = 0; i < comment.length; i++) {

        render(comment[i]);
    }
    var text=document.getElementById("bodyTxt")

    $('#addComment').click(function() {
        if(text.value.length>0) text.style.borderColor="gray";
        if(text.value.length===0){
            alert("please put a comment!");
            text.style.borderColor="red";
            text.style.opacity=.5;
           return false;
        }else
        var addObj = {
            "name": $('#name').val(),
            "date": $('#date').val(),
            "body": $('#bodyTxt').val()
        };
        /* console.log(addObj);*/
        comment.push(addObj);
        localStorage.commentData = JSON.stringify(comment);

        render(addObj);
        $('#name').val('');
        $('#body').val('dd/mm/yyyy');
        $('#bodyTxt').val('');

    });
});