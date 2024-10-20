import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import privacyText from '@/data/privacypolicy.md';

export default function PrivacyPolicy() {
  return (
    <div className='container flex flex-row justify-center items-center pb-32'>
      <div className='text-left md:w-[50%] mx-4'>
        <Markdown
          components={{
            h1: ({ children }) => (
              <h1 className='text-2xl font-bold mb-4'>{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className='text-xl font-bold mb-3'>{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className='text-lg font-bold mb-2'>{children}</h3>
            ),
            p: ({ children }) => <p className='text-base mb-2'>{children}</p>,
            ul: ({ children }) => (
              <ul className='list-disc list-inside mb-2'>{children}</ul>
            ),
            li: ({ children }) => <li className='mb-1'>{children}</li>,
          }}
          remarkPlugins={[remarkGfm]}
        >
          {privacyText}
        </Markdown>
      </div>
    </div>
  );

  // return (
  //   <div className="container flex flex-row justify-center items-center mb-32">
  //     <div className="text-left md:w-[50%]">
  //       <Header>Privacy Policy for DJDinox.nl</Header>
  //       <p><strong>Effective Date:</strong> 20th October 2024</p>

  //       <p>
  //         At DJDinox.nl, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or interact with our services.
  //       </p>

  //       <h2>1. Information We Collect</h2>
  //       <p>We collect the following types of information:</p>

  //       <h3>a. Personal Information</h3>
  //       <p>
  //         When you voluntarily submit information through our contact forms or other forms on the website, we collect the personal information you provide, which may include:
  //       </p>
  //       <ul>
  //         <li>Name</li>
  //         <li>Email Address</li>
  //         <li>Phone Number</li>
  //         <li>Other information you provide in the forms</li>
  //       </ul>

  //       <h3>b. Automatically Collected Information</h3>
  //       <p>
  //         When you use DJDinox.nl, certain information is automatically collected through tools such as Google Analytics. This may include:
  //       </p>
  //       <ul>
  //         <li>IP Address</li>
  //         <li>Browser Type</li>
  //         <li>Pages Viewed</li>
  //         <li>Time Spent on Pages</li>
  //         <li>Referring Website</li>
  //         <li>Device Information</li>
  //       </ul>

  //       <h2>2. How We Use Your Information</h2>
  //       <p>We use the information collected from you for the following purposes:</p>

  //       <h3>a. To Provide and Improve Our Services</h3>
  //       <p>
  //         Your personal information helps us respond to your inquiries, provide customer support, and improve the overall functionality and user experience of DJDinox.nl.
  //       </p>

  //       <h3>b. Analytics and Performance Tracking</h3>
  //       <p>
  //         We use Google Analytics to track and analyze user interaction with our website to understand visitor behavior and improve our website. This data helps us make informed decisions about the content and layout of the site. Google Analytics collects anonymous data that cannot be used to identify you personally.
  //       </p>

  //       <h3>c. Communication</h3>
  //       <p>
  //         We may use your contact information to communicate with you about updates, services, or respond to your inquiries.
  //       </p>

  //       <h2>3. Consent to Data Collection</h2>
  //       <p>
  //         By using DJDinox.nl and submitting personal information via forms on our website, you consent to the collection, storage, and use of your information as described in this Privacy Policy. If you do not consent, please do not provide personal information or use the website.
  //       </p>

  //       <h2>4. Sharing Your Information</h2>
  //       <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. We may share your information in the following circumstances:</p>
  //       <ul>
  //         <li><strong>Service Providers:</strong> We may share information with third-party service providers who assist us in operating our website or providing services to you.</li>
  //         <li><strong>Legal Requirements:</strong> We may disclose your information when required by law or in response to valid legal requests.</li>
  //       </ul>

  //       <h2>5. Security of Your Information</h2>
  //       <p>
  //         We take reasonable steps to protect your personal information from unauthorized access, alteration, or disclosure. However, please note that no method of transmitting or storing data is completely secure, and we cannot guarantee the absolute security of your information.
  //       </p>

  //       <h2>6. Cookies and Tracking Technologies</h2>
  //       <p>
  //         We use cookies and similar tracking technologies to improve your experience on DJDinox.nl. Cookies are small files stored on your device that help us analyze web traffic and remember your preferences. You can choose to disable cookies through your browser settings, though this may limit some functionalities of the site.
  //       </p>

  //       <h2>7. Your Rights</h2>
  //       <p>
  //         You have the right to access, correct, or delete your personal information collected through DJDinox.nl. If you wish to exercise these rights or have any questions regarding your data, please contact us at [insert contact email].
  //       </p>

  //       <h2>8. Changes to This Privacy Policy</h2>
  //       <p>
  //         We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Effective Date" at the top of the policy. We encourage you to review this policy regularly to stay informed about how we protect your information.
  //       </p>

  //       <h2>9. Contact Us</h2>
  //       <p>
  //         If you have any questions or concerns about this Privacy Policy or your personal data, please contact us at:
  //       </p>
  //       <p>
  //         <strong>DJDinox.nl</strong><br />
  //         Email: privacy@djdinox.nl<br />
  //       </p>

  //       <p>
  //         By using DJDinox.nl, you acknowledge that you have read and understood this Privacy Policy and consent to the collection and use of your information as described.
  //       </p>
  //     </div>
  //   </div>
  // )
}
