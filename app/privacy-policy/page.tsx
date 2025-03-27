'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

const page = () => {
  return (
    <main>
      <div className='py-5 px-2'>
        <Link href='/' className='flex items-center gap-2'>
          <FaArrowLeft />
          <p>Back to Home</p>
          <FaHome />
        </Link>
      </div>
      <div className='flex items-center justify-center'>
        <div className='p-10 w-1/2'>
          <h1 className='text-2xl font-bold text-purple text-center'>
            Privacy Policy
          </h1>
          <p className='text-center'>Effective Date: March 27th, 2025</p>
          <br />
          <p>
            Welcome to Lonisk.com (&quot;Website,&quot; &quot;Service,&quot;
            &quot;we,&quot; &quot;our,&quot; &quot;us&quot;). Your privacy is
            important to us. This Privacy Policy explains how we collect, use,
            and protect your information when you visit our website.
          </p>
          <br />
          <p>1. Information We Collect</p>
          <br />
          <p>We may collect the following types of information:</p>
          <p>
            • Automatically Collected Data: When you visit our website, we may
            collect anonymous data such as IP addresses, browser type, and usage
            patterns.
          </p>
          <p>
            • Cookies: We may use cookies to improve your browsing experience.
            You can disable cookies in your browser settings.
          </p>
          <br />
          <p>2. How We Use Your Information</p>
          <br />
          <p>We use collected information to:</p>
          <p>• Improve our website and user experience.</p>
          <p>• Monitor website traffic and analytics.</p>
          <p>• Ensure website security and prevent fraud.</p>
          <br />
          <p>3. Third-Party Services</p>
          <br />
          <p>You agree not to:</p>
          <p>
            We may use third-party services for analytics, security, or other
            functions. These services may collect data based on their own
            privacy policies.
          </p>
          <br />
          <p>4. Data Protection</p>
          <p>
            We implement security measures to protect your information. However,
            no method of transmission over the internet is completely secure.
          </p>
          <br />
          <p>5. Your Rights</p>
          <p>
            Depending on your location, you may have rights regarding your
            personal data, including the right to access, modify, or delete your
            information.
          </p>
          <br />
          <p>6. Changes to This Policy</p>
          <p>
            We may update this Privacy Policy from time to time. Continued use
            of our website after updates means you accept the revised policy.
          </p>
          <br />
          <p>7.Contact Information</p>
          <p>For any questions, contact us at lonk752@gmail.com</p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default page;
