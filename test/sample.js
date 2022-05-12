const sample = require('../sample')

describe('solution', function () {

    const answers1 = [1, 2, 3, 4, 5];
    const answers2 = [1, 3, 2, 4, 2];
    const answers3 = [2, 1, 2, 3, 2, 4, 2, 5];

    it('answers1', () => {
        const result = sample.solution(answers1);
        result.should.eql([1])
    });
    it('answers2', () => {
        const result = sample.solution(answers2);
        result.should.eql([1, 2, 3])
    });
    it('answers3', () => {
        const result = sample.solution(answers3);
        result.should.eql([2])
    });
});