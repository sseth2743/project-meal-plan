if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(() => console.log('✅ Service Worker registered')).catch(() => console.log('Service Worker registration failed'));
    });
}
const mealsData = [
    { id: 1, name: "Chole Puri", category: "breakfast", type: "vegetarian", protein: 15, calories: 350, cost: 5, prepTime: 25, ingredients: "Chickpeas, flour, onion, tomato, spices", youtubeLink: "https://www.youtube.com/results?search_query=chole+puri+recipe", dietPlan: "Balanced" },
    { id: 2, name: "Carrot Idli Sambar", category: "breakfast", type: "vegetarian", protein: 12, calories: 280, cost: 4, prepTime: 35, ingredients: "Rice, urad dal, carrot, lentils, spices", youtubeLink: "https://www.youtube.com/results?search_query=carrot+idli+sambar", dietPlan: "Balanced" },
    { id: 3, name: "Paneer Bhurji & Roti", category: "breakfast", type: "vegetarian", protein: 18, calories: 340, cost: 6, prepTime: 20, ingredients: "Paneer, onion, tomato, wheat flour", youtubeLink: "https://www.youtube.com/results?search_query=paneer+bhurji+roti", dietPlan: "Balanced" },
    { id: 4, name: "Egg Curry & Roti", category: "breakfast", type: "vegetarian", protein: 16, calories: 350, cost: 6.5, prepTime: 25, ingredients: "Eggs, onion, tomato, wheat flour, spices", youtubeLink: "https://www.youtube.com/results?search_query=egg+curry+roti", dietPlan: "Athletic" },
    { id: 5, name: "Dal Dosa", category: "breakfast", type: "vegetarian", protein: 12, calories: 280, cost: 4, prepTime: 30, ingredients: "Rice, urad dal, lentils, sambar powder", youtubeLink: "https://www.youtube.com/results?search_query=dal+dosa+recipe", dietPlan: "Balanced" },
    { id: 6, name: "Chicken Tikka Biryani", category: "lunch", type: "non-vegetarian", protein: 28, calories: 450, cost: 8, prepTime: 45, ingredients: "Chicken, basmati rice, yogurt, spices", youtubeLink: "https://www.youtube.com/results?search_query=chicken+tikka+biryani", dietPlan: "Athletic" },
    { id: 7, name: "Paneer Tikka Masala & Rice", category: "lunch", type: "vegetarian", protein: 22, calories: 380, cost: 7, prepTime: 35, ingredients: "Paneer, tomato, cream, rice, spices", youtubeLink: "https://www.youtube.com/results?search_query=paneer+tikka+masala", dietPlan: "Balanced" },
    { id: 8, name: "Dal Makhani & Rice", category: "lunch", type: "vegetarian", protein: 16, calories: 350, cost: 5, prepTime: 40, ingredients: "Black lentils, kidney beans, cream, rice", youtubeLink: "https://www.youtube.com/results?search_query=dal+makhani+recipe", dietPlan: "Balanced" },
    { id: 9, name: "Paneer Butter Masala & Naan", category: "lunch", type: "vegetarian", protein: 20, calories: 420, cost: 7, prepTime: 35, ingredients: "Paneer, tomato, cream, butter, naan", youtubeLink: "https://www.youtube.com/results?search_query=paneer+butter+masala", dietPlan: "Balanced" },
    { id: 10, name: "Vegetable Biryani", category: "lunch", type: "vegetarian", protein: 14, calories: 340, cost: 5.5, prepTime: 40, ingredients: "Basmati rice, mixed vegetables, yogurt, spices", youtubeLink: "https://www.youtube.com/results?search_query=vegetable+biryani", dietPlan: "Weight Loss" },
    { id: 11, name: "Chana Masala & Bhature", category: "lunch", type: "vegetarian", protein: 18, calories: 380, cost: 6, prepTime: 45, ingredients: "Chickpeas, flour, yogurt, spices", youtubeLink: "https://www.youtube.com/results?search_query=chana+masala+bhature", dietPlan: "Balanced" },
    { id: 12, name: "Moong Dal Makhani & Rice", category: "lunch", type: "vegetarian", protein: 16, calories: 320, cost: 5.5, prepTime: 35, ingredients: "Moong dal, tomato, cream, rice, spices", youtubeLink: "https://www.youtube.com/results?search_query=moong+dal+makhani", dietPlan: "Balanced" },
    { id: 13, name: "Paneer Tikka Bites", category: "snack", type: "vegetarian", protein: 12, calories: 180, cost: 3.5, prepTime: 25, ingredients: "Paneer, yogurt, spices, skewers", youtubeLink: "https://www.youtube.com/results?search_query=paneer+tikka+recipe", dietPlan: "Balanced" },
    { id: 14, name: "Roasted Chickpea Snack", category: "snack", type: "vegetarian", protein: 8, calories: 120, cost: 1.5, prepTime: 15, ingredients: "Dried chickpeas, salt, spices", youtubeLink: "https://www.youtube.com/results?search_query=roasted+chickpea+snack", dietPlan: "Weight Loss" },
    { id: 15, name: "Chilli Paneer Tacos", category: "snack", type: "vegetarian", protein: 16, calories: 280, cost: 5.5, prepTime: 20, ingredients: "Paneer, tortillas, onion, chili sauce", youtubeLink: "https://www.youtube.com/results?search_query=chilli+paneer+tacos", dietPlan: "Balanced" },
    { id: 16, name: "Hummus with Veggies", category: "snack", type: "vegetarian", protein: 8, calories: 140, cost: 2.5, prepTime: 10, ingredients: "Chickpeas, tahini, lemon, vegetables", youtubeLink: "https://www.youtube.com/results?search_query=homemade+hummus+recipe", dietPlan: "Weight Loss" },
    { id: 17, name: "Soya Kheema Paratha", category: "breakfast", type: "vegetarian", protein: 14, calories: 320, cost: 5.5, prepTime: 30, ingredients: "Soya chunks, flour, onion, spices", youtubeLink: "https://www.youtube.com/results?search_query=soya+kheema+paratha", dietPlan: "Weight Loss" },
    { id: 18, name: "Palak Paneer & Paratha", category: "lunch", type: "vegetarian", protein: 18, calories: 360, cost: 6.5, prepTime: 35, ingredients: "Spinach, paneer, flour, cream", youtubeLink: "https://www.youtube.com/results?search_query=palak+paneer+recipe", dietPlan: "Balanced" },
    { id: 19, name: "Baingan Bharta & Roti", category: "lunch", type: "vegetarian", protein: 12, calories: 280, cost: 4.5, prepTime: 30, ingredients: "Eggplant, onion, tomato, wheat flour", youtubeLink: "https://www.youtube.com/results?search_query=baingan+bharta+recipe", dietPlan: "Weight Loss" },
    { id: 20, name: "Lentil & Vegetable Salad", category: "lunch", type: "vegetarian", protein: 13, calories: 300, cost: 4.5, prepTime: 35, ingredients: "Cooked lentils, vegetables, lime vinaigrette", youtubeLink: "https://www.youtube.com/results?search_query=lentil+salad+recipe", dietPlan: "Balanced" },
];
const saladsData = [
    { id: 1, name: "Mediterranean Quinoa Salad", protein: 18, calories: 320, cost: 7, prepTime: 25, dietPlan: "Balanced", ingredients: "Quinoa, tomatoes, cucumber, feta, olives, lemon", youtubeLink: "https://www.youtube.com/results?search_query=mediterranean+quinoa+salad" },
    { id: 2, name: "Arugula & Paneer Salad", protein: 20, calories: 340, cost: 8, prepTime: 20, dietPlan: "Balanced", ingredients: "Arugula, paneer, walnuts, pomegranate, goat cheese", youtubeLink: "https://www.youtube.com/results?search_query=arugula+paneer+salad" },
    { id: 3, name: "Chickpea Buddha Bowl", protein: 16, calories: 380, cost: 5.5, prepTime: 30, dietPlan: "Weight Loss", ingredients: "Chickpeas, sweet potato, kale, avocado, tahini", youtubeLink: "https://www.youtube.com/results?search_query=chickpea+buddha+bowl" },
    { id: 4, name: "Grilled Halloumi Salad", protein: 22, calories: 360, cost: 9, prepTime: 35, dietPlan: "Athletic", ingredients: "Halloumi, mixed greens, roasted vegetables", youtubeLink: "https://www.youtube.com/results?search_query=grilled+halloumi+salad" },
    { id: 5, name: "Spinach & Walnut Salad", protein: 15, calories: 320, cost: 6.5, prepTime: 15, dietPlan: "Balanced", ingredients: "Spinach, walnuts, cranberries, goat cheese, apple", youtubeLink: "https://www.youtube.com/results?search_query=spinach+walnut+salad" },
    { id: 6, name: "Beetroot & Feta Salad", protein: 14, calories: 300, cost: 7.5, prepTime: 25, dietPlan: "Weight Loss", ingredients: "Beetroot, feta, pumpkin seeds, orange", youtubeLink: "https://www.youtube.com/results?search_query=beetroot+feta+salad" },
    { id: 7, name: "Paneer Tikka Salad", protein: 24, calories: 380, cost: 8, prepTime: 40, dietPlan: "Athletic", ingredients: "Paneer, mixed greens, vegetables, cilantro", youtubeLink: "https://www.youtube.com/results?search_query=paneer+tikka+salad" },
    { id: 8, name: "Kale & Chickpea Salad", protein: 14, calories: 300, cost: 5, prepTime: 20, dietPlan: "Weight Loss", ingredients: "Kale, chickpeas, carrots, pumpkin seeds, tahini", youtubeLink: "https://www.youtube.com/results?search_query=kale+chickpea+salad" },
    { id: 9, name: "Tomato Cucumber Kachumber", protein: 6, calories: 80, cost: 2.5, prepTime: 10, dietPlan: "Weight Loss", ingredients: "Tomatoes, cucumber, onion, cilantro, spices", youtubeLink: "https://www.youtube.com/results?search_query=kachumber+salad" },
    { id: 10, name: "Moong Sprout & Paneer Salad", protein: 14, calories: 280, cost: 4.5, prepTime: 15, dietPlan: "Balanced", ingredients: "Sprouts, paneer, vegetables, lemon", youtubeLink: "https://www.youtube.com/results?search_query=sprout+salad+paneer" },
    { id: 11, name: "Greek Salad with Paneer", protein: 18, calories: 340, cost: 7, prepTime: 15, dietPlan: "Balanced", ingredients: "Greens, paneer, tomatoes, olives, feta, oregano", youtubeLink: "https://www.youtube.com/results?search_query=greek+salad+paneer" },
    { id: 12, name: "Corn & Bell Pepper Salad", protein: 8, calories: 220, cost: 4, prepTime: 15, dietPlan: "Weight Loss", ingredients: "Corn, bell peppers, tomatoes, cilantro", youtubeLink: "https://www.youtube.com/results?search_query=corn+salad+recipe" },
    { id: 13, name: "Beet & Orange Salad", protein: 12, calories: 310, cost: 7, prepTime: 30, dietPlan: "Balanced", ingredients: "Beetroot, orange, goat cheese, walnuts", youtubeLink: "https://www.youtube.com/results?search_query=beet+orange+salad" },
    { id: 14, name: "Avocado Chickpea Salad", protein: 12, calories: 360, cost: 6.5, prepTime: 15, dietPlan: "Weight Loss", ingredients: "Chickpeas, avocado, tomatoes, cucumber, cilantro", youtubeLink: "https://www.youtube.com/results?search_query=avocado+chickpea+salad" },
    { id: 15, name: "Thai Green Salad with Paneer", protein: 16, calories: 300, cost: 6.5, prepTime: 20, dietPlan: "Balanced", ingredients: "Greens, paneer, vegetables, peanuts, Thai dressing", youtubeLink: "https://www.youtube.com/results?search_query=thai+green+salad" },
    { id: 16, name: "Broccoli & Sesame Salad", protein: 11, calories: 280, cost: 5, prepTime: 20, dietPlan: "Weight Loss", ingredients: "Broccoli, sesame seeds, carrot, rice vinegar", youtubeLink: "https://www.youtube.com/results?search_query=broccoli+sesame+salad" },
    { id: 17, name: "Caprese Salad with Paneer", protein: 19, calories: 320, cost: 7.5, prepTime: 15, dietPlan: "Balanced", ingredients: "Paneer, tomatoes, basil, balsamic vinegar, olive oil", youtubeLink: "https://www.youtube.com/results?search_query=caprese+salad" },
    { id: 18, name: "Raw Vegetable & Sprout Salad", protein: 10, calories: 180, cost: 3.5, prepTime: 15, dietPlan: "Weight Loss", ingredients: "Sprouts, carrots, cabbage, cucumber, lemon", youtubeLink: "https://www.youtube.com/results?search_query=raw+vegetable+salad" },
    { id: 19, name: "Lentil & Vegetable Salad", protein: 13, calories: 300, cost: 4.5, prepTime: 35, dietPlan: "Balanced", ingredients: "Lentils, vegetables, cilantro, lime vinaigrette", youtubeLink: "https://www.youtube.com/results?search_query=lentil+salad+recipe" },
    { id: 20, name: "Mixed Greens with Tofu & Tahini", protein: 17, calories: 340, cost: 6, prepTime: 25, dietPlan: "Weight Loss", ingredients: "Greens, tofu, vegetables, tahini dressing", youtubeLink: "https://www.youtube.com/results?search_query=tofu+tahini+salad" },
];
function showTab(tabName) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    const tabId = tabName + '-tab';
    const selectedSection = document.getElementById(tabId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    if (tabName === 'recipes') loadRecipes('all');
    if (tabName === 'salads') loadSalads('all');
    if (tabName === 'planner') loadWeekPlan();
}
function loadRecipes(filter) {
    const grid = document.getElementById('recipes-grid');
    let filtered = mealsData;
    if (filter !== 'all') {
        filtered = mealsData.filter(m => m.category === filter);
    }
    grid.innerHTML = filtered.map(meal => `
        <div class="recipe-card">
            <h3>${meal.name}</h3>
            <span class="badge">${meal.protein}g protein • ${meal.cost} AED</span>
            <p><strong>Calories:</strong> ${meal.calories} | <strong>Prep:</strong> ${meal.prepTime} min</p>
            <p style="font-size: 0.85rem; color: #888; margin-bottom: 1rem;">${meal.ingredients}</p>
            <a href="${meal.youtubeLink}" target="_blank" class="btn">📺 Watch</a>
        </div>
    `).join('');
    updateFilterButtons(filter);
}
function filterRecipes(category) {
    loadRecipes(category);
}
function loadSalads(filter) {
    const grid = document.getElementById('salads-grid');
    let filtered = saladsData;
    if (filter !== 'all') {
        filtered = saladsData.filter(s => s.dietPlan === filter);
    }
    grid.innerHTML = filtered.map(salad => `
        <div class="recipe-card">
            <h3>${salad.name}</h3>
            <span class="badge">${salad.protein}g protein • ${salad.cost} AED</span>
            <p><strong>Calories:</strong> ${salad.calories} | <strong>Prep:</strong> ${salad.prepTime} min</p>
            <p style="font-size: 0.85rem; color: #888; margin-bottom: 1rem;">${salad.ingredients}</p>
            <a href="${salad.youtubeLink}" target="_blank" class="btn">📺 Watch</a>
        </div>
    `).join('');
    updateFilterButtons(filter);
}
function filterSalads(filter) {
    loadSalads(filter);
}
function updateFilterButtons(active) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
function addExpense() {
    const date = document.getElementById('expenseDate').value;
    const item = document.getElementById('expenseItem').value;
    const amount = document.getElementById('expenseAmount').value;
    if (!date || !item || !amount) {
        alert('Please fill all fields');
        return;
    }
    let expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    expenses.push({ date, item, amount: parseFloat(amount) });
    localStorage.setItem('expenses', JSON.stringify(expenses));
    document.getElementById('expenseDate').value = '';
    document.getElementById('expenseItem').value = '';
    document.getElementById('expenseAmount').value = '';
    displayExpenses();
}
function displayExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    const container = document.getElementById('expenses-display');
    if (expenses.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888; margin-top: 2rem;">No expenses added yet</p>';
        return;
    }
    container.innerHTML = `
        <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Recent Expenses</h3>
        <div style="background: white; border: 1px solid #d9d6d1;">
            ${expenses.map((exp, idx) => `
                <div style="padding: 1rem; border-bottom: 1px solid #d9d6d1; display: flex; justify-content: space-between;">
                    <div>
                        <strong>${exp.item}</strong>
                        <p style="font-size: 0.85rem; color: #888;">${exp.date}</p>
                    </div>
                    <div style="text-align: right;">
                        <strong>${exp.amount} AED</strong>
                        <button onclick="deleteExpense(${idx})" style="background: none; border: none; color: #e74c3c; cursor: pointer; margin-left: 1rem;">✕</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses') || '[]');
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}
const mealPlans = [
    [
        { day: 'Monday', breakfast: 'Chole Puri (15g)', lunch: 'Chicken Tikka Biryani (28g)', snack: 'Roasted Chickpea (8g)', dinner: 'Paneer Tikka Masala (22g)' },
        { day: 'Tuesday', breakfast: 'Carrot Idli Sambar (12g)', lunch: 'Paneer Butter Masala (20g)', snack: 'Paneer Tikka Bites (12g)', dinner: 'Dal Makhani & Rice (16g)' },
        { day: 'Wednesday', breakfast: 'Paneer Bhurji & Roti (18g)', lunch: 'Vegetable Biryani (14g)', snack: 'Hummus & Veggies (8g)', dinner: 'Paneer Butter Masala (20g)' },
        { day: 'Thursday', breakfast: 'Egg Curry & Roti (16g)', lunch: 'Chana Masala & Bhature (18g)', snack: 'Baked Paneer Chips (10g)', dinner: 'Vegetable Biryani (14g)' },
        { day: 'Friday', breakfast: 'Soya Kheema Paratha (14g)', lunch: 'Paneer Tikka Masala (22g)', snack: 'Minced Mutton Cutlets (20g)', dinner: 'Chana Masala & Bhature (18g)' },
        { day: 'Saturday', breakfast: 'Dal Dosa (12g)', lunch: 'Paneer Tikka Masala (22g)', snack: 'Chilli Paneer Tacos (16g)', dinner: 'Soya Bhurji & Roti (15g)' },
        { day: 'Sunday', breakfast: 'Oats & Almonds (8g)', lunch: 'Dal Makhani & Rice (16g)', snack: 'Chicken Hariyali Kebab (18g)', dinner: 'Moong Dal Makhani (16g)' }
    ]
];
function loadWeekPlan() {
    const weekNumber = parseInt(document.getElementById('weekSelector').value);
    const container = document.getElementById('planner-content');
    const weekPlan = mealPlans[0];
    container.innerHTML = weekPlan.map(day => `
        <div class="day-plan">
            <h4>${day.day}</h4>
            <p><strong>🌅 Breakfast:</strong> ${day.breakfast}</p>
            <p><strong>🍽️ Lunch:</strong> ${day.lunch}</p>
            <p><strong>🥤 Snack:</strong> ${day.snack}</p>
            <p><strong>🌙 Dinner:</strong> ${day.dinner}</p>
        </div>
    `).join('');
}
document.addEventListener('DOMContentLoaded', () => {
    displayExpenses();
    document.getElementById('recipe-count').textContent = `(${mealsData.length})`;
    document.getElementById('salad-count').textContent = `(${saladsData.length})`;
});
