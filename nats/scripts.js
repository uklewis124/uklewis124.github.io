window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var items = document.querySelectorAll('section.Header li');
    var maxItems = Math.floor(width / 100); // Adjust this to change the number of items per 100px of width

    items.forEach(function(item, index) {
        if (index < maxItems) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});