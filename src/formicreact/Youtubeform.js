import { useFormik } from 'formik'
import React from 'react'
 import *as Yup from"yup"

const initialValues={
    name:'Sai reddy',
    email:'',
    channel:'',

}
const onSubmit=(values)=>{
console.log(values);
}

const validationSchema=Yup.object({
    name:Yup.string().required("name is required"),
    email:Yup.string().email("invalid email  formate").required("email is required "),
    channel:Yup.string().required("channel name required ")
})
// const  validate=(values)=>{
//     let errors={}
//     if(!values.name){
//         errors.name=" name Required"
//     }
//     if(!values.email){
//         errors.email=" email Required"
//     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
//         errors.email="invalid  email  format"
//     }
    
//     if(!values.channel){
//         errors.channel="Required channel"
//     }

//     return errors
// }


const Youtubeform = () => {

    const formik=useFormik({initialValues,onSubmit,validationSchema//validate
})

console.log("FORMIK.visted",formik.touched);
  return (
    <div><form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name="name" onChange={formik.handleChange}  onBlur={formik.handleBlur}  value={formik.values.name}/>
        <div>{formik.touched.name && formik.errors.name?<div className='error'>{formik.errors.name}</div>:null}</div>
        </div>


        <div className='form-control'>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
        <div>{formik.touched.email && formik.errors.email?<div className='error'>{formik.errors.email}</div>:null}</div>
        </div>

        <div className='form-control'>
        <label htmlFor='channel'>youtube-channel</label>
        <input type='text' id='channel' name='channel' onChange={formik.handleChange}onBlur={formik.handleBlur} value={formik.values.channel}/>
        <div>{ formik.touched.channel && formik.errors.channel?<div className='error'>{formik.errors.channel}</div>:null}</div>
        </div>


        <button type="Submit">Submit</button>

        </form></div>
  )
}

export default Youtubeform