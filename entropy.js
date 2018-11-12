/*
Get entropy of a distribution
*/
export const getEntropy = (input, base=Math.E) => {
    let arr;

    if (typeof input === 'string' || input instanceof String) {
        arr = input.split('');
    } else {
        arr = input;
    }

    const set = {};
    arr.forEach(c =>
        (set[c] ? set[c]++ : (set[c] = 1))
    );

    return Object.keys(set).reduce(
        (acc, c) => {
            const p = set[c] / arr.length;
            return acc - (p * (Math.log(p) / Math.log(base)));
        }, 0
    );
};


/*
Get maximum likelihood (MLE) of a distribution
E.G. the ratio of most common value / set of possible values
*/
export const getMLE = (input) => {
    let arr;

    if (typeof input === 'string' || input instanceof String) {
        arr = input.split('');
    } else {
        arr = input;
    }

    const set = {};
    arr.forEach(c =>
        (set[c] ? set[c]++ : (set[c] = 1))
    );

    let mle = 0;
    Object.keys(set).forEach(
        (c) => {
            const p = set[c] / arr.length;
            if (p > mle) {
                mle = p;
            }
        }
    );

    return mle;
}
