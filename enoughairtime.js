function airtimeFunction() {
    return {
        usageString: '',
        availableAirtime: 0,
        airtimeMessage: '',
        checkAirtime() {
            const calls = this.usageString.split(',').filter(s => s.trim() === 'call').length;
            const sms = this.usageString.split(',').filter(s => s.trim() === 'sms').length;
            const totalCost = (calls * 2.75) + (sms * 0.65);
            const remainingAirtime = this.availableAirtime - totalCost;
            this.airtimeMessage = remainingAirtime >= 0 ? 
                `You have enough airtime. Remaining: R${remainingAirtime.toFixed(2)}` : 
                'Sorry, you do not have enough airtime.';
        }
    };
}