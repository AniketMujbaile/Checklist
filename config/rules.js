module.exports = [
    {
      id: 'valuationFeePaid',
      name: 'Valuation Fee Paid',
      evaluate: (data) => ({
        passed: data.isValuationFeePaid === true,
        message: data.isValuationFeePaid ? 'Valuation fee has been paid' : 'Valuation fee is pending'
      })
    },
    {
      id: 'ukResident',
      name: 'UK Resident',
      evaluate: (data) => ({
        passed: data.isUkResident === true,
        message: data.isUkResident ? 'Applicant is a UK resident' : 'Applicant is not a UK resident'
      })
    },
    {
      id: 'riskRating',
      name: 'Risk Rating Medium',
      evaluate: (data) => ({
        passed: data.riskRating === 'Medium',
        message: data.riskRating === 'Medium' ? 
          'Risk rating is Medium' : 
          `Risk rating is ${data.riskRating}, expected Medium`
      })
    },
    {
      id: 'ltvCheck',
      name: 'LTV Below 60%',
      evaluate: (data) => {
        const ltv = (data.loanRequired / data.purchasePrice) * 100;
        return {
          passed: ltv < 60,
          message: `LTV is ${ltv.toFixed(2)}% (${ltv < 60 ? 'below' : 'above'} 60% threshold)`
        };
      }
    }
  ];