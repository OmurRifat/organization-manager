import React, { useContext, useEffect, useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../context/AuthProvider'
import axios from 'axios'


const LoanApply = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const [showModal, setShowModal] = useState(false)
  const [imageUrl, setImageUrl] = useState("https://gumlet.assettype.com/bdnews24-english%2Fimport%2Fmedia%2F2015%2F06%2F01%2Fsmart-card.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=768");
  const { user,userInfo } = useContext(AuthContext);
  
  function handleImageUpload(event) {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  }
    function drop(event) {
      event.preventDefault();
      const filesLength = files.length;
      const filesArray = Array.from({ length: filesLength }, (_, index) => files[index]);
      const filesToAdd = event.dataTransfer.files;
      for (let i = 0; i < filesToAdd.length; i++) {
        filesArray.push(filesToAdd[i]);
      }
      setFiles(filesArray);
    }
    function dragstart(event) {
      event.dataTransfer.setData('text/plain', event.target.dataset.index);
    }
  
    function dataFileDnD() {
      return {
        files,
        fileDragging: null,
        drop,
        dragstart,
      };
    }
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedBdt, setSelectedBdt] = useState('');
    const [successs, setSuccesss]= useState(false)

    // const onSubmit = (data) => {}
    const handleDuration = (event) => {
      setSelectedMonth(event.target.value);
    };
    const handleBdt = (event) => {
      setSelectedBdt(event.target.value)
    }
    const onSubmit = (data) => {
      const durationMonth = selectedMonth;
      const LoanAmount = data.amount;
      const NidPhoto = data.nidPhoto[0];
      const userInfos = userInfo;
      const Organizations = userInfo?.organization;
      const userEmail = userInfo?.email;
      const formData = new FormData();
      formData.append('image', NidPhoto);
      const url = `https://api.imgbb.com/1/upload?key=86fadc190ecd3694fb9e2164676b3ced`
      fetch(url, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          const NidPhoto = imgData.data.url
          const allLoanInformation = {NidPhoto,userEmail,LoanAmount,Organizations, durationMonth,userInfos}
          fetch(
            'http://localhost:5000/loanSystem',
            {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(allLoanInformation),
            },
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setSuccesss(data.acknowledged);
            })
        })
    }
  return (
    <div className="">
      <p className="text-2xl text-[#2A9D8F] text-center">
        Apply for an Interest Free Loan
      </p>
     <form onSubmit={ handleSubmit(onSubmit) }>
     <div className="grid lg:grid-cols-2  grid-cols-1">
        <div className="m-5">
          <p className="text-base m-3 text-[#2A9D8F] font-medium">Duration</p>
          <div>
          <div className="flex items-center m-4 mb-4">
            <input
              id="threeM"
              type="radio"
              value="3"
              required
              { ...register('threeM') }
              name="default-radio"
              onChange={handleDuration}
              className="w-4 h-4 text-[#54928b] bg-gray-100 border-gray-300 focus:ring-[#54928b] dark:focus:ring-[#54928b] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="threeM"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              3 Months
            </label>
          </div>
          <div className="flex m-4 items-center">
            <input
              id="fourM"
              type="radio"
              value="4"
              required
              { ...register('fourM') }
              onChange={handleDuration}
              name="default-radio"
              className="w-4 h-4 text-[#54928b] bg-gray-100 border-gray-300 focus:ring-[#54928b] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="fourM"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              4 Months
            </label>
          </div>
          <div className="flex items-center m-4 mb-4">
            <input
              id="sixM"
              type="radio"
              value="6"
              { ...register('sixM') }
              onChange={handleDuration}
              name="default-radio"
              className="w-4 h-4 text-[#54928b] bg-gray-100 border-gray-300 focus:ring-[#54928b] dark:focus:ring-[#54928b] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="sixM"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              6 Months
            </label>
          </div>
          <div className="flex items-center m-4 mb-4">
            <input
              id="nineM"
              type="radio"
              value="9"
              { ...register('nineM') }
              onChange={handleDuration}
              name="default-radio"
              className="w-4 h-4 text-[#54928b] bg-gray-100 border-gray-300 focus:ring-[#54928b] dark:focus:ring-[#54928b]dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="nineM"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              9 Month
            </label>
          </div>
          </div>
          <div>
         {/* <div className='my-5'>
         <span className='text-[#2A9D8F] text-base mb-32 font-semibold' >Type 16 Digit or 10 digit NID No</span>
          <input
              id="threeM"
              type="number"
             
              { ...register('threeM') }
              name="default-radio"
              onChange={handleDuration}
              className="w-full h-full text-[#54928b] bg-gray-100 border-gray-300 focus:ring-[#54928b] dark:focus:ring-[#54928b] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
         </div> */}
          </div>
         {/* Nid */}
         <div>
            <h1 className='text-base text-[#2A9D8F] font-medium NID Or Birth Certificate'>Upload Your Identification NID Or Birth Certificate</h1>
            <div className="bg-white p-7 rounded">
      <div x-data={dataFileDnD} className="relative flex flex-col p-4 text-gray-400 border border-gray-200 rounded">
        <div x-ref="dnd" className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer">
          <input accept="*" type="file" multiple
          required
          { ...register('nidPhoto') }
            className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
            onChange={handleImageUpload}
            onDragOver={() => {
              refs.dnd.classList.add('border-blue-400');
              refs.dnd.classList.add('ring-4');
              refs.dnd.classList.add('ring-inset');
            }}
            onDragLeave={() => {
              refs.dnd.classList.remove('border-blue-400');
              refs.dnd.classList.remove('ring-4');
              refs.dnd.classList.remove('ring-inset');
            }}
            onDrop={() => {
              refs.dnd.classList.remove('border-blue-400');
              refs.dnd.classList.remove('ring-4');
              refs.dnd.classList.remove('ring-inset');
            }}
            title=""
          />
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <svg className="w-6 h-6 mr-1 text-current-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="m-0">Drag your files here or click in this area Upload File Only .Png .Jpg .Jpeg </p>
          </div>
        </div>
        {imageUrl && <img src={imageUrl} alt="Preview" className='h-64' />}
  </div>
</div>
</div>
{/* Nid */}

          <div className="m-4 mb-4">
            <p className="  my-2 font-medium text-[#2A9D8F]">Select Amount</p>
            <div className="flex items-center border-2">
              <p className=" text-[black] m-3">BDT</p>

              <select
                id="states"
                required
                onClick={handleBdt}
                { ...register('amount') }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 border-l-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Choose amount</option>
                <option  value="5000">5000</option>
                <option  value="10000">10000</option>
                <option  value="15000">15000</option>
                <option  value="20000">20000</option>
                <option value="25000">25000</option>
              </select>
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 text-[#2A9D8F] border rounded"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-black text-sm font-medium "
            >
              I agree with the{' '}
              <a
                href="#"
                className="text-[#2A9D8F] hover:underline dark:text-[#2A9D8F]"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
        </div>
        <div className="text-[orange] m-5">
          <h1 className="text-2xl">*Terms and Conditions for take loan</h1>
          <div className="m-3 ">
            The terms and conditions for an educational loan will vary depending
            on the lender and the specific loan program. However, some common
            things to consider include:
            <ul className="max-w-md space-y-1 my-4 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Interest rates: You will be required to pay interest on the loan amount you borrow. The interest rate may be fixed or variable, and can vary depending on the loan amount, the duration of the loan, and your credit score</li>
              <li>Repayment schedule: You will need to repay the loan amount in installments over a certain period of time, as agreed upon in the loan agreement. Failure to make payments on time can result in penalties, including additional interest and late fees.</li>
              <li>
              Collateral: In some cases, the lender may require you to provide collateral such as property or assets to secure the loan. If you default on the loan, the lender may seize the collateral to recover their losses.
              </li>
              <li>Fees and charges: In addition to interest, you may also be required to pay other fees and charges, such as loan processing fees, prepayment penalties, or other charges. These fees and charges should be disclosed in the loan agreement.

</li>
              <li>Credit score: Your credit score may be a factor in determining your eligibility for a loan, as well as the interest rate you are offered. Lenders may also consider other factors such as your income, employment status, and debt-to-income ratio.

</li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="flex mx-5 my-5">
        <button
        type='button'
          onClick={() => setShowModal(true)}
          className="btn bg-[#2A9D8F] hover:bg-[#3d756f] w-1/2 mx-auto p-3 rounded"
        >
          Apply
        </button>
      </div>
      {showModal && (
      <ConfirmationModal successs={successs} selectedBdt={selectedBdt} selectedMonth={selectedMonth} showModal={showModal} setShowModal={setShowModal}></ConfirmationModal>
      )}
      </form>
    </div>
  )
}

export default LoanApply
