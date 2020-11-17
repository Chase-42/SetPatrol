import React, { Component } from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './FAQPage.css';
import calender1 from './calender1.png';
import calender2 from './calender2.png';
import { render } from 'enzyme';

class FAQPage extends Component {

  constructor(props) {
    super(props);
    this.toggleClickKeywords = this.toggleClickKeywords.bind(this);
    this.state = {
    clickKeywords: false,
  }
}

// toggleClickKeywords() {
//   this.setState({clickKeywords: !this.state.clickKeywords})
// }

toggleClickKeywords = e => {
  console.log(e.target.parentElement.children[1])
  const text = e.target.parentElement.children[1]
  if (text.display === 'inline'){
    text.display = 'none'
  } else {    
    text.display = 'inline'
  }
}


  // prettier-ignore
  render(){

    var linksStyleParagraph = {display: 'none'};

    var linkStyleClickKeywords;
    if (this.state.clickKeywords) {
      // linkStyleClickKeywords = {maxHeight: '100%', borderRight: 'none' }
      linksStyleParagraph = { display: 'inline'}
    } else {
      // linkStyleClickKeywords = {maxHeight: '250px', borderRight: 'none'}
      linksStyleParagraph = { display: 'none' }
    }
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
          <h1 className={css.pageTitle}>Frequently Asked Questions</h1>

          <div>


          <div style={ linkStyleClickKeywords } >
              <h3 onClick={this.toggleClickKeywords}>1 . GETTING STARTED</h3>
              <div className='text' style={{ display: 'none' } }>
                <p><strong>What is SetPatrol?</strong></p>
                <p>SetPatrol is a European platform that unites all filmmakers to share and rent out personal equipment, studio spaces and more. When you’re not using it, don’t let your personal equipment sit at home to rust. Rent it out, make money and help other storytellers locally. It's just an easy click here XXXXX to create your FREE profile, list your gear, follow other creatives and start collaborating. We are here to help you create.</p>
                <p><strong>How does it work?</strong></p>
                <p>You quickly set up your profile, and can start browsing! Start listing your gear, or reaching out to users for a rental. Each user is vetted and verified and all equipment listed is insured by us. Both parties agree to a quality and security chart, and you can decide together where to pick up the item(s). As simple as that.</p>
                <p><strong>Is there a fee to use SetPatrol?</strong></p>
                <p>For Rentals, SetPatrol charges equipment owners a 15% Service Fee on each transaction. We also charge a 5% Community Fee to the renter for each transaction. Buy & Sell For Buy and Sell transactions, there is a low 5% fee for sellers. The buyer pays the payment processing fee. This is 2.6% + 0.30 cents for credit card payments, or 0.8% with a maximum of $5 for ACH bank payments.</p>
                <p><strong>What kinds of things can I list?</strong></p>
                <p>Any and all gear are accepted into our democratized platform for video creatives. From equipment that’s used in the visual content creation, studio spaces to advice and skills. We will find a home for it to make you money!</p>
                <p><strong>Where is SetPatrol located?</strong></p>
                <p>We’re a virtual service! SetPatrol was created to provide creators with a better way to rent and sell gear online, from the comfort of your home. Join now, to connect and collaborate within your neighborhood.</p>
                <p><strong>How do I join?Does it cost anything?</strong></p>
                <p>It's quick and easy to join SetPatrol—and it's also free! SetPatrol is free to join; there are no membership fees or monthly fees, and there are no fees to list equipment. (The way we make money is that we take a cut of each transaction—so we only make money when you make money).</p>
                <p><strong>What if there’s no equipment in my area?</strong></p>
                <p>Our goal is to maintain and expand a diverse inventory of equipment for our members to rent. Though we strive to have as many options for production as possible, we understand that we may not have everything just yet. If there is something specific you are looking for but can’t find, <u>let us know</u> and we’ll do everything we can to bring these items into our marketplace in the future.</p>
              </div>
            </div>
       
            <div onClick={this.toggleClickKeywords}  style={ linkStyleClickKeywords }>
              <h3>2 . MAKING YOUR USER PROFILE</h3>
              <div style={ linksStyleParagraph}>
              <p><strong>Who can join Set Patrol? Do I have to be based in Europe?</strong></p>
              <p>Anyone! Our listings are offered all over Europe, but if you are based somewhere else and visiting, welcome! You can create your user profile <stong>here</stong>.</p>
              <p><strong>Do I have to use a facebook account to sign up?</strong></p>
              <p>No, all you need is a paypal account to be paid or pay users.</p>
              <p><strong>What kind of photos work best for listings?</strong></p>
              <p>We’re all skilled creatives at SetPatrol, go with your intuition. A color image that shows details of the equipment is very helpful. You can write out what you have but why not show it, with a well lit and hi-definition photo!</p>
              </div>
            </div>

            <div onClick={this.toggleClickKeywords}  style={ linkStyleClickKeywords }>
              <h3>3 . IDENTIFICATION AND VERIFICATION	</h3>
              <p><strong>What is your verification process? Why do I need to provide an ID?</strong></p>
              <p>In order to create a safe community we expect all users to verify their emails, phone numbers and ID through simple code or link steps. To become a top renter or rentee we recommend you becoming a SUPER PATROLLER by confirming your identity. You'll need to add either your legal name and address, or a photo of a government ID (driver's license, passport, or national identity card). Additionally, you will be asked to take a brand-new photo of yourself so that we can ensure all these photos match.</p>
              <p><strong>Why should I link my portfolio/reel/ vimeo etc?</strong></p>
              <p>We strongly encourage all of our members to add as many social links as possible. This includes any portfolio websites, links to work or credits. When you add these links in your account settings, they'll appear on your profile page under your 'About me' section. It's a great way to showcase your work, highlight your skills and experience, and help other members get to know you. As a new member of the site in particular, filling out your profile as much as possible means your rental requests are more likely to be accepted.</p>
              <p>Watch the video below on how to easily update your profile to include links to your social profiles and industry experience:</p>
              <p><strong>How do I verify my ID?</strong></p>
              <p>Security is our top priority at SetPatrol. Our community is based on trust, and we're proud that we've created one of the safest ways to share equipment with other people.</p>
              <p>We work hard to protect all of our members by making sure that each person using the site is who they say they are. That way, you always know who you're talking to.</p>
              <p>We've developed powerful tools to help with this, including our Automated ID Verification System, which we use to detect and prevent potential identity fraud.</p>
              <p><strong>How does it work?</strong></p>
              <p>Before you place a rental request or send a message to another user on the site, you'll be asked to verify your ID. You can find this option under Settings / ID Verification.</p>
              <p>Once you've entered some basic information, our automated system will check the info you provided. In many cases, accounts can be verified instantly.</p>
              <p><strong>If we're not able to immediately verify your account, we'll need to collect a little more information so we can <u>manually verify your account</u>. Look out for a message from our customer support team, which will let you know the next steps. Is my information safe?</strong></p>
              <p>Yes. All data is processed through our secure site.</p>
            </div>
            
