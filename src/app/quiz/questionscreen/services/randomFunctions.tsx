interface Question {
    question: string;
    answers: string[];
  }

function getRandomQuestions(arr: Question[], count: number): Question[] {
    if (count > arr.length) {
        throw new Error("Count cannot be greater than the length of the array.");
    }

    const randomIndices: number[] = [];
    const result: Question[] = [];

    // Generate unique random indices
    while (randomIndices.length < count) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    // Get elements at random indices
    randomIndices.forEach(index => {
        result.push(arr[index]);
    });

    return result;
}

const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

export {Question, getRandomQuestions, shuffleArray}