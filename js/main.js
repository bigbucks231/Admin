const chart = document.querySelector("#chart").getContext('2d');

// creating a new chart instance 

new Chart(chart, {
    type: 'line', 
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        
        datasets: [
            {
                label: 'ETH',
                data: [29384, 23474, 39434, 28732, 08773, 07343, 38974, 39743, 49837, 089843, 86734, 86734],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'BTC',
                data: [39847, 32445, 25425, 87557, 53663, 76456, 67443, 76544, 98698, 65335, 98765, 26734],
                borderColor: 'blue',
                borderWidth: 2
            }
         ]
    }, 
    options: {
        responsive: true
    }
})

// show or hide sidebar

const menuBtn = document.querySelector('#menuBtn');
const closeButton = document.querySelector('#closeButton');
const sidebar = document.querySelector('aside');


menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeButton.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// change theme 

const themeBtn = document.querySelector('.themeBtn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkTheme');

    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})