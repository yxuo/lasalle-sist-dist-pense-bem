const data = {
  '101': 'adbccbddcaadbcdcdababbcdacacda',
  '102': 'babbcdddbdacabdcaabcaabadbbbcd',
  '103': 'cdddacaacbaacadddbbcadcadccdba',
  '104': 'bcadcddccdbaadadacbbddbdddaabd',
  '105': 'ccddccdacdacbbadddbdbcccabaddd'
};

const transformedData = Object.keys(data).reduce((acc, key) => {
  const answers = data[key].split('').map((char, index) => ({
    index: index + 1,
    answer: char
  }));
  acc[key] = answers;
  return acc;
}, {});

console.log(transformedData);
