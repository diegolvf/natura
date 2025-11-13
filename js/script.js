// Gráfico de Lucro
const ctxLucro = document.getElementById('graficoLucro').getContext('2d');
new Chart(ctxLucro, {
    type: 'bar',
    data: {
        labels: ['Shampoo Ekos', 'Perfume Kaiak/Luna', 'Sabonete Vegetal', 'Hidratante Ekos', 'Desodorante Todia'],
        datasets: [{
            label: 'Lucro Unitário (R$)',
            data: [17, 45, 3.5, 25, 13],
            backgroundColor: ['#6b8e4e', '#a3c585', '#d2b48c', '#90a955', '#c9d7a8']
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false }, title: { display: true, text: 'Lucro Unitário por Produto' } }
    }
});

// Gráfico de Produção
const ctxProd = document.getElementById('graficoProducao').getContext('2d');
new Chart(ctxProd, {
    type: 'pie',
    data: {
        labels: ['Shampoo Ekos', 'Perfume Kaiak/Luna', 'Sabonete Vegetal', 'Hidratante Ekos', 'Desodorante Todia'],
        datasets: [{
            data: [13333, 8000, 40000, 5000, 10000],
            backgroundColor: ['#90a955', '#d2b48c', '#6b8e4e', '#c9d7a8', '#a3c585']
        }]
    },
    options: {
        responsive: true,
        plugins: { title: { display: true, text: 'Distribuição da Produção (Unidades)' } }
    }
});
