// part 1 and 2
function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const merge = [];
  let size = arr1.length;
  if (arr1.length < arr2.length) {
    size = arr2.length;
  }
  for (let i = 0; i < size; i += 1) {
    if (arr1[i]) {
      merge.push(arr1[i]);
    }
    if (arr2[i]) {
      merge.push(arr2[i]);
    }
  }
  return merge;
}

function checkWord(t_word: string, c_word: string): string {
  let result: string = '';
  const t_size = t_word.length;
  const c_size = c_word.length;
  for (let i = 0; i < t_size; i += 1) {
    if (t_word[i] == c_word[i]) {
      result = result.concat('c');
    } else {
      let k = 1;
      for (let j = 0; j < c_size; j += 1) {
        if (t_word[i] == c_word[j]) {
          result = result.concat('p');
          j = c_size;
          k = 0;
        }
      }
      if (k == 1) {
        result = result.concat('a');
      }
    }
  }
  return result;
}

const array1: Array<number> = [18, 74, 88, 3];
const array2: Array<number> = [4, 5, 23, 18, 9, -5, 31];

const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);

const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}
// Part 3
type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

const mayor1: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};

const mayor2: Candidate = {
  name: 'Rose Olson',
  votes: [48, 90, 12, 21, 13],
  funding: 78889263,
};

const mayor3: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};

const mayor4: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317921937,
};

const candidate: Array<Candidate> = [mayor1, mayor2, mayor3, mayor4];
// part 3-1
const arrSize = candidate.length;
const voteSize = candidate[0].votes.length;
let overallVotes = 0;
for (let i = 0; i < arrSize; i += 1) {
  for (let j = 0; j < voteSize; j += 1) {
    overallVotes += candidate[i].votes[j];
  }
}

for (let i = 0; i < arrSize; i += 1) {
  let totalVotes = 0;
  for (let j = 0; j < voteSize; j += 1) {
    totalVotes += candidate[i].votes[j];
  }
  const totalPercentage = (totalVotes / overallVotes) * 100;
  console.log(`${candidate[i].name} -- ${totalVotes} -- ${Number(totalPercentage).toFixed(2)}%`);
}

// part 3-2
const precinctVotes: Array<number> = [];
for (let i = 0; i < voteSize; i += 1) {
  let precinctVote = 0;
  for (let j = 0; j < arrSize; j += 1) {
    precinctVote += candidate[j].votes[i];
  }
  precinctVotes.push(precinctVote);
}

for (let i = 0; i < arrSize; i += 1) {
  console.log(`\n${candidate[i].name}`);
  for (let j = 0; j < voteSize; j += 1) {
    // console.log('Precinct ' + i + ' -- ' candidate[i].votes[j] + ' -- ' + candidate[i].votes[j] / precinctVotes[j]);
    const votePercentage = (candidate[i].votes[j] / precinctVotes[j]) * 100;
    console.log(
      `\tPrecinct ${i + 1} -- ${candidate[i].votes[j]} -- ${Number(votePercentage).toFixed(2)}%`
    );
  }
}
// part 3-3
for (let i = 0; i < arrSize; i += 1) {
  let totalVotes = 0;
  for (let j = 0; j < voteSize; j += 1) {
    totalVotes += candidate[i].votes[j];
  }
  const spent = candidate[i].funding / totalVotes;
  console.log(`${candidate[i].name} spent $${Number(spent).toFixed(2)} per vote`);
}

// part 4
