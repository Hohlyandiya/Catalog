import axios from 'axios'

const getProducts = () => {  
  return axios.get('https://maxifoxy-testfront-96b4.twc1.net/api/products')
    /* .then(response => {
      console.log(response.data.items)
      useAddProductsStore(response.data.items)
    })
    .catch(e => console.log(e)) */
}

export default getProducts