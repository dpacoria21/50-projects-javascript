export const createGlasses = (container) => {
    let html = '';
    for(let i=0; i<8; i++) {

        html += `
            <div class="bottle mini center">
                <p>
                    125ml
                </p>
            </div>
        `;
    }
    container.innerHTML = html;
}