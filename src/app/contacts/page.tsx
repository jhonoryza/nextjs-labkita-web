/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
          return; // If validation fails, don't submit
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
          <h1 className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-center text-4xl font-bold text-transparent">
            Contact Us
          </h1>
          <div className="mx-auto max-w-2xl">
            {submitSuccess && (
              <div className="mt-4 rounded border border-green-400 bg-green-100 p-4 text-green-700">
                Thank you for your message. We&apos;ll get back to you soon!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-4 shadow rounded">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={16}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="captcha"
                  className="block text-sm font-medium text-gray-700"
                >
                  Please answer the question: {captchaQuestion}
                </label>
                <input
                  type="number"
                  id="captcha"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                {errors.captcha && (
                  <p className="mt-1 text-sm text-red-600">{errors.captcha}</p>
                )}
              </div>
              <div>
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  variant="submit"
                  className="cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
            <div className="mt-4">{responseMessage && <p>{responseMessage}</p>}</div>
          </div>
        </div>
      </main>
    );
}
