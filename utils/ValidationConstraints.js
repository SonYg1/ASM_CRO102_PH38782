import {validate} from "validate.js"

export const validateString = (id,value) =>{
    const constraints = {
        presence:{
            allowEmpty :false
        }
    }
    if(value !== ""){
        constraints.format ={
            pattern : ".+",
            flags: "i",
            message:"Value can't be flank"
        }
    }
    const validationResult = validate({[id] : value},{[id]: constraints})
    return validationResult && validationResult[id]
}

export const validateEmail = (id,value) =>{
    const constraints = {
        presence:{
            allowEmpty :false
        }
    }
    if(value !== ""){
        constraints.email =true
    }
    const validationResult = validate({[id] : value},{[id]: constraints})
    return validationResult && validationResult[id]
}

export const validatePassword = (id,value) =>{
    const constraints = {
        presence:{
            allowEmpty :false
        }
    }
    if(value !== ""){
        constraints.length ={
            minium: 6,
            message:"Mật Khẩu Phải Tối Thiểu 6 Ký Tự"
        }
    }
    const validationResult = validate({[id] : value},{[id]: constraints})
    return validationResult && validationResult[id]
}