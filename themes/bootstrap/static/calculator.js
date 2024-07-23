let url = 'https://j6a2q5dm94.execute-api.us-west-2.amazonaws.com/v1'
function calculateOption() {

  function getValueArray(valueTree, iterations) {
    let a = [];
    let j = 0;
    while (j <= iterations) {
      var d  = {};
      d['iteration'] = parseInt(j);
      let n = [];
      for (var key in valueTree[j]) {
        var m = {};
        m['moves'] = parseInt(key);
        m['value'] = valueTree[j][key];
        n.push(m);
      }
      d['payload'] = n;
      a.push(d);
      j++;
    }
    return a;
  }

  function createHead(valueArray) {
    let i = 0;
    let output = '';
    while (i <= valueArray.length - 1) {
      output += `<th class=''>${i}</th>`;
      i++;
    }
    return output;
  }

  function createBody(valueArray) {
    let output = '';
    for (let i = 0; i < valueArray.length; i++) {
      let subArray = valueArray[i]['payload'];
      subArray.sort((a, b) => b.moves - a.moves);
      let inner = '';
      for (let j = 0; j < subArray.length; j++) {
        let datum = subArray[j]['value'].toFixed(1).toString();
        inner += `${datum}<br>`
      };
      output += `<td class='align-middle'>${inner}</td>`;
    };
    return output;
  }

  function createTable(valueArray) {
    return `
      <table class='table'>
        <thead><tr>${createHead(valueArray)}</tr></thead>
        <tbody><tr>${createBody(valueArray)}<tr></tbody>
      </table>
    `;
  }

  axios.post(url, {
      "strike": 20,
      "rate": 0.05,
      "term": 1,
      "iterations": 6,
      "sigma": 0.75
    })
    .then(function (response) {
      let premium = response['data']['body']['0']['0'];
      let valueTree = response['data']['body'];
      console.log(valueTree)
      let iterations = 6;
      let valueArray = getValueArray(valueTree, iterations);
      document.getElementById('premium').innerHTML = `The Premium for this Option is: ${premium.toFixed(1)}`;
      document.getElementById("valuation-tree").innerHTML = createTable(valueArray);
      document.getElementById("tree-title").innerHTML = "Pre-Money Valuation Tree";
    })
    .catch(function (error) {
      console.log(error);
  });
}
// const { log, sqrt, exp, pow, max, floor } = Math;

// function calculateOption() {
//   let strike = document.getElementById("strike").value;
//   let offsetChoice = document.getElementById("offset").value;
//   let termChoice = document.getElementById("term").value;
//   let sigmaChoice = document.getElementById("sigma").value;

//   let riskFree = 0.05;

//   const offsetMap = {
//     'Weekly': 52,
//     'Bi-Weekly': 24,
//     'Monthly': 12,
//     'Bi-Monthly': 6,
//     'Quarterly': 4,
//     'Semi-Annually': 2,
//     'Annually': 1,
//   };

//   const termMap = {
//     'One Month': 0.083,
//     'One Quarter': 0.25,
//     'Six Months': 0.50,
//     'One Year': 1.0,
//     'Year and a Half': 1.50,
//     'Two Year': 2.0,
//     'Four Year': 4.0,
//   };

//   const sigmaMap = {
//     'Very Low': 0.25,
//     'Low': 0.5,
//     'Moderate': .75,
//     'High': 1,
//     'Very High': 1.5,
//   };

//   let offset = offsetMap[offsetChoice];
//   let term = termMap[termChoice];
//   let sigma = sigmaMap[sigmaChoice];


//   function getIterations(offset, term) {
//     return floor(offset * term);
//   };

//   let iterations = getIterations(offset, term);

//   function getDeltaT(term, iterations) {
//     return term / iterations;
//   }

//   let deltaT = getDeltaT(term, iterations);

//   function getUpFactor(sigma, deltaT) {
//     return exp(sigma * sqrt(2*deltaT));
//   }

//   let upFactor = getUpFactor(sigma, deltaT);

//   function getDownFactor(upFactor) {
//     return 1 / upFactor;
//   }

//   let downFactor = getDownFactor(upFactor);

//   function getFlatFactor() {
//     return 1;
//   }

//   let flatFactor = getFlatFactor();

