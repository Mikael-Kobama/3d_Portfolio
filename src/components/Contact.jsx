import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { div } from "framer-motion/client";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Mikael Kobama",
          from_email: form.email,
          to_email: "mkcsteste.dev@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Obrigado. Eu irei retornar a mensagem assim que for possível");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.log(error);

        alert("Ahh, Algo acabou não funcionando. Por favor tente novamente.")
      }
    );
  };

  return (
  <div
  className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
    <motion.div
    variants={slideIn("left", "tween", 0.2, 1)}
    className="flex-[0.75] bg-blue-100 p-8 rounded-2xl">
      <p className={styles.sectionSubText}>Entre em contato</p>
      <h3 className={styles.sectionHeadText}>Contato</h3>

      <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8">
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Seu Nome</span>
          <input type="text"
          name="name"
          value={form.value}
          onChange={handleChange}
          placeholder="Qual é o seu nome, por favor?"
          className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
        </label>
      </form>
    </motion.div>
  </div>
)
};

export default Contact;
