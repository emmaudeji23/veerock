'use client'
import { useEffect, useState } from 'react'
import ImageContainer from '../Cards/ImageContainer'
import ModalCentral from './ModalCentral'
import { useGlobalState } from '@/context/GlobalStateContext'
import { homepageData } from '@/data/homepageData'
import { FaRegTimesCircle } from 'react-icons/fa'
import Button from '../Buttons/Button'
import Loading from '../Loader/Loading'
import BtnLoading from '../Loader/BtnLoading'

const QuoteModal = ({  isOpen, onClose }) => {
  const {projectsPortfolio} = homepageData()
  const [loading, setLoading] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    selectedPortfolioItem: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handlePortfolioItemChange = (e) => {
    const selectedItem = projectsPortfolio?.items?.find((item) => item.name === e.target.value);
    setFormData((prevData) => ({ ...prevData, selectedPortfolioItem: selectedItem }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(1)
    // Implement your form submission logic here
    setTimeout(() => {
      onClose()
      setLoading(0)
    }, 3000);
    console.log('Form Data:', formData);
  };

   // Extract unique project types (categories) from portfolioData
   const projectTypes = ['Select a project type', ...new Set(projectsPortfolio?.items?.map((item) => item.category))];

  return (
    // <div className={`${isOpen ? ' scale-100' : 'scale-0'} fixed transform transition-transform duration-500 inset-0 z-50 flex items-center bg-black bg-opacity-70`} onClick={onClose}>

      <div onClick={e=>e.stopPropagation()} className="relative mx-auto w-80 sm:w-[500px]  h-full overflow-y-auto bg-light200 px-4 py-8 rounded-md">
      <FaRegTimesCircle size={20} onClick={onClose} className='absolute top-4 right-4'/>

      <h2 className="text-2xl font-semibold mb-4 w-full">Request a Quote</h2>
      <form className='w-full' onSubmit={handleSubmit}>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            {projectTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Select Portfolio Item</label>
          <select
            name="selectedPortfolioItem"
            value={formData.selectedPortfolioItem?.name || ''}
            onChange={handlePortfolioItemChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="" disabled>Select an item</option>
            {projectsPortfolio?.items?.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        {formData.selectedPortfolioItem && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Selected Portfolio Item:</h3>
            <p className="text-sm text-gray-600">
              <strong>Name:</strong> {formData.selectedPortfolioItem.name}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Description:</strong> {formData.selectedPortfolioItem.description}
            </p>
          </div>
        )}
        <div className="flex justify-center">
          <button variant={'primary'} link={'#'}
            type="submit"
            className="hover-blue rounded py-3 px-5 flex items-center justify-center gap-2"
          >
            {loading ? <BtnLoading/> : null}
            <p>Submit Quote Request</p>
          </button >
        </div>
      </form>
      </div>
    // </div>
  )
}

export default QuoteModal