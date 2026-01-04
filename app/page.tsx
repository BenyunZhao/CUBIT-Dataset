import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-blue-600">CUBIT</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#dataset" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Dataset</a>
                <a href="#tasks" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Tasks</a>
                <a href="#results" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Results</a>
                <a href="#citation" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Citation</a>
                <a href="#people" className="hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">People</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://github.com" className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Code
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center py-12">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              CUBIT Dataset
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A Large-Scale Benchmark for Infrastructure Defect Assessment and Physical Quantification
            </p>
          </div>

          {/* News Section */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 mb-16">
            <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span className="flex h-3 w-3 rounded-full bg-blue-600"></span>
              News
            </h2>
            <ul className="space-y-3">
              <li className="flex gap-4 text-gray-700">
                <span className="font-bold text-blue-800 shrink-0">2024-05-13</span>
                <span>The CUBIT-Det (AIC) paper is published in <strong>Automation in Construction</strong>.</span>
              </li>
              <li className="flex gap-4 text-gray-700">
                <span className="font-bold text-blue-800 shrink-0">2024-01-05</span>
                <span>CUBIT-Inseg dataset and benchmark results released.</span>
              </li>
            </ul>
          </div>

          {/* Description Section */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Description</h2>
            <p className="mb-6">
              CUBIT is a comprehensive dataset designed for automated infrastructure inspection using Unmanned Aerial Vehicles (UAVs). It provides high-resolution imagery and precise annotations for various defect types across multiple civil infrastructure scenarios.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CUBIT-Det</h3>
                <p className="text-gray-600 mb-4">
                  Focused on infrastructure defect detection across three primary scenarios: <strong>Buildings, Pavements, and Bridges</strong>. Collected via automated robotic platforms and validated with state-of-the-art deep learning models.
                </p>
                <ul className="text-sm space-y-2 text-gray-500">
                  <li>• High-resolution defect detection</li>
                  <li>• Diverse infrastructure scenarios</li>
                  <li>• Published in Automation in Construction (2024)</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CUBIT-Inseg</h3>
                <p className="text-gray-600 mb-4">
                  A specialized dataset for façade defect assessment, bridging the gap between visual segmentation and physical quantification. Contains <strong>6,996 images</strong> with precise instance-level masks for cracks and spalling.
                </p>
                <ul className="text-sm space-y-2 text-gray-500">
                  <li>• 6,996 high-definition images</li>
                  <li>• Instance-level segmentation masks</li>
                  <li>• Supports geometric reconstruction and quantification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Dataset Section */}
        <section id="dataset" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Dataset Details</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Images", value: "10,000+", detail: "Across all subsets" },
                { label: "Defect Types", value: "Cracks, Spalling", detail: "And other structural defects" },
                { label: "Resolution", value: "4K+", detail: "High-definition UAV imagery" },
                { label: "Annotations", value: "Boxes & Masks", detail: "Instance-level precision" },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1 font-semibold">{stat.label}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Visual Examples</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  The dataset captures defects under diverse real-world conditions, providing the geometric information required for physical modeling. Each instance is meticulously annotated to support engineering standards for maintenance prioritization.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">Example 1 (Crack)</div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">Example 2 (Spalling)</div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">Example 3 (Bridge)</div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">Example 4 (Pavement)</div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
                <h3 className="text-2xl font-bold mb-6 italic">CUBIT-Inseg Summary</h3>
                <table className="w-full text-sm">
                  <thead className="border-b border-gray-100">
                    <tr>
                      <th className="text-left pb-4 font-bold">Category</th>
                      <th className="text-left pb-4 font-bold">Images</th>
                      <th className="text-left pb-4 font-bold">Instances</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="py-4">Cracks</td>
                      <td className="py-4">~4,000</td>
                      <td className="py-4">12,000+</td>
                    </tr>
                    <tr>
                      <td className="py-4">Spalling</td>
                      <td className="py-4">~3,000</td>
                      <td className="py-4">8,000+</td>
                    </tr>
                    <tr className="font-bold text-gray-900">
                      <td className="py-4">Total (Inseg)</td>
                      <td className="py-4">6,996</td>
                      <td className="py-4">20,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Citation Section */}
        <section id="citation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Citation</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
              <p className="text-blue-400 text-sm font-mono mb-4">CUBIT-Det (AIC) BibTeX:</p>
              <pre className="text-gray-300 text-sm font-mono leading-relaxed">
{`@article{zhao2024cubitdet,
  title={High-resolution infrastructure defect detection dataset sourced by unmanned systems and validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and Yang, Guidong and Wen, Junjie and Zhang, Jihan and Dou, Jia and Li, Guang and Chen, Xi and Chen, Ben M.},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024},
  publisher={Elsevier},
  doi={10.1016/j.autcon.2024.105405}
}`}
              </pre>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 overflow-x-auto">
              <p className="text-blue-400 text-sm font-mono mb-4">CUBIT-Inseg BibTeX:</p>
              <pre className="text-gray-300 text-sm font-mono leading-relaxed">
{`@article{zhao2025cubitinseg,
  title={From Instance Segmentation to Physical Quantification: A High-Resolution UAV Dataset for Façade Defect Assessment},
  author={Zhao, Benyun and Zhang, Jihan and Yang, Guidong and Huang, Yijun and Lei, Lei and Chen, Xi and Chen, Ben M.},
  year={2025},
  note={Preprint}
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="people" className="bg-gray-50 py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact & People</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              For any questions or feedback regarding the CUBIT dataset, please contact the team at the <strong>Department of Mechanical and Automation Engineering, The Chinese University of Hong Kong</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div>
                <p className="font-bold text-gray-900">Benyun Zhao</p>
                <p className="text-sm text-gray-500 italic font-mono">benyunzhao@cuhk.edu.hk</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Xi Chen</p>
                <p className="text-sm text-gray-500 italic font-mono">xichen002@cuhk.edu.hk</p>
              </div>
              <div>
                <p className="font-bold text-gray-900">Ben M. Chen</p>
                <p className="text-sm text-gray-500 italic font-mono">bmchen@cuhk.edu.hk</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-gray-400">
          <p>© 2026 CUBIT Team. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
