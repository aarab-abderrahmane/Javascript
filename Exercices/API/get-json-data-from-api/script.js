
fetch('data.json')
    .then(response => {
        if(!response.ok){
            throw new Error('Network response was not ok');
        }

        return response.json();
    })

    .then(data => {
            const container = document.getElementById('container');
            data.forEach(row=>{
                const cardHtml = `
                    <div class="border border-black p-6 sm:p-8 hover:scale-105 hover:shadow-2xl">
                        <div class="flex justify-between items-start mb-4">
                            <h2 class="text-2xl font-bold text-gray-800 break-words pr-4">${row['title']}</h2>
                            <div id='badge'  class=" text-sm font-semibold px-3 py-1 rounded-full"
                            style="background-color: ${row['completed'] ? 'rgb(211, 246, 174)' : '#FEE2E2'};color:${row['completed'] ? "green" : " #DC2626"}">
                                ${row['completed'] ? "Pending" : 'Completed'}
                            </div>
                        </div>

                        <div class="space-y-3 mb-6">
                            <p class="text-gray-600 text-sm">
                                <span class="font-medium text-gray-700">User ID:</span> ${row['userId']}
                            </p>
                            <p class="text-gray-600 text-sm">
                                <span class="font-medium text-gray-700">Task ID:</span> ${row['id']}
                            </p>
                        </div>

                    </div>
                `;

            


                container.innerHTML+=cardHtml
            })
    })
    .catch(error => console.error('there was a problem with the fetch operation',error));
