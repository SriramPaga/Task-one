import React from 'react';
import { Link } from 'react-router-dom';

function CheckoutForm(props) {
  function handleOrderPlaced() {
    // window.location('/OrderPlaced')
  }
  return (
    <div class="leading-loose">
      <div class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium">Customer information</p>
        <div class="">
          <label class="block text-sm text-gray-00" for="customer_name">
            Name
          </label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="customer_name"
            name="customer_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="customer_email">
            Email
          </label>
          <input
            class="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
            id="customer_email"
            name="customer_email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class=" block text-sm text-gray-600" for="customer_email">
            Address
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="customer_email"
            name="customer_email"
            type="text"
            required=""
            placeholder="Street"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class="hidden text-sm  text-gray-600" for="customer_email">
            City
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="customer_email"
            name="customer_email"
            type="email"
            required=""
            placeholder="City"
            aria-label="Email"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label
            class="hidden block text-sm text-gray-600"
            for="customer_email"
          >
            Country
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="customer_email"
            name="customer_email"
            type="text"
            required=""
            placeholder="Country"
            aria-label="Email"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden  text-sm text-gray-600" for="customer_email">
            Zip
          </label>
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="customer_email"
            name="customer_email"
            type="text"
            //since its a mix of letters and numbers
            required=""
            placeholder="Zip"
            aria-label="Email"
          />
        </div>
        <p class="mt-4 text-gray-800 font-medium">Payment information</p>

        <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
          <div class="w-full p-3 border-b border-gray-200">
            <div class="mb-5">
              <label for="type1" class="flex items-center cursor-pointer">
                <input
                  type="radio"
                  class="form-radio h-5 w-5 text-red-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  class="h-6 ml-3"
                />
              </label>
            </div>
            <div>
              <div class="mb-3">
                <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                  Name on card
                </label>
                <div>
                  <input
                    class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focustomer:outline-none focustomer:border-red-500 transition-colors"
                    placeholder="John Smith"
                    type="text"
                  />
                </div>
              </div>
              <div class="mb-3">
                <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                  Card number
                </label>
                <div>
                  <input
                    class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focustomer:outline-none focustomer:border-red-500 transition-colors"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                  />
                </div>
              </div>
              <div class="mb-3 -mx-2 flex items-end">
                <div class="px-2 w-1/4">
                  <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Expiration date
                  </label>
                  <div>
                    <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focustomer:outline-none focustomer:border-red-500 transition-colors cursor-pointer">
                      <option value="01">01 - January</option>
                      <option value="02">02 - February</option>
                      <option value="03">03 - March</option>
                      <option value="04">04 - April</option>
                      <option value="05">05 - May</option>
                      <option value="06">06 - June</option>
                      <option value="07">07 - July</option>
                      <option value="08">08 - August</option>
                      <option value="09">09 - September</option>
                      <option value="10">10 - October</option>
                      <option value="11">11 - November</option>
                      <option value="12">12 - December</option>
                    </select>
                  </div>
                </div>
                <div class="px-2 w-1/4">
                  <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focustomer:outline-none focustomer:border-red-500 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
                <div class="px-2 w-1/4">
                  <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Security code
                  </label>
                  <div>
                    <input
                      class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focustomer:outline-none transition-colors"
                      placeholder="000"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-3">
            <label for="type2" class="flex items-center cursor-pointer">
              <input
                type="radio"
                class="form-radio h-5 w-5 text-red-500"
                name="type"
                id="type2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                width="80"
                class="ml-3"
              />
            </label>
          </div>
        </div>
        <div class="mt-4">
          <Link to="/OrderPlaced">
            <button
              class="w-full px-4 py-1 text-white font-bold font-mono tracking-wider bg-red-700 rounded"
              // type="submit"
              // onClick={handleOrderPlaced}
            >
              Pay ₹{props.grandtotal.toFixed(2)}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
