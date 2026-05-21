const requestUrl = "http://localhost:3000/fairies";

async function fetchFairiesData() {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}

fetchFairiesData()
    .then((data) => {
        const fairiesArray = data.fairies || data;
        const fairiesSection = document.getElementById("fairiesSection");

        for (let index = 0; index < fairiesArray.length; index++) {
            let id = fairiesArray[index].id;
            let fairyName = fairiesArray[index].fairyName;
            let category = fairiesArray[index].category;
            let magicTitle = fairiesArray[index].magicTitle;
            let power = fairiesArray[index].power;
            let description = fairiesArray[index].description;
            let image = fairiesArray[index].image;

            fairiesSection.innerHTML += `
        <div class="col-md-6 mb-4">
            <article class="bg-surface-bright border border-outline-variant rounded p-2 shadow-tactile d-flex flex-column gap-2 fairy-card h-100">
                
                <div class="card-img-wrapper bg-surface-container-low">
                    <img alt="${fairyName}" src="${image}" class="img-fluid" />
                    <div class="badge-custom">
                        <span class="font-label-sm text-tertiary">${category}</span>
                    </div>
                </div>

                <div class="p-3 d-flex flex-column gap-2">
                    <div class="d-flex justify-content-between align-items-baseline border-bottom border-vintage pb-2">
                        <h2 class="font-headline-md text-primary mb-0">${fairyName}</h2>
                        <span class="font-label-sm text-on-surface-variant fst-italic">${id}</span>
                    </div>
                    <h3 class="font-label-lg text-secondary mb-0">${magicTitle}</h3>
                    <div class="mt-3 pt-2 border-top border-outline-variant">
                        <div class="d-flex align-items-center gap-1 text-on-surface-variant">
                            <span class="material-symbols-outlined icon-small">auto_awesome</span>
                            <span class="font-body-md text-small"><strong>Power:</strong> ${power}</span>
                        </div>
                        <p class="font-body-md mt-2 mb-0 text-small">${description}</p>
                    </div>
                </div>
            </article>
        </div>
        `;
        }
    })
    .catch((error) => console.error("Error fetching fairies:", error));

document.querySelectorAll('.filter-dropdown .filter-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('.filter-dropdown .filter-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        const filter = this.dataset.filter;
        const cards = document.querySelectorAll('#fairiesSection .col-md-6');

        cards.forEach(card => {
            const category = card.querySelector('.badge-custom span').textContent;
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
