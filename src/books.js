export class Books {
  /**
   * @type {Record<string, {level:number, answer: string}[]>}
   */

  constructor() {
    // this.generateRandomLevels();
  }

  AVAILABLE_BOOKS = [101, 102, 103, 104, 105, 106];

  books = {
    '101': [
      { book: '101', level: 1, answer: 'a' },
      { book: '101', level: 2, answer: 'd' },
      { book: '101', level: 3, answer: 'c' },
      { book: '101', level: 4, answer: 'b' },
      { book: '101', level: 5, answer: 'b' },
      { book: '101', level: 6, answer: 'c' },
      { book: '101', level: 7, answer: 'd' },
      { book: '101', level: 8, answer: 'd' },
      { book: '101', level: 9, answer: 'b' },
      { book: '101', level: 10, answer: 'a' },
      { book: '101', level: 11, answer: 'a' },
      { book: '101', level: 12, answer: 'd' },
      { book: '101', level: 13, answer: 'c' },
      { book: '101', level: 14, answer: 'b' },
      { book: '101', level: 15, answer: 'd' },
      { book: '101', level: 16, answer: 'b' },
      { book: '101', level: 17, answer: 'd' },
      { book: '101', level: 18, answer: 'a' },
      { book: '101', level: 19, answer: 'c' },
      { book: '101', level: 20, answer: 'a' },
      { book: '101', level: 21, answer: 'c' },
      { book: '101', level: 22, answer: 'c' },
      { book: '101', level: 23, answer: 'b' },
      { book: '101', level: 24, answer: 'd' },
      { book: '101', level: 25, answer: 'a' },
      { book: '101', level: 26, answer: 'b' },
      { book: '101', level: 27, answer: 'a' },
      { book: '101', level: 28, answer: 'b' },
      { book: '101', level: 29, answer: 'd' },
      { book: '101', level: 30, answer: 'a' }
    ],
    '102': [
      { book: '102', level: 1, answer: 'c' },
      { book: '102', level: 2, answer: 'a' },
      { book: '102', level: 3, answer: 'c' },
      { book: '102', level: 4, answer: 'c' },
      { book: '102', level: 5, answer: 'b' },
      { book: '102', level: 6, answer: 'd' },
      { book: '102', level: 7, answer: 'd' },
      { book: '102', level: 8, answer: 'd' },
      { book: '102', level: 9, answer: 'c' },
      { book: '102', level: 10, answer: 'd' },
      { book: '102', level: 11, answer: 'a' },
      { book: '102', level: 12, answer: 'b' },
      { book: '102', level: 13, answer: 'a' },
      { book: '102', level: 14, answer: 'c' },
      { book: '102', level: 15, answer: 'd' },
      { book: '102', level: 16, answer: 'b' },
      { book: '102', level: 17, answer: 'a' },
      { book: '102', level: 18, answer: 'a' },
      { book: '102', level: 19, answer: 'c' },
      { book: '102', level: 20, answer: 'b' },
      { book: '102', level: 21, answer: 'a' },
      { book: '102', level: 22, answer: 'a' },
      { book: '102', level: 23, answer: 'c' },
      { book: '102', level: 24, answer: 'a' },
      { book: '102', level: 25, answer: 'd' },
      { book: '102', level: 26, answer: 'c' },
      { book: '102', level: 27, answer: 'c' },
      { book: '102', level: 28, answer: 'c' },
      { book: '102', level: 29, answer: 'b' },
      { book: '102', level: 30, answer: 'd' }
    ],
    '103': [
      { book: '103', level: 1, answer: 'b' },
      { book: '103', level: 2, answer: 'd' },
      { book: '103', level: 3, answer: 'd' },
      { book: '103', level: 4, answer: 'd' },
      { book: '103', level: 5, answer: 'a' },
      { book: '103', level: 6, answer: 'b' },
      { book: '103', level: 7, answer: 'a' },
      { book: '103', level: 8, answer: 'a' },
      { book: '103', level: 9, answer: 'b' },
      { book: '103', level: 10, answer: 'c' },
      { book: '103', level: 11, answer: 'a' },
      { book: '103', level: 12, answer: 'a' },
      { book: '103', level: 13, answer: 'b' },
      { book: '103', level: 14, answer: 'a' },
      { book: '103', level: 15, answer: 'd' },
      { book: '103', level: 16, answer: 'd' },
      { book: '103', level: 17, answer: 'd' },
      { book: '103', level: 18, answer: 'c' },
      { book: '103', level: 19, answer: 'c' },
      { book: '103', level: 20, answer: 'b' },
      { book: '103', level: 21, answer: 'a' },
      { book: '103', level: 22, answer: 'd' },
      { book: '103', level: 23, answer: 'b' },
      { book: '103', level: 24, answer: 'a' },
      { book: '103', level: 25, answer: 'd' },
      { book: '103', level: 26, answer: 'b' },
      { book: '103', level: 27, answer: 'b' },
      { book: '103', level: 28, answer: 'd' },
      { book: '103', level: 29, answer: 'c' },
      { book: '103', level: 30, answer: 'a' }
    ],
    '104': [
      { book: '104', level: 1, answer: 'c' },
      { book: '104', level: 2, answer: 'b' },
      { book: '104', level: 3, answer: 'a' },
      { book: '104', level: 4, answer: 'd' },
      { book: '104', level: 5, answer: 'b' },
      { book: '104', level: 6, answer: 'd' },
      { book: '104', level: 7, answer: 'd' },
      { book: '104', level: 8, answer: 'b' },
      { book: '104', level: 9, answer: 'b' },
      { book: '104', level: 10, answer: 'd' },
      { book: '104', level: 11, answer: 'c' },
      { book: '104', level: 12, answer: 'a' },
      { book: '104', level: 13, answer: 'a' },
      { book: '104', level: 14, answer: 'd' },
      { book: '104', level: 15, answer: 'a' },
      { book: '104', level: 16, answer: 'd' },
      { book: '104', level: 17, answer: 'a' },
      { book: '104', level: 18, answer: 'b' },
      { book: '104', level: 19, answer: 'c' },
      { book: '104', level: 20, answer: 'c' },
      { book: '104', level: 21, answer: 'd' },
      { book: '104', level: 22, answer: 'd' },
      { book: '104', level: 23, answer: 'c' },
      { book: '104', level: 24, answer: 'd' },
      { book: '104', level: 25, answer: 'd' },
      { book: '104', level: 26, answer: 'd' },
      { book: '104', level: 27, answer: 'a' },
      { book: '104', level: 28, answer: 'a' },
      { book: '104', level: 29, answer: 'c' },
      { book: '104', level: 30, answer: 'd' }
    ],
    '105': [
      { book: '105', level: 1, answer: 'b' },
      { book: '105', level: 2, answer: 'b' },
      { book: '105', level: 3, answer: 'd' },
      { book: '105', level: 4, answer: 'd' },
      { book: '105', level: 5, answer: 'b' },
      { book: '105', level: 6, answer: 'b' },
      { book: '105', level: 7, answer: 'd' },
      { book: '105', level: 8, answer: 'a' },
      { book: '105', level: 9, answer: 'b' },
      { book: '105', level: 10, answer: 'd' },
      { book: '105', level: 11, answer: 'a' },
      { book: '105', level: 12, answer: 'b' },
      { book: '105', level: 13, answer: 'c' },
      { book: '105', level: 14, answer: 'c' },
      { book: '105', level: 15, answer: 'a' },
      { book: '105', level: 16, answer: 'd' },
      { book: '105', level: 17, answer: 'd' },
      { book: '105', level: 18, answer: 'd' },
      { book: '105', level: 19, answer: 'c' },
      { book: '105', level: 20, answer: 'd' },
      { book: '105', level: 21, answer: 'c' },
      { book: '105', level: 22, answer: 'b' },
      { book: '105', level: 23, answer: 'b' },
      { book: '105', level: 24, answer: 'b' },
      { book: '105', level: 25, answer: 'a' },
      { book: '105', level: 26, answer: 'c' },
      { book: '105', level: 27, answer: 'a' },
      { book: '105', level: 28, answer: 'd' },
      { book: '105', level: 29, answer: 'd' },
      { book: '105', level: 30, answer: 'd' }
    ],
    '106': [
      { book: '101', level: 1, answer: 'a' },
      { book: '101', level: 4, answer: 'b' },
      { book: '101', level: 2, answer: 'd' },
      { book: '101', level: 28, answer: 'b' },
      { book: '101', level: 7, answer: 'd' },
      { book: '101', level: 20, answer: 'a' },
      { book: '102', level: 11, answer: 'a' },
      { book: '102', level: 29, answer: 'b' },
      { book: '102', level: 4, answer: 'c' },
      { book: '102', level: 4, answer: 'c' },
      { book: '102', level: 28, answer: 'c' },
      { book: '102', level: 20, answer: 'b' },
      { book: '103', level: 18, answer: 'c' },
      { book: '103', level: 25, answer: 'd' },
      { book: '103', level: 19, answer: 'c' },
      { book: '103', level: 1, answer: 'b' },
      { book: '103', level: 20, answer: 'b' },
      { book: '103', level: 16, answer: 'd' },
      { book: '104', level: 15, answer: 'a' },
      { book: '104', level: 13, answer: 'a' },
      { book: '104', level: 20, answer: 'c' },
      { book: '104', level: 12, answer: 'a' },
      { book: '104', level: 30, answer: 'd' },
      { book: '104', level: 28, answer: 'a' },
      { book: '105', level: 19, answer: 'c' },
      { book: '105', level: 13, answer: 'c' },
      { book: '105', level: 20, answer: 'd' },
      { book: '105', level: 26, answer: 'c' },
      { book: '105', level: 5, answer: 'b' },
      { book: '105', level: 13, answer: 'c' },
    ],
  };

  /**
   * @param {number} book
   */
  isBook(book) {
    const isValidBook = this.AVAILABLE_BOOKS.includes(+book);
    return isValidBook;
  }
  /**
   * @param book {number}
   * @param level {number}
   * @param answer {string}
   */
  checkAnswer(bookNumber, levelNumber, answer) {
    const book = this.books[bookNumber];
    if (!book) {
      throw new Error(`Livro ${book} não existe (${this.AVAILABLE_BOOKS})`)
    }
    /** @type {{level:number, answer: string}} */
    const level = book[levelNumber - 1];
    if (!level) {
      throw new Error(`Livro ${book}, fase ${level} não existe (${book.map(i => i.level)})`)
    }
    const isAnswer = level.answer === answer
    console.log(`isAnswer = ${isAnswer}, book ${bookNumber}, level ${levelNumber}`)
    return isAnswer;
  }

  generateRandomLevels() {
    const book106 = [];
    const books = ['101', '102', '103', '104', '105'];
    let level = 1;
    for (const k of books) {
      const usedNumbers = [];
      for (let i = 0; i < 6; i++) {
        let random = this.getRandomInt(0, 29);
        while (usedNumbers.includes(random)) {
          random = this.getRandomInt(0, 29);
        }
        const newItem = structuredClone(this.books[k][random]);
        // newItem.level = level;
        level += 1;
        book106.push(newItem);
      }
    }
    this.books[106] = book106;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}