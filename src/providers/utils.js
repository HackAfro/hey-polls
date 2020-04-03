export const fetchQuestions = () => {
  return new Promise(async (resolve, reject) => {
    const res = await fetch('/questions');
    if (res.ok && res.status === 200) {
      const questions = await res.json();
      resolve(questions);
    } else {
      reject(new Error(res.statusText));
    }
  });
};

export const fetchQuestion = url => {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    if (res.ok && res.status === 200) {
      const question = await res.json();
      resolve(question);
    } else {
      reject(new Error(res.statusText));
    }
  });
};

export const placeVote = url => {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url, {
      method: 'POST'
    });

    if (res.ok && res.status === 201) {
      const choice = await res.json();
      resolve(choice);
    } else {
      reject(new Error(res.statusText));
    }
  });
};
