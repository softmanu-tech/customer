"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const Contact: React.FC = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("http://localhost:8080/api/emails/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I'll get back to you as soon as possible.",
      })

      // Reset form after successful submission
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={containerRef} id="contact" className="py-20 bg-gradient-to-b from-white to-navy-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold text-navy-800">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-navy-600">
            Interested in discussing how I can contribute to your team? Reach out through the form below.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="font-cinzel text-2xl font-bold text-navy-800 mb-4">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 mr-4 mt-1">
                      📧
                    </div>
                    <div>
                      <p className="font-medium text-navy-800">Email</p>
                      <a
                        href="mailto:walelae86@gmail.com"
                        className="text-navy-600 hover:text-gold-600 transition-colors"
                      >
                        walelae86@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 mr-4 mt-1">
                      📱
                    </div>
                    <div>
                      <p className="font-medium text-navy-800">Phone</p>
                      <a href="tel:+254708904996" className="text-navy-600 hover:text-gold-600 transition-colors">
                        (254) 708-904996
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy-700 mr-4 mt-1">
                      📍
                    </div>
                    <div>
                      <p className="font-medium text-navy-800">Location</p>
                      <p className="text-navy-600">Nairobi, Kenya </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-cinzel font-bold text-navy-800 mb-3">Connect</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-white transition-colors"
                    >
                      in
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-white transition-colors"
                    >
                      X
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-navy-800 hover:bg-navy-700 flex items-center justify-center text-white transition-colors"
                    >
                      G
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="font-cinzel text-2xl font-bold text-navy-800 mb-4">Send a Message</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full border-gray-300 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="w-full border-gray-300 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      rows={5}
                      className="w-full border-gray-300 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold-600 hover:bg-gold-700 text-white font-medium py-2.5"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact