import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Bangkok Soul Thai Restaurant",
  description:
    "Read the Terms of Use for the Bangkok Soul Thai Restaurant website.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-background pt-24 md:pt-32">
      <Header />

      <div className="max-w-3xl mx-auto px-5 md:px-6 mb-16 md:mb-28 space-y-10 md:space-y-14">
        <div className="text-center space-y-3 md:space-y-4">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary">
            Last updated: February 28, 2026
          </p>
          <h1 className="font-headline text-3xl md:text-5xl font-bold text-primary">
            Terms of Use
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Please read these Terms of Use carefully before using our website.
            By accessing or using the Site, you agree to be bound by these
            Terms.
          </p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-foreground">

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Use ("Terms") govern your access to and use of the
              website located at{" "}
              <Link
                href="/"
                className="text-primary underline hover:opacity-80 transition-opacity"
              >
                bangkoksoul.com
              </Link>{" "}
              (the "Site"), operated by Bangkok Soul Thai Restaurant ("we,"
              "us," or "our"), a restaurant located at 707 E Main St, Alhambra,
              CA 91801.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By visiting or using the Site, you confirm that you have read,
              understood, and agree to be bound by these Terms and our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary underline hover:opacity-80 transition-opacity"
              >
                Privacy Policy
              </Link>
              , which is incorporated by reference. If you do not agree, please
              do not use the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              2. Use of the Site
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You may use the Site only for lawful purposes and in accordance
              with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
              <li>
                Use the Site in any way that violates any applicable federal,
                state, local, or international law or regulation.
              </li>
              <li>
                Transmit or upload any material that is unlawful, harmful,
                threatening, abusive, harassing, defamatory, or otherwise
                objectionable.
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Site,
                its servers, or any system connected to the Site.
              </li>
              <li>
                Use any automated means, including bots, scrapers, or spiders,
                to access, index, or copy content from the Site without our
                prior written consent.
              </li>
              <li>
                Introduce viruses, malware, or any other harmful code or
                material to the Site.
              </li>
              <li>
                Impersonate any person or entity or falsely represent your
                affiliation with any person or entity.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              3. Menu Information and Pricing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We make every effort to ensure that menu items, descriptions, and
              prices displayed on the Site are accurate and current. However,
              we reserve the right to change, discontinue, or update menu items
              and pricing at any time without notice. Prices and availability
              shown on the Site are subject to change and may differ from
              current in-restaurant pricing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Menu items may contain allergens including but not limited to
              tree nuts, peanuts, shellfish, fish, gluten, dairy, soy, and
              eggs. If you have a food allergy or dietary restriction, please
              notify our staff before ordering. We cannot guarantee that any
              dish is free from cross-contamination.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              4. Reservations and Inquiries
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Reservation requests and inquiries submitted through the Site are
              not guaranteed until confirmed by our staff. We will make
              reasonable efforts to contact you to confirm availability. We
              reserve the right to decline or cancel reservations at our
              discretion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you submit a reservation request, you agree to provide
              accurate and complete information. Providing false information may
              result in the cancellation of your reservation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              5. Third-Party Services and Links
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Site may contain links to third-party websites, services, or
              platforms, including but not limited to delivery services, social
              media, and payment processors. These links are provided for your
              convenience. We do not control and are not responsible for the
              content, policies, or practices of any third-party site or
              service. Your use of third-party sites is subject to their
              respective terms and privacy policies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Orders placed through third-party delivery platforms (such as
              DoorDash, Uber Eats, or Grubhub) are governed by those platforms'
              terms of service. We are not responsible for issues arising from
              third-party delivery services, including delays, inaccuracies, or
              disputes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              6. Intellectual Property
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on the Site, including but not limited to text,
              photographs, graphics, logos, icons, and software, is the
              property of Bangkok Soul Thai Restaurant or its content suppliers
              and is protected by applicable United States and international
              copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You are granted a limited, non-exclusive, non-transferable license
              to access and view the Site and its content for personal,
              non-commercial purposes. You may not reproduce, distribute,
              modify, create derivative works of, publicly display, publicly
              perform, or exploit any content from the Site without our express
              prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              7. User-Submitted Content
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you submit any content to us, including reviews, photos,
              comments, or feedback through any channel, you grant Bangkok Soul
              Thai Restaurant a non-exclusive, royalty-free, perpetual,
              worldwide license to use, display, reproduce, and distribute that
              content in connection with our business and marketing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You represent and warrant that any content you submit does not
              infringe the rights of any third party and that you have the right
              to grant this license.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              8. Disclaimer of Warranties
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              THE SITE AND ALL CONTENT AND SERVICES PROVIDED THROUGH IT ARE
              OFFERED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
              TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not warrant that the Site will be uninterrupted, error-free,
              free of viruses or other harmful components, or that defects will
              be corrected. We make no warranty regarding the accuracy,
              completeness, or reliability of any content on the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              9. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BANGKOK SOUL
              THAI RESTAURANT AND ITS OWNERS, EMPLOYEES, AGENTS, AND
              AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR
              RELATED TO YOUR USE OF OR INABILITY TO USE THE SITE OR ITS
              CONTENT, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall our total liability to you for all claims
              arising out of or related to these Terms or the Site exceed one
              hundred dollars ($100.00).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              10. Indemnification
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless Bangkok Soul
              Thai Restaurant and its owners, employees, agents, and affiliates
              from and against any claims, liabilities, damages, judgments,
              awards, losses, costs, or expenses, including reasonable
              attorneys' fees, arising out of or relating to your violation of
              these Terms or your use of the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              11. Governing Law and Dispute Resolution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of the State of California, without regard to its conflict of
              law principles. Any dispute arising out of or relating to these
              Terms or the Site shall be resolved exclusively in the state or
              federal courts located in Los Angeles County, California, and you
              consent to the personal jurisdiction of such courts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              12. Changes to These Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update or modify these Terms at any time.
              When we do, we will revise the "Last updated" date at the top of
              this page. Your continued use of the Site following the posting of
              changes constitutes your acceptance of those changes. We encourage
              you to review these Terms periodically.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              13. Termination
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to terminate or suspend your access to all
              or part of the Site at any time, with or without notice, for any
              conduct that we believe violates these Terms or is harmful to
              other users, us, third parties, or the public.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              14. Severability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is found to be unlawful, void, or
              unenforceable, that provision shall be deemed severable from these
              Terms and shall not affect the validity and enforceability of the
              remaining provisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-headline text-xl md:text-2xl font-bold text-primary">
              15. Contact Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us:
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
