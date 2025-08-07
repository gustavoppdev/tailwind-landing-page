// Constants
import { DEPLOY_BENEFITS } from "@/lib/constants";

// Icons
import { Fingerprint, Lock, RefreshCcw, UploadCloud } from "lucide-react";

// Next-Intl
import { useTranslations } from "next-intl";
import SectionTitle from "../common/SectionTitle";

const Deploy = () => {
  const t = useTranslations("DeploySection");
  return (
    <section
      id="features"
      className="container mx-auto p-4 lg:p-6 my-24 space-y-24  lg:text-center"
    >
      <SectionTitle namespace="DeploySection" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left max-w-4xl mx-auto">
        {DEPLOY_BENEFITS.map((benefit) => (
          <div key={t(benefit.titleKey)} className="flex items-start gap-4">
            <div className="bg-indigo-600 rounded-lg p-2 text-white">
              {t(benefit.titleKey) === "Push to Deploy" ? (
                <UploadCloud className=" size-5 " />
              ) : t(benefit.titleKey) === "SSL Certificates" ? (
                <Lock className=" size-5 " />
              ) : t(benefit.titleKey) === "Simple queues" ? (
                <RefreshCcw className=" size-5 " />
              ) : (
                <Fingerprint className=" size-5 " />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">{t(benefit.titleKey)}</h4>

              <p className="text-muted-foreground">
                {t(benefit.descriptionKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deploy;
