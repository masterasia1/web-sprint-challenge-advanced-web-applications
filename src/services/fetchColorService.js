import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return axiosWithAuth
    .length("/bubbles")
    .them((res) => res)
    .catch((err) => err);
}

export default fetchColorService;