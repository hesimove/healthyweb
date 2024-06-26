// 2. Nutritional Guidance page click to change content
document.addEventListener('DOMContentLoaded', function() {
    // first box click
    let button = document.getElementById('button1');
    button.addEventListener('click', function() {
        let textElement = document.getElementById('text-content1');
        let texts = [
            "Diet Plan for Weight Loss and Cardio Exercise",
            "BREAKFAST: 1. Greek Yogurt Parfait with mixed berries and granola; 2. Green Tea for antioxidants and a caffeine boost; 3. Apple with Almond Butter for a balance of fiber and healthy fats.",
            "LUNCH: 1. Grilled Chicken Salad with a variety of vegetables and a vinaigrette; 2. Whole Grain Roll for complex carbohydrates; 3.Hummus and Carrot Sticks for a protein and fiber-rich snack.",
            "DINNER: 1. Baked Salmon with Steamed Broccoli and Quinoa, rich in protein and essential nutrients; 2. Cottage Cheese with Pineapple Chunks, combining protein with sweet, fibrous fruit."
        ];
        let currentText = textElement.innerText;
        let currentIndex = texts.indexOf(currentText);

        if (currentIndex < texts.length - 1) {
            textElement.innerText = texts[currentIndex + 1];
        } else {
            textElement.innerText = texts[0];
        }
    });

    // second box click
    let button2 = document.getElementById('button2');
    button2.addEventListener('click', function() {
        let textElement2 = document.getElementById('text-content2');
        let texts2 = [
            "Daily Meal Plan for Muscle Building",
            "BREAKFAST: 1. Oatmeal with Whey Protein; 2. Eggs; 3. Greek Yogurt with Honey and Granola.",
            "LUNCH: 1. Grilled Chicken Breast or Thighs; 2. Avocado Salad.",
            "Pre-Workout Meal/Snack: 1. Protein Shake; 2. Whole Grain Bread with Turkey and Cheese; 3. Banana with Peanut Butter.",
            "DINNER: 1. Salmon or Lean Steak; 2. Quinoa or Brown Rice; 3. Cottage Cheese with Pineapple or Berries."
        ];
    
        let currentText2 = textElement2.innerText.trim(); // Trim whitespace
        console.log(currentText2); // Debugging output
    
        let currentIndex2 = texts2.indexOf(currentText2);
        console.log(currentIndex2); // Debugging output
    
        if (currentIndex2 < texts2.length - 1) {
            textElement2.innerText = texts2[currentIndex2 + 1];
        } else {
            textElement2.innerText = texts2[0];
        }
    });
  });

// click first picture to see tips
document.getElementById('image1').addEventListener('click', function() {
var image1 = document.getElementById('image1');
var text1 = document.getElementById('text1');

if (image1.style.display !== 'none') {
    image1.style.display = 'none'; // Hide the image
    text1.style.display = 'block'; // Show the text
} else {
    image1.style.display = 'block'; // Show the image
    text1.style.display = 'none'; // Hide the text
}
});

// click second picture to see tips
document.getElementById('image2').addEventListener('click', function() {
    var image2 = document.getElementById('image2');
    var text2 = document.getElementById('text2');
    
    if (image2.style.display !== 'none') {
        image2.style.display = 'none'; // Hide the image
        text2.style.display = 'block'; // Show the text
    } else {
        image2.style.display = 'block'; // Show the image
        text2.style.display = 'none'; // Hide the text
    }
    });