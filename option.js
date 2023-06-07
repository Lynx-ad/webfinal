var filterButton = document.getElementById('filter-btn');
var dropdownMenu = document.getElementById('dropdown-menu');

filterButton.addEventListener('mouseenter', function() {
    dropdownMenu.style.display = 'block';
});

filterButton.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
});

dropdownMenu.addEventListener('mouseenter', function() {
    dropdownMenu.style.display = 'block';
});

dropdownMenu.addEventListener('mouseleave', function() {
    dropdownMenu.style.display = 'none';
});

var filterOptions = document.querySelectorAll('.dropdown-menu li');
filterOptions.forEach(function(option) {
    option.addEventListener('click', function() {
        var selectedOption = this.innerText;
        // Perform filtering based on the selected option
        console.log('Selected Option:', selectedOption);
        dropdownMenu.style.display = 'none';
    });
});
