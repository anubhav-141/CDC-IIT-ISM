function toggleHoverProcessCard(ele) {
    let id = ele.id;
    // pop up respective card
    $('.process-card').removeClass('process-hover');
    $('#' + id).addClass('process-hover');

    // show respective image/form
    if (id === 'step-1') $('#process-contact-us-form').show();
    else $('#process-contact-us-form').hide();

    [2, 3, 4, 5, 6].forEach((num) => {
        if (num == id.slice(-1)) $("#process-image-" + id.slice(-1)).show();
        else $("#process-image-" + num).hide();
    })
}

$(".process-card").mouseenter(function() {
    toggleHoverProcessCard(this);
});