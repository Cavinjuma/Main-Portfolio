import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { SectionHeading } from '@/components/ui/SectionHeading';

/**
 * Contact: validated form on one side, direct contact details on the other.
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 lg:px-8 bg-muted/40 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Get in Touch"
          subtitle={<i className="font-semibold">Let's build something Great together!</i>}
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact form */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-light tracking-wide">Send a Message</h3>
              <p className="text-muted-foreground font-light">
                Fill out the form below and I'll get back to you within 24-48 hours.{' '}
                {photographerInfo.availability}
              </p>
            </div>

            <ContactForm />
          </motion.div>

          {/* Contact information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-light tracking-wide">Contact Information</h3>
              <p className="text-muted-foreground font-light">
                Prefer to reach out directly? Here's how you can contact me.
              </p>
            </div>

            <Separator />

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-accent">
                  <Mail className="size-5 text-muted-foreground" />
                </div>
                <div className="space-y-1 min-w-0">
                  <p className="text-sm font-light tracking-wide text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${photographerInfo.email}`}
                    className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors break-all"
                  >
                    {photographerInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-accent">
                  <Phone className="size-5 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-light tracking-wide text-muted-foreground">Phone</p>
                  <a
                    href={`tel:${photographerInfo.phone}`}
                    className="text-base md:text-lg font-light hover:text-muted-foreground transition-colors"
                  >
                    {photographerInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-accent">
                  <MapPin className="size-5 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-light tracking-wide text-muted-foreground">Location</p>
                  <p className="text-base md:text-lg font-light">{photographerInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
