import React from 'react';

const FormComponent = () => {
  return (
    <div class='fcf-body'>
      <div id='fcf-form'>
        <h3 class='fcf-h3'>
          For an exact quote and a free proposal, please enter your information
          here
        </h3>

        <form
          id='fcf-form-id'
          class='fcf-form-class'
          method='POST'
          action='https://formsubmit.co/99faa6771b26dfe48afd766020837128'
        >
          <div class='fcf-form-group'>
            <label for='Name' class='fcf-label'>
              Your name
            </label>
            <div class='fcf-input-group'>
              <input
                type='text'
                id='Name'
                name='Name'
                class='fcf-form-control'
                required
              />
            </div>
          </div>
          <div class='fcf-form-group'>
            <label for='Email' class='fcf-label'>
              Your email address
            </label>
            <div class='fcf-input-group'>
              <input
                type='email'
                id='Email'
                name='Email'
                class='fcf-form-control'
                required
              />
            </div>
          </div>
          <div class='fcf-form-group'>
            <label for='Message' class='fcf-label'>
              Your message
            </label>
            <div class='fcf-input-group'>
              <textarea
                id='Message'
                name='Message'
                class='fcf-form-control'
                rows='6'
                maxlength='3000'
                required
              ></textarea>
            </div>
          </div>
          <div class='fcf-form-group'>
            <button
              type='submit'
              id='fcf-button'
              value='http://localhost:3002/pages/thankyou.html'
              class='fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
