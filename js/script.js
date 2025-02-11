document.querySelector('.card-main').addEventListener('mouseover', function() {
    document.querySelector('.cloud-love-card').classList.add('hovered');
    document.querySelector('.cloud-is-in-card').classList.add('hovered');
    document.querySelector('.cloud-the-air-card').classList.add('hovered');
});

document.querySelector('.card-main').addEventListener('mouseout', function() {
    document.querySelector('.cloud-love-card').classList.remove('hovered');
    document.querySelector('.cloud-is-in-card').classList.remove('hovered');
    document.querySelector('.cloud-the-air-card').classList.remove('hovered');
});

document.querySelector('.card-left').addEventListener('mouseover', function() {
    document.querySelector('.leaves-left').classList.add('hovered');
});

document.querySelector('.card-left').addEventListener('mouseout', function() {
    document.querySelector('.leaves-left').classList.remove('hovered');
});

document.querySelector('.card-right').addEventListener('mouseover', function() {
    document.querySelector('.leaves-right').classList.add('hovered');
});

document.querySelector('.card-right').addEventListener('mouseout', function() {
    document.querySelector('.leaves-right').classList.remove('hovered');
});