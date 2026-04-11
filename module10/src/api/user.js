import React from 'react'

export const loginUser = async (email, password) =>{
    // Simulate an API call with a delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email === 'ajay.suneja25@gmail.com' && password === 'password123'){
                resolve({
                    success: true,
                    data: {
                        email,
                        username: 'AjaySuneja',
                        token: 'vuc5GBwWBWH8Po5jAPdMirkWkhkqVUJmoGKbVdlRj1k='
                    }});
            }else{
                reject({success: false, error: 'Invalid email or password'});
            }
        }, 2000);
});
}