import { unstable_noStore as noStore } from "next/cache";
import { getCertificates } from "@/app/_services/data-service";
import CertificateCard from "./CertificateCard";

async function CertificatesList() {
  noStore();
  const items = await getCertificates();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {items?.map((c) => (
        <CertificateCard key={c.id} cert={c} />
      ))}
    </div>
  )
}

export default CertificatesList