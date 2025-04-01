import React, { useRef, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Image from 'next/image';

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '';
const serviceKey = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY ?? '';
const tempKey = process.env.NEXT_PUBLIC_EMAILJS_TEMP_KEY ?? '';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        serviceKey,
        tempKey,
        {
          from_name: form.name,
          to_name: 'Lonis',
          from_email: form.email,
          to_email: 'lonis712@hotmail.com',
          message: form.message,
        },
        publicKey
      );

      setLoading(false);
      toast.success('Your Message has been sent!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('Something went wrong!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <section id='contact' className='sm:px-10 my-20'>
      <div className='relative min-h-[calc(100vh)] flex items-center justify-center flex-col'>
        <Image
          width={1000}
          height={1000}
          src='/assets/terminal.png'
          alt='terminal background'
          className='absolute min-h-screen hidden lg:block'
        />
        <div className='max-w-xl relative z-10 sm:px-10 px-5 sm:mt-12'>
          <h3 className='sm:text-4xl text-3xl font-semibold text-gray_gradient'>
            Let&apos;s <span className='text-purple'>Talk</span>
          </h3>
          <p className='text-lg text-white-200 mt-3'>
            I&apos;m passionate about bringing ideas to life, whether it&apos;s
            something new or refining existing platforms lets get talking.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col space-y-7'
          >
            <label className='space-y-3'>
              <span className='text-lg text-white-600'>Full Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                required
                className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'
                placeholder='Lonis Kwacke'
              />
            </label>
            <label className='space-y-3'>
              <span className='text-lg text-white-600'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                required
                className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'
                placeholder='lonis123@lonisk.com'
              />
            </label>
            <label className='space-y-3'>
              <span className='text-lg text-white-600'>
                Your <span className='text-purple'>Message</span>
              </span>
              <textarea
                name='message'
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'
                placeholder="Hi, I'm interested in ..."
              />
            </label>
            <button
              className='bg-black-300 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3'
              type='submit'
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Submit'}
              <MdArrowOutward />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
