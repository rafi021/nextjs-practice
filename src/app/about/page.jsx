import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/13366399/pexels-photo-13366399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="about"
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            dignissimos velit voluptate omnis natus mollitia reprehenderit sint
            quo, nemo soluta assumenda, officiis enim fugit laborum minus
            dolorem voluptas tempore vitae.
          </p>
          <br />
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            non! Est laboriosam odit voluptates vel sequi tenetur soluta enim.
            Totam dolores ratione beatae, perspiciatis nihil eaque debitis
            voluptates velit fugit!
          </p>
          <br />
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            tempore aliquam architecto ut iure quia assumenda quisquam, saepe
            esse similique maxime nostrum rerum minima eaque molestias et
            suscipit sint voluptatum?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            tempore aliquam architecto ut iure quia assumenda quisquam, saepe
            esse similique maxime nostrum rerum minima eaque molestias et
            suscipit sint voluptatum?
          </p>
          <ul className={styles.item}>
            <li className={styles.item}>Creative Illustrations</li>
            <li className={styles.item}>Dynamic WebSites</li>
            <li className={styles.item}>Fast and Handy Mobile Apps</li>
          </ul>
          <Button text="Contact" url="/contact"/>
        </div>
      </div>
    </div>
  );
};

export default About;
