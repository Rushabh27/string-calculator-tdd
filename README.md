# String Calculator TDD Kata

This is a solution to the **Incubyte TDD Assessment** based on the famous *String Calculator Kata*.  
The project demonstrates **Test-Driven Development (TDD)**, clean code practices, and incremental commits.

---

## 🔹 Features Implemented

- ✅ Return `0` for an empty string input  
- ✅ Return a single number when only one number is passed  
- ✅ Sum two numbers separated by commas  
- ✅ Sum multiple numbers separated by commas  
- ✅ Support newlines `\n` as additional delimiters  
- ✅ Allow custom single-character delimiters via `//;\n1;2` syntax  
- ✅ Throw descriptive error when negative numbers are provided  
- ✅ Ignore numbers greater than `1000`  
- ✅ Support multi-character custom delimiters like `//[***]\n1***2***3`  
- ✅ Support multiple custom delimiters like `//[*][%]\n1*2%3`

---

## 📂 Project Structure


```text
string-calculator-tdd/
├── src/
│   └── calculator.js       # Core implementation
├── tests/
│   └── calculator.test.js  # Jest tests
├── jest.config.js          # Jest configuration
├── package.json
└── README.md
```

---

## 🧪 How to Run

### 1. Clone the Repository
git clone https://github.com/Rushabh27/string-calculator-tdd.git
cd string-calculator-tdd

### 2. Install Dependencies
npm install

### 3. Run Tests
npm test


All tests are written using Jest
.

🧰 Tech Stack
JavaScript (Node.js)
Jest for testing
Test-Driven Development (TDD) methodology

📝 TDD Process
This project was built following Red → Green → Refactor steps:
Write a failing test (Red)
Write minimal code to make the test pass (Green)
Refactor for clarity and maintainability
Commit after each step
Check the commit history for step-by-step progress.

🔗 Repository
https://github.com/Rushabh27/string-calculator-tdd