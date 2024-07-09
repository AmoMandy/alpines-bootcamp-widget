function greetFunction() {
    return {
        name: '',
        language: 'en',
        greetingMessage: '',
        greet() {
            const greetings = {
                en: `Hello, ${this.name}!`,
                is: `Sawubona, ${this.name}!`,
                so: `Domelung, ${this.name}!`
            };
            this.greetingMessage = greetings[this.language];
        }
    };
}
  