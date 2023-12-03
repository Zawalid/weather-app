import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/ui/AppLayout";
import HomePage from "@/pages/HomePage";
import PageNotFound from "@/pages/PageNotFound";

import "@/styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
