import { Formik,Form,Field,ErrorMessage ,FieldArray,FastField} from 'formik'
import React from 'react'
 import *as Yup from"yup"

const initialValues={
    name:'Sai reddy',
    email:'',
    channel:'',
    Comment:"",
    address:"",
    social:{
        facebook:'',
        twitter:"",
    }
    ,
    phonenumbers:["",""],
    phnumbers:[''],

}
const onSubmit=(values)=>{
console.log(values);
}

const validationSchema=Yup.object({
    name:Yup.string().required("name is required"),
    email:Yup.string().email("invalid email  formate").required("email is required "),
    channel:Yup.string().required("channel name required "),

})



const Newyoutubeform = () => {



// console.log("FORMIK.visted",formik.touched);
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
     {formik=>{return   <Form >
        <div className='form-control'>
        <label htmlFor='name'>Name</label>
        <Field type='text' id='name' name="name" />
        <ErrorMessage name='name'/>
        </div>


        <div className='form-control'>
        <label htmlFor='email'>E-mail</label>
        <Field type='email' id='email' name='email' />
        <ErrorMessage name='email'/>
        </div>

        <div className='form-control'>
        <label htmlFor='channel'>youtube-channel</label>
        <Field type='text' id='channel' name='channel' />
        <ErrorMessage name='channel'/>
        </div>
        <div className='form-control'>
            <label htmlFor='comment'>comment</label>
            <Field as='textarea' id='comment' name='comment'/>

        </div>
        <div className='form-control'>
            <label htmlFor='address'>address</label>
            <Field   name='address'>
                {
                    (props)=>{
                        const {field,form,meta}=props
                        console.log(props);
                        return(
                        <div>
                        <input type='text' id='address' {...field}/>
                        {meta.touched && meta.error ?<div>{meta.error}</div>:null}
                        </div>
                        )
                    }
                }
            </Field>
            

        </div>
        <div className='form-control'>
            <label htmlFor='facebook'>facebook name</label>
            <Field type='text' id='facebook' name='social.facebook'/>
            <ErrorMessage name='social.facebook'/>

        </div>
        <div className='form-control'>
            <label htmlFor='twitter'>twitter</label>
        
            <Field type='text'  id='twitter' name='social.twitter'/>
            <ErrorMessage name='social.twitter'/>

        </div>
        <div className='form-control'>
            <label htmlFor='primaryphonenumber'>primary phone number</label>
            <Field type='text' id='primaryphonenumber' name='phonenumbers[0]'/>

        </div>   
         <div className='form-control'>
            <label htmlFor='secondaryphonenumber'>secondary phone number </label>
            <Field type='text' id='secoundaryphonenumber' name='phonenumbers[1]'/>

        </div>
        <div className='form-control'>
            <label htmlFor=''>list of phone numbers</label>
            <FieldArray name='phnumbers'>
            {
                (fieldArrayprops)=>{
                    const {push,remove ,form}=fieldArrayprops
                    const{values}=form
                    const{phnumbers}=values

                return<div>
                    {
                        phnumbers.map((phnumber,index)=>(<div key={index}>
                            <Field type="text"name={`phnumbers [ ${index}]`}/>
                            {index>0&&                            <button type='button' onClick={()=>remove(index)}>-</button>
 }
                            <button type='button'  onClick={()=>push('')}>+</button>
                        </div>
                            
                        ))
                    }

                </div>

                }

            }

            </FieldArray>

        </div>
       <button type='button' onClick={()=>formik.validateField('comment')}>validate comment</button>
       <button type='button' onClick={()=>formik.validateForm()}> validateall</button>

       <button type='button' onClick={()=>formik.setFieldTouched('comment')}> validateall</button>

       <button type='button' onClick={()=>formik.setTouched({
    name:true,
    email:true,
    channel:true})}> validateall</button>

        <button type="Submit"  disabled={!(formik.dirty && formik.isValid)}>Submit</button>

        </Form>
     }}
        </Formik>
  )
}

export default Newyoutubeform