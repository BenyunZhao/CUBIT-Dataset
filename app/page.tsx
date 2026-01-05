"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [pageViews, setPageViews] = useState(0);
  const [activeTask, setActiveTask] = useState('det');

  useEffect(() => {
    fetch('/api/auth/me').then(res => res.json()).then(data => { if (data.user) setUser(data.user); });
    fetch('/api/stats').then(res => res.json()).then(data => setPageViews(data.views));
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await fetch(isRegister ? '/api/auth/register' : '/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (res.ok) { setUser(data.user); setIsLoginOpen(false); setFormData({ email: '', password: '', name: '' }); }
    else { setError(data.error || '认证失败'); }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
  };

  const baselines = {
    det: [
      { model: "YOLOv11-L", map50: "78.2", map5095: "56.4", fps: "125" },
      { model: "YOLOv10-X", map50: "76.5", map5095: "54.1", fps: "98" },
      { model: "Faster R-CNN", map50: "68.9", map5095: "42.3", fps: "18" },
      { model: "PP-YOLOE+", map50: "74.1", map5095: "51.2", fps: "82" },
    ],
    inseg: [
      { model: "ConvNeXtV2-P", mask_map: "45.2", box_map: "48.7", params: "40M" },
      { model: "Swin-T", mask_map: "42.8", box_map: "46.1", params: "28M" },
      { model: "YOLOv11-Seg", mask_map: "44.1", box_map: "47.5", params: "35M" },
    ]
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-white font-black text-xs">C</div>
            <span className="text-sm font-black tracking-tighter uppercase">CUBIT <span className="text-blue-600">Challenge</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Tasks", "Leaderboard", "Download", "Submit"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-600 text-[10px] font-bold uppercase tracking-widest transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-blue-600 uppercase">Hi, {user.name}</span>
                <button onClick={handleLogout} className="text-[10px] font-bold text-slate-400 hover:text-red-500">Logout</button>
              </div>
            ) : (
              <button onClick={() => { setIsRegister(false); setIsLoginOpen(true); }} className="text-[10px] font-black uppercase tracking-widest bg-slate-950 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all">Sign In</button>
            )}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Compact Hero */}
        <section id="home" className="relative h-[55vh] flex items-center bg-slate-950 overflow-hidden">
          <Image src="/images/hero-bg.png" alt="Background" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded mb-6 italic">Metric-Based Infrastructure Benchmark</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
              CUBIT: Physical Grounded<br/><span className="text-blue-600 italic">Defect Modeling</span>
            </h1>
            <div className="flex gap-12 text-white/60">
              <div className="flex flex-col"><span className="text-3xl font-black text-white">12,500+</span><span className="text-[9px] uppercase font-bold tracking-widest">Images</span></div>
              <div className="flex flex-col"><span className="text-3xl font-black text-white">32,400+</span><span className="text-[9px] uppercase font-bold tracking-widest">Instances</span></div>
              <div className="flex flex-col"><span className="text-3xl font-black text-white">8K</span><span className="text-[9px] uppercase font-bold tracking-widest">Max Resolution</span></div>
            </div>
          </div>
        </section>

        {/* Dense Information Grid */}
        <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 grid lg:grid-cols-12 gap-6">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Challenge Hub - The Evaluation Core */}
            <div id="submit" className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Challenge Submission</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">Submit your model results for Task 1 (Det) or Task 2 (InSeg).</p>
                </div>
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button onClick={() => setActiveTask('det')} className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${activeTask === 'det' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}>Detection</button>
                  <button onClick={() => setActiveTask('inseg')} className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase transition-all ${activeTask === 'inseg' ? 'bg-white shadow-sm text-blue-600' : 'text-slate-400'}`}>Segmentation</button>
                </div>
              </div>

              {user ? (
                <form className="grid sm:grid-cols-2 gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 animate-in fade-in duration-500">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Algorithm / Team Name</label>
                    <input type="text" placeholder="e.g. ResNet50-FPN-CUBIT" className="w-full p-4 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Upload Result (.zip)</label>
                    <input type="file" className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm" />
                  </div>
                  <button className="sm:col-span-2 py-4 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Submit to Evaluation Server</button>
                </form>
              ) : (
                <div className="py-16 text-center bg-slate-50 rounded-[2rem] border border-dashed border-slate-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  </div>
                  <p className="text-sm font-bold text-slate-600 mb-6">Authorization required to participate in the challenge.</p>
                  <button onClick={() => setIsLoginOpen(true)} className="px-10 py-4 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">Sign In to Continue</button>
                </div>
              )}
            </div>

            {/* Leaderboard Table - Tight Design */}
            <div id="leaderboard" className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Leaderboard</h3>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Version 1.0.2 • Jan 2026</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="pb-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Rank</th>
                      <th className="pb-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Model Architecture</th>
                      {activeTask === 'det' ? (
                        <>
                          <th className="pb-4 text-[9px] font-black text-blue-600 uppercase tracking-widest">mAP@0.5</th>
                          <th className="pb-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">mAP[.5:.95]</th>
                          <th className="pb-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">FPS</th>
                        </>
                      ) : (
                        <>
                          <th className="pb-4 text-[9px] font-black text-blue-600 uppercase tracking-widest">Mask mAP</th>
                          <th className="pb-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Box mAP</th>
                          <th className="pb-4 text-[9px] font-black text-slate-400 uppercase tracking-widest">Complexity</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    {(activeTask === 'det' ? baselines.det : baselines.inseg).map((item, i) => (
                      <tr key={i} className="border-b border-slate-50 group transition-colors">
                        <td className="py-4 font-black text-slate-300 group-hover:text-blue-600 transition-colors">#0{i+1}</td>
                        <td className="py-4 font-bold text-slate-900">{item.model}</td>
                        {activeTask === 'det' ? (
                          <>
                            <td className="py-4 font-black text-blue-600">{item.map50}%</td>
                            <td className="py-4 text-slate-500">{item.map5095}%</td>
                            <td className="py-4 text-slate-500">{item.fps}</td>
                          </>
                        ) : (
                          <>
                            <td className="py-4 font-black text-blue-600">{item.mask_map}%</td>
                            <td className="py-4 text-slate-500">{item.box_map}%</td>
                            <td className="py-4 text-slate-500">{item.params}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar - High Density Specs */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Stats - Paper Info */}
            <div className="bg-slate-950 p-8 rounded-[2rem] text-white">
              <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6">Dataset Taxonomy</h4>
              <div className="space-y-6">
                {[
                  { label: "Defect Categories", val: "Cracks, Spalling, Efflorescence, Exposed Rebar" },
                  { label: "Data Modality", val: "High-Res RGB Imagery (4K/8K)" },
                  { label: "Annotation Style", val: "Instance-level Masks (COCO Format)" },
                  { label: "Spatial Metric", val: "Pixel-to-MM Ground Sample Distance (GSD)" }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xs font-bold leading-relaxed">{item.val}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Hub */}
            <div id="download" className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200">
              <h4 className="text-xs font-black text-slate-900 mb-6 uppercase tracking-widest">Download Center</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-600 hover:text-white transition-all group">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/></svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest">Images (8.4GB)</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase group-hover:text-blue-100 transition-colors">Google Drive Mirror</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-600 hover:text-white transition-all group">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:bg-blue-500 group-hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-widest">Annotations (240MB)</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase group-hover:text-blue-100 transition-colors">JSON Format</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Visual Insights Box */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200">
              <h4 className="text-xs font-black text-slate-900 mb-6 uppercase tracking-widest">Methodology Insights</h4>
              <div className="grid grid-cols-2 gap-3">
                {['framework', 'radar-compare', 'distribution-dataset', 'iou'].map((img) => (
                  <div key={img} className="aspect-square relative rounded-xl overflow-hidden border border-slate-100 hover:ring-4 hover:ring-blue-600/10 transition-all cursor-pointer">
                    <Image src={`/images/${img}.png`} alt={img} fill className="object-contain p-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact Dashboard - Compact */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-white rounded-[2.5rem] p-12 border border-slate-200 shadow-xl grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em]">Global Statistics</h2>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">{pageViews.toLocaleString()}</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Total Requests</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-slate-900 tracking-tighter">48</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Research Teams</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm">CUBIT is rapidly becoming the standard for UAV-based infrastructure inspection assessment worldwide.</p>
            </div>
            <div className="aspect-[2/1] relative bg-slate-950 rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center text-white/10">
                <svg className="w-full h-full p-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-[8px] font-black px-3 py-1 rounded uppercase tracking-widest shadow-lg">Live Tracker</div>
            </div>
          </div>
        </section>

        {/* Citation & Footer - Professional Academic Look */}
        <footer id="citation" className="bg-slate-900 text-white py-20 rounded-t-[4rem] mx-4">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid lg:grid-cols-12 gap-20 mb-20">
              <div className="lg:col-span-8 space-y-10">
                <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.5em]">Academic Attribution</h2>
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 font-mono text-[11px] text-slate-400 leading-relaxed overflow-x-auto">
{`@article{zhao2024cubit,
  title={High-resolution infrastructure defect detection 
         dataset sourced by unmanned systems and 
         validated with deep learning},
  author={Zhao, Benyun and Zhou, Xunkuai and Yang, Guidong 
          and Wen, Junjie and Zhang, Jihan and Dou, Jia 
          and Li, Guang and Chen, Xi and Chen, Ben M},
  journal={Automation in Construction},
  volume={163},
  pages={105405},
  year={2024},
  publisher={Elsevier}
}`}
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-end gap-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.082.821-.26.821-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 3.07 1.305 3.813.997.108-.775.182-1.305.29-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </div>
                  <a href="https://github.com/hyjcde" className="text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors">GitHub Repository</a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <a href="mailto:benyunzhao@cuhk.edu.hk" className="text-xs font-black uppercase tracking-widest hover:text-blue-500 transition-colors">Contact PI</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[9px] font-black text-slate-500 uppercase tracking-widest">
              <p>© 2026 CUBIT Challenge Group | CUHK Unmanned Systems Lab</p>
              <div className="flex gap-10 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-500">Privacy Policy</a>
                <a href="#" className="hover:text-blue-500">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Auth Modal Overlay */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => { setIsLoginOpen(false); setError(''); }}></div>
          <div className="relative bg-white rounded-[3rem] w-full max-w-md p-12 shadow-3xl animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-10">
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">{isRegister ? 'Create Account' : 'Welcome Back'}</h4>
              <p className="text-slate-400 text-sm font-medium">{isRegister ? 'Join the CUBIT Community' : 'Sign in to Participate'}</p>
            </div>
            <form onSubmit={handleAuth} className="space-y-6">
              {isRegister && <input type="text" placeholder="Full Name" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-600 transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />}
              <input type="email" placeholder="Email Address" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-600 transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input type="password" placeholder="Password" required className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium outline-none focus:ring-2 focus:ring-blue-600 transition-all" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              {error && <p className="text-red-500 text-[10px] font-black text-center">{error}</p>}
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-blue-700 transition-all">Continue</button>
            </form>
            <p className="mt-10 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {isRegister ? 'Already registered?' : 'Need an account?'} <span className="text-blue-600 cursor-pointer ml-2" onClick={() => setIsRegister(!isRegister)}>{isRegister ? 'Sign In' : 'Register'}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
