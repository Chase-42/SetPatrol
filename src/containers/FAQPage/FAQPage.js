import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './FAQPage.css';

const FAQPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="Frequently Asked Questions"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FAQPage',
        description: 'Frequently asked questions in SetPatrol marketplace.',
        name: 'Frequently Asked Questions',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Question 1?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Answer: Lorem ipsum',
            },
          },
        ],
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar> 
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.mainWrapper}>
          <h1>Frequently Asked Questions</h1>
          <div>
            <h3>1 . GETTING STARTED</h3>
            <p>What is SetPatrol?</p>
            <p>SetPatrol is a European platform that unites all filmmakers to share and rent out personal equipment, studio spaces and more. When you’re not using it, don’t let your personal equipment sit at home to rust. Rent it out, make money and help other storytellers locally. It's just an easy click here XXXXX to create your FREE profile, list your gear, follow other creatives and start collaborating. We are here to help you create.</p>
            <p>How does it work?</p>
            <p>You quickly set up your profile, and can start browsing! Start listing your gear, or reaching out to users for a rental. Each user is vetted and verified and all equipment listed is insured by us. Both parties agree to a quality and security chart, and you can decide together where to pick up the item(s). As simple as that.</p>
            <p>Is there a fee to use SetPatrol?</p>
            <p>For Rentals, SetPatrol charges equipment owners a 15% Service Fee on each transaction. We also charge a 5% Community Fee to the renter for each transaction. Buy & Sell For Buy and Sell transactions, there is a low 5% fee for sellers. The buyer pays the payment processing fee. This is 2.6% + 0.30 cents for credit card payments, or 0.8% with a maximum of $5 for ACH bank payments.</p>
            <p>What kinds of things can I list?</p>
            <p>Any and all gear are accepted into our democratized platform for video creatives. From equipment that’s used in the visual content creation, studio spaces to advice and skills. We will find a home for it to make you money!</p>
            <p>Where is SetPatrol located?</p>
            <p>We’re a virtual service! SetPatrol was created to provide creators with a better way to rent and sell gear online, from the comfort of your home. Join now, to connect and collaborate within your neighborhood.</p>
            <p>How do I join?Does it cost anything?</p>
            <p>It's quick and easy to join SetPatrol—and it's also free! SetPatrol is free to join; there are no membership fees or monthly fees, and there are no fees to list equipment. (The way we make money is that we take a cut of each transaction—so we only make money when you make money).</p>
            <p>What if there’s no equipment in my area?</p>
            <p>Our goal is to maintain and expand a diverse inventory of equipment for our members to rent. Though we strive to have as many options for production as possible, we understand that we may not have everything just yet. If there is something specific you are looking for but can’t find, <u>let us know</u> and we’ll do everything we can to bring these items into our marketplace in the future.</p>
            <h3>2 . MAKING YOUR USER PROFILE</h3>
            <p>Who can join Set Patrol? Do I have to be based in Europe?</p>
            <p>Anyone! Our listings are offered all over Europe, but if you are based somewhere else and visiting, welcome! You can create your user profile <stong>here</stong>.</p>
            <p>Do I have to use a facebook account to sign up?</p>
            <p>No, all you need is a paypal account to be paid or pay users.</p>
            <p>What kind of photos work best for listings?</p>
            <p>We’re all skilled creatives at SetPatrol, go with your intuition. A color image that shows details of the equipment is very helpful. You can write out what you have but why not show it, with a well lit and hi-definition photo!</p>
            <h3>3 . IDENTIFICATION AND VERIFICATION	</h3>
            <p>What is your verification process? Why do I need to provide an ID?</p>
            <p>In order to create a safe community we expect all users to verify their emails, phone numbers and ID through simple code or link steps. To become a top renter or rentee we recommend you becoming a SUPER PATROLLER by confirming your identity. You'll need to add either your legal name and address, or a photo of a government ID (driver's license, passport, or national identity card). Additionally, you will be asked to take a brand-new photo of yourself so that we can ensure all these photos match.</p>
            <p>Why should I link my portfolio/reel/ vimeo etc?</p>
            <p>We strongly encourage all of our members to add as many social links as possible. This includes any portfolio websites, links to work or credits. When you add these links in your account settings, they'll appear on your profile page under your 'About me' section. It's a great way to showcase your work, highlight your skills and experience, and help other members get to know you. As a new member of the site in particular, filling out your profile as much as possible means your rental requests are more likely to be accepted.</p>
            <p>Watch the video below on how to easily update your profile to include links to your social profiles and industry experience:</p>
            <p>How do I verify my ID?</p>
            <p>Security is our top priority at SetPatrol. Our community is based on trust, and we're proud that we've created one of the safest ways to share equipment with other people.</p>
            <p>We work hard to protect all of our members by making sure that each person using the site is who they say they are. That way, you always know who you're talking to.</p>
            <p>We've developed powerful tools to help with this, including our Automated ID Verification System, which we use to detect and prevent potential identity fraud.</p>
            <p>How does it work?</p>
            <p>Before you place a rental request or send a message to another user on the site, you'll be asked to verify your ID. You can find this option under Settings / ID Verification.</p>
            <p>Once you've entered some basic information, our automated system will check the info you provided. In many cases, accounts can be verified instantly.</p>
            <p>If we're not able to immediately verify your account, we'll need to collect a little more information so we can <u>manually verify your account</u>. Look out for a message from our customer support team, which will let you know the next steps. Is my information safe?</p>
            <p>Yes. All data is processed through our secure site.</p>
            <h3>4 . TRUST AND SAFETY</h3>
            <p>What happens to my ID data? How do you verify users’ accounts?</p>
            <p>We are serious about vetting and safety at SetPatrol. The SetPatrol vetting system is designed to ensure that our community has the most trustworthy members. It’s incredibly effective at keeping bad actors off the platform.</p>
            <p>The SetPatrol vetting system combines machine learning algorithms harnessing a vast network of data on fraud prevention, along with the human review.  Every person who rents on SetPatrol has been reviewed by our team. Plus we don’t just vet the renter once, we vet them every time they rent. This means our community is high quality, trustworthy, and professional. To vet SetPatrol members, we collect personal information (like a state issued photo ID, address, phone number, birth date) and use automated tools as well as SetPatrol team reviews to verify that it is accurate. Sometimes it takes a day or two. If you are in a rush, we can expedite the process! Just email us at ask@SetPatrol.com.</p>
            <p>I think someone is using the platform fraudulently, what should I do?</p>
            <p>If you suspect fraudulent activity on SetPatrol, Take note of their member name and activity and <strong>please notify us immediately</strong>.</p>
            <h3>5 . RENTING GEAR</h3>
            <p>What is the renting process like?</p>
            <p>It’s very easy!</p>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FAQPage;
