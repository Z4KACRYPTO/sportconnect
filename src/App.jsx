import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  MapPin, 
  Clock, 
  Zap, 
  Home, 
  Calendar, 
  MessageSquare, 
  User,
  Plus,
  Filter,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CATEGORIES = [
  { id: 'all', name: 'Todos', icon: '🔥' },
  { id: 'football', name: 'Futebol', icon: '⚽' },
  { id: 'volleyball', name: 'Vôlei', icon: '🏐' },
  { id: 'running', name: 'Corrida', icon: '🏃' },
  { id: 'yoga', name: 'Yoga', icon: '🧘' },
];

const ACTIVITIES = [
  {
    id: '1',
    sport: 'Futebol',
    title: 'Pelada dos Amigos',
    distance: '1.2 km',
    time: 'Hoje, 19:00',
    intensity: 'Moderado',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    participants: 8,
    maxParticipants: 12,
    location: 'Arena Central, Quadra 3',
    description: 'Jogo amistoso para todos os níveis. Venha se divertir e fazer novos amigos!',
    requirements: ['Chuteira society', 'Meião', 'Garrafa de água']
  },
  {
    id: '2',
    sport: 'Vôlei',
    title: 'Vôlei de Praia',
    distance: '2.5 km',
    time: 'Hoje, 17:30',
    intensity: 'Intenso',
    image: 'https://images.unsplash.com/photo-1612872086822-4421f172c52c?auto=format&fit=crop&q=80&w=800',
    participants: 4,
    maxParticipants: 6,
    location: 'Posto 10, Ipanema',
    description: 'Treino focado em fundamentos e jogo 2x2. Nível intermediário/avançado.',
    requirements: ['Protetor solar', 'Óculos de sol', 'Água']
  },
  {
    id: '3',
    sport: 'Corrida',
    title: 'Treino no Parque',
    distance: '0.8 km',
    time: 'Amanhã, 07:00',
    intensity: 'Leve',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800',
    participants: 12,
    maxParticipants: 20,
    location: 'Parque do Ibirapuera, Portão 7',
    description: 'Corrida leve de 5km em ritmo de conversação. Ótimo para iniciantes.',
    requirements: ['Tênis de corrida', 'Roupas leves', 'Disposição']
  },
  {
    id: '4',
    sport: 'Yoga',
    title: 'Yoga ao Ar Livre',
    distance: '3.1 km',
    time: 'Sábado, 09:00',
    intensity: 'Leve',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    participants: 5,
    maxParticipants: 15,
    location: 'Praça Pôr do Sol',
    description: 'Prática de Hatha Yoga focada em respiração e alongamento.',
    requirements: ['Tapete de yoga', 'Toalha', 'Água']
  }
];

