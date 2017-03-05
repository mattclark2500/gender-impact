import axios from 'axios';

export default function readFile(file) {
    return axios.get(file)
        .then(function(response) {
            return response;
        })
}