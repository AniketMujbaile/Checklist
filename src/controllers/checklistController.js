const ChecklistService = require('../services/checklistService');

exports.displayDashboard = async (req, res) => {
    try {
        const results = await ChecklistService.evaluateRules('67339ae56d5231c1a2c63639');
        
        if (!results || results.length === 0) {
            throw new Error('No results returned from service');
        }
        
        res.render('dashboard', { 
            results,
            error: null 
        });
    } catch (error) {
        console.error('Controller Error:', error);
        res.render('dashboard', { 
            error: `Failed to load checklist results: ${error.message}`,
            results: []
        });
    }
}

 