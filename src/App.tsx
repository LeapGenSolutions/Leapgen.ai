import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import Index from "./pages/Index";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import SurroundAI from "./pages/products/SurroundAI";
import DataCoffee from "./pages/products/DataCoffee";
import Seismic from "./pages/products/Seismic";

import UseCases from "./pages/UseCases";
import Finance from "./pages/use-cases/Finance";
import HealthcareUseCase from "./pages/use-cases/HealthcareUseCase";
import Retail from "./pages/use-cases/Retail";
import SLED from "./pages/use-cases/SLED";
import Accounting from "./pages/use-cases/Accounting";
import Enterprise from "./pages/use-cases/Enterprise";
import SmallMediumBusiness from "./pages/use-cases/SmallMediumBusiness";
import AccountingSurroundAI from "./pages/use-cases/accounting/SurroundAI";
import AccountingDataCoffee from "./pages/use-cases/accounting/DataCoffee";
import AccountingCompleteSolution from "./pages/use-cases/accounting/CompleteSolution";
import FinanceSurroundAI from "./pages/use-cases/finance/SurroundAI";
import FinanceDataCoffee from "./pages/use-cases/finance/DataCoffee";
import FinanceCompleteSolution from "./pages/use-cases/finance/CompleteSolution";
import HealthcareSurroundAI from "./pages/use-cases/healthcare/SurroundAI";
import HealthcareDataCoffee from "./pages/use-cases/healthcare/DataCoffee";
import HealthcareCompleteSolution from "./pages/use-cases/healthcare/CompleteSolution";
import RetailSurroundAI from "./pages/use-cases/retail/SurroundAI";
import RetailDataCoffee from "./pages/use-cases/retail/DataCoffee";
import RetailCompleteSolution from "./pages/use-cases/retail/CompleteSolution";
import SLEDSurroundAI from "./pages/use-cases/sled/SurroundAI";
import SLEDDataCoffee from "./pages/use-cases/sled/DataCoffee";
import SLEDCompleteSolution from "./pages/use-cases/sled/CompleteSolution";
import EnterpriseSurroundAI from "./pages/use-cases/enterprise/SurroundAI";
import EnterpriseDataCoffee from "./pages/use-cases/enterprise/DataCoffee";
import EnterpriseCompleteSolution from "./pages/use-cases/enterprise/CompleteSolution";
import SMBSurroundAI from "./pages/use-cases/smb/SurroundAI";
import SMBDataCoffee from "./pages/use-cases/smb/DataCoffee";
import SMBCompleteSolution from "./pages/use-cases/smb/CompleteSolution";
import CustomerSuccess from "./pages/CustomerSuccess";
import HealthcareSalesTransformation from "./pages/customer-success/HealthcareSalesTransformation";
import GovernmentDataModernization from "./pages/customer-success/GovernmentDataModernization";
import MedicalDocumentationRevolution from "./pages/customer-success/MedicalDocumentationRevolution";
import FinanceCaseStudy from "./pages/resources/FinanceCaseStudy";
import HealthcareROICalculator from "./pages/resources/HealthcareROICalculator";
import ROICalculator from "./pages/resources/ROICalculator";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollManager />
          <Header />
        <main className="min-h-screen" tabIndex={-1}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/use-cases/finance" element={<Finance />} />
            <Route path="/use-cases/healthcare" element={<HealthcareUseCase />} />
            <Route path="/use-cases/retail" element={<Retail />} />
            <Route path="/use-cases/sled" element={<SLED />} />
            <Route path="/use-cases/accounting" element={<Accounting />} />
            <Route path="/use-cases/accounting/surround-ai" element={<AccountingSurroundAI />} />
            <Route path="/use-cases/accounting/data-coffee" element={<AccountingDataCoffee />} />
            <Route path="/use-cases/accounting/complete-solution" element={<AccountingCompleteSolution />} />
            <Route path="/use-cases/finance/surround-ai" element={<FinanceSurroundAI />} />
            <Route path="/use-cases/finance/data-coffee" element={<FinanceDataCoffee />} />
            <Route path="/use-cases/finance/complete-solution" element={<FinanceCompleteSolution />} />
            <Route path="/use-cases/healthcare/surround-ai" element={<HealthcareSurroundAI />} />
            <Route path="/use-cases/healthcare/data-coffee" element={<HealthcareDataCoffee />} />
            <Route path="/use-cases/healthcare/complete-solution" element={<HealthcareCompleteSolution />} />
            <Route path="/use-cases/retail/surround-ai" element={<RetailSurroundAI />} />
            <Route path="/use-cases/retail/data-coffee" element={<RetailDataCoffee />} />
            <Route path="/use-cases/retail/complete-solution" element={<RetailCompleteSolution />} />
            <Route path="/use-cases/sled/surround-ai" element={<SLEDSurroundAI />} />
            <Route path="/use-cases/sled/data-coffee" element={<SLEDDataCoffee />} />
            <Route path="/use-cases/sled/complete-solution" element={<SLEDCompleteSolution />} />
            <Route path="/use-cases/enterprise/surround-ai" element={<EnterpriseSurroundAI />} />
            <Route path="/use-cases/enterprise/data-coffee" element={<EnterpriseDataCoffee />} />
            <Route path="/use-cases/enterprise/complete-solution" element={<EnterpriseCompleteSolution />} />
            <Route path="/use-cases/small-medium-business/surround-ai" element={<SMBSurroundAI />} />
            <Route path="/use-cases/small-medium-business/data-coffee" element={<SMBDataCoffee />} />
            <Route path="/use-cases/small-medium-business/complete-solution" element={<SMBCompleteSolution />} />
            <Route path="/use-cases/enterprise" element={<Enterprise />} />
            <Route path="/use-cases/small-medium-business" element={<SmallMediumBusiness />} />
            <Route path="/customer-success" element={<CustomerSuccess />} />
            <Route path="/customer-success/healthcare-sales-transformation" element={<HealthcareSalesTransformation />} />
            <Route path="/customer-success/government-data-modernization" element={<GovernmentDataModernization />} />
            <Route path="/customer-success/medical-documentation-revolution" element={<MedicalDocumentationRevolution />} />
            <Route path="/resources/finance-case-study" element={<FinanceCaseStudy />} />
            <Route path="/resources/healthcare-roi-calculator" element={<HealthcareROICalculator />} />
            <Route path="/resources/roi-calculator" element={<ROICalculator />} />
            
            <Route path="/products/surroundai" element={<SurroundAI />} />
            <Route path="/products/data-coffee" element={<DataCoffee />} />
            <Route path="/products/seismic" element={<Seismic />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
