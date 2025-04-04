document.addEventListener('DOMContentLoaded', function () {
    const vocabularyList = document.getElementById('vocabulary-list');
    let vocabularyData = [];
    const itemsPerPage = 12;
    let currentPage = 1;
    
    // Fetch the JSON file
    fetch('words.json')
      .then(response => response.json())
      .then(data => {
        vocabularyData = data;
        renderVocabulary();
      })
      .catch(error => console.error('Error loading vocabulary:', error));

    // Render vocabulary with pagination
    function renderVocabulary() {
      vocabularyList.innerHTML = '';
      const start = (currentPage - 1) * itemsPerPage;
      const pageItems = vocabularyData.slice(start, start + itemsPerPage);
      
      pageItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const word = document.createElement('div');
        word.className = 'word';
        word.textContent = item.hindi;
        
        const button = document.createElement('button');
        button.textContent = 'Reveal Meaning';
        button.addEventListener('click', function() {
          const meaningDiv = card.querySelector('.meaning');
          meaningDiv.classList.toggle('revealed');
          button.textContent = meaningDiv.classList.contains('revealed') 
            ? 'Hide Meaning' 
            : 'Reveal Meaning';
        });
        
        const meaning = document.createElement('div');
        meaning.className = 'meaning';
        meaning.textContent = item.english;
        
        // Add example sentence if available
        if (item.example) {
          const example = document.createElement('div');
          example.className = 'example';
          example.textContent = item.example;
          meaning.appendChild(document.createElement('br'));
          meaning.appendChild(example);
        }
        
        card.appendChild(word);
        card.appendChild(button);
        card.appendChild(meaning);
        vocabularyList.appendChild(card);
      });
      
      updatePageInfo();
      renderPagination();
    }
    
    function updatePageInfo() {
      const start = (currentPage - 1) * itemsPerPage + 1;
      const end = Math.min(currentPage * itemsPerPage, vocabularyData.length);
      document.getElementById('currentRange').textContent = `${start}-${end}`;
    }
    
    function renderPagination() {
      const paginationDiv = document.getElementById('pagination');
      paginationDiv.innerHTML = '';
      const totalPages = Math.ceil(vocabularyData.length / itemsPerPage);
      
      // Previous button
      if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = '&laquo;';
        prevBtn.addEventListener('click', () => {
          currentPage--;
          renderVocabulary();
        });
        paginationDiv.appendChild(prevBtn);
      }
      
      // Page numbers
      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        if (i === currentPage) {
          pageBtn.disabled = true;
          pageBtn.classList.add('active');
        }
        pageBtn.addEventListener('click', () => {
          currentPage = i;
          renderVocabulary();
        });
        paginationDiv.appendChild(pageBtn);
      }
      
      // Next button
      if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = '&raquo;';
        nextBtn.addEventListener('click', () => {
          currentPage++;
          renderVocabulary();
        });
        paginationDiv.appendChild(nextBtn);
      }
    }
    
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      if (searchTerm.length > 0) {
        const filteredData = vocabularyData.filter(item => 
          item.hindi.toLowerCase().includes(searchTerm) || 
          item.english.toLowerCase().includes(searchTerm)
        );
        vocabularyList.innerHTML = '';
        filteredData.forEach(item => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <div class="word">${item.hindi}</div>
            <button class="reveal-btn">Reveal Meaning</button>
            <div class="meaning">${item.english}</div>
          `;
          card.querySelector('.reveal-btn').addEventListener('click', function() {
            const meaningDiv = card.querySelector('.meaning');
            meaningDiv.classList.toggle('revealed');
            this.textContent = meaningDiv.classList.contains('revealed') 
              ? 'Hide Meaning' 
              : 'Reveal Meaning';
          });
          vocabularyList.appendChild(card);
        });
      } else {
        renderVocabulary();
      }
    });
});