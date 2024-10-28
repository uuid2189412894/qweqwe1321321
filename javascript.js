document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const readMoreBtn = document.querySelector('.read-more-btn');
    const closeBtn = document.querySelector('.close-btn');
    const terminalOutput = document.getElementById('terminal-output');

    // Function to generate random gibberish characters
    function generateGibberish(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+[]{}|;:,.<>?/~`';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Function to simulate the terminal view
    function simulateTerminal() {
        terminalOutput.innerHTML = ''; // Clear the terminal
        const totalLines = 50; // Number of lines of gibberish
        for (let i = 0; i < totalLines; i++) {
            const lineLength = Math.floor(Math.random() * 80) + 20; // Random line length
            terminalOutput.innerHTML += generateGibberish(lineLength) + '\n';
        }
    }

    // Show modal and start terminal simulation on button click
    readMoreBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        simulateTerminal();
    });

    // Close modal when 'x' is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
