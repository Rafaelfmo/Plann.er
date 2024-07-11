import { CircleCheck } from "lucide-react";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
          <span className="text-xs text-zinc-500">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada</p>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
          <span className="text-xs text-zinc-500">Domingo</span>
        </div>
      </div>
      <div className="space-y-2.5">
        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300"></CircleCheck>
          <span className="text-zinc-100">Passeio pela orla</span>
          <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
        </div>
        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300"></CircleCheck>
          <span className="text-zinc-100">Tomar banho na praia</span>
          <span className="text-zinc-400 text-sm ml-auto">10:00h</span>
        </div>
        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300"></CircleCheck>
          <span className="text-zinc-100">Almoço</span>
          <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
        </div>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 19</span>
          <span className="text-xs text-zinc-500">Segunda</span>
        </div>
      </div>
      <div className="space-y-2.5">
        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300"></CircleCheck>
          <span className="text-zinc-100">Passeio no park</span>
          <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
        </div>
        <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
          <CircleCheck className="size-5 text-lime-300"></CircleCheck>
          <span className="text-zinc-100">Conhecer o centro da cidade</span>
          <span className="text-zinc-400 text-sm ml-auto">10:00h</span>
        </div>
      </div>
    </div>
  );
}
