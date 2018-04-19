const app = "I don't do much."

function exploringClosures(test) {
  function innerFunction() {
    console.log('${test}');
  }
  return innerFunction;
};

exploringClosures('it works');

done();
