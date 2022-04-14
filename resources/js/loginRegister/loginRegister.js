import axios from 'axios'

export const register = newUser => {
    return axios
        .post('api/register', newUser, {
            headers: {'Constent-Type': 'application/json'}
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            return err
        })
}

export const login = user => {
    return axios
        .post('api/login', {
            email: user.email,
            password: user.password
        }, {
            headers: { 'Constent-Type': 'application/json' }
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data.token)
            console.log(res);
        })
        .catch(err => {
            console.log(err);
            return 'error'
        })
}

export const getProfile = email => {

    return axios
        .post('api/profile', {
            email
        }, {
            headers: { 'Constent-Type': 'application/json' }
        })
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err);
        })

    /* return axios
        .get('api/profile', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(res => {
            console.log(res);
            return res.data
        })
        .catch(err => {
            console.log(err);
        }) */
}