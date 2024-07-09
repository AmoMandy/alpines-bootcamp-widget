function phoneBillFunction() {
    return {
        phoneString: '',
        billMessage: '',
        calculateBill() {
            const calls = this.phoneString.split(',').filter(s => s.trim() === 'call').length;
            const sms = this.phoneString.split(',').filter(s => s.trim() === 'sms').length;
            const total = (calls * 2.75) + (sms * 0.65);
            this.billMessage = `Total phone bill is R${total.toFixed(2)}`;
        }
    };
}