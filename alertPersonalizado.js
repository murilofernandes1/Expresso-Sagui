import './css/coleta.css';
export function alertaPersonalizado(message) {
    const existing = document.querySelector('.custom-alert');
    if (existing) existing.remove();

    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    alertDiv.innerHTML = `
        <div>${message}</div>
        <button onclick="this.parentElement.remove()">OK</button>
    `;
    document.body.appendChild(alertDiv);
}
