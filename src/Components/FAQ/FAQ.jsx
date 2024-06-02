import React from 'react';

const FAQ = () => {
    return (
        <div className='flex mt-24 container mx-auto'> 
            <div className='flex-1 w-full'>
                <img className='h-[450px] w-full' src="https://i.ibb.co/PxWmnSx/2330690.jpg" alt="" />

            </div>

            <div className="join join-vertical w-full flex-1">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
    What are your store hours?
    </div>
    <div className="collapse-content"> 
      <p>Our store hours are [insert store hours here], but you can always shop online 24/7 on our website!</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Do you offer international shipping?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we offer international shipping to many countries. Shipping rates and times may vary depending on your location.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What is your return policy?
    </div>
    <div className="collapse-content"> 
      <p>We accept returns within 30 days of purchase for a full refund or exchange, provided the items are in their original condition with tags attached. Please refer to our return policy page for more details.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Can I track my order?


    </div>
    <div className="collapse-content"> 
      <p>Absolutely! Once your order has been shipped, you'll receive a tracking number via email, allowing you to track your package's journey until it reaches your doorstep.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Can I cancel or modify my order after it's been placed?
    </div>
    <div className="collapse-content"> 
      <p>We process orders quickly to ensure prompt delivery, but we'll do our best to accommodate any changes or cancellations. Please contact our customer support team as soon as possible with your order details.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Do you offer gift wrapping?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we offer gift wrapping services for a small additional fee. You can select this option during the checkout process.</p>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default FAQ;