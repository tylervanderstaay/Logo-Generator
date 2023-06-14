const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('takes 3 initials, text color, and shape color to generate an SVG file in a triangle shape', () => {
        const [text, textColor, shapeColor] = ['JTV', 'blue', 'black'];
        const triangle = new Triangle(text, textColor, shapeColor);

        expect(triangle.render()).toEqual(`
        <svg version="1.1" baseProfile="full" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="white"/>
            <circle cx="150" cy="100" r="90" fill="${shapeColor}" />
            <text fill="${textColor}" font-size="80" text-anchor="middle" x="150" y="120">${text}</text>
        </svg>`)
    })
})