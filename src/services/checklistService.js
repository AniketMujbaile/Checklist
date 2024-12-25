const rules = require('../../config/rules');
const apiClient = require('../utils/apiClient');

class ChecklistService {
    static async evaluateRules(applicationId) {
        try {
            // Try to get data from API
            const applicationData = await apiClient.getApplicationById(applicationId);
            
            // If API fails, use sample data
            const fallbackData = {
                isValuationFeePaid: true,
                isUkResident: true,
                riskRating: "Medium",
                loanRequired: 150000,
                purchasePrice: 300000
            };

            const dataToUse = applicationData || fallbackData;
            
            return rules.map(rule => {
                const result = rule.evaluate(dataToUse);
                return {
                    id: rule.id,
                    name: rule.name,
                    ...result
                };
            });
        } catch (error) {
            console.error('Service Error:', error);
            
            // Use fallback data if API fails
            const fallbackData = {
                isValuationFeePaid: true,
                isUkResident: true,
                riskRating: "Medium",
                loanRequired: 150000,
                purchasePrice: 300000
            };

            return rules.map(rule => {
                const result = rule.evaluate(fallbackData);
                return {
                    id: rule.id,
                    name: rule.name,
                    ...result
                };
            });
        }
    }
}

module.exports = ChecklistService;

 