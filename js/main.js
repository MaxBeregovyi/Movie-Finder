const BASE_URL = "http://www.omdbapi.com/?apikey=f32b9214&";
// const searchForm = document.forms.searchMovieForm;
const queryFilm = document.querySelector("#query");

queryFilm.addEventListener("input", debounce(function (e) {
  debounceTest(e.target.value);
}, 500));
// searchForm.addEventListener('submit', function (e) {
//     e.preventDefault()
//     let query = e.target.elements.query
//
//     if (query.value.length < 3) {
//         query.classList.add('--error')
//         alert('OoHo!!!')
//         return
//     }
//     query.classList.remove('--error')
//     console.log(e.target.elements.query.value)
//
//     // searchMovie(query.value)
//
//     e.target.reset()
//
// })

// async function searchMovie(query) {
//   let res = await fetch(`${BASE_URL}s=${query}`);
//   let data = await res.json();
//   console.log(data);
// }



function debounceTest(str) {
  console.log(str);
}

function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    const fnCall = () => {
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, delay);
  };
}
