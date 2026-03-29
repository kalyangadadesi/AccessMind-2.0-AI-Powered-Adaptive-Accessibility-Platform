import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            AccessMind 2.0
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            AI-Driven Universal Accessibility Engine that transforms digital content into inclusive, adaptive experiences for everyone.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="rounded-2xl px-6 py-3 text-lg">
              Try Demo
            </Button>
            <Button variant="outline" className="rounded-2xl px-6 py-3 text-lg">
              View Dashboard
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "AI Accessibility Scanner",
            "Adaptive User Modes",
            "Multilingual Translation",
            "Real-time AI Suggestions",
          ].map((feature, index) => (
            <Card key={index} className="rounded-2xl shadow-lg bg-zinc-900 border border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{feature}</h3>
                <p className="text-gray-400 mt-3 text-sm">
                  Advanced AI-powered capability designed to enhance accessibility across platforms.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-zinc-950">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {["Upload Content", "AI Analysis", "Adaptive Output"].map((step, index) => (
            <div key={index} className="p-6 rounded-2xl bg-zinc-900 shadow-md">
              <h3 className="text-xl font-semibold mb-2">Step {index + 1}</h3>
              <p className="text-gray-400">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {["Developers", "Users", "Society"].map((item, index) => (
            <Card key={index} className="rounded-2xl bg-zinc-900 border border-zinc-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{item}</h3>
                <p className="text-gray-400 mt-3 text-sm">
                  Enabling scalable accessibility solutions with measurable real-world impact.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-zinc-800">
        <p className="text-gray-500 text-sm">
          © 2026 AccessMind 2.0. All rights reserved.
        </p>
      </footer>

    </div>
  );
}