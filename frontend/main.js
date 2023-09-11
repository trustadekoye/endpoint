document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('api-form');
    const apiResponse = document.getElementById('api-response');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const slackName = document.getElementById('slack_name').value;
        const track = document.getElementById('track').value;

        try {
            const response = await fetch(`/api?slack_name=${slackName}&track=${track}`);
            const data = await response.json();

            // Display the API response
            apiResponse.innerHTML = JSON.stringify(data, null, 2);
        } catch (error) {
            console.error(error);
        }
    });
});
