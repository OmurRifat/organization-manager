import Time from "./Time";

export default function App() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
    return (
      <div>
        <Time expiryTimestamp={time} />
      </div>
    );
  }