function transportFeeFunction() {
    return {
        shift: '',
        feeMessage: '',
        calculateFee() {
            const fees = {
                morning: 'R20',
                afternoon: 'R10',
                night: 'free'
            };
            this.feeMessage = `Transport fee is ${fees[this.shift]}`;
        }
    };
}