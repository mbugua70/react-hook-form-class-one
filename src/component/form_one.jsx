
import {useFieldArray, useForm} from "react-hook-form"
import {DevTool} from "@hookform/devtools";

const FormOne = () =>{

    const mydate = new Date ();
    const sendYear = mydate.getFullYear();
    const sendMonth = mydate.getMonth() + 1;
    const sendDates = mydate.getDate();
    const fullDate = [sendYear,sendMonth,sendDates].join('/');

    console.log(fullDate);
    // react useForm hook
    const form = useForm({
        // defaultValues: {
        //     username: "mary",
        //     email: "mary@gmail.com",
        //     channel: ""
        // }

        // setting default values from an api
        defaultValues: async () =>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await res.json();
            return{
                username: data.username,
                email: data.email,
                channel: "",
                social: {
                    twitter:"",
                    facebook: ""
                },
                phoneNumbers: ["", ""],
                // dynamic fields
                pNumbers: [{}],
                age:0,
                dob: fullDate
            }
        }
    });
    const {register, control, handleSubmit, formState, watch} = form;
    const {errors} = formState;
    const watchValueUsername = watch("username");
    const {fields, append, remove} = useFieldArray({
        name: "pNumbers",
        control
    })
    // handlesubmit function
    const onSubmit = (data) =>{
     console.log("submitted data:", data)
    }
    return(
        <>
        <div className="youtube_form">
            <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="col">
                    <div className="row">
                        <h4>Watched value: {watchValueUsername}</h4>
                    </div>
                    <div className="row">
                        <label htmlFor="name">Username</label>
                    </div>
                    <div className="row">
                        <input type="text" name="name" id="name" {...register("username", {
                            required: {
                                value: true,
                            message: "Username is required"
                            }
                        })} />
                        <p className="error">{errors.username?.message}</p>
                    </div>
                    <div className="row">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="row">
                        <input type="email" name="email" id="email" {...register("email", {
                            pattern: {
                                value: /^[a-zA0=9.!#$%&'*+/=?^ `{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid Email address"
                            },
                            validate: {
                                notAdmin: (fieldValue) =>{
                                    return(
                                        fieldValue !== "admin@example.com" || "Enter a different email"
                                    );
                                },
                                notDomain: (fieldValue) => {
                                    return !fieldValue.endsWith("baddomain.com") || "Not a valild email"

                                }
                            }
                        })}/>
                        <p className="error">{errors.email?.message}</p>

                    </div>
                    <div className="row">
                        <label htmlFor="channel">Channel</label>
                    </div>
                    <div className="row">
                        <input type="text" name="channel" id="channel" {...register("channel", {
                            required: "Channel is requiered"
                        })}/>
                        <p className="error">{errors.channel?.message}</p>
                    </div>
                    <div className="row">
                        <label htmlFor="twitter">Twitter</label>
                    </div>
                    <div className="row">
                        <input type="text" name="twitter" id="twitter" {...register("social.twitter")}/>
                    </div>
                    <div className="row">
                        <label htmlFor="facebook">Facebook</label>
                    </div>
                    <div className="row">
                        <input type="text" name="facebook" id="facebook" {...register("social.facebook")}/>
                    </div>
                    <div className="row">
                        <label htmlFor="phonenumber_primary">Primary Phone Number</label>
                    </div>
                    <div className="row">
                        <input type="tel" name="phonenumber_primary" id="phonenumber_primary" {...register("phoneNumbers .0")}/>
                    </div>
                    <div className="row">
                        <label htmlFor="phonenumber_secondary">Secondary Phone Number</label>
                    </div>
                    <div className="row">
                        <input type="tel" name="phonenumber_secondary" id="phonenumber_secondary" {...register("phoneNumbers.1")}/>
                    </div>
                    <div className="row">
                        <label htmlFor="">List of phone number</label>
                    </div>
                    {fields.map((field,index) =>{
                        return(
                            <div className="row" key={field.id}>
                        <input type="tel" name="" id="" {...register(`pNumbers.${index}.numbers`)}/>
                        {index > 0 &&  <div className="row">
                        <button onClick={() => remove(index)}>remove input field</button>
                     </div>}
                    </div>
                        )
                    })}

                    <div className="row">
                       <button onClick={() => append({number: ""})}>Add input field</button>
                    </div>
                    <div className="row">
                        <label htmlFor="number_one">150g</label>
                    </div>
                    <div className="row">
                        <input type="number" name="number_one" id="number_one" {...register("age",{
                            // this one ensures that the data submitted is of number type and not string.
                            valueAsNumber: true
                        })}/>
                    </div>
                    <div className="row">
                        <label htmlFor="dob">Date of Birth</label>
                    </div>
                    <div className="row">
                        <input type="date" name="dob" id="dob" {...register("dob",{
                            // this one ensures that the data submitted is of number type and not string.
                            valueAsDate: true
                        })}/>
                    </div>
                    <div className="row">
                        <input type="submit" value="submit" className="button" />
                    </div>
                </div>
            </form>
            {/* pass control   props to our DevTool component which help to bind our react hook form to the dev tool*/}
            <DevTool control={control}/>
        </div>
        </>
    )
}


export default FormOne;