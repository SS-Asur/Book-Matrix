import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2 } from 'lucide-react'

const SERVICE_OPTIONS = [
  'Bookkeeping',
  'Tax Filing',
  'AR/AP',
  'Payroll',
  'Reporting',
  'Virtual CFO',
  'Not sure',
]

const initialForm = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  services: [],
  message: '',
}

function validate(form) {
  const errors = {}

  if (!form.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!form.businessName.trim()) errors.businessName = 'Business name is required.'

  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone)) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (form.services.length === 0) errors.services = 'Select at least one service.'

  if (!form.message.trim()) {
    errors.message = 'Tell us a little about your business.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Please add a few more details (10+ characters).'
  }

  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const toggleService = (service) => {
    setForm((prev) => {
      const exists = prev.services.includes(service)
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      }
    })
    setErrors((prev) => ({ ...prev, services: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('loading')

    try {
      // NOTE: No backend is connected yet. Replace this block with a real
      // API call (e.g. fetch('/api/consultation', { method: 'POST', ... }))
      // once a backend endpoint is available.
      await new Promise((resolve) => setTimeout(resolve, 1200))
      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-2xl border border-moss/25 bg-moss/5 px-8 py-14 text-center"
      >
        <CheckCircle2 size={40} className="text-moss" strokeWidth={1.5} />
        <h3 className="mt-5 font-serif text-2xl text-charcoal">Request received</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-charcoal/65">
          Thank you for reaching out. A member of our team will follow up
          within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="focus-ring mt-6 text-sm font-semibold text-brass-deep underline underline-offset-4"
        >
          Submit another request
        </button>
      </motion.div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="fullName"
          label="Full Name"
          value={form.fullName}
          onChange={handleChange('fullName')}
          error={errors.fullName}
          autoComplete="name"
        />
        <Field
          id="businessName"
          label="Business Name"
          value={form.businessName}
          onChange={handleChange('businessName')}
          error={errors.businessName}
          autoComplete="organization"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange('email')}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="phone"
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={handleChange('phone')}
          error={errors.phone}
          autoComplete="tel"
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-charcoal">
          Which service(s) are you interested in?
        </legend>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {SERVICE_OPTIONS.map((service) => {
            const checked = form.services.includes(service)
            return (
              <label
                key={service}
                className={`focus-ring cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  checked
                    ? 'border-black bg-black text-ivory'
                    : 'border-black text-black hover:border-charcoal/40'
                }`}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleService(service)}
                />
                {service}
              </label>
            )
          })}
        </div>
        {errors.services && <p className="mt-2 text-sm text-red-600">{errors.services}</p>}
      </fieldset>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-charcoal">
          Tell us about your business
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`focus-ring mt-2 w-full rounded-xl border bg-white/70 px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal/35 ${
            errors.message ? 'border-red-400' : 'border-charcoal/15'
          }`}
          placeholder="A few lines about your business and where your books currently stand."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-600"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="focus-ring bg-black inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-brass hover:text-charcoal disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
        {status === 'loading' ? 'Sending...' : 'Book My Free Consultation'}
      </button>
    </form>
  )
}

function Field({ id, label, value, onChange, error, type = 'text', autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-charcoal">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`focus-ring mt-2 w-full rounded-xl border bg-white/70 px-4 py-3 text-[15px] text-charcoal placeholder:text-charcoal/35 ${
          error ? 'border-red-400' : 'border-charcoal/15'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
