document.addEventListener('DOMContentLoaded', () => {
    const quizData = [
        {
            id: 1,
            title: "🌻 Basic Greetings & Phrases",
            description: "Master essential daily conversations",
            difficulty: "Beginner",
            questions: [
                {
                    question: 'What does "नमस्ते" mean?',
                    options: ['Goodbye', 'Hello', 'Thank you', 'Welcome'],
                    answer: 'Hello'
                },
                {
                    question: 'Which phrase means "Thank you"?',
                    options: ['कृपया', 'धन्यवाद', 'शुभकामनाएँ', 'क्षमा करें'],
                    answer: 'धन्यवाद'
                },
                {
                    question: 'How would you say "Please" in Hindi?',
                    options: ['प्रेम', 'कृपया', 'सत्य', 'विश्वास'],
                    answer: 'कृपया'
                },
                {
                    question: 'What is the meaning of "शुभकामनाएँ"?',
                    options: ['Congratulations', 'Best wishes', 'Good luck', 'Greetings'],
                    answer: 'Best wishes'
                },
                {
                    question: 'Which word means "Friend"?',
                    options: ['परिवार', 'मित्र', 'स्नेह', 'विद्यालय'],
                    answer: 'मित्र'
                },
                {
                    question: 'What does "क्षमा करें" mean?',
                    options: ['Excuse me', 'Thank you', "I'm sorry", 'Bless you'],
                    answer: "I'm sorry"
                },
                {
                    question: 'How would you say "Good night"?',
                    options: ['शुभ रात्रि', 'शुभ प्रभात', 'नमस्ते', 'अलविदा'],
                    answer: 'शुभ रात्रि'
                },
                {
                    question: 'What is the translation of "Welcome"?',
                    options: ['स्वागत', 'आभार', 'प्रेम', 'संस्कार'],
                    answer: 'स्वागत'
                },
                {
                    question: 'Which phrase means "How are you?"',
                    options: ['आप कैसे हैं?', 'आपका नाम क्या है?', 'क्या हाल है?', 'धन्यवाद'],
                    answer: 'आप कैसे हैं?'
                },
                {
                    question: 'What does "फिर मिलेंगे" mean?',
                    options: ['Good morning', 'See you again', 'Welcome home', 'Thank you'],
                    answer: 'See you again'
                }
            ]
        },
        {
            id: 2,
            title: "🔢 Numbers & Time",
            description: "Learn counting and time-related vocabulary",
            difficulty: "Beginner",
            questions: [
                {
                    question: 'What is "एक" in English?',
                    options: ['Two', 'One', 'Ten', 'Hundred'],
                    answer: 'One'
                },
                {
                    question: 'How do you say "Five" in Hindi?',
                    options: ['तीन', 'पाँच', 'सात', 'नौ'],
                    answer: 'पाँच'
                },
                {
                    question: 'What does "दस" mean?',
                    options: ['Twenty', 'Hundred', 'Ten', 'Five'],
                    answer: 'Ten'
                },
                {
                    question: 'Which number is "सात"?',
                    options: ['6', '7', '8', '9'],
                    answer: '7'
                },
                {
                    question: 'What is the Hindi word for "Morning"?',
                    options: ['रात', 'दोपहर', 'सुबह', 'शाम'],
                    answer: 'सुबह'
                },
                {
                    question: 'How would you say "Yesterday"?',
                    options: ['आज', 'कल', 'परसों', 'सप्ताह'],
                    answer: 'कल'
                },
                {
                    question: 'What does "मिनट" mean?',
                    options: ['Hour', 'Minute', 'Second', 'Day'],
                    answer: 'Minute'
                },
                {
                    question: 'Which word means "Week"?',
                    options: ['महीना', 'सप्ताह', 'वर्ष', 'क्षण'],
                    answer: 'सप्ताह'
                },
                {
                    question: 'What is "आधा" in English?',
                    options: ['Full', 'Quarter', 'Half', 'Double'],
                    answer: 'Half'
                },
                {
                    question: 'How do you say "Now" in Hindi?',
                    options: ['अभी', 'कल', 'फिर', 'पहले'],
                    answer: 'अभी'
                }
            ]
        },
        {
            id: 3,
            title: "👨👩👧👦 Family & Relationships",
            description: "Learn family member terms",
            difficulty: "Intermediate",
            questions: [
                {
                    question: 'What does "माता" mean?',
                    options: ['Father', 'Mother', 'Sister', 'Grandfather'],
                    answer: 'Mother'
                },
                {
                    question: 'How do you say "Brother" in Hindi?',
                    options: ['भाई', 'बहन', 'चाचा', 'मामा'],
                    answer: 'भाई'
                },
                {
                    question: 'What is "Grandmother" in Hindi?',
                    options: ['दादी', 'नानी', 'माता', 'चाची'],
                    answer: 'दादी'
                },
                {
                    question: 'Which term means "Husband"?',
                    options: ['पति', 'पत्नी', 'बेटा', 'सास'],
                    answer: 'पति'
                },
                {
                    question: 'What does "ससुर" mean?',
                    options: ['Father-in-law', 'Mother-in-law', 'Brother-in-law', 'Son-in-law'],
                    answer: 'Father-in-law'
                },
                {
                    question: 'How would you say "Twins"?',
                    options: ['जुड़वाँ', 'एकल', 'तिगुना', 'चौगुना'],
                    answer: 'जुड़वाँ'
                },
                {
                    question: 'What is "नाती" in English?',
                    options: ['Grandson', 'Niece', 'Cousin', 'Uncle'],
                    answer: 'Grandson'
                },
                {
                    question: 'Which means "Relatives"?',
                    options: ['रिश्तेदार', 'दोस्त', 'पड़ोसी', 'सहयोगी'],
                    answer: 'रिश्तेदार'
                },
                {
                    question: 'What does "विवाह" mean?',
                    options: ['Divorce', 'Marriage', 'Engagement', 'Relationship'],
                    answer: 'Marriage'
                },
                {
                    question: 'How do you say "Widow" in Hindi?',
                    options: ['विधवा', 'विधुर', 'कुंवारा', 'अविवाहित'],
                    answer: 'विधवा'
                }
            ]
        },
        {
            id: 4,
            title: "🍲 Food & Dining",
            description: "Food-related vocabulary",
            difficulty: "Intermediate",
            questions: [
                {
                    question: 'What does "भोजन" mean?',
                    options: ['Water', 'Food', 'Fruit', 'Vegetable'],
                    answer: 'Food'
                },
                {
                    question: 'How do you say "Fruit" in Hindi?',
                    options: ['सब्जी', 'फल', 'अनाज', 'मांस'],
                    answer: 'फल'
                },
                {
                    question: 'What is "Vegetable" in Hindi?',
                    options: ['फल', 'सब्जी', 'दूध', 'रोटी'],
                    answer: 'सब्जी'
                },
                {
                    question: 'Which means "Sweet"?',
                    options: ['नमकीन', 'मीठा', 'कड़वा', 'खट्टा'],
                    answer: 'मीठा'
                },
                {
                    question: 'What does "खाना" mean?',
                    options: ['To eat', 'To drink', 'To cook', 'To serve'],
                    answer: 'To eat'
                },
                {
                    question: 'How would you say "Breakfast"?',
                    options: ['नाश्ता', 'दोपहर का भोजन', 'रात का खाना', 'जलपान'],
                    answer: 'नाश्ता'
                },
                {
                    question: 'What is "दूध" in English?',
                    options: ['Water', 'Milk', 'Juice', 'Tea'],
                    answer: 'Milk'
                },
                {
                    question: 'Which means "Spicy"?',
                    options: ['मीठा', 'नमकीन', 'तीखा', 'कसैला'],
                    answer: 'तीखा'
                },
                {
                    question: 'What does "पानी" mean?',
                    options: ['Fire', 'Water', 'Air', 'Earth'],
                    answer: 'Water'
                },
                {
                    question: 'How do you say "Delicious" in Hindi?',
                    options: ['स्वादिष्ट', 'बेस्वाद', 'खराब', 'ताज़ा'],
                    answer: 'स्वादिष्ट'
                }
            ]
        },
        {
            id: 5,
            title: "🏃 Common Verbs",
            description: "Essential action words",
            difficulty: "Advanced",
            questions: [
                {
                    question: 'What does "चलना" mean?',
                    options: ['To eat', 'To walk', 'To sleep', 'To write'],
                    answer: 'To walk'
                },
                {
                    question: 'How do you say "To read" in Hindi?',
                    options: ['लिखना', 'पढ़ना', 'बोलना', 'सुनना'],
                    answer: 'पढ़ना'
                },
                {
                    question: 'What is "To drink" in Hindi?',
                    options: ['खाना', 'पीना', 'जागना', 'दौड़ना'],
                    answer: 'पीना'
                },
                {
                    question: 'Which means "To understand"?',
                    options: ['समझना', 'भूलना', 'सीखना', 'पढ़ना'],
                    answer: 'समझना'
                },
                {
                    question: 'What does "बैठना" mean?',
                    options: ['To stand', 'To sit', 'To jump', 'To dance'],
                    answer: 'To sit'
                },
                {
                    question: 'How would you say "To speak"?',
                    options: ['सुनना', 'बोलना', 'चिल्लाना', 'फुसफुसाना'],
                    answer: 'बोलना'
                },
                {
                    question: 'What is "To sleep" in Hindi?',
                    options: ['जागना', 'सोना', 'खेलना', 'पढ़ना'],
                    answer: 'सोना'
                },
                {
                    question: 'Which means "To work"?',
                    options: ['खेलना', 'काम करना', 'सोना', 'पढ़ना'],
                    answer: 'काम करना'
                },
                {
                    question: 'What does "देखना" mean?',
                    options: ['To hear', 'To see', 'To touch', 'To smell'],
                    answer: 'To see'
                },
                {
                    question: 'How do you say "To learn" in Hindi?',
                    options: ['सिखाना', 'भूलना', 'सीखना', 'पढ़ना'],
                    answer: 'सीखना'
                }
            ]
        }
    ];

    // Rest of your existing quiz functionality code
    const quizGrid = document.getElementById('quizGrid');
    const activeQuizSection = document.getElementById('activeQuiz');
    const quizSelectionSection = document.getElementById('quizSelection');
    const quizTitle = document.getElementById('quizTitle');
    const questionContainer = document.getElementById('questionContainer');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const prevBtn = document.getElementById('prevQuestionBtn');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const quizResult = document.getElementById('quizResult');
    const finalScore = document.getElementById('finalScore');

    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];

    function initializeQuizSelection() {
        quizGrid.innerHTML = quizData.map(quiz => `
            <div class="quiz-card">
                <h3>${quiz.title}</h3>
                <p>${quiz.description}</p>
                <div class="quiz-meta">
                    <span class="difficulty ${quiz.difficulty.toLowerCase()}">${quiz.difficulty}</span>
                    <span class="questions">10 Questions</span>
                </div>
                <button class="start-quiz" data-quiz-id="${quiz.id}">Start Quiz</button>
            </div>
        `).join('');
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('start-quiz')) {
            const quizId = parseInt(e.target.dataset.quizId);
            currentQuiz = quizData.find(q => q.id === quizId);
            startQuiz();
        }
    });

    function startQuiz() {
        quizSelectionSection.style.display = 'none';
        activeQuizSection.style.display = 'block';
        userAnswers = new Array(currentQuiz.questions.length).fill(null);
        renderQuestion();
        updateProgress();
    }

    function renderQuestion() {
        const question = currentQuiz.questions[currentQuestionIndex];
        questionContainer.innerHTML = `
            <div class="question">
                <h3>${question.question}</h3>
                <div class="options">
                    ${question.options.map((option, index) => `
                        <div class="option ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" 
                             data-option="${index}">
                            <span class="option-number">${index + 1}</span>
                            <span class="option-text">${option}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    questionContainer.addEventListener('click', (e) => {
        const option = e.target.closest('.option');
        if (option) {
            const selectedIndex = parseInt(option.dataset.option);
            userAnswers[currentQuestionIndex] = selectedIndex;
            renderQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            currentQuestionIndex++;
            renderQuestion();
            updateProgress();
        } else {
            showResults();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            renderQuestion();
            updateProgress();
        }
    });

    function updateProgress() {
        const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Question ${currentQuestionIndex + 1}/10`;
    }

    function showResults() {
        score = currentQuiz.questions.reduce((acc, question, index) => {
            return acc + (question.answer === question.options[userAnswers[index]] ? 1 : 0);
        }, 0);
        
        questionContainer.style.display = 'none';
        quizResult.style.display = 'block';
        finalScore.textContent = score;
        document.querySelector('.quiz-controls').style.display = 'none';
    }

    document.getElementById('retryQuizBtn').addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = new Array(currentQuiz.questions.length).fill(null);
        quizResult.style.display = 'none';
        questionContainer.style.display = 'block';
        document.querySelector('.quiz-controls').style.display = 'flex';
        renderQuestion();
        updateProgress();
    });

    document.getElementById('chooseAnotherBtn').addEventListener('click', () => {
        quizSelectionSection.style.display = 'block';
        activeQuizSection.style.display = 'none';
        quizResult.style.display = 'none';
        document.querySelector('.quiz-controls').style.display = 'flex';
        currentQuiz = null;
        currentQuestionIndex = 0;
        initializeQuizSelection();
    });

    initializeQuizSelection();
});

// Add to quiz.js
// Leaderboard functionality
const leaderboard = {
    saveScore: function(name, score, quizTitle) {
      const entry = {
        name: name,
        score: score,
        quiz: quizTitle,
        date: new Date().toISOString()
      };
      
      const leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];
      leaderboardData.push(entry);
      localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));
    },
  
    getTopScores: function() {
      const data = JSON.parse(localStorage.getItem('leaderboard')) || [];
      return data.sort((a, b) => b.score - a.score).slice(0, 10);
    },
  
    render: function() {
      const scores = this.getTopScores();
      const leaderboardList = document.getElementById('leaderboardList');
      
      leaderboardList.innerHTML = scores.map((entry, index) => `
        <div class="leaderboard-entry">
          <span class="rank">${index + 1}.</span>
          <span class="name">${entry.name}</span>
          <span class="score">${entry.score}/10</span>
          <span class="quiz">${entry.quiz}</span>
          <span class="date">${new Date(entry.date).toLocaleDateString()}</span>
        </div>
      `).join('');
    }
  };
  
// Update quiz result display in quiz.js
function showResults() {
    // ... existing code ...
  
    const userName = prompt("Enter your name for the leaderboard:");
    if (userName) {
      leaderboard.saveScore(userName, score, currentQuiz.title);
    }
    
    leaderboard.render();
  }
  document.getElementById('showLeaderboard').addEventListener('click', () => {
    document.getElementById('leaderboard').style.display = 'block';
    document.getElementById('showLeaderboard').style.display = 'none';
    document.getElementById('hideLeaderboard').style.display = 'block';
    leaderboard.render();
  });
  
  document.getElementById('hideLeaderboard').addEventListener('click', () => {
    document.getElementById('leaderboard').style.display = 'none';
    document.getElementById('showLeaderboard').style.display = 'block';
    document.getElementById('hideLeaderboard').style.display = 'none';
  });
  
  // Initialize leaderboard on page load
  leaderboard.render();  
  function showResults() {
    score = currentQuiz.questions.reduce((acc, question, index) => {
      return acc + (question.answer === question.options[userAnswers[index]] ? 1 : 0);
    }, 0);
  
    // Add this prompt
    const userName = prompt("Enter your name for the leaderboard:\n(Leave blank to skip)") || "Anonymous";
    leaderboard.saveScore(userName, score, currentQuiz.title);
  
    // Rest of your code
    questionContainer.style.display = 'none';
    quizResult.style.display = 'block';
    finalScore.textContent = score;
    document.querySelector('.quiz-controls').style.display = 'none';
    
    // Update leaderboard
    leaderboard.render();
  }