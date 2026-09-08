class Result {
  constructor(result){
    this.iterations = 0;
    this.result = result;
  }

  outcome(x) {
    this.result = x;
    return this;
  }


  step(){
    this.iterations++;
  }
}

export class MaxSubSum {
  #results = [];
  #mkResult() {
    const r = new Result();
    this.#results.push(r);
    return r;
  }
  
  get results() {
    return this.#results.splice();
  }

  brute(arr) {
    const fatResult = this.#mkResult();
    if(arr.length == 0) { 
      return fatResult; 
    }

    let result = arr[0];
    for(let s=0; s < arr.length;s++) {
      let sum = 0;
      for(let i=s; i < arr.length; i++) {
        sum+=arr[i];
        result = Math.max(result, sum);
        fatResult.step();  
      }

      if(result<0) {
        return fatResult.outcome(0);
      }
    }

    return fatResult.outcome(result);
  }

  // Kadane's algorithm
  kadane(arr) {    
    const fatResult = this.#mkResult();
    let result = 0;
    let localMax = 0;
    for(let i=0; i < arr.length; i++) {
      localMax = Math.max(localMax+arr[i], arr[i]);
      result = Math.max(localMax, result);
      fatResult.step();  
    }

    return fatResult.outcome(result);
  }

  // Karol's algorithm
  karol(arr) {
    const fatResult = this.#mkResult();
    let current = 0;
    let best = 0;
    for(let v of arr){
      current += v;
      if(current < 0){
        current = 0;
      } else if(current > best){
        best = current;
      }
      fatResult.step();
    }

    return fatResult.outcome(best);
  }
}
