import React from "react";
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/avocado.png";
import Fruit3 from "../../assets/fruits/cherry.png";
import Fruit4 from "../../assets/fruits/orange.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";
import { FadeRight } from "../../utility/animation";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "₹80",
    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Organic Avocado",
    link: "/",
    price: "₹50",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Juicy Cherry",
    link: "/",
    price: "₹120",
    img: Fruit3,
    delay: 0.6,
  },
  {
    id: 4,
    title: "Fresh Orange",
    link: "/",
    price: "₹150",
    img: Fruit4,
    delay: 0.3,
  },
];

const Menus = () => {
  return (
    <>
      <section>
        <div className="container pt-12 pb-20">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl font-bold text-left pb-10 uppercase"
          >
            Available Products
          </motion.h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {MenusData.map((menu, index) => (
              <motion.div
                variants={
                  index % 2 !== 0 ? FadeLeft(menu.delay) : FadeRight(menu.delay)
                }
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.1 }}
                key={menu.id}
                className="bg-white rounded-3xl px-4 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-6"
              >
                <img
                  src={menu.img}
                  alt={menu.title}
                  className="w-[60px] mb-4 scale-110 transform-translate-y-6"
                />
                <div>
                  <h1 className="text-lg font-semibold">{menu.title}</h1>
                  <p className="text-lg font-semibold text-secondary">
                    {menu.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menus;
