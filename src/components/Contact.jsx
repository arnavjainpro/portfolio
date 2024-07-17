import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


const Contact = () => {
  const formRef = useRef(); 
  const [form, setForm] = useState({
    name: '', //asks for name
    email: '', //asks for email
    message: '', //asks for message
  });

  const [loading, setLoading] = useState(false); //loading is false

  const handleChange = (e) => { //function to handle change
    const { target } = e; //target is e
    const { name, value } = e.target; //name and value are e.target

    setForm({ ...form, [name]: value }) //set form to name and value
  };

  const handleSubmit = (e) => { //function to handle submit
    e.preventDefault(); //prevent default
    setLoading(true); //loading is true

    emailjs.send( //send email
      'service_5ao1b4m', //service id
      'template_xowbj49', //template id
      {
        from_name: form.name, 
        to_name: "Arnav",
        from_email: form.email,
        to_email: "arnavjainone@gmail.com",
        message: form.message,
      },
      'ImY0LwxpGZP-UL_ps' //user id
      )
      .then(
        () => {
          setLoading(false); //loading is false
          alert("Thank you. I will get back to you as soon as possible."); //alert message

          setForm({ //set form to empty
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => { //error message
          setLoading(false); //loading is false
          console.error(error); //error message

          alert("Something went wrong. Please try again."); //alert message
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`} 
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} //contact box slides in from the left and stays in between 0.2 within 1 second. 
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p> {/*get in touch text*/}
        <h3 className={styles.sectionHeadText}>Contact</h3>   {/*contact text*/}

        <form //form for the user to fill in their details
          ref={formRef} //reference to the form
          onSubmit={handleSubmit} //on submit, the handleSubmit function is called
          className='mt-12 flex flex-col gap-8' //flex column with a gap of 8
        >
          <label className='flex flex-col'> {/*flex column*/}
            <span className='text-white font-medium mb-4'>Your Name</span> {/*your name text*/}
            <input
              type='text' //input type is text
              name='name' //name is name
              value={form.name} //value is the name entered by the user
              onChange={handleChange} //on change, the handleChange function is called
              placeholder="What's your name?" //placeholder for what's your name
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' //styling for the input
            />
          </label>
          <label className='flex flex-col'> {/*flex column*/}
            <span className='text-white font-medium mb-4'>Your Email</span> {/*your email text*/}
            <input 
              type='email' //input type is email
              name='email' //name is email
              value={form.email} //value is the email entered by the user
              onChange={handleChange} //on change, the handleChange function is called
              placeholder="What's your email?" //placeholder for what's your email
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' //styling for the input
            />
          </label>
          <label className='flex flex-col'> {/*flex column*/}
            <span className='text-white font-medium mb-4'>Your Message</span> {/*your message text*/}
            <textarea
              rows='7' //rows is 7
              name='message' //name is message
              value={form.message} //value is the message entered by the user
              onChange={handleChange} //on change, the handleChange function is called
              placeholder='What do you want to say?' //placeholder for what do you want to say
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' //styling for the input
            />
          </label>

          <button
            type='submit' //type is submit
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary' //styling for the button
          >
            {loading ? "Sending..." : "Send"} {/*if loading is true, then sending... else send*/}
          </button> 
        </form> {/*end of form*/}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} //earth canvas slides in from the right and stays in between 0.2 within 1 second
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]' //height is auto for xl and 550px for md and 350px for others
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "Contact");