function DetailsView({ activity, onBack }) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed inset-0 z-50 overflow-y-auto bg-white pb-10"
    >
      {/* Hero Image */}
      <div className="relative h-[40vh] w-full">
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/80 to-transparent" />
        
        <button 
          onClick={onBack}
          className="absolute top-12 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white border-2 border-white/40 backdrop-blur-md transition-colors hover:bg-white/30"
        >
          <ChevronRight className="rotate-180" size={24} />
        </button>

        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="rounded-lg bg-[#2563EB] px-2 py-1 text-[10px] font-bold uppercase tracking-tight text-white">
              {activity.sport}
            </span>
            <div className={`flex items-center gap-1 rounded-lg px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
              activity.intensity === 'Intenso' ? 'bg-[#FEE2E2] text-[#991B1B]' :
              activity.intensity === 'Moderado' ? 'bg-[#FEF9C3] text-[#854D0E]' :
              'bg-[#DCFCE7] text-[#166534]'
            }`}>
              <Zap size={10} />
              {activity.intensity}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white">{activity.title}</h1>
        </div>
      </div>

      <div className="px-6 py-8 space-y-8">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-4 border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-2 text-[#64748B] mb-1">
              <Clock size={16} className="text-[#2563EB]" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Horário</span>
            </div>
            <p className="font-bold text-[#1E293B]">{activity.time}</p>
          </div>
          <div className="rounded-2xl bg-white p-4 border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-2 text-[#64748B] mb-1">
              <MapPin size={16} className="text-[#2563EB]" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Distância</span>
            </div>
            <p className="font-bold text-[#1E293B]">{activity.distance}</p>
          </div>
        </div>

        {/* Description */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#64748B] mb-3">Sobre o Evento</h2>
          <p className="text-[#1E293B] opacity-80 leading-relaxed">
            {activity.description}
          </p>
        </section>

        {/* Location & Map */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#64748B] mb-3">Localização</h2>
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-[#2563EB]" />
            <span className="font-bold text-[#1E293B]">{activity.location}</span>
          </div>
          <div className="h-48 w-full overflow-hidden rounded-3xl border border-[#E2E8F0] bg-zinc-100">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
              alt="Map Placeholder" 
              className="h-full w-full object-cover opacity-60 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Participants */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#64748B]">Participantes</h2>
            <span className="text-xs font-bold text-[#1E293B]">{activity.participants}/{activity.maxParticipants}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {Array.from({ length: activity.participants }).map((_, i) => (
              <div key={i} className="h-12 w-12 rounded-full border-2 border-white bg-zinc-200 overflow-hidden shadow-sm">
                <img src={`https://i.pravatar.cc/100?u=${activity.id}${i}`} alt="User" />
              </div>
            ))}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[#E2E8F0] text-[#64748B]">
              <Plus size={20} />
            </div>
          </div>
        </section>

        {/* What to bring */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#64748B] mb-3">O que levar</h2>
          <div className="grid grid-cols-1 gap-2">
            {activity.requirements.map((req, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-white border border-[#E2E8F0] p-3">
                <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
                <span className="text-sm font-medium text-[#1E293B]">{req}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Action Button */}
        <div className="pt-4">
          <button 
            onClick={() => setConfirmed(!confirmed)}
            className={`w-full rounded-2xl py-4 text-sm font-bold uppercase tracking-widest transition-all shadow-lg ${
              confirmed 
                ? 'bg-[#F0FDF4] text-[#15803D] border border-[#22C55E]' 
                : 'bg-[#2563EB] text-white shadow-[#2563EB]/20 active:scale-95'
            }`}
          >
            {confirmed ? 'Presença Confirmada ✓' : 'Confirmar Presença'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('home');
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filteredActivities = selectedCategory === 'all' 
    ? ACTIVITIES 
    : ACTIVITIES.filter(a => a.sport.toLowerCase() === CATEGORIES.find(c => c.id === selectedCategory)?.name.toLowerCase());

  return (
    <div className="min-h-screen bg-white pb-24 font-sans text-[#1E293B]">
      <AnimatePresence>
        {selectedActivity && (
          <DetailsView 
            activity={selectedActivity} 
            onBack={() => setSelectedActivity(null)} 
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="bg-linear-to-br from-[#2563EB] to-[#1D4ED8] px-[60px] pt-[40px] pb-[80px] text-white">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-1"
          >
            <h1 className="text-[32px] font-bold tracking-tight">
              Olá, Jorge! 👋
            </h1>
            <p className="text-[18px] opacity-90">
              Pronto para a sua dose de endorfina hoje?
            </p>
          </motion.div>
          <div className="flex gap-3">
            <button className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white border-2 border-white/40 transition-colors hover:bg-white/30">
              <Bell size={20} />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#22C55E] border-2 border-[#2563EB]"></span>
            </button>
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/40 bg-white/20 flex items-center justify-center font-bold">
              JO
            </div>
          </div>
        </div>
      </header>

      <main className="-mt-10 px-[60px]">
        {/* Categories */}
        <section>
          <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-2">
            {CATEGORIES.map((cat, idx) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 rounded-full border text-sm font-semibold shadow-sm transition-all whitespace-nowrap ${
                  selectedCategory === cat.id 
                    ? 'bg-[#22C55E] border-[#22C55E] text-white' 
                    : 'bg-white border-[#E2E8F0] text-[#1E293B] hover:bg-zinc-50'
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </motion.button>
            ))}
          </div>
        </section>

        {/* Nearby Activities */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[20px] font-bold text-[#1E293B]">Atividades Próximas</h2>
            <button className="text-sm font-semibold text-[#2563EB]">Ver todas</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredActivities.map((activity, idx) => (
                <motion.div
                  key={activity.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedActivity(activity)}
                  className="group relative overflow-hidden rounded-[20px] bg-white p-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] border border-[#E2E8F0] transition-all hover:shadow-xl cursor-pointer"
                >
                  <div className="flex gap-5">
                    <div className="relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-[16px] bg-[#F1F5F9] flex items-center justify-center text-2xl">
                      {CATEGORIES.find(c => c.name.toLowerCase() === activity.sport.toLowerCase())?.icon || '🔥'}
                    </div>
                    
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-[18px] font-bold text-[#1E293B] group-hover:text-[#2563EB] transition-colors">
                          {activity.title}
                        </h3>
                        <div className="mt-1 flex items-center gap-3 text-[13px] font-medium text-[#64748B]">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} className="text-[#2563EB]" />
                            <span>{activity.distance}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} className="text-[#2563EB]" />
                            <span>{activity.time}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <span className={`inline-block px-[10px] py-[4px] rounded-[6px] text-[11px] font-bold uppercase tracking-wider ${
                          activity.intensity === 'Intenso' ? 'bg-[#FEE2E2] text-[#991B1B]' :
                          activity.intensity === 'Moderado' ? 'bg-[#FEF9C3] text-[#854D0E]' :
                          'bg-[#DCFCE7] text-[#166534]'
                        }`}>
                          {activity.intensity}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 text-[#E2E8F0] transition-colors hover:bg-zinc-50 hover:text-[#2563EB]">
                    <ChevronRight size={20} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 h-20 bg-white border-t border-[#E2E8F0] flex justify-around items-center px-10 md:px-[100px]">
        {[
          { id: 'home', icon: Home, label: 'Início' },
          { id: 'calendar', icon: Calendar, label: 'Explorar' },
          { id: 'add', icon: Plus, label: '', special: true },
          { id: 'chat', icon: MessageSquare, label: 'Mensagens' },
          { id: 'profile', icon: User, label: 'Perfil' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`relative flex flex-col items-center justify-center transition-all ${
              item.special 
                ? 'h-12 w-12 rounded-full bg-[#22C55E] text-white shadow-lg shadow-[#22C55E]/20' 
                : 'text-[#64748B]'
            } ${activeTab === item.id && !item.special ? 'text-[#2563EB]' : ''}`}
          >
            <item.icon size={24} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            {!item.special && <span className="text-[12px] font-medium mt-1">{item.label}</span>}
          </button>
        ))}
      </nav>


      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
