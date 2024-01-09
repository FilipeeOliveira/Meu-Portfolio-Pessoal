document.getElementById('backendButton').addEventListener('click', function () {
    showInfo('backend');
});

document.getElementById('frontendButton').addEventListener('click', function () {
    showInfo('frontend');
});

function showInfo(area) {
    const infoContainer = document.getElementById('info-container');
    const areaButton = document.getElementById(`${area}Button`);
    const areaInfo = areaButton.getAttribute('data-info');

    infoContainer.innerHTML = `<h2>Informações de ${area}</h2>`;
    infoContainer.innerHTML += `<p>${areaInfo}</p>`;
}
