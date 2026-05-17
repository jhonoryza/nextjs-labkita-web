/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [captchaQuestion, setCaptchaQuestion] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        captcha: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        captcha: "",
    });

    const validateForm = () => {
      const formErrors = { ...errors };
      let isValid = true;

      if (!formData.name) {
        formErrors.name = "Name is required";
        isValid = false;
      } else {
        formErrors.name = "";
      }

      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        formErrors.email = "Valid email is required";
        isValid = false;
      } else {
        formErrors.email = "";
      }

      if (!formData.subject) {
        formErrors.subject = "Subject is required";
        isValid = false;
      } else {
        formErrors.subject = "";
      }

      if (!formData.message) {
        formErrors.message = "Message cannot be empty";
        isValid = false;
      } else {
        formErrors.message = "";
      }

      if (!formData.captcha) {
        formErrors.captcha = "Captcha answer is required";
        isValid = false;
      } else {
        formErrors.captcha = "";
      }

      setErrors(formErrors);
      return isValid;
    };
    
    const handleInputChange = (e: any) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    useEffect(() => {
      async function fetchCaptcha() {
        const res = await fetch("/api/captcha");
        const data = await res.json();
        if (data.question) {
          setCaptchaQuestion(data.question);
        }
      }
      fetchCaptcha();
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateForm()) {
          return;
        }

        setIsSubmitting(true);

        try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (res.status === 200) {
            setResponseMessage("Message sent successfully!");
            setSubmitSuccess(true);
        } else {
            setResponseMessage(data.error || "Something went wrong");
            setSubmitSuccess(false);
        }
        } catch (error) {
            setResponseMessage("Error sending message");
            setSubmitSuccess(false);
            console.log(error);
        } finally {
            setSubmitSuccess(false);
            setIsSubmitting(false);
        }
    };

    return (
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 text-center text-4xl font-black text-foreground border-b-2 border-foreground pb-4 inline-block w-full">
            Contact Us
          </h1>
          <div className="mx-auto max-w-2xl">
            {submitSuccess && (
              <div className="mt-4 border-2 border-foreground bg-primary p-4 text-primary-foreground font-bold shadow-neo-sm">
                Thank you for your message. We&apos;ll get back to you soon!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-6 border-2 border-foreground shadow-neo">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-1">
                  Name
                </label>
                <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                {errors.name && (
                  <p className="mt-1 text-sm font-bold text-destructive">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-1">
                  Email
                </label>
                <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                {errors.email && (
                  <p className="mt-1 text-sm font-bold text-destructive">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-1">
                  Subject
                </label>
                <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} />
                {errors.subject && (
                  <p className="mt-1 text-sm font-bold text-destructive">{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={16}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="flex w-full border-2 border-foreground bg-background px-3 py-2 text-base shadow-neo-sm outline-none focus-visible:shadow-neo md:text-sm"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm font-bold text-destructive">{errors.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="captcha" className="block text-sm font-bold text-foreground mb-1">
                  Please answer the question: {captchaQuestion}
                </label>
                <Input type="number" id="captcha" name="captcha" value={formData.captcha} onChange={handleInputChange} />
                {errors.captcha && (
                  <p className="mt-1 text-sm font-bold text-destructive">{errors.captcha}</p>
                )}
              </div>
              <div>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
            <div className="mt-4">{responseMessage && <p className="font-bold">{responseMessage}</p>}</div>
          </div>
        </div>
      </main>
    );
}