//   function getUpProb(deltaT, sigma, riskFree) {
//     return pow(
//       (
//         exp(riskFree * (deltaT / 2)) -
//         exp(-sigma * sqrt(deltaT / 2))
//       ) /
//       (
//         exp(sigma * sqrt(deltaT / 2)) -
//         exp(-sigma * sqrt(deltaT / 2))
//       ),
//       2
//     );
//   }

//   let upProb = getUpProb(deltaT, sigma, riskFree);

//   function getDownProb(sigma, deltaT, riskFree) {
//     return pow(
//       (
//         exp(sigma * sqrt(deltaT / 2)) -
//         exp(riskFree * (deltaT / 2))
//       ) /
//       (
//         exp(sigma * sqrt(deltaT / 2)) -
//         exp(-sigma * sqrt(deltaT / 2))
//       ),
//       2
//     );
//   }

//   let downProb = getDownProb(sigma, deltaT, riskFree);

//   function getFlatProb(upProb, downProb) {
//     return 1 - (upProb + downProb)
//   }

//   let flatProb = getFlatProb(upProb, downProb);

//   function getSpotTree(iterations, strike, upFactor) {
//     let v = {};
//     let i = -iterations;
//     while (i <= iterations) {
//       v[i] = strike * pow(upFactor, i);
//       i ++;
//     }
//     return v;
//   }

//   let spotTree = getSpotTree(iterations, strike, upFactor);

//   function getTermValue(spotTree, iterations, strike) {
//     let p = {};
//     let v = spotTree;
//     let i = -iterations;
//     while (i <= iterations) {
//       p[i] = max(v[i] - strike, 0);
//       i ++;
//     }
//     return p;
//   }

//   let termValue = getTermValue(spotTree, iterations, strike);

//   function getValueTree(termValue, iterations, riskFree, deltaT, upProb, downProb, flatProb) {
//     let v = {};
//     let p = termValue;
//     let j = iterations -1;
//     v[iterations] = p;
//     while (j >= 0) {
//       let i = -j;
//       let k = {};
//       while (i <= j) {
//         k[i] = exp(-riskFree * deltaT) *
//         (upProb * v[j + 1][i + 1] + flatProb * v[j + 1][i] + downProb * v[j + 1][i - 1]);
//         i ++;
//       }
//       v[j] = k;
//       j --;
//     }
//     return v;
//   }

//   let valueTree = getValueTree(termValue, iterations, riskFree, deltaT, upProb, downProb, flatProb);

//   function getPremium(valueTree) {
//     return valueTree[0][0];
//   }

//   let premium = getPremium(valueTree);

//   function getValueArray(valueTree) {
//     let a = [];
//     let i = iterations;
//     let j = 0;
//     while (j <= i) {
//       var d  = {};
//       d['iteration'] = parseInt(j);
//       let n = [];
//       for (var key in valueTree[j]) {
//         var m = {};
//         m['moves'] = parseInt(key);
//         m['value'] = valueTree[j][key];
//         n.push(m);
//       }
//       d['payload'] = n;
//       a.push(d);
//       j++;
//     }
//     return a;
//   }

//   let valueArray = getValueArray(valueTree);

//   function createHead(valueArray) {
//     let i = 0;
//     let output = '';
//     while (i <= valueArray.length - 1) {
//       output += `<th class=''>${i}</th>`;
//       i++;
//     }
//     return output;
//   }

//   function createBody(valueArray) {
//     let output = '';
//     for (let i = 0; i < valueArray.length; i++) {
//       let subArray = valueArray[i]['payload'];
//       subArray.sort((a, b) => b.moves - a.moves);
//       let inner = '';
//       for (let j = 0; j < subArray.length; j++) {
//         let datum = subArray[j]['value'].toFixed(1).toString();
//         inner += `${datum}<br>`
//       };
//       output += `<td class='align-middle'>${inner}</td>`;
//     };
//     return output;
//   }

//   function createTable(valueArray) {
//     return `
//       <table class='table'>
//         <thead><tr>${createHead(valueArray)}</tr></thead>
//         <tbody><tr>${createBody(valueArray)}<tr></tbody>
//       </table>
//     `;
//   }

//   document.getElementById('premium').innerHTML = `The Premium for this Option is: ${premium.toFixed(1)}`;
//   document.getElementById("valuation-tree").innerHTML = createTable(valueArray);
//   document.getElementById("tree-title").innerHTML = "Pre-Money Valuation Tree";

// }
