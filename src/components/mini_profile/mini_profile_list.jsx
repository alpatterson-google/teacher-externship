import LeroyBarriga from './leroy_barriga/albert_patterson';

const MiniProfileList = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 space-y-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 border-b-2 border-gray-200 pb-2 w-full text-center">
                Participants
            </h2>
            <LeroyBarriga/>
            Hello
        </div>
    );
};

export default MiniProfileList;