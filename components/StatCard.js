export default function StatCard({ title, value, icon: Icon, color, note }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h2 className="text-3xl font-extrabold text-[#1b4332] mt-3">
            {value}
          </h2>
        </div>

        <div className={`p-4 rounded-xl ${color}`}>
          <Icon size={25}/>
        </div>
      </div>

      {note && (
        <p className="text-xs text-gray-400 mt-4">{note}</p>
      )}
    </div>
  );
}