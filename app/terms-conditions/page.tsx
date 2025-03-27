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
            Terms and Conditions
          </h1>
          <p className='text-center'>Effective Date: March 27th, 2025</p>
          <br />
          <p>
            Welcome to Lonisk.com (&quot;Website,&quot; &quot;Service,&quot;
            &quot;we,&quot; &quot;our,&quot; &quot;us&quot;). By accessing or
            using our website and services, you agree to be bound by these Terms
            and Conditions. If you do not agree, please do not use our services.
          </p>
          <br />
          <p>1. Use of Our Services</p>
          <p>
            You agree to use our website in compliance with applicable laws and
            regulations. You may not use our services for any illegal or
            unauthorized purpose.
          </p>
          <br />
          <p>2. User Content</p>
          <p>
            Any content you upload or submit remains your property, but by
            submitting content, you grant us a worldwide, non-exclusive license
            to use, modify, and display it as needed to provide our services.
          </p>
          <br />
          <p>3. Prohibited Activities</p>
          <br />
          <p>You agree not to:</p>
          <p>• Use our services for fraudulent purposes.</p>
          <p>• Attempt to hack, modify, or disrupt the website.</p>
          <p>• Violate any local, national, or international laws.</p>
          <br />
          <p>4. Service Availability</p>
          <p>
            We strive to keep our website running smoothly, but we do not
            guarantee uninterrupted service. We may modify or discontinue
            services at any time without notice.
          </p>
          <br />
          <p>5. Limitation of Liability</p>
          <p>
            We are not liable for any direct, indirect, incidental, or
            consequential damages arising from the use of our website or
            services.
          </p>
          <br />
          <p>6. Privacy Policy</p>
          <p>
            Your data is handled in accordance with our Privacy Policy, which
            you can find www.lonisk.com/privacy-policy
          </p>
          <br />
          <p>7. Changes to These Terms</p>
          <p>
            We may update these Terms and Conditions from time to time.
            Continued use of our services after updates means you accept the
            revised terms.
          </p>
          <br />
          <p>8. Contact Information</p>
          <p>For any questions, contact us at lonk752@gmail.com</p>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default page;
