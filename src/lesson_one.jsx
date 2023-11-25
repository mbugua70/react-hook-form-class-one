// REACTHOOK FORM
// libraly that helps you to deal with form in React.
// Develpers with forms
// handling form data
// enforcing validation
// providing visual feedback
// data submission

// react hook form will provide a hook called useForm used to manage form
// managing state  form data with useForm()
//form state
// every form has a few moving part from the time the use loads the form to the time user submits the form.
//  form state can be under
// current value of every fied in the form
// whether a field has been interacted with
// whether a field's value has changed
// whether the form is valid
// whether a field contains errors

// NB:: react hook form does not render the compoenent again even when the use are interacting with the form
// it follows uncontrolled input behaviour


// form validation with reacthook form

// react_hook  form
// react hook form support various html validation rules such as
// required
// minLength & maxLength
// min & max
// pattern

// adding noValidate will prevent the browser form validation and allow react hook form to handle form validation
// occur when the form is submitted.

// validation using and object example { validation: "Email is required"}
// validation using pattern example

// Optional Chaining (?.)
// this is an opertator accesses an object property or calls a function. if the object accessed or function called using this operator is undefined or null, the expression short circuit and evaluates to undefined instead of throwing an error.

// custome validation
//

// default values
// setting default values


// nested object with react hook form
//

// arrays form data
//
// dynamic fields give the user option to add field or remove field based on there option
// ut uses  useFieldArray hook

// react hook form provide watch() method that is used to watch field value in the form.

// getvalues method is used to read the field values.
// getValues("social.twitter")
// getValues(["username","social"]) you can also get values using the array format.

// setValues() - its a method used to setValues of the field
// its takes two arguement the field name and the value
// example setValues("username", "") - this one will set the field value of username to an empty string.

// touched and dirty state in react hook form
// touched is  used to monitor the user interaction with the  field, its set to true once the user interact with the field
// dirty monitor field value modification from its previous default value, if the user modify the value, it will set to true.
// you can access them  touchFields and dirtyFields