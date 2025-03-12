import {STATS} from "@/settings";

const Stats = () => {

    return (
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {STATS.map((stat) => (
                <div
                    key={stat.title}
                    className="bg-gray-800/50 rounded-lg p-8 text-center backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-colors"
                >
                    <div className="flex justify-center mb-4">
                        <stat.icon className="h-8 w-8 text-blue-500"/>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                    </div>
                    <div className="text-gray-400">{stat.title}</div>
                </div>
            ))}
        </div>
    );
}

export default Stats;