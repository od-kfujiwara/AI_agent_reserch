let agentsData = [];
let comparisonData = [];
let differentiationFactors = [];

async function loadData() {
  try {
    const [agentsResponse, comparisonResponse, factorsResponse] = await Promise.all([
      fetch('data/agents.json'),
      fetch('data/comparison.json'),
      fetch('data/differentiation-factors.json')
    ]);

    if (!agentsResponse.ok || !comparisonResponse.ok || !factorsResponse.ok) {
      throw new Error('Failed to load data files');
    }

    agentsData = await agentsResponse.json();
    comparisonData = await comparisonResponse.json();
    differentiationFactors = await factorsResponse.json();

    return true;
  } catch (error) {
    console.error('Error loading data:', error);
    return false;
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const navButtons = document.querySelectorAll('#mainNav button');
  const contentSections = document.querySelectorAll('.content-section');
  const agentCardsContainer = document.getElementById('agentCardsContainer');
  const modal = document.getElementById('agentModal');
  const modalAgentName = document.getElementById('modalAgentName');
  const modalAgentDetails = document.getElementById('modalAgentDetails');
  const differentiationFactorsContainer = document.getElementById('differentiationFactorsContainer');
  const comparisonTableBody = document.getElementById('comparisonTableBody');
  const tableHeaders = document.querySelectorAll('#comparisonTable th');

  let currentSort = { column: null, direction: 'asc' };

  const dataLoaded = await loadData();
  if (!dataLoaded) {
    console.error('Failed to load data. Application may not work correctly.');
    return;
  }

  function showSection(sectionId) {
    contentSections.forEach(section => {
      section.classList.remove('hidden');
    });
    const currentSection = document.getElementById(sectionId);
    if (currentSection) {
      currentSection.classList.remove('hidden');
    }
  }

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      showSection(button.dataset.section);
    });
  });

  function populateAgentCards() {
    agentCardsContainer.innerHTML = '';
    agentsData.forEach(agent => {
      const card = document.createElement('div');
      card.className = 'card cursor-pointer overflow-hidden';
      card.innerHTML = `
                        <div class="card-content">
                            <h3 class="text-xl font-semibold text-sky-700 mb-2">${agent.name}</h3>
                            <p class="text-sm text-slate-600 mb-3 h-20 overflow-y-auto">${agent.short_desc}</p>
                            <p class="text-xs text-slate-500"><strong>対象:</strong> ${agent.ideal_for}</p>
                        </div>
                        <div class="card-footer">
                            <button class="text-sm bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md transition duration-150 ease-in-out">詳細を見る</button>
                        </div>
                    `;
      card.addEventListener('click', () => openModal(agent));
      agentCardsContainer.appendChild(card);
    });
  }

  window.openModal = (agent) => {
    modalAgentName.textContent = agent.name;
    modalAgentDetails.innerHTML = agent.details_html;
    modal.style.display = 'block';
  }

  window.closeModal = () => {
    modal.style.display = 'none';
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      closeModal();
    }
  }

  function populateDifferentiationFactors() {
    differentiationFactorsContainer.innerHTML = '';
    differentiationFactors.forEach(factor => {
      const div = document.createElement('div');
      div.className = 'mb-2 rounded-md overflow-hidden shadow-sm';
      const button = document.createElement('button');
      button.className = 'accordion-button';
      button.innerHTML = `${factor.title} <span class="plus-minus text-sky-600 font-bold text-xl">+</span>`;

      const content = document.createElement('div');
      content.className = 'accordion-content';
      content.innerHTML = `<p class="py-4 px-2 text-sm text-slate-700">${factor.content}</p>`;

      button.addEventListener('click', () => {
        button.classList.toggle('active');
        const plusMinus = button.querySelector('.plus-minus');
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
          content.style.maxHeight = '0px';
          plusMinus.textContent = '+';
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
          plusMinus.textContent = '-';
        }
      });

      div.appendChild(button);
      div.appendChild(content);
      differentiationFactorsContainer.appendChild(div);
    });
  }

  function renderTable(data) {
    comparisonTableBody.innerHTML = '';
    data.forEach(item => {
      const row = comparisonTableBody.insertRow();
      row.insertCell().textContent = item.name;
      row.insertCell().textContent = item.ide;
      row.insertCell().textContent = item.pricing;
      row.insertCell().textContent = item.autonomy;
      row.insertCell().textContent = item.github_integration;
      row.insertCell().textContent = item.strength;
    });
  }

  function sortData(data, column, direction) {
    return [...data].sort((a, b) => {
      let valA = a[column] || '';
      let valB = b[column] || '';

      if (column === 'autonomy') {
        const numA = parseFloat(valA);
        const numB = parseFloat(valB);
        if (!isNaN(numA) && !isNaN(numB)) {
          return direction === 'asc' ? numA - numB : numB - numA;
        }
        if (!isNaN(numA)) return direction === 'asc' ? -1 : 1;
        if (!isNaN(numB)) return direction === 'asc' ? 1 : -1;
      }

      if (typeof valA === 'string' && typeof valB === 'string') {
        return direction === 'asc' ? valA.localeCompare(valB, 'ja') : valB.localeCompare(valA, 'ja');
      }
      return 0;
    });
  }

  tableHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const column = header.dataset.sort;
      if (!column) return;
      if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
      } else {
        currentSort.column = column;
        currentSort.direction = 'asc';
      }
      const sortedData = sortData(getFilteredData(), column, currentSort.direction);
      renderTable(sortedData);
    });
  });

  const nameFilterInput = document.getElementById('nameFilter');
  const ideFilterSelect = document.getElementById('ideFilter');
  const pricingFilterSelect = document.getElementById('pricingFilter');
  const resetFiltersButton = document.getElementById('resetFilters');

  function populateFilters() {
    const ideOptions = new Set();
    const pricingOptions = new Set();
    comparisonData.forEach(item => {
      if (item.ide) item.ide.split(',').map(s => s.trim()).forEach(ide => ideOptions.add(ide));
      if (item.pricing) pricingOptions.add(item.pricing.split('(')[0].trim());
    });

    ideFilterSelect.innerHTML = '<option value="">対応IDE (全て)</option>';
    pricingFilterSelect.innerHTML = '<option value="">価格モデル (全て)</option>';


    Array.from(ideOptions).sort().forEach(opt => {
      ideFilterSelect.add(new Option(opt, opt));
    });
    Array.from(pricingOptions).sort().forEach(opt => {
      pricingFilterSelect.add(new Option(opt, opt));
    });
  }

  function getFilteredData() {
    const nameFilter = nameFilterInput.value.toLowerCase();
    const ideFilter = ideFilterSelect.value;
    const pricingFilter = pricingFilterSelect.value;

    return comparisonData.filter(item => {
      const nameMatch = item.name ? item.name.toLowerCase().includes(nameFilter) : true;
      const ideMatch = ideFilter ? (item.ide ? item.ide.includes(ideFilter) : false) : true;
      const pricingMatch = pricingFilter ? (item.pricing ? item.pricing.split('(')[0].trim().includes(pricingFilter) : false) : true;
      return nameMatch && ideMatch && pricingMatch;
    });
  }

  function applyFilters() {
    const filteredData = getFilteredData();
    const sortedData = sortData(filteredData, currentSort.column, currentSort.direction);
    renderTable(sortedData);
  }

  nameFilterInput.addEventListener('input', applyFilters);
  ideFilterSelect.addEventListener('change', applyFilters);
  pricingFilterSelect.addEventListener('change', applyFilters);

  resetFiltersButton.addEventListener('click', () => {
    nameFilterInput.value = '';
    ideFilterSelect.value = '';
    pricingFilterSelect.value = '';
    currentSort = { column: null, direction: 'asc' };
    renderTable(comparisonData);
  });

  function renderAutonomyChart() {
    const autonomyChartCanvas = document.getElementById('autonomyChart');
    if (!autonomyChartCanvas) return;
    const ctx = autonomyChartCanvas.getContext('2d');

    const chartData = comparisonData
      .map(agent => ({
        name: agent.name,
        level: agent.autonomy ? parseFloat(agent.autonomy.replace('%', '')) : NaN
      }))
      .filter(agent => !isNaN(agent.level));

    chartData.sort((a, b) => b.level - a.level);

    if (window.myAutonomyChart instanceof Chart) {
      window.myAutonomyChart.destroy();
    }

    window.myAutonomyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chartData.map(agent => agent.name.length > 20 ? agent.name.substring(0, 18) + '...' : agent.name),
        datasets: [{
          label: '自律性レベル (%)',
          data: chartData.map(agent => agent.level),
          backgroundColor: '#38bdf8',
          borderColor: '#0c4a6e',
          borderWidth: 1,
          borderRadius: 5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          x: { beginAtZero: true, max: 100, title: { display: true, text: '自律性レベル (%)' } },
          y: { title: { display: false } }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                if (label) { label += ': '; }
                if (context.parsed.x !== null) { label += context.parsed.x + '%'; }
                const originalAgent = chartData.find(d => (d.name.length > 20 ? d.name.substring(0, 18) + '...' : d.name) === context.label);
                return `${originalAgent ? originalAgent.name : context.label}: ${context.parsed.x}%`;
              }
            }
          },
          legend: { display: false }
        }
      }
    });
  }

  populateAgentCards();
  populateDifferentiationFactors();
  renderTable(comparisonData);
  populateFilters();
  renderAutonomyChart();
  showSection('intro');
});