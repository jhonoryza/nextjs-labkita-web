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
          <div className="max-w-2xl mx-auto">
            <h1 className="mb-2 text-center text-4xl font-bold text-foreground">
              Contact Us
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              Have a question or project in mind? We&apos;d love to hear from you.
            </p>
            {submitSuccess && (
              <div className="mb-6 rounded-lg bg-primary/10 border border-primary/20 p-4 text-primary font-medium text-sm">
                Thank you for your message. We&apos;ll get back to you soon!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5 bg-card border rounded-lg p-6 shadow-sm">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                  Name
                </label>
                <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                  Email
                </label>
                <Input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                  Subject
                </label>
                <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} />
                {errors.subject && (
                  <p className="mt-1 text-xs text-destructive">{errors.subject}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={8}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20 placeholder:text-muted-foreground"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="captcha" className="block text-sm font-medium text-foreground mb-1.5">
                  Please answer the question: {captchaQuestion}
                </label>
                <Input type="number" id="captcha" name="captcha" value={formData.captcha} onChange={handleInputChange} />
                {errors.captcha && (
                  <p className="mt-1 text-xs text-destructive">{errors.captcha}</p>
                )}
              </div>
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            <div className="mt-4">{responseMessage && <p className="text-sm font-medium text-center text-muted-foreground">{responseMessage}</p>}</div>
          </div>
        </div>
      </main>
    );
}