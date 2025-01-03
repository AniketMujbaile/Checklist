# Node.js Checklist System
A robust checklist system built with Node.js and EJS that evaluates application data against predefined rules and displays results in a clean, responsive dashboard.
Features

✅ Dynamic rule evaluation system
📊 Clean, responsive dashboard interface
🔄 Easy to add or modify checklist rules
🎯 Modular and maintainable architecture
🚀 Built with Node.js and EJS
💾 API integration with fallback data

## Installation

Clone the repository:
```bash
git clone <your-repo-url>
cd checklist-system
```

Install dependencies:

```bash
npm install
```
Create a .env file in the root directory:

```bash
PORT=3000
API_URL=http://qa-gb.api.dynamatix.com:3100/api
```

## Running the Application

Production Mode
```bash
npm start
```

## Adding New Rules

To add new checklist rules, modify the config/rules.js file. Each rule should follow this structure:
```bash
{
    id: 'uniqueRuleId',
    name: 'Human Readable Rule Name',
    evaluate: (data) => ({
        passed: Boolean,
        message: 'Explanation of the result'
    })
}
```
Example:
```bash
{
    id: 'minimumIncome',
    name: 'Minimum Income Check',
    evaluate: (data) => ({
        passed: data.annualIncome >= 30000,
        message: `Annual income is ${data.annualIncome >= 30000 ? 'sufficient' : 'insufficient'}`
    })
}
```

## Current Rules

1. Valuation Fee Paid
* Checks if isValuationFeePaid is true

2. UK Resident
* Verifies if isUkResident is true

3. Risk Rating Medium
* Ensures riskRating is "Medium"

4. LTV Below 60%
* Calculates and verifies Loan-to-Value ratio is below 60%


## API Integration
The system fetches application data from an API endpoint:
```bash
GET /applications/getApplicationById/:id
```
If the API is unavailable, the system uses fallback data to demonstrate functionality.

## Error Handling
The system includes comprehensive error handling:

* API connection errors
* Data validation errors
* Rule evaluation errors

All errors are logged and displayed appropriately in the dashboard.
 