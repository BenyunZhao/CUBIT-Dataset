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

  // 页面加载时检查登录状态和获取访问量
  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user);
      });

    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setPageViews(data.views));
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setUser(data.user);
        setIsLoginOpen(false);
        setFormData({ email: '', password: '', name: '' });
      } else {
        setError(data.error || '认证失败');
      }
    } catch (err) {
      setError('服务器错误');
    }
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

  const figures = [
// ... (rest of the figures)
    {
      title: "Hierarchical Framework",
      src: "/images/framework.png",
      link: "/images/framework.pdf",
      description: "A multi-layered pipeline detailing the flow from raw high-resolution UAV sourcing to final physical quantification metrics.",
    },
    {
      title: "Network Performance",
      src: "/images/network-attributed.png",
      link: "/images/network-attributed.png",
      description: "In-depth attribution analysis of various deep learning backbones, evaluating accuracy versus latency on infrastructure defects.",
    },
    {
      title: "Dataset Distribution",
      src: "/images/distribution-dataset.png",
      link: "/images/distribution-dataset.pdf",
      description: "Class-wise and scale-wise distribution mapping, showcasing the diversity across building, pavement, and bridge scenarios.",
    },
    {
      title: "Segmentation Metrics",
      src: "/images/highway_crackseg_param_AP.png",
      link: "/images/highway_crackseg_param_AP.png",
      description: "Quantitative metrics (AP) showing the robustness of our segmentation model across varied hyper-parameter settings.",
    },
    {
      title: "Comparative Benchmark",
      src: "/images/radar-compare.png",
      link: "/images/radar-compare.pdf",
      description: "Radar analysis comparing our proposed CUBIT benchmark results against current state-of-the-art infrastructure inspection models.",
    },
    {
      title: "Mawan Site Application",
      src: "/images/mawan.png",
      link: "/images/mawan.pdf",
      description: "Real-world visualization from the Mawan site assessment, demonstrating the practical scalability of our physically grounded models.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Compact Navigation */}
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
        <section id="home" className="relative h-[60vh] flex items-center bg-slate-950 overflow-hidden">
          <Image src="/images/hero-bg.png" alt="Background" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f8fafc]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded mb-6">Challenge Hub 2026</div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
              Infrastructure Defect<br/><span className="text-blue-600">Benchmark & Evaluation</span>
            </h1>
            <div className="flex gap-10 text-white/60">
              <div><p className="text-2xl font-black text-white">12K+</p><p className="text-[9px] uppercase font-bold tracking-widest">Images</p></div>
              <div><p className="text-2xl font-black text-white">30K+</p><p className="text-[9px] uppercase font-bold tracking-widest">Instances</p></div>
              <div><p className="text-2xl font-black text-white">110+</p><p className="text-[9px] uppercase font-bold tracking-widest">SOTA Baselines</p></div>
            </div>
          </div>
        </section>

        {/* Challenge Center - Information Dense */}
        <section id="tasks" className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Left: Task Navigation & Specs */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <h2 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-6">Select Challenge</h2>
                <div className="space-y-2">
                  <button onClick={() => setActiveTask('det')} className={`w-full text-left p-4 rounded-xl font-bold text-sm transition-all ${activeTask === 'det' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'hover:bg-slate-50 text-slate-600'}`}>
                    Task 1: Defect Detection
                  </button>
                  <button onClick={() => setActiveTask('inseg')} className={`w-full text-left p-4 rounded-xl font-bold text-sm transition-all ${activeTask === 'inseg' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'hover:bg-slate-50 text-slate-600'}`}>
                    Task 2: Instance Segmentation
                  </button>
                </div>
                <div className="mt-10 pt-10 border-t border-slate-100 space-y-6">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Submission Format</h3>
                  <div className="bg-slate-900 p-4 rounded-xl overflow-x-auto">
                    <pre className="text-[10px] font-mono text-blue-400">
                      {activeTask === 'det' ? 'img_id score x1 y1 x2 y2' : '{"image_id": 1, "mask": RLE}'}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Download Quick Link */}
              <div id="download" className="bg-slate-950 p-8 rounded-3xl text-white">
                <h3 className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-4">Dataset Access</h3>
                <p className="text-xs text-slate-400 mb-6 font-medium">Download high-resolution images & annotations via Google Drive.</p>
                <a href="#" className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2v-2zm0-10h2v8h-2V6z"/></svg>
                  Get CUBIT v1.0
                </a>
              </div>
            </div>

            {/* Right: Evaluation & Leaderboard */}
            <div className="lg:col-span-8 space-y-6">
              {/* Submission Area */}
              <div id="submit" className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Challenge Submission</h3>
                  {user && <span className="px-3 py-1 bg-green-100 text-green-600 text-[9px] font-black uppercase rounded">Authorized</span>}
                </div>
                
                {user ? (
                  <form className="grid sm:grid-cols-2 gap-4 animate-in fade-in duration-500">
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Method Name</label>
                      <input type="text" placeholder="e.g. YOLOv12-Custom" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-black text-slate-400 uppercase">Results File (.zip)</label>
                      <input type="file" className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs" />
                    </div>
                    <button className="sm:col-span-2 py-4 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all">Submit to Evaluation Server</button>
                  </form>
                ) : (
                  <div className="py-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                    <p className="text-sm font-bold text-slate-500 mb-4">Please sign in to participate in the challenge</p>
                    <button onClick={() => setIsLoginOpen(true)} className="px-8 py-3 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">Sign In Now</button>
                  </div>
                )}
              </div>

              {/* Leaderboard Table */}
              <div id="leaderboard" className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">Leaderboard: {activeTask === 'det' ? 'Detection' : 'Segmentation'}</h3>
                  <span className="text-[9px] font-black text-slate-400 uppercase">Last updated: Jan 2026</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="py-4 text-[9px] font-black text-slate-400 uppercase">Rank</th>
                        <th className="py-4 text-[9px] font-black text-slate-400 uppercase">Model</th>
                        {activeTask === 'det' ? (
                          <>
                            <th className="py-4 text-[9px] font-black text-blue-600 uppercase">mAP@0.5</th>
                            <th className="py-4 text-[9px] font-black text-slate-400 uppercase">mAP[0.5:0.95]</th>
                            <th className="py-4 text-[9px] font-black text-slate-400 uppercase">FPS</th>
                          </>
                        ) : (
                          <>
                            <th className="py-4 text-[9px] font-black text-blue-600 uppercase">Mask mAP</th>
                            <th className="py-4 text-[9px] font-black text-slate-400 uppercase">Box mAP</th>
                            <th className="py-4 text-[9px] font-black text-slate-400 uppercase">Params</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {(activeTask === 'det' ? baselines.det : baselines.inseg).map((item, i) => (
                        <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                          <td className="py-4 font-black text-slate-400">#{i+1}</td>
                          <td className="py-4 font-bold text-slate-900">{item.model}</td>
                          {activeTask === 'det' ? (
                            <>
                              <td className="py-4 font-black text-blue-600">{item.map50}%</td>
                              <td className="py-4 font-medium text-slate-500">{item.map5095}%</td>
                              <td className="py-4 font-medium text-slate-500">{item.fps}</td>
                            </>
                          ) : (
                            <>
                              <td className="py-4 font-black text-blue-600">{item.mask_map}%</td>
                              <td className="py-4 font-medium text-slate-500">{item.box_map}%</td>
                              <td className="py-4 font-medium text-slate-500">{item.params}</td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dense Research Insights */}
        <section id="results" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-black text-slate-900 tracking-tighter mb-10 uppercase">Scientific Visualization</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['framework', 'network-attributed', 'distribution-dataset', 'radar-compare', 'mawan', 'iou'].map((img) => (
              <div key={img} className="group aspect-square relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer">
                <Image src={`/images/${img}.png`} alt={img} fill className="object-contain p-4 group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/80 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                  <span className="text-[8px] font-black text-white uppercase tracking-widest">Enlarge</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Citation & Footer - Compacted */}
        <footer id="citation" className="bg-slate-900 text-white py-16 rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <div className="space-y-6">
                <h2 className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Citation</h2>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <pre className="text-[10px] font-mono text-slate-400 leading-relaxed overflow-x-auto">
                    {`@article{zhao2024cubit,
  title={High-resolution infrastructure defect detection dataset...},
  author={Zhao, Benyun and others},
  journal={Automation in Construction},
  year={2024}
}`}
                  </pre>
                </div>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-6">
                <div className="text-center lg:text-right">
                  <p className="text-3xl font-black tracking-tighter">{pageViews.toLocaleString()}</p>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Global Pageviews</p>
                </div>
                <div className="w-full max-w-[200px] aspect-[2/1] bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group overflow-hidden">
                  <svg className="w-10 h-10 text-white/20 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[9px] font-black text-slate-500 uppercase tracking-widest gap-4">
              <p>© 2026 CUBIT Challenge | CUHK Unmanned Systems Lab</p>
              <div className="flex gap-8">
                <a href="https://github.com/hyjcde" className="hover:text-blue-600 transition-colors">GitHub</a>
                <a href="https://www.cuhk.edu.hk" className="hover:text-blue-600 transition-colors">CUHK.EDU.HK</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Auth Modal - Sophisticated */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" onClick={() => { setIsLoginOpen(false); setError(''); }}></div>
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-sm p-10 shadow-3xl animate-in fade-in zoom-in duration-300">
            <h4 className="text-2xl font-black text-slate-900 tracking-tighter mb-8 text-center">{isRegister ? 'Register' : 'Sign In'}</h4>
            <form onSubmit={handleAuth} className="space-y-4">
              {isRegister && <input type="text" placeholder="Name" required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />}
              <input type="email" placeholder="Email" required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input type="password" placeholder="Password" required className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
              {error && <p className="text-red-500 text-[10px] font-bold text-center">{error}</p>}
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest">Continue</button>
            </form>
            <p className="mt-6 text-center text-[9px] font-black text-slate-400 uppercase tracking-widest">{isRegister ? 'Joined before?' : 'New here?'} <span className="text-blue-600 cursor-pointer" onClick={() => setIsRegister(!isRegister)}>{isRegister ? 'Sign In' : 'Register'}</span></p>
          </div>
        </div>
      )}
    </div>
  );
}

      <footer className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-[10px]">C</div>
            <span>© 2026 CUBIT Challenge Group | CUHK</span>
          </div>
          <div className="flex gap-16">
            <a href="https://github.com/hyjcde" target="_blank" className="hover:text-blue-600 transition-colors">GitHub</a>
            <a href="https://www.cuhk.edu.hk" target="_blank" className="hover:text-blue-600 transition-colors font-black">CUHK.EDU.HK</a>
          </div>
        </div>
      </footer>

      {/* Auth Modal Overlay */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => { setIsLoginOpen(false); setError(''); }}
          ></div>
          <div className="relative bg-white rounded-[3rem] w-full max-w-md p-12 shadow-3xl animate-in fade-in zoom-in duration-300">
            <div className="text-center mb-10">
              <h4 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">
                {isRegister ? 'Create Account' : 'Welcome Back'}
              </h4>
              <p className="text-slate-400 text-sm font-medium">
                {isRegister ? 'Join the CUBIT Benchmark Community' : 'Sign in to CUBIT Challenge Server'}
              </p>
            </div>
            
            <form onSubmit={handleAuth} className="space-y-6">
              {isRegister && (
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              )}
              <input 
                type="email" 
                placeholder="Email" 
                required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input 
                type="password" 
                placeholder="Password" 
                required
                className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              
              {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
              
              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-blue-700 transition-all">
                {isRegister ? 'Register' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                {isRegister ? 'Already have an account?' : "Don't have an account?"} 
                <span 
                  className="text-blue-600 cursor-pointer ml-2"
                  onClick={() => { setIsRegister(!isRegister); setError(''); }}
                >
                  {isRegister ? 'Sign In' : 'Register'}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
