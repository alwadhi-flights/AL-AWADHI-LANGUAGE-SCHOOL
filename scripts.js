// scripts.js

let currentLanguage = 'english'; // Default language

// Function to switch the language
function setLanguage(language) {
    currentLanguage = language;
    loadLessonContent(language);
    loadQuizContent(language);
}

// Function to load lessons based on selected language
function loadLessonContent(language) {
    const lessonContent = document.getElementById('lesson-content');
    lessonContent.innerHTML = `<h3>Lessons for ${language}</h3><p>Start with basic phrases and grammar!</p>`;
}

// Function to load quizzes based on selected language
function loadQuizContent(language) {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `<h3>Quizzes for ${language}</h3><p>Test your knowledge!</p>`;
}

// Initialize default content
loadLessonContent(currentLanguage);
loadQuizContent(currentLanguage);
