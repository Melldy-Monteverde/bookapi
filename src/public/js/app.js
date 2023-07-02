const clientHOST = window.origin
const options = { method: 'GET' };
let booksContainer = document.getElementById('booksContainer');

console.log('hello from web console...')
console.log('here is de cliente host adress', clientHOST)

const BACKEND_BASR_URL = `${window.origin}`

const btnFetcher = document.getElementById('btnFetcher')

const apiCall = async () => {
  try {
    const res = await fetch(`${BACKEND_BASR_URL}/api/books`, options)
    const resData = await res.json()
    console.log(resData)

    if (resData.status === 200) {
      const books = resData.data
      let bookList = ''
      books.forEach(({ id, name, author, age, country, image }) => {
        bookList = bookList += `
          <div id="${id}" class="card" >
            <h4>${name} - ${author}</h4>
            <p>${age}</p>
            <p>${country}</p>
            <img src="${image}" alt="${name}" class="card-img"/>
          </div>
        `
      })
      booksContainer.innerHTML = bookList
    } else {
      console.log('error 404 - something went wrong')
    }

  } catch (error) {
    console.log(error)
    throw new Error('___ERROR___', error)
  }
}

btnFetcher.addEventListener('click', apiCall)
