import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Legal() {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-display font-bold mb-10 text-primary">Legal Disclaimer</h1>
        
        <Card className="bg-card border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="font-display">General Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 leading-relaxed space-y-4">
            <p>
              The information provided on this website is for general informational purposes only and does not constitute professional, legal, financial, or technical advice. While TamPoPo LLC strives to provide accurate and reliable information, we make no guarantees regarding the completeness, accuracy, or reliability of any content, services, or AI-generated outputs.
            </p>
            <p>
              Some services provided may utilize artificial intelligence technologies, which may produce inaccurate or incomplete results. Users should independently verify critical information before relying on AI-generated outputs. TamPoPo LLC is not responsible for any decisions made based on AI-generated information.
            </p>
            <p>
              In no event shall TamPoPo LLC be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use of this website or our services.
            </p>
            <p>
              By using this website, you agree to these terms and assume full responsibility for your use of the information and services provided.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card border-white/10">
          <CardHeader>
            <CardTitle className="font-display">Privacy & Security</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-300 leading-relaxed space-y-4">
            <p>
              We take your privacy seriously. All data transmitted through our website is encrypted using industry-standard protocols. We do not sell your personal information to third parties.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}