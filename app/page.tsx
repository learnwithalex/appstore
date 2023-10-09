"use client"
import AppSlider from "./components/home/AppSlider";
import Apps from "./components/home/Apps";
import AppsLoved from "./components/home/AppsLoved";
import Header from "./components/home/Header";

export default function App() {
  return (
    <>
    <Header />
    <AppSlider />
    <Apps />
    <AppsLoved />
    </>
  );
}
