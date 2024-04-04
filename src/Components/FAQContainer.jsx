import React from 'react';
import FAQ from './FAQ';

const FAQContainer = () => {
  const faqs = [
    {
      question: 'What is Premium Plan?',
      answer:
        'Creating your website is free.',
    },
    {
      question: 'Can i try a Wix Premium plan for free?',
      answer:
        'Yes.',
    },
    {
        question: 'How do i get my free domain?',
        answer:
          'You can choose your own domain.',
      },
      {
        question: 'Why do i need custom domain?',
        answer:
          'A custom domain.',
      },  
      {
        question: 'Where can i find my billing information?',
        answer:
          'Sign In into your wix account.',
      },
      {
        question: 'What online payments are accepted?',
        answer:
          'Wix accepts are major credit and debit cards.',
      }, 
  ];

  return (
    <>
    
    <div className="max-w-lg mx-auto  text-black ">
    <div>
        <h2 className='text-black  text-bold font-bold h-30 w-30 mr-10 text-3xl '>Frequently Asked Questions</h2>
    </div>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
    </>
  );
};

export default FAQContainer;
