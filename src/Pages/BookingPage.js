import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from 'date-fns';

function BookingPage() {
    const [reserveDate, setReserveDate] = useState('');
    const minTimeOfReservation = setHours(setMinutes(new Date(), 0), 12);
    const maxTimeOfReservation = setHours(setMinutes(new Date(), 0), 23);

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            no_of_tables: '',
            no_of_people: '',
            reserve_date: '',
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            first_name: Yup.string().required('First name is required'),
            last_name: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email format').required('Email address is required'),
            phone_number: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').required("Phone number is required"),
            no_of_tables: Yup.number().positive().required('No. of tables is required').min(1, 'Invalid input').max(2, 'Maximum table is 2'),
            no_of_people: Yup.number().positive().required('No. of people is required').min(1, 'Invalid input').max(4, 'Maximum covers is 4'),
        }),
        onSubmit: values => {
            console.log('Booking details', values)
        },
    })

    const onChangeDate = (date) => {
        console.log(date);
    }

    return (
        <section id="booking" className="h-screen flex items-center justify-center">
            <div className="rounded-md shadow-2xl overflow-hidden">
                <div className="p-8">
                    <div className="uppercase tracking-wide text-5xl text-indigo-500 font-semibold text-center">Book a table</div>

                    <form>

                        <div className="pb-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            autoComplete="first_name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.first_name}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    {formik.touched.first_name && formik.errors.first_name ? <div className="text-red-500 text-sm">{formik.errors.first_name}</div> : null }

                                </div>


                                <div className="sm:col-span-3">
                                    <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            autoComplete="last_name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.last_name}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    {formik.touched.last_name && formik.errors.last_name ? <div className="text-red-500 text-sm">{formik.errors.last_name}</div> : null }
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    {formik.touched.email && formik.errors.email ? <div className="text-red-500 text-sm">{formik.errors.email}</div> : null }
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="phone_number"
                                            name="phone_number"
                                            type="number"
                                            autoComplete="number"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.phone_number}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    {formik.touched.phone_number && formik.errors.phone_number ? <div className="text-red-500 text-sm">{formik.errors.phone_number}</div> : null }
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="no-of-tables" className="block text-sm font-medium leading-6 text-gray-900">
                                        No. of tables
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="no_of_tables"
                                            name="no_of_tables"
                                            type="number"
                                            autoComplete="number"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.no_of_tables}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    {formik.touched.no_of_tables && formik.errors.no_of_tables ? <div className="text-red-500 text-sm">{formik.errors.no_of_tables}</div> : null }
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="no-of-people" className="block text-sm font-medium leading-6 text-gray-900">
                                        No. of people
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="no_of_people"
                                            name="no_of_people"
                                            type="number"
                                            autoComplete="number"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.no_of_people}
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    {formik.touched.no_of_people && formik.errors.no_of_people ? <div className="text-red-500 text-sm">{formik.errors.no_of_people}</div> : null }
                                </div>

                                <div className="grid place-items-center sm:col-span-6">
                                    <label htmlFor="reserve_date" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date & Time
                                    </label>
                                    <div className="mt-2">
                                        <DatePicker
                                            id="reserve_date"
                                            name="reserve_date"
                                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                            showIcon
                                            showTimeSelect
                                            minDate={new Date()}
                                            minTime={minTimeOfReservation}
                                            maxTime={maxTimeOfReservation}
                                            selected={reserveDate}
                                            value={reserveDate}
                                            onChange={onChangeDate}
                                        />
                                    </div>
                                    {/* {formik.touched.no_of_people && formik.errors.no_of_people ? <div className="text-red-500 text-sm">{formik.errors.no_of_people}</div> : null } */}
                                </div>

                                <div className="grid place-items-center sm:col-span-6">
                                    <button
                                        className="text-center text-white text-lg bg-indigo-500  p-2 transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 rounded-md w-full"
                                        type="submit"
                                        onClick={formik.handleSubmit} >
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>


                    </form>

                </div>
            </div>
        </section>
    )
}

export default BookingPage