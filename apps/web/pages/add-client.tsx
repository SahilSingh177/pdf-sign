import { useState } from "react";
import { Button } from "@insurahub/ui";
import { FormProvider, useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
  apiError: string;
};

export default function CreateUser() {
  const gender_options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const citizen_options = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const married_options = [
    { value: "married", label: "Married" },
    { value: "unmarried", label: "Unmarried" },
  ];

  const [selectedUsergenderOption, setSelectedUsergenderOption] = useState("male");
  const [selectedUsercitizenOption, setSelectedUsercitizenOption] = useState("yes");
  const [selectedUserpregnantOption, setSelectedUserpregnantOption] = useState("no");
  const [selectedSpousegenderOption, setSelectedSpousegenderOption] = useState("male");
  const [selectedSpousecitizenOption, setSelectedSpousecitizenOption] = useState("yes");
  const [selectedSpousepregnantOption, setSelectedSpousepregnantOption] = useState("no");
  const [selectedMaritalOption, setSelectedMaritalOption] = useState("unmarried");
  const [selectedinsOption, setSelectedinsOption] = useState("yes");
  const [selectedpaymentOption, setSelectedpaymentOption] = useState("yes");

  const handleGenderUserOptionChange = (value: string) => {
    setSelectedUsergenderOption(value);
  };

  const handleCitizenUserOptionChange = (value: string) => {
    setSelectedUsercitizenOption(value);
  };

  const handlePregnantUserOptionChange = (value: string) => {
    setSelectedUserpregnantOption(value);
  };

  const handleGenderSpouseOptionChange = (value: string) => {
    setSelectedSpousegenderOption(value);
  };

  const handleCitizenSpouseOptionChange = (value: string) => {
    setSelectedSpousecitizenOption(value);
  };

  const handlePregnantSpouseOptionChange = (value: string) => {
    setSelectedSpousepregnantOption(value);
  };

  const handleMaritalOptionChange = (value: string) => {
    setSelectedMaritalOption(value);
  };

  const handleInsOptionChange = (value: string) => {
    setSelectedinsOption(value);
  };

  const handlePaymentOptionChange = (value: string) => {
    setSelectedpaymentOption(value);
  };

  const form = useForm<FormValues>({});
  const {
    register,
    trigger,
    formState: { errors, isSubmitting },
  } = form;

  const handleErrors = async (resp: Response) => {
    if (!resp.ok) {
      const err = await resp.json();
      throw new Error(err.message);
    }
  };

  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={() => form.handleSubmit(CreateUser)}
          onChange={() => {
            form.clearErrors();
            trigger();
          }}
          className="mt-8 space-y-6"
        >
          <div className="min-h-screen bg-gray-100 py-6 flex flex-col sm:py-12">
            <div className="relative py-3 sm:max-w-6xl xl:mx-auto">
              <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center space-x-5">
                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                      <h2 className="leading-relaxed">Add a User</h2>
                    </div>
                  </div>
        <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">   
                    <div className="flex flex-col">
              <label className="leading-loose">Application Number</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Application Number"/>
            </div>
                  <hr/>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">First Name</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="First Name"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Last Name</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Last Name"/>
            </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label className="leading-loose">Date of Birth</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                      <label className="leading-loose">Gender</label>
                      {gender_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="gender-group1"
                        value={option.value}
                        checked={selectedUsergenderOption === option.value}
                        onChange={() => handleGenderUserOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col">
                  <label className="leading-loose">Citizen</label>
                   {citizen_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="citizen-group1"
                        value={option.value}
                        checked={selectedUsercitizenOption === option.value}
                        onChange={() => handleCitizenUserOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                    </div>
                    <div className="flex flex-col">
              <label className="leading-loose">USCIS#/CARD#/COD</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder=""/>
            </div>
            </div>
                <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">SSN</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="SSN"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Migratory Status</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Migration Status"/>
            </div>
                  </div>
          <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col">
                  <label className="leading-loose">Pregnant</label>
                   {citizen_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="pregnant-group1"
                        value={option.value}
                        checked={selectedUserpregnantOption === option.value}
                        onChange={() => handlePregnantUserOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                    </div>
                    <div className="flex flex-col">
              <label className="leading-loose">Address</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder=""/>
            </div>
                  </div>
          <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">City</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="City"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">State</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="State"/>
                    </div>
                    <div className="flex flex-col">
              <label className="leading-loose">Zip Code</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Zip Code"/>
            </div>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col">
                  <label className="leading-loose">Marital Status</label>
                   {married_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="marital-status-group"
                        value={option.value}
                        checked={selectedMaritalOption === option.value}
                        onChange={() => handleMaritalOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                    </div>
                    <div className="flex flex-col">
              <label className="leading-loose">Phone Number</label>
              <input type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Phone Number"/>
            </div>
                  </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">Email</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Email"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Employer</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Employer"/>
            </div>
                  </div>
                  <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">Annual Income</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder=""/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Hrs/Week/Month</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder=""/>
                  </div>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex flex-col">
              <label className="leading-loose">Employer Phone Number</label>
              <input type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Phone Number"/>
            </div>
                  </div>
                  <hr />
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Spouse Details</h2>
                  </div>

            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col">
                  <label className="leading-loose">Applying for INS</label>
                   {citizen_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="ins-group"
                        value={option.value}
                        checked={selectedinsOption === option.value}
                        onChange={() => handleInsOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                    </div>
                    <div className="flex flex-col">
              <label className="leading-loose">Phone Number</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Phone Number"/>
            </div>
            </div>
                  <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">First Name</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="First Name"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Last Name</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Last Name"/>
            </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label className="leading-loose">Date of Birth</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                      <label className="leading-loose">Gender</label>
                      {gender_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="gender-group"
                        value={option.value}
                        checked={selectedSpousegenderOption === option.value}
                        onChange={() => handleGenderSpouseOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col">
                  <label className="leading-loose">Citizen</label>
                   {citizen_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="citizen-group"
                        value={option.value}
                        checked={selectedSpousecitizenOption === option.value}
                        onChange={() => handleCitizenSpouseOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                    </div>
                    <div className="flex flex-col">
              <label className="leading-loose">USCIS#</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder=""/>
            </div>
            </div>
                <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">SSN</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="SSN"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Migratory Status</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Migration Status"/>
            </div>
                  </div>
          <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col">
                  <label className="leading-loose">Pregnant</label>
                   {citizen_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="pregnant-group"
                        value={option.value}
                        checked={selectedSpousepregnantOption === option.value}
                        onChange={() => handlePregnantSpouseOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Employer</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Employer"/>
            </div>
                  </div>
            <div className="flex items-center space-x-4">
                  </div>
                  <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">Annual Income</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder=""/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Hrs/Week/Month</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder=""/>
                  </div>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex flex-col">
              <label className="leading-loose">Employer Phone Number</label>
              <input type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Phone Number"/>
                    </div>
                  </div>

                  <hr />
                  <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
            <h2 className="leading-relaxed">Dependents</h2>
                  </div>
                  <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">First Name</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="First Name"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Last Name</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Last Name"/>
                    </div>
                  </div>
              <div className="flex items-center space-x-4">
              <div className="flex flex-col">
                <label className="leading-loose">Date of Birth</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2020"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
                    </div>
                    <div className="flex flex-col">
              <label className="leading-loose">SS</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="SS"/>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
              <label className="leading-loose">UPCIS</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="UPCIS"/>
                    </div>
                  </div>
                  <hr />
                   <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">Insurance Company</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Insurance Company"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">ID Plan</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="ID Plan"/>
                    </div>
                  </div>
                   <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">Fiscal Card</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Fiscal Card"/>
                    </div>
              <div className="flex flex-col">
                <label className="leading-loose">Start Date</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2023"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                </div>
              </div>
                  </div>
                   <div className="flex items-center space-x-4">
              <div className="flex flex-col">
              <label className="leading-loose">Premium</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Premium"/>
                    </div>
              <div className="flex flex-col">
              <label className="leading-loose">Payment Method</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Payment Method"/>
                    </div>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
              <div className="flex flex-col">
                  <label className="leading-loose">Automatic Payment</label>
                   {citizen_options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        name="payment-group"
                        value={option.value}
                        checked={selectedpaymentOption === option.value}
                        onChange={() => handlePaymentOptionChange(option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={option.value}>{option.label}</label>
                    </div>
                  ))}
                    </div>
                    <div className="flex flex-col">
              <label className="leading-loose">Card Number</label>
              <input type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Card number"/>
            </div>
                  </div>
                  <hr />
                 
                    <div className="flex flex-col">
              <label className="leading-loose">Card Number</label>
              <input type="number" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Card Number"/>
                  </div>
                   <div className="flex items-center justify-between space-x-4">
                    <div className="flex flex-col">
                <label className="leading-loose">Valid From</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2023"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
              </div>
                  </div>
                  <div className="flex flex-col">
                <label className="leading-loose">Card Expires</label>
                <div className="relative focus-within:text-gray-600 text-gray-400">
                  <input type="text" className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="25/02/2023"/>
                  <div className="absolute left-3 top-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                      </div>
                      </div>
                  </div>
                  <div className="flex flex-col">
              <label className="leading-loose">Notes</label>
              <textarea className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Notes"/>
                    </div>
          <div className="pt-4 flex items-center space-x-4">
              <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                          <svg
                            className="w-6 h-6 mr-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>{" "}
                          Cancel
                        </button>
                        <Button
                          type="submit"
                          onClick={() => {
                            form.clearErrors();
                          }}
                          className="sgroup relative flex w-full"
                        >
                          Create
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
}

