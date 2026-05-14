import Image from "next/image";
import styles from "./page.module.css";
import WeatherCard from "@/components/weatherCard";
import { OutfitCard } from "@/components/outfitCard";
import { TodoCard } from "@/components/todoCard";

export default function Home() {
  return (
    <div className={styles.clear}>
      <div className={styles.mainContainer}>
        <title>WeatherFit</title>
        <h1 className={styles.maintitle}>WeatherFit</h1>
        <WeatherCard />
        <OutfitCard />
        <TodoCard />
      </div>
     </div>
  );
}
