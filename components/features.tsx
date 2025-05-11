import { FEATURES } from "@/settings";

const Features = () => {
    return <div className="mt-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
            Was kannst du machen?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                FEATURES.map((feature) => (
                    <div
                        key={feature.title}
                        className="bg-gray-800/80 rounded-lg p-6 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-colors"
                    >
                        <div className="flex items-center mb-4">
                            <feature.Icon className="h-8 w-8 text-slate-500" />
                            <h3 className="text-xl font-semibold text-white mt-1 ml-4">
                                {feature.title}
                            </h3>
                        </div>
                        <p className="text-gray-300">{feature.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
}

export default Features;