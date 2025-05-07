"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { FormDataTypes } from "@/types/types";
import styles from "../ContactFrom.module.css"; // Import CSS module

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters")
    .max(10, "Name must be less than 10 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDataTypes>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, SetErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onClickHandler = async () => {
    try {
      const isValid = await contactFormSchema.validate(formData);
      console.log("Form data is valid:", isValid);

      SetErrors([]);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setSubmitted("Form submitted successfully!");
      setTimeout(() => setSubmitted(null), 3000);
    } catch (error) {
      const errorWithErrors = error as { errors: string[] };
      SetErrors(errorWithErrors.errors);
      setSubmitted(null);
      console.log([error]);
    }
  };

  return (
    <div className={styles.container}>
      {/* Form Section */}
      <div className={styles.formContainer}>
        <h1 className={styles.formHeading}>Contact Us</h1>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={styles.textarea}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={onClickHandler} className="btn">Submit</button>
          </div>

          {errors.map((item, index) => (
            <div key={index} className={styles.errorMessage}>
              Error: {item}
            </div>
          ))}
          {submitted && (
            <div className={styles.successMessage}>{submitted}</div>
          )}
        </form>
      </div>

      {/* Map Section */}
      <div className={styles.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57933.37063938541!2d67.09169308248796!3d24.835292949346865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b07c73d0a7f%3A0xecc47fa378e95fd5!2sKorangi%2C%20Karachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739987263810!5m2!1sen!2s" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.map}></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
