import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const handleIncrement = (number: number) => {
    dispatch(increment(number));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex items-center w-full h-screen justify-center">
      <div className="items-center">
        <h1 className="text-5xl font-bold mb-2">Coutner With Redux</h1>
        <div className="flex">
          <button
            className="bg-green-500 text-green-100 font-bold border border-green-500 px-2 py-1 rounded text-xl cursor-pointer"
            onClick={() => {
              handleIncrement(5);
            }}
          >
            Increment by 5
          </button>
          <button
            className="bg-green-500 text-green-100 font-bold border border-green-500 px-2 py-1 rounded text-xl cursor-pointer ml-2"
            onClick={() => {
              handleIncrement(1);
            }}
          >
            Increment
          </button>
          <span className="bg-red-300 h-10 w-30 flex font-bold text-xl justify-center items-center rounded mx-2  border border-red-300" >{count}</span>
          <button
            className={`${count==0 ? 'bg-slate-50 border font-bold border-red-500' : 'bg-red-500  border border-red-500'} text-red-100 px-2 py-1 rounded text-xl cursor-pointer`}
            onClick={handleDecrement}
            disabled={count == 0}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
