import axios from 'axios'


export const fetchAll = async url => {
    return await axios.get(url)
    .then(response => {
        return { response: response.data }
    })
}