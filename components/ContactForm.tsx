'use client'

import { useState } from 'react'
import Button from './Button'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    // For now, just show success message
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-navy font-medium mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-navy font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-navy font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-navy font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gold focus:outline-none resize-none"
        />
      </div>

      {submitted ? (
        <div className="bg-green-100 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
          Thank you! Your message has been sent. We&apos;ll get back to you soon.
        </div>
      ) : (
        <Button type="submit" variant="primary" className="w-full">
          Send Message
        </Button>
      )}
    </form>
  )
}
