import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Bangkok Soul Thai Restaurant",
  description:
    "Learn how Bangkok Soul Thai Restaurant collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      <Header />

      <div className="max-w-3xl mx-auto px-5 md:px-6 mb-16 md:mb-28 space-y-10 md:space-y-14">
        <div className="text-center space-y-3 md:space-y-4">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary">
            Last updated: February 28, 2026
          </p>
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Bangkok Soul Thai Restaurant is committed to protecting your privacy.
            This policy explains what information we collect, how we use it, and
            your rights regarding that information.
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-foreground">

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              1. Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Bangkok Soul Thai Restaurant ("we," "us," or "our") is a
              restaurant located at 707 E Main St, Alhambra, CA 91801. We
              operate the website at{" "}
              <Link
                href="/"
                className="text-primary underline hover:opacity-80 transition-opacity"
              >
                bangkoksoul.com
              </Link>{" "}
              (the "Site"). You may contact us at{" "}
              <a
                href="mailto:hello@bangkoksoul.com"
                className="text-primary underline hover:opacity-80 transition-opacity"
              >
                hello@bangkoksoul.com
              </a>{" "}
              or by calling{" "}
              <a
                href="tel:+16265371355"
                className="text-primary underline hover:opacity-80 transition-opacity"
              >
                (626) 537-1355
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information in the following ways:
            </p>
            <h3 className="font-semibold text-foreground">
              a. Information You Provide Directly
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
              <li>
                <strong>Contact and reservation requests:</strong> Your name,
                phone number, email address, party size, and any special
                requests you submit through our contact form or reservation
                inquiry.
              </li>
              <li>
                <strong>Communications:</strong> Messages, feedback, or
                inquiries you send us by email or phone.
              </li>
            </ul>
            <h3 className="font-semibold text-foreground">
              b. Information Collected Automatically
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
              <li>
                <strong>Usage data:</strong> Pages visited, time spent on
                pages, referring URLs, browser type, device type, and general
                geographic location (city or region level). This data is
                collected in aggregate and is not linked to your identity.
              </li>
              <li>
                <strong>Cookies and similar technologies:</strong> Small files
                stored on your device that help our Site function properly and
                allow us to understand how visitors use it. See Section 5 for
                details.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              3. How We Use Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
              <li>
                Respond to your inquiries, reservation requests, and customer
                service needs.
              </li>
              <li>
                Confirm and manage reservations or catering arrangements.
              </li>
              <li>
                Send you information you have requested, such as menu updates
                or special event announcements (only if you opt in).
              </li>
              <li>
                Analyze how visitors use our Site so we can improve the
                experience and content.
              </li>
              <li>
                Comply with applicable laws and legal obligations.
              </li>
              <li>
                Protect the security and integrity of our Site.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We do not use your
              information for automated decision-making or profiling.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              4. How We Share Your Information
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We share your information only in limited circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
              <li>
                <strong>Service providers:</strong> We use third-party vendors
                that help us operate our Site and business. These include
                hosting and analytics providers (see Section 5). These
                providers are permitted to use your information only to perform
                services on our behalf and are required to protect it.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information
                if required by law, court order, or governmental authority, or
                when we believe in good faith that disclosure is necessary to
                protect our rights, your safety, or the safety of others.
              </li>
              <li>
                <strong>Business transfers:</strong> If Bangkok Soul Thai
                Restaurant is acquired, merged, or its assets transferred, your
                information may be part of that transaction. We will notify you
                before your information becomes subject to a different privacy
                policy.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              5. Cookies and Analytics
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site uses the following cookies and third-party services:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
              <li>
                <strong>Vercel Analytics:</strong> We use Vercel Analytics to
                collect anonymized, aggregated data about Site traffic and
                performance. Vercel Analytics is designed to be
                privacy-friendly and does not use cookies to track individual
                visitors across websites. For more information, see{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-80 transition-opacity"
                >
                  Vercel's privacy documentation
                </a>
                .
              </li>
              <li>
                <strong>Google Fonts:</strong> Our Site loads fonts from
                Google Fonts. Google may collect limited data (such as your IP
                address) when your browser requests fonts. See{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:opacity-80 transition-opacity"
                >
                  Google's Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Functional cookies:</strong> We may use session cookies
                that are strictly necessary for the Site to operate. These are
                deleted when you close your browser.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You may disable cookies through your browser settings. Disabling
              cookies may affect certain features of the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              6. Data Retention
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain personal information only as long as necessary to
              fulfill the purposes described in this policy or as required by
              law. Contact and reservation inquiries are typically retained for
              up to two years for customer service and recordkeeping purposes,
              after which they are securely deleted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              7. Your California Privacy Rights (CCPA / CPRA)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are a California resident, the California Consumer Privacy
              Act (CCPA) and California Privacy Rights Act (CPRA) grant you the
              following rights:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
              <li>
                <strong>Right to Know:</strong> You may request that we
                disclose the categories and specific pieces of personal
                information we have collected about you.
              </li>
              <li>
                <strong>Right to Delete:</strong> You may request deletion of
                personal information we hold about you, subject to certain
                exceptions.
              </li>
              <li>
                <strong>Right to Correct:</strong> You may request correction
                of inaccurate personal information.
              </li>
              <li>
                <strong>Right to Opt Out:</strong> We do not sell or share your
                personal information for cross-context behavioral advertising.
                No opt-out is required.
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not
                discriminate against you for exercising any of these rights.
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:hello@bangkoksoul.com"
                className="text-primary underline hover:opacity-80 transition-opacity"
              >
                hello@bangkoksoul.com
              </a>
              . We will verify your identity before processing your request and
              will respond within 45 days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              8. Children's Privacy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site is not directed to children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If we learn that we have inadvertently collected such information,
              we will delete it promptly. If you believe a child under 13 has
              provided us with personal information, please contact us at{" "}
              <a
                href="mailto:hello@bangkoksoul.com"
                className="text-primary underline hover:opacity-80 transition-opacity"
              >
                hello@bangkoksoul.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              9. Security
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable technical and organizational measures to
              protect your information against unauthorized access, loss,
              misuse, or alteration. Our Site is served over HTTPS. However, no
              method of transmission over the internet or electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              10. Third-Party Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site may contain links to third-party websites such as social
              media platforms and delivery services. We are not responsible for
              the privacy practices of those sites. We encourage you to review
              the privacy policies of any third-party site you visit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              11. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. When we do,
              we will revise the "Last updated" date at the top of this page.
              Continued use of our Site after any changes constitutes your
              acceptance of the updated policy. We encourage you to review this
              policy periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              12. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or your personal information, please contact us:
            </p>
            <address className="not-italic text-muted-foreground space-y-1 leading-relaxed">
              <p className="font-semibold text-foreground">
                Bangkok Soul Thai Restaurant
              </p>
              <p>707 E Main St, Alhambra, CA 91801</p>
              <p>
                <a
                  href="tel:+16265371355"
                  className="text-primary underline hover:opacity-80 transition-opacity"
                >
                  (626) 537-1355
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@bangkoksoul.com"
                  className="text-primary underline hover:opacity-80 transition-opacity"
                >
                  hello@bangkoksoul.com
                </a>
              </p>
            </address>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
