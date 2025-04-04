// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
//    console.log("contentLOad")
    // Initialize the pie chart
    //initPieChart();
    
    // Set active page based on hash or default to home
    const hash = window.location.hash.substring(1);
    if (hash) {
        navigateTo(hash);
    }
});

// Initialize pie chart
/*function initPieChart() {
    const ctx = document.getElementById('pieChart').getContext('2d');
    
    const data = {
        labels: ['Conto 1', 'Conto 2', 'Altro'],
        datasets: [{
            data:            [400, 300, 300],
            backgroundColor: ['#0088FE', '#00C49F', '#FFBB28'],
            borderWidth: 0,
            hoverOffset: 10
        }]
    };
    
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };
    
    new Chart(ctx, config);
}*/

// Add event listeners for form elements
document.querySelectorAll('.method-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.method-btn').forEach(btn => {
            btn.style.backgroundColor = '#333';
        });
        
        // Add active class to clicked button
        this.style.backgroundColor = '#2196F3';
    });
});

// Toggle switches
document.querySelectorAll('.switch input').forEach(switchInput => {
    switchInput.addEventListener('change', function() {
        // Handle switch toggle
        console.log('Switch toggled:', this.checked);
    });
});

// Feedback form submission
const feedbackForm = document.querySelector('.primary-btn');
if (feedbackForm) {
    feedbackForm.addEventListener('click', function() {
        const feedbackText = document.querySelector('.feedback-textarea').value;
        if (feedbackText.trim() !== '') {
            alert('Grazie per il tuo feedback!');
            document.querySelector('.feedback-textarea').value = '';
        } else {
            alert('Per favore, inserisci il tuo feedback prima di inviare.');
        }
    });
}

// Feedback options selection
document.querySelectorAll('.feedback-option').forEach(option => {
    option.addEventListener('click', function() {
        // Remove active class from all options
        document.querySelectorAll('.feedback-option').forEach(opt => {
            opt.style.backgroundColor = '#333';
        });
        
        // Add active class to clicked option
        this.style.backgroundColor = '#2196F3';
    });
});