import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ChannelCreate extends Component {

    /* start -- Helper functions to render for elements */

    renderErrors( {error, touched} ) {
        if (touched && error) {
            return (<div className="text-red-400 text-sm mb-6">{error}</div>)
        }
    }

    renderInput = ({input, meta, label}) =>{
        return (  
        <>
            <label className="block text-sm font-medium text-gray-300 mt-2 mb-2">{label}</label>
            <input
            className={`${meta.error && meta.touched ? 'border-red-400 border-solid border-2':''} py-2 px-4 w-1/2  bg-gray-800 focus:outline-none focus:border-purple-600 block sm:text-sm border-gray-300 rounded-md focus:out text-gray-300`}
            {...input}
            autoComplete="off"
            />
            {this.renderErrors(meta)}
        </>
        )
    }    
    renderTextArea = ({input, meta, label}) => {
        return(
            <>
                <label className="block text-sm font-medium text-gray-300 mt-2 mb-2">{label}</label>
                <textarea 
                className={`${meta.error && meta.touched ? 'border-red-400 border-solid border-2':''} w-1/2 h-20 py-2 px-4 bg-gray-800 focus:outline-none focus:border-purple-600 block sm:text-sm rounded-md focus:out text-gray-300`}
                {...input}
                />
                {this.renderErrors(meta)}
            </>
        )
    }     
    /* end -- Helper functions to render for elements */

    onSubmit = (formValues) => {

    }

    render() {
        return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-8 space-x-4">
            <form onSubmit  ={this.props.handleSubmit(this.onSubmit)}>
                <div>
                    <Field
                    label="Title"
                    type="text" 
                    name="channel_title" 
                    component={this.renderInput}/>
                    
                </div>
                 <div>
                    
                    <Field 
                    label="Description"
                    type="textarea" 
                    name="channel_description" 
                    component={this.renderTextArea}/>
                </div> 
                <div className="mt-4">
                    <button className=" block bg-purple-700 text-white py-3 px-5 rounded-md shadow-sm text-sm leading-4 font-medium hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create your channel</button>
                    
                </div>
            </form>
        </div>
        )
}}

const validate = formValues => {
    const errors= {};

    if(!formValues.channel_title) {
      errors.channel_title = 'You must enter a title'  
    }

    if(!formValues.channel_description) {
        errors.channel_description = 'You must enter a description'
    }

    return errors;
};

export default reduxForm({
    form: 'channelCreate',
    validate: validate
}) (ChannelCreate);