            <div onClick={this.toggleClickKeywords}  style={ linkStyleClickKeywords }>
              <h3>4 . TRUST AND SAFETY</h3>
              <p><strong>What happens to my ID data? How do you verify users’ accounts?</strong></p>
              <p>We are serious about vetting and safety at SetPatrol. The SetPatrol vetting system is designed to ensure that our community has the most trustworthy members. It’s incredibly effective at keeping bad actors off the platform.</p>
              <p>The SetPatrol vetting system combines machine learning algorithms harnessing a vast network of data on fraud prevention, along with the human review.  Every person who rents on SetPatrol has been reviewed by our team. Plus we don’t just vet the renter once, we vet them every time they rent. This means our community is high quality, trustworthy, and professional. To vet SetPatrol members, we collect personal information (like a state issued photo ID, address, phone number, birth date) and use automated tools as well as SetPatrol team reviews to verify that it is accurate. Sometimes it takes a day or two. If you are in a rush, we can expedite the process! Just email us at ask@SetPatrol.com.</p>
              <p><strong>I think someone is using the platform fraudulently, what should I do?</strong></p>
              <p>If you suspect fraudulent activity on SetPatrol, Take note of their member name and activity and <strong>please notify us immediately</strong>.</p>
            </div>

            <div onClick={this.toggleClickKeywords}  style={ linkStyleClickKeywords }>
              <h3>5 . RENTING GEAR</h3>
              <p><strong>What is the renting process like?</strong></p>
              <p>It’s very easy!</p>
              <p>Request: Renter selects gear on Set Patrol, enters payment method, chooses insurance option.</p>
              <p>Acceptance: Owner accepts the rental request.</p>
              <p>Charge: Once the owner accepts the rental request the renters’ card is charged and the money is sent to the owner's bank account.</p>
              <p>Both users agree to meet at a place and time that is convenient for both of them. We recommend a public place if possible: a park or coffee shop. You will then both receive a check in and check out package, our rental agreement, to make sure the gear is functioning well.</p>
              <p>Pickup: Both users must present their IDs and inspect all items, then electronically check it out (A very easy process).</p>
              <p>Return & Inspection: When the renter returns the equipment, the owner must inspect all items to ensure they are in the same condition that they were when the renter first picked up. If the owner finds that the equipment is NOT in the same condition, they must report the discrepancy to the renter and to Set Patrol within one hour.</p>
              <p><strong>How is the rental fee estimated?</strong></p>
              <p><i>Very simple.No charge for pick-up and drop-off days</i></p>
              <p>Pick-up and drop-off days are free, this is when you will <i>check, prep and pack your gear</i>.</p>
              <p>When you rent on Set Patrol  you'll <strong>pick up your gear after 3 pm</strong> on the rental date, and you'll <strong>return it before 1pm</strong> on the return day.</p>
              <p>Unless you're booking a one-day rental, you should not plan to shoot on these days.</p>
              <p><strong>Shoot days</strong></p>
              <p>The cost of your rental is based on the number of <strong>shoot days</strong>. These are the days you'll actually be using the equipment.</p>
              <p><strong>1 to 3 Shoot Days</strong></p>
              <p>If you rent for 1, 2 or 3 <strong>shoot days</strong>, you pay for the shoot days only.</p>
              <p><i>Example:</i> your shoot days are Tuesday and Wednesday. Pick-up is Monday, drop-off is Thursday. You will be charged for 2 shoot days.</p>
              <img src={calender1} alt='calender' width="460" height="315"/>
              <p><i>Example</i>: your <strong>shoot days</strong> are Tuesday, Wednesday and Thursday. Pick-up is Monday, drop-off is Friday. You will be charged for 3 shoot days.</p>
              <img src={calender2} alt='calender' width="460" height="315"/>
              <p><strong>The full-week rule (5 to 7 days) with a discount.</strong></p>
              <p>We also have a great weekly discount.</p>
              <p>If you rent gear for 5 to 7 days, you only pay for 3 shoot days.</p>
              <p><strong>Weekends count as one day</strong></p>
              <p>We offer a weekend discount: weekends count as 1 day (Saturday + Sunday). We know a lot of you create content on your weekends,as always Set Patrol is a more affordable option for you. </p>
              <p><i>Example</i>: your <strong>shoot days</strong> are Saturday and Sunday. Pick-up is Friday, drop-off is Monday. You will be charged for 1 shoot day.</p>
              <p><strong>How should I prepare to pick up or rent gear?</strong></p>
              <p>Before picking up, users should discuss how the item.s will be packed: a pelican case, a camera case etc. Make sure the gear is ready and packed before the renter arrives, both parties should have their check in agreement and ID’s ready as well.</p>
              <p><strong>What is the community fee you charge?</strong></p>
              <p>We charge renters a 5% Community Fee on each booking. This fee helps cover the costs of ID verification, security, customer service, feature improvements, dispute mitigation, and credit card processing that the community incurs.</p>
              <p><strong>Do you support shipping or delivery courier? Can I have the gear shipped or delivered to me?</strong></p>
              <p>We are working on providing the best and safest shipping option. For now we encourage renters and rentees to meet at local coffee shops to exchange rentals. You can simultaneously be supporting three locals at once (coffee, equipment and filmmakers!!)</p>
              <p><strong>Can I extend a rental?</strong></p>
              <p>Sometimes your plans change, and you need to keep gear longer than expected. Here are the steps if you need to change the dates of your rental.</p>
              <p>Renters:</p>
              <p>Please contact the equipment owner and ask to extend your rental. As long as the equipment is available for the extended period and the owner agrees to the extension, they can adjust the dates of the rental using the Edit Order button. Extensions are entirely at the owner's discretion: if they refuse your request, you must return the gear on the existing return date.</p>
              <p><strong>How can I contact the Owner/Renter?</strong></p>
              <p>You can simply message the owner prior to renting by clicking the “Contact” button underneath the owner’s name on the listing page or “Contact Owner” on the owner’s profile page.</p>
              <p><strong>How do I know for sure the gear works well? What happens if, once I start using it, it ends up being defective?</strong></p>
              <p>At Set Patrol, everyone is vetted when creating a profile and for each transaction. We have a secured system that includes contact and ID verification. All parties, before the transactions have to fill out a rental agreement, and a check out form that attest that everything is in good state, same at return. If a problem rises, let’s say technical issues not foreseen by the check out forms, our insurance will cover it.</p>
              <p><strong>What if I am renting gear, and I end up needing it at the last minute?</strong></p>
              <p>If you cancel within 2 hours of a request being accepted, no cancellation fee will be imposed. As a renter, if you cancel within 48 hours of pickup time, we reserve the right to charge a fee of up to 50% of the rental cost, at the owner's request.</p>
              <p>If the owner cancels within 24 hours of pickup time, we reserve the right to charge a fee of up to 100% of the rental cost.</p>
              <p><strong>I lost something I rented. What should I do?</strong></p>
              <p>If you misplaced a rental or had something stolen from you please stay calm: let us know - Send an email with the subject line “Insurance Coverage Claim” to ask@setpatrol.com including the following: </p>
              <ul>
                <li>Your name </li>
                <li>Your phone number </li>
                <li>Rental details (gear owner's name, equipment rented, date, location)</li>
                <li>A description of the incident with as much detail as possible</li>
                <li>Tell the Rentee</li>
                <li>File a police report if any items are stolen </li>
              </ul>
              <p>Can I send someone else to pick up the gear for me?</p>
              <p>When you're busy coordinating your production, sometimes you'll need someone else to handle the pick-up or drop-off of equipment. On ShareGrid, you'll add that person to the rental as an 'Authorized Person'.</p>
           </div>

           <div onClick={this.toggleClickKeywords}  style={ linkStyleClickKeywords }>
              <h3>6 . DAMAGE</h3>
              <p><strong>What if I damage the equipment?</strong></p>
              <p>Yes. Both owners and renters will receive a digital checklist before pick up.</p>
              <p><strong>What are digital checksheets?</strong></p>
              <p>Renters and owners use digital checksheets to record the condition of rented equipment before and after each rental. This check list is mandatory. That way, everyone is clear on the condition of the gear, and if there’s any issue during the rental, we can help resolve things more quickly.</p>
              <p><strong>Renters:</strong>You will receive a link on the <strong>day of pick-up</strong> via email and text message. Complete it with the owner at the pick-up location.</p>
              <p><strong>Owners:</strong>You will receive a link the <strong>day of drop-off</strong> via email and text message. Complete it with the renter at the return location. Make sure you test the gear thoroughly and note any missing items or damage.</p>
              <hr></hr>
              <h3>BUYING AND SELLING GEAR WITH SET PATROL</h3>
              <p><strong>Why should I sell my gear through Set Patrol?</strong></p>
              <p>Set Patrol is a vetted and secured platform with verified users. This allows all your transactions to be safe, as opposed to let’s say, a regular second hand website or a facebook group.</p>
              <p><strong>What does it cost to sell an item on ShareGrid?</strong></p>
              <p>We take a percentage of  5% for each transaction between seller and buyer. Listing is always free.</p>
              <p><strong>What do I do when someone makes an offer to buy my item?</strong></p>
              <p>You will be notified on your Set Patrol account and by email.</p>
              <p><strong>When do I get paid for a sale?</strong></p>
              <p>Within 3 to 5 business days.</p>
              <p><strong>Do you charge taxes on purchases?</strong></p>
              <p>We do not. You can decide to add taxes to the price in your listing.</p>
              <hr></hr>
              <h3>LISTING GEAR AND MANAGING YOUR RENTAL</h3>
              <p><strong>What does it mean if a request says SetPatrol is reviewing this rental'? Why can't I accept the request?</strong></p>
              <p>It takes us a couple of days to review each listing and make sure it is up to our security standard. If you are in a rush send us an email at ask@setpatrol.com so we can accommodate you.</p>
              <p><strong>Do I have to pay to list gear?</strong></p>
              <p>No, it is always free!</p>
              <p><strong>Can I adjust the availability of my listing?</strong></p>
              <p>Of course, as long as the item is not rented out yet, feel free to make changes.</p>
              <p><strong>Can I post an equipment package?</strong></p>
              <p>Of course, you create your own listings. Feel free, for example, to list a camera body and its lenses.</p>
              <p><strong>What if I want to de-list an item?</strong></p>
              <p>You are 100 percent responsible for your listings, feel free to de-list an item as long as it is not rented out.</p>
              <p><strong>Do you set prices or do I?</strong></p>
              <p>You always set your own prices! Feel free to browse around to see what other listings offer.</p>
              <p><strong>Do I have to pay taxes on the income made from Set Patrol?</strong></p>
              <p>Because Set Patrol operates in all the countries of the European Union, with various tax legislations, you are responsible for filing your own taxes with your Set Patrol earnings. We recommend you speak to your accountant.</p>
           </div>
           
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
 }
};

export default FAQPage;
