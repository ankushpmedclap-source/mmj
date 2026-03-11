"use client";

import Image from "next/image";
import formicon from "@/public/assets/form-top-icon.png";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {formSchema} from "@/app/lib/formSchema"

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    try {
      console.log("Form Data:", data);

      alert("Application submitted!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="hero_form_wrap">
      <div className="form_top">
        <Image src={formicon} alt="icon" className="main_logo" />
        <h6>Get Started Today</h6>
        <span className="pb-20px">
          Begin your medical marijuana card Pennsylvania application
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form_group">
          <label>Full Name *</label>
          <input {...register("name")} placeholder="Enter your name" />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form_group">
          <label>Email Address *</label>
          <input {...register("email")} placeholder="Enter your email" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form_group">
          <label>Phone Number *</label>
          <input {...register("phone")} placeholder="Enter your phone" />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" {...register("terms")} />
          <label>I accept the terms and conditions *</label>
        </div>
        {errors.terms && <p className="error">{errors.terms.message}</p>}

        <div className="flex items-center space-x-2 pt-10px pb-20px">
          <input type="checkbox" {...register("marketing")} />
          <label>
            I agree to receive emails with educational content and offers
          </label>
        </div>

        <div className="text-center">
          <button className="btn_primary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Apply Your Card"}
          </button>
        </div>

      </form>
    </div>
  );
}