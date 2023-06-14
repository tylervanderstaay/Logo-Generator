const Shape = require('./shape');

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `
        <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="white"/>
            <circle cx="150" cy="100" r="90" fill="${this.shapeColor}" />
            <text fill="${this.textColor}" font-size="80" text-anchor="middle" x="150" y="120">${this.text}</text>
        </svg>
        `
    }
}

module.exports = Square;