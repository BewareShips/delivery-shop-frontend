import React, { useState} from "react";
import {useDispatch } from "react-redux";
import { clearItems } from "../../store/slices/cartSlice";
import s from "./UserForm.module.scss";

const Form = ({items}) => {

const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    adress: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { name, phone, email, adress } = formData;

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(clearItems());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => updateFormData(e)}
        placeholder="Name"
        type="text"
        name="name"
        required
      />
      <input
        value={phone}
        onChange={e => updateFormData(e)}
        placeholder="Phone"
        type="number"
        name="phone"
        required
      />
      <input
        value={email}
        onChange={e => updateFormData(e)}
        placeholder="Email"
        type="email"
        name="email"
        required
      />
      <input
        value={adress}
        onChange={e => updateFormData(e)}
        placeholder="Adress"
        type="text"
        name="adress"
        required
      />

      <button className={s.button} type="submit">Submit</button>
      
    </form>
  );
};

export default